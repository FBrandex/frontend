// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
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
import { addProduct } from 'src/store/manage/product'

// ** Types Imports
import { AppDispatch } from 'src/store'

interface SidebarAddProductType {
  open: boolean
  toggle: () => void
}

interface ProductData {
  title: string
  previousPrice: string
  currentPrice: string
  productGroup: string
  platform: string
  market: string
  drawdown: string
  code: string
  url: string
  recurrent: string
  brokerId: string
  trainingDate: string
  trainingStartTime: string
  trainingEndTime: string

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
  title: yup
    .string()
    .min(3, obj => showErrors('Title', obj.value.length, obj.min))
    .required(),
  productGroup: yup
    .string()
    .required()
})

const defaultValues = {
  title: '',
  previousPrice: '',
  currentPrice: '',
  productGroup: '',
  platform: '',
  market: '',
  drawdown: '',
  code: '',
  url: '',
  recurrent: '',
  brokerId: '',
  trainingDate: '',
  trainingStartTime: '',
  trainingEndTime: ''
}

const SidebarAddProduct = (props: SidebarAddProductType) => {
  // ** Props
  const { open, toggle } = props

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

  const onSubmit = (data: ProductData) => {
    dispatch(addProduct({ ...data }))
    toggle()
    reset()
  }

  const handleClose = () => {
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
        <Typography variant='h6'>Add Product</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box sx={{ p: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='title'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Product Name'
                  onChange={onChange}
                  placeholder='Trade Company'
                  error={Boolean(errors.title)}
                />
              )}
            />
            {errors.title && <FormHelperText sx={{ color: 'error.main' }}>{errors.title.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='previousPrice'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Previous Price'
                  onChange={onChange}
                  placeholder='R$ 999,99'
                  error={Boolean(errors.previousPrice)}
                />
              )}
            />
            {errors.previousPrice && <FormHelperText sx={{ color: 'error.main' }}>{errors.previousPrice.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='currentPrice'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Current Price'
                  onChange={onChange}
                  placeholder='R$ 899,99'
                  error={Boolean(errors.currentPrice)}
                />
              )}
            />
            {errors.currentPrice && <FormHelperText sx={{ color: 'error.main' }}>{errors.currentPrice.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='productGroup'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Product Group'
                  onChange={onChange}
                  placeholder='Category'
                  error={Boolean(errors.productGroup)}
                />
              )}
            />
            {errors.productGroup && <FormHelperText sx={{ color: 'error.main' }}>{errors.productGroup.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='platform'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Platform'
                  onChange={onChange}
                  placeholder='Profit Plus'
                  error={Boolean(errors.platform)}
                />
              )}
            />
            {errors.platform && <FormHelperText sx={{ color: 'error.main' }}>{errors.platform.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='market'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Market'
                  onChange={onChange}
                  placeholder='Stocks'
                  error={Boolean(errors.market)}
                />
              )}
            />
            {errors.market && <FormHelperText sx={{ color: 'error.main' }}>{errors.market.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='drawdown'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Drawdown'
                  onChange={onChange}
                  placeholder='R$ 10.000,00'
                  error={Boolean(errors.drawdown)}
                />
              )}
            />
            {errors.drawdown && <FormHelperText sx={{ color: 'error.main' }}>{errors.drawdown.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Product Code'
                  onChange={onChange}
                  placeholder='359688'
                  error={Boolean(errors.code)}
                />
              )}
            />
            {errors.code && <FormHelperText sx={{ color: 'error.main' }}>{errors.code.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='url'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Product Url'
                  onChange={onChange}
                  placeholder='https://sun.eduzz.com/359688'
                  error={Boolean(errors.url)}
                />
              )}
            />
            {errors.url && <FormHelperText sx={{ color: 'error.main' }}>{errors.url.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='recurrent'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Recurrent'
                  onChange={onChange}
                  placeholder='Yes'
                  error={Boolean(errors.recurrent)}
                />
              )}
            />
            {errors.recurrent && <FormHelperText sx={{ color: 'error.main' }}>{errors.recurrent.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='brokerId'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Broker Id'
                  onChange={onChange}
                  placeholder='2'
                  error={Boolean(errors.brokerId)}
                />
              )}
            />
            {errors.brokerId && <FormHelperText sx={{ color: 'error.main' }}>{errors.brokerId.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='trainingDate'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Training Date'
                  onChange={onChange}
                  placeholder='01/08/2022'
                  error={Boolean(errors.trainingDate)}
                />
              )}
            />
            {errors.trainingDate && <FormHelperText sx={{ color: 'error.main' }}>{errors.trainingDate.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='trainingStartTime'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Training Start Time'
                  onChange={onChange}
                  placeholder='18:00'
                  error={Boolean(errors.trainingStartTime)}
                />
              )}
            />
            {errors.trainingStartTime && <FormHelperText sx={{ color: 'error.main' }}>{errors.trainingStartTime.message}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='trainingEndTime'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='trainingEndTime'
                  onChange={onChange}
                  placeholder='19:30'
                  error={Boolean(errors.trainingEndTime)}
                />
              )}
            />
            {errors.trainingEndTime && <FormHelperText sx={{ color: 'error.main' }}>{errors.trainingEndTime.message}</FormHelperText>}
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddProduct
