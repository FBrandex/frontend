// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import LockOutline from 'mdi-material-ui/LockOutline'
import BellOutline from 'mdi-material-ui/BellOutline'
import LinkVariant from 'mdi-material-ui/LinkVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import BookmarkOutline from 'mdi-material-ui/BookmarkOutline'

// ** Demo Components Imports
import UserViewBilling from 'src/views/manage/user/view/UserViewBilling'
import UserViewOverview from 'src/views/manage/user/view/UserViewOverview'
import UserViewSecurity from 'src/views/manage/user/view/UserViewSecurity'
import UserViewConnection from 'src/views/manage/user/view/UserViewConnection'
import UserViewNotification from 'src/views/manage/user/view/UserViewNotification'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'
import { Finance, ThumbsUpDownOutline, BullseyeArrow } from 'mdi-material-ui'

interface Props {
  orderData: OrderType[]
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

const UserViewRight = ({ orderData }: Props) => {
  // ** State
  const [value, setValue] = useState<string>('overview')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='overview' label='Challenges' icon={<BullseyeArrow sx={{ fontSize: '18px' }} />} />
        <Tab value='notification' label='Funded Accounts' icon={<Finance sx={{ fontSize: '18px' }} />} />
        <Tab value='billing-plan' label='Other Products' icon={<BookmarkOutline sx={{ fontSize: '18px' }} />} />
        <Tab value='security' label='User Data' icon={<AccountOutline sx={{ fontSize: '18px' }} />} />
        {/* <Tab value='notification' label='Notification' icon={<BellOutline sx={{ fontSize: '18px' }} />} />
        <Tab value='connection' label='Connection' icon={<LinkVariant sx={{ fontSize: '18px' }} />} /> */}
      </TabList>
      <Box sx={{ mt: 3 }}>
        <TabPanel sx={{ p: 0 }} value='overview'>
          <UserViewOverview orderData={orderData} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='notification'>
          <UserViewNotification orderData={orderData} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='billing-plan'>
          <UserViewBilling orderData={orderData} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <UserViewSecurity />
        </TabPanel>
        {/* <TabPanel sx={{ p: 0 }} value='connection'>
          <UserViewConnection />
        </TabPanel> */}
      </Box>
    </TabContext>
  )
}

export default UserViewRight
