// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintPage from 'src/views/manage/order/print/PrintPage'

const OrderPrint = () => {
  return <PrintPage id='4987' />
}

OrderPrint.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

OrderPrint.setConfig = () => {
  return {
    mode: 'light'
  }
}

export default OrderPrint
