// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import SendOutline from 'mdi-material-ui/SendOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

interface Props {
  id: string | undefined
  toggleAddPaymentDrawer: () => void
  toggleSendOrderDrawer: () => void
}

const PreviewActions = ({ id, toggleSendOrderDrawer, toggleAddPaymentDrawer }: Props) => {
  return (
    <Card>
      <CardContent>
        <Button
          fullWidth
          sx={{ mb: 3.5 }}
          variant='contained'
          startIcon={<SendOutline />}
          onClick={toggleSendOrderDrawer}
        >
          Send Order
        </Button>
        <Link href={`/manage/order/edit/${id}`} passHref>
          <Button fullWidth component='a' sx={{ mb: 3.5 }} color='secondary' variant='outlined'>
            Edit Order
          </Button>
        </Link>
        <Button
          fullWidth
          color='success'
          variant='contained'
          startIcon={<CurrencyUsd />}
          onClick={toggleAddPaymentDrawer}
        >
          Add Payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default PreviewActions
