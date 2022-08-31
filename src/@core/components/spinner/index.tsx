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
      <svg width={50} fill='none' height={30} viewBox='0 15 150 100' xmlns='http://www.w3.org/2000/svg'>
        <rect
          rx='0'
          width='50.2886'
          height='143.953'
          fill={theme.palette.primary.main}
          transform='matrix(-0.4 0.1 0.6 0.9 40 0)'
        />
        <rect
          rx='0'
          width='50.2886'
          height='143.953'
          fillOpacity='0.4'
          fill='url(#paint0_linear_7821_79167)'
          transform='matrix(-0.4 0.1 0.6 0.9 40 0)'
        />
        <rect
          rx='0'
          width='50.2886'
          height='143.953'
          fill={theme.palette.primary.main}
          transform='matrix(0.4 0.1 -0.6 0.9 100 0)'
        />
        <rect
          rx='0'
          width='50.2886'
          height='143.953'
          fillOpacity='0.4'
          fill='url(#paint1_linear_7821_79167)'
          transform='matrix(0.4 0.1 -0.6 0.9 100 0)'
        />
        <defs>
          <linearGradient
            y1='0'
            x1='25.1443'
            x2='25.1443'
            y2='143.953'
            id='paint0_linear_7821_79167'
            gradientUnits='userSpaceOnUse'
          >
            <stop />
            <stop offset='1' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            y1='0'
            x1='25.1443'
            x2='25.1443'
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
