// ** Next Import
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'

// ** Demo Components Imports
import Edit from 'src/views/manage/order/edit/Edit'

const OrderEdit = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Edit id={id} />
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

export default OrderEdit
