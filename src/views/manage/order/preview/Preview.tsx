// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
import axios from 'axios'

// ** Types
import { SingleOrderType, OrderLayoutProps } from 'src/types/manage/orderTypes'

// ** Demo Components Imports
import PreviewCard from 'src/views/manage/order/preview/PreviewCard'
import PreviewActions from 'src/views/manage/order/preview/PreviewActions'
import AddPaymentDrawer from 'src/views/manage/order/shared-drawer/AddPaymentDrawer'
import SendOrderDrawer from 'src/views/manage/order/shared-drawer/SendOrderDrawer'

const OrderPreview = ({ id }: OrderLayoutProps) => {
  // ** State
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | SingleOrderType>(null)
  const [addPaymentOpen, setAddPaymentOpen] = useState<boolean>(false)
  const [sendOrderOpen, setSendOrderOpen] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get('/manage/order/single-order', { params: { id } })
      .then(res => {
        setData(res.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])

  const toggleSendOrderDrawer = () => setSendOrderOpen(!sendOrderOpen)
  const toggleAddPaymentDrawer = () => setAddPaymentOpen(!addPaymentOpen)

  if (data) {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xl={9} md={8} xs={12}>
            <PreviewCard data={data} />
          </Grid>
          <Grid item xl={3} md={4} xs={12}>
            <PreviewActions
              id={id}
              toggleAddPaymentDrawer={toggleAddPaymentDrawer}
              toggleSendOrderDrawer={toggleSendOrderDrawer}
            />
          </Grid>
        </Grid>
        <SendOrderDrawer open={sendOrderOpen} toggle={toggleSendOrderDrawer} />
        <AddPaymentDrawer open={addPaymentOpen} toggle={toggleAddPaymentDrawer} />
      </>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            Order with the id: {id} does not exist. Please check the list of orders:{' '}
            <Link href='/manage/order/list'>Order List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default OrderPreview
