// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Store Imports
import { useDispatch } from 'react-redux'

// ** Actions Imports
import { addUser } from 'src/store/apps/user'

// ** Types Imports
import { AppDispatch } from 'src/store'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
}

interface UserData {
  fullName: string
  username: string
  taxid: number
  dayOfBirth: string
  email: string
  tel: number
  cel: number
  addressZip: number
  addressStreet: string
  addressNumber: number
  addressComp: string
  addressDistrict: string
  addressCity: string
  addressState: string
  addressCountry: string
}

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  taxid: yup.string().required(),
  dayOfBirth: yup.string().required(),
  email: yup.string().email().required(),
  addressZip: yup.string().required(),
  addressStreet: yup.string().required(),
  addressNumber: yup.string().required(),
  addressComp: yup.string().required(),
  addressDistrict: yup.string().required(),
  addressCity: yup.string().required(),
  addressState: yup.string().required(),
  addressCountry: yup.string().required(),
  tel: yup
    .number()
    .typeError('Tel Number field is required')
    .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
    .required(),
  cel: yup
    .number()
    .typeError('Cel Number field is required')
    .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
    .required(),
  fullName: yup
    .string()
    .min(3, obj => showErrors('Full Name', obj.value.length, obj.min))
    .required(),
  username: yup
    .string()
    .min(3, obj => showErrors('Username', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  fullName: '',
  username: '',
  taxid: '',
  dayOfBirth: '',
  email: '',
  tel: '',
  cel: '',
  addressZip: '',
  addressStreet: '',
  addressNumber: '',
  addressComp: '',
  addressDistrict: '',
  addressCity: '',
  addressState: '',
  addressCountry: '',
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [plan, setPlan] = useState<string>('basic')
  const [role, setRole] = useState<string>('subscriber')

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: UserData) => {
    dispatch(addUser({ ...data, role, currentPlan: plan }))
    toggle()
    reset()
  }

  const handleClose = () => {
    setPlan('basic')
    setRole('subscriber')
    setValue('tel', '')
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>Novo Usuário</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Nome Completo'
                  onChange={onChange}
                  placeholder='John Doe'
                  error={Boolean(errors.fullName)}
                />
              )}
            />
            {errors.fullName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fullName.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='username'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Username'
                  onChange={onChange}
                  placeholder='johndoe'
                  error={Boolean(errors.username)}
                />
              )}
            />
            {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='taxid'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='CPF'
                  onChange={onChange}
                  placeholder='12345678900'
                  error={Boolean(errors.taxid)}
                />
              )}
            />
            {errors.taxid && <FormHelperText sx={{ color: 'error.main' }}>{errors.taxid.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='dayOfBirth'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Data de Nascimento'
                  onChange={onChange}
                  placeholder='01/01/1990'
                  error={Boolean(errors.dayOfBirth)}
                />
              )}
            />
            {errors.dayOfBirth && <FormHelperText sx={{ color: 'error.main' }}>{errors.dayOfBirth.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='email'
                  value={value}
                  label='Email'
                  onChange={onChange}
                  placeholder='johndoe@email.com'
                  error={Boolean(errors.email)}
                />
              )}
            />
            {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='tel'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='tel'
                  value={value}
                  label='Telefone'
                  onChange={onChange}
                  placeholder='62999999999'
                  error={Boolean(errors.tel)}
                />
              )}
            />
            {errors.tel && <FormHelperText sx={{ color: 'error.main' }}>{errors.tel.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='cel'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='tel'
                  value={value}
                  label='Celular'
                  onChange={onChange}
                  placeholder='62999999999'
                  error={Boolean(errors.cel)}
                />
              )}
            />
            {errors.cel && <FormHelperText sx={{ color: 'error.main' }}>{errors.cel.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressZip'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='CEP'
                  onChange={onChange}
                  placeholder='74456789'
                  error={Boolean(errors.addressZip)}
                />
              )}
            />
            {errors.addressZip && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressZip.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressStreet'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Endereço'
                  onChange={onChange}
                  placeholder='Rua da Bandeira'
                  error={Boolean(errors.addressStreet)}
                />
              )}
            />
            {errors.addressStreet && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressStreet.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressNumber'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Número'
                  onChange={onChange}
                  placeholder='9999'
                  error={Boolean(errors.addressNumber)}
                />
              )}
            />
            {errors.addressNumber && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressNumber.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressComp'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Complemento'
                  onChange={onChange}
                  placeholder='Sala 99'
                  error={Boolean(errors.addressComp)}
                />
              )}
            />
            {errors.addressComp && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressComp.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressDistrict'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Bairro'
                  onChange={onChange}
                  placeholder='Jardim das Flores'
                  error={Boolean(errors.addressDistrict)}
                />
              )}
            />
            {errors.addressDistrict && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressDistrict.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressCity'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Cidade'
                  onChange={onChange}
                  placeholder='Campinas'
                  error={Boolean(errors.addressCity)}
                />
              )}
            />
            {errors.addressCity && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressCity.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressState'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Estado'
                  onChange={onChange}
                  placeholder='São Paulo'
                  error={Boolean(errors.addressState)}
                />
              )}
            />
            {errors.addressState && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressState.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='addressCountry'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='País'
                  onChange={onChange}
                  placeholder='Brasil'
                  error={Boolean(errors.addressCountry)}
                />
              )}
            />
            {errors.addressCountry && <FormHelperText sx={{ color: 'error.main' }}>{errors.addressCountry.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='role-select'>Função</InputLabel>
            <Select
              fullWidth
              value={role}
              id='select-role'
              label='Select Role'
              labelId='role-select'
              onChange={e => setRole(e.target.value)}
              inputProps={{ placeholder: 'Select Role' }}
            >
              <MenuItem value='admin'>Super Admin</MenuItem>
              <MenuItem value='real account admin'>Admin Conta Real</MenuItem>
              <MenuItem value='test account manager'>Admin Desafio</MenuItem>
              <MenuItem value='client'>Cliente</MenuItem>
              <MenuItem value='support'>Suporte</MenuItem>
              <MenuItem value='financial'>Financeiro</MenuItem>
              <MenuItem value='restricted'>Restrito</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='plan-select'>Plano</InputLabel>
            <Select
              fullWidth
              value={plan}
              id='select-plan'
              label='Select Plan'
              labelId='plan-select'
              onChange={e => setPlan(e.target.value)}
              inputProps={{ placeholder: 'Select Plan' }}
            >
              <MenuItem value='basic'>Basic</MenuItem>
              <MenuItem value='company'>Company</MenuItem>
              <MenuItem value='enterprise'>Enterprise</MenuItem>
              <MenuItem value='team'>Team</MenuItem>
            </Select>
          </FormControl> */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              Criar
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancelar
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
