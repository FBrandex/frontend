// ** Next Import
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { OrderType } from 'src/types/manage/orderTypes'

// ** Demo Components Imports
import UserViewPage from 'src/views/manage/user/view/UserViewPage'

const UserView = ({ orderData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserViewPage id='1' orderData={orderData} />
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/manage/order/orders')
  const orderData: OrderType[] = res.data.allData

  return {
    props: {
      orderData
    }
  }
}

export default UserView
