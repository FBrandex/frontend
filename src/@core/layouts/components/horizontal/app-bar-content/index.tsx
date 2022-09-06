// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
  horizontalAppBarContent?: (props?: any) => ReactNode
  horizontalAppBarBranding?: (props?: any) => ReactNode
}

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding
  } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userHorizontalAppBarBranding ? (
        userHorizontalAppBarBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
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
            <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
              {themeConfig.templateName}
            </Typography>
          </StyledLink>
        </Link>
      )}
      {userHorizontalAppBarContent ? userHorizontalAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
