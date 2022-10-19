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
import { OrderType } from 'src/types/manage/orderTypes'
import { UserLayoutType, UsersType } from 'src/types/manage/userTypes'

// ** Demo Components Imports
import UserViewLeft from 'src/views/manage/user/view/UserViewLeft'
import UserViewRight from 'src/views/manage/user/view/UserViewRight'

type Props = UserLayoutType & {
  orderData: OrderType[]
}

const UserView = ({ id, orderData }: Props) => {
  // ** State
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | UsersType>(null)

  useEffect(() => {
    axios
      .get('/manage/user', { params: { id } })
      .then(response => {
        setData(response.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])

  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item lg={12}>
          <UserViewRight orderData={orderData} />
        </Grid>
        {/* <Grid item lg={6}>
          <UserViewLeft userData={data} />
        </Grid> */}
      </Grid>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            User with the id: {id} does not exist. Please check the list of users:{' '}
            <Link href='/manage/user/list'>User List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserView
