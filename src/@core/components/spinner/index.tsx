// ** MUI Import
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'

const FallbackSpinner = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <svg width={40} fill='none' height={22} viewBox='0 0 268 234' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M 64.963 233.993 L 0 233.993 L 101.517 114.061 L 4.974 0.008 L 69.936 0.008
              L 268 233.993 L 203.035 233.993 L 133.998 152.435 L 64.963 233.993 Z M 198.062 0.008
              L 263.025 0.008 L 190.554 85.623 L 158.073 47.251 L 198.062 0.008 Z'
          fill={theme.palette.primary.main}
        />
        <path
          d='M 64.963 233.993 L 0 233.993 L 101.517 114.061 L 4.974 0.008 L 69.936 0.008
              L 268 233.993 L 203.035 233.993 L 133.998 152.435 L 64.963 233.993 Z M 198.062 0.008
              L 263.025 0.008 L 190.554 85.623 L 158.073 47.251 L 198.062 0.008 Z'
          fillOpacity='0.4'
          fill='url(#paint1_linear_7821_79167)'
        />
        <defs>
          <linearGradient
            y1='143.953'
            x1='0'
            x2='143.953'
            y2='143.953'
            id='paint0_linear_7821_79167'
            gradientUnits='userSpaceOnUse'
          >
            <stop />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            y1='143.953'
            x1='0'
            x2='143.953'
            y2='143.953'
            id='paint1_linear_7821_79167'
            gradientUnits='userSpaceOnUse'
          >
            <stop />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
