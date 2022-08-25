// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`${new Date().getFullYear()} © XPROP SA`}
        {/* <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box> */}
        {` - `}
        <Link target='_blank' href='https://xproptrading.com/'>
          WebSite
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link target='_blank' href='https://xproptrading.com/regulamento'>
            Regulamento
          </Link>
          <Link target='_blank' href='https://xproptrading.com/desafio'>
            Desafios
          </Link>
          <Link target='_blank' href='https://wa.me/5562983278243'>
            Suporte
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
