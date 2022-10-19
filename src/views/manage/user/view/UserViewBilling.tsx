// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports

import { styled } from '@mui/material/styles'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Types
// import { ThemeColor } from 'src/@core/layouts/types'
import { OrderType } from 'src/types/manage/orderTypes'

// ** Demo Component Imports
import UsersOrderListTable from './UsersOrderListTable'

interface Props {
  orderData: OrderType[]
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

// Styled component for images
const Img = styled('img')(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: '50%',
  marginRight: theme.spacing(3)
}))

const UserViewBilling = ({ orderData }: Props) => {
  return (
    <Fragment>
      <UsersOrderListTable orderData={orderData} />
    </Fragment>
  )
}

export default UserViewBilling
