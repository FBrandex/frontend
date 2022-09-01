// ** Next Import
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'

// ** Demo Components Imports
import UserViewPage from 'src/views/manage/user/view/UserViewPage'

const UserView = ({ id, orderData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserViewPage id={id} orderData={orderData} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/manage/users/list')
  const userDate: OrderType[] = await res.data.allData

  const paths = userDate.map((item: OrderType) => ({
    params: { id: `${item.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/manage/order/orders')
  const orderData: OrderType[] = res.data.allData

  return {
    props: {
      orderData,
      id: params?.id
    }
  }
}

export default UserView
