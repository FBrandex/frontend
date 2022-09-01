// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintPage from 'src/views/manage/order/print/PrintPage'

const OrderPrint = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PrintPage id={id} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/manage/order/orders')
  const data: OrderType[] = await res.data.allData

  const paths = data.map((item: OrderType) => ({
    params: { id: `${item.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      id: params?.id
    }
  }
}

OrderPrint.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

OrderPrint.setConfig = () => {
  return {
    mode: 'light'
  }
}

export default OrderPrint
