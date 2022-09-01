// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Types
import { OrderType, OrderClientType } from 'src/types/manage/orderTypes'

// ** Demo Components Imports
import AddCard from 'src/views/manage/order/add/AddCard'
import AddActions from 'src/views/manage/order/add/AddActions'
import AddNewCustomers from 'src/views/manage/order/add/AddNewCustomer'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const OrderAdd = ({ apiClientData, orderNumber }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // ** State
  const [addCustomerOpen, setAddCustomerOpen] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<OrderClientType | null>(null)
  const [clients, setClients] = useState<OrderClientType[] | undefined>(apiClientData)

  const toggleAddCustomerDrawer = () => setAddCustomerOpen(!addCustomerOpen)

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xl={9} md={8} xs={12}>
          <AddCard
            clients={clients}
            orderNumber={orderNumber}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            toggleAddCustomerDrawer={toggleAddCustomerDrawer}
          />
        </Grid>
        <Grid item xl={3} md={4} xs={12}>
          <AddActions />
        </Grid>
      </Grid>
      <AddNewCustomers
        clients={clients}
        open={addCustomerOpen}
        setClients={setClients}
        toggle={toggleAddCustomerDrawer}
        setSelectedClient={setSelectedClient}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const clientResponse = await axios.get('/manage/order/clients')
  const apiClientData: OrderClientType = clientResponse.data

  const allOrdersResponse = await axios.get('/manage/order/orders', { params: { q: '', status: '' } })
  const lastOrderNumber = Math.max(...allOrdersResponse.data.allData.map((i: OrderType) => i.id))

  return {
    props: {
      apiClientData,
      orderNumber: lastOrderNumber + 1
    }
  }
}

export default OrderAdd
