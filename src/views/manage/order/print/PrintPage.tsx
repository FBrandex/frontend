// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'

// ** Types
import { SingleOrderType, OrderLayoutProps } from 'src/types/manage/orderTypes'

// ** Third Party Components
import axios from 'axios'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  padding: `${theme.spacing(1, 0)} !important`
}))

const OrderPrint = ({ id }: OrderLayoutProps) => {
  // ** State
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | SingleOrderType>(null)

  // ** Hooks
  const theme = useTheme()

  useEffect(() => {
    setTimeout(() => {
      window.print()
    }, 100)
  }, [])

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

  if (data) {
    const { order, paymentDetails } = data

    return (
      <Box sx={{ p: 12, pb: 6 }}>
        <Grid container>
          <Grid item xs={8} sx={{ mb: { sm: 0, xs: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                <svg width={40} fill='none' height={22} viewBox='0 0 268 234' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M 64.963 233.993 L 0 233.993 L 101.517 114.061 L 4.974 0.008 L 69.936 0.008
              L 268 233.993 L 203.035 233.993 L 133.998 152.435 L 64.963 233.993 Z M 198.062 0.008
              L 263.025 0.008 L 190.554 85.623 L 158.073 47.251 L 198.062 0.008 Z'
                    fill={theme.palette.primary.main}
                  />
                  <path
                    d='M 64.963 233.993 L 0 233.993 L 101.517 114.061 L 4.974 0.008 L 69.936 0.008
              L 268 233.993 L 203.035 233.993 L 133.998 152.435 L 64.963 233.993 Z M 198.062 0.008
              L 263.025 0.008 L 190.554 85.623 L 158.073 47.251 L 198.062 0.008 Z'
                    fillOpacity='0.4'
                    fill='url(#paint1_linear_7821_79167)'
                  />
                  <defs>
                    <linearGradient
                      y1='143.953'
                      x1='0'
                      x2='143.953'
                      y2='143.953'
                      id='paint0_linear_7821_79167'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop />
                      <stop offset='1' stopOpacity='0' />
                    </linearGradient>
                    <linearGradient
                      y1='143.953'
                      x1='0'
                      x2='143.953'
                      y2='143.953'
                      id='paint1_linear_7821_79167'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop />
                      <stop offset='1' stopOpacity='0' />
                    </linearGradient>
                  </defs>
                </svg>
                <Typography sx={{ fontWeight: 400, lineHeight: 1.2 }}>
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <Box>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  Office 149, 450 South Brand Brooklyn
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  San Diego County, CA 91905, USA
                </Typography>
                <Typography variant='body2'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { sm: 'flex-end', xs: 'flex-start' } }}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                {`Order #${order.id}`}
              </Typography>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <Typography variant='body2' sx={{ mr: 3 }}>
                  Date Issued:
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  {order.issuedDate}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='body2' sx={{ mr: 3 }}>
                  Date Due:
                </Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  {order.dueDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Grid container>
          <Grid item xs={7} md={8} sx={{ mb: { lg: 0, xs: 4 } }}>
            <Typography variant='body2' sx={{ mb: 3.5, fontWeight: 600 }}>
              Order To:
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              {order.name}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              {order.company}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              {order.address}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              {order.contact}
            </Typography>
            <Typography variant='body2' sx={{ mb: 2 }}>
              {order.companyEmail}
            </Typography>
          </Grid>
          <Grid item xs={5} md={4}>
            <Typography variant='body2' sx={{ mb: 3.5, fontWeight: 600 }}>
              Bill To:
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <MUITableCell>Total Due:</MUITableCell>
                  <MUITableCell>{paymentDetails.totalDue}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Bank name:</MUITableCell>
                  <MUITableCell>{paymentDetails.bankName}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Country:</MUITableCell>
                  <MUITableCell>{paymentDetails.country}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>IBAN:</MUITableCell>
                  <MUITableCell>{paymentDetails.iban}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>SWIFT code:</MUITableCell>
                  <MUITableCell>{paymentDetails.swiftCode}</MUITableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 0 }} />

        <Table sx={{ mb: 6 }}>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>hours</TableCell>
              <TableCell>qty</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Premium Branding Package</TableCell>
              <TableCell>Branding & Promotion</TableCell>
              <TableCell>48</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$32</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Media</TableCell>
              <TableCell>Social media templates</TableCell>
              <TableCell>42</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Web Design</TableCell>
              <TableCell>Web designing package</TableCell>
              <TableCell>46</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SEO</TableCell>
              <TableCell>Search engine optimization</TableCell>
              <TableCell>40</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$22</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Grid container>
          <Grid item xs={8} sm={7} lg={9}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' sx={{ mr: 2, fontWeight: 600 }}>
                Salesperson:
              </Typography>
              <Typography variant='body2'>Tommy Shelby</Typography>
            </Box>

            <Typography variant='body2'>Thanks for your business</Typography>
          </Grid>
          <Grid item xs={4} sm={5} lg={3}>
            <CalcWrapper>
              <Typography variant='body2'>Subtotal:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $1800
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Discount:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $28
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Tax:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                21%
              </Typography>
            </CalcWrapper>
            <Divider />
            <CalcWrapper>
              <Typography variant='body2'>Total:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $1690
              </Typography>
            </CalcWrapper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />
        <Typography variant='body2'>
          <strong>Note:</strong> It was a pleasure working with you and your team. We hope you will keep us in mind for
          future freelance projects. Thank You!
        </Typography>
      </Box>
    )
  } else if (error) {
    return (
      <Box sx={{ p: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Alert severity='error'>
              Order with the id: {id} does not exist. Please check the list of orders:{' '}
              <Link href='/manage/order/list'>Order List</Link>
            </Alert>
          </Grid>
        </Grid>
      </Box>
    )
  } else {
    return null
  }
}

export default OrderPrint
