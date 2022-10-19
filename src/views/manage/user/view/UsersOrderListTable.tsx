// ** React Imports
import { MouseEvent, ReactElement, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Send from 'mdi-material-ui/Send'
import Check from 'mdi-material-ui/Check'
import StarOutline from 'mdi-material-ui/StarOutline'
import ArrowUp from 'mdi-material-ui/ArrowUp'
import ChartPie from 'mdi-material-ui/ChartPie'
import ClockOutline from 'mdi-material-ui/ClockOutline'
import ArrowDown from 'mdi-material-ui/ArrowDown'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import Cancel from 'mdi-material-ui/Cancel'
import ContentCopy from 'mdi-material-ui/ContentCopy'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import Power from 'mdi-material-ui/Power'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { OrderType } from 'src/types/manage/orderTypes'

// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface Props {
  orderData: OrderType[]
}

interface OrderStatusObj {
  [key: string]: {
    color: ThemeColor
    icon: ReactElement
  }
}
interface CellType {
  row: OrderType
}

const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Vars
const orderStatusObj: OrderStatusObj = {
  Sent: { color: 'secondary', icon: <Send sx={{ fontSize: '1.25rem' }} /> },
  Paid: { color: 'success', icon: <Check sx={{ fontSize: '1.25rem' }} /> },
  Draft: { color: 'primary', icon: <ContentSaveOutline sx={{ fontSize: '1.25rem' }} /> },
  'Partial Payment': { color: 'warning', icon: <ChartPie sx={{ fontSize: '1.25rem' }} /> },
  'Past Due': { color: 'error', icon: <InformationOutline sx={{ fontSize: '1.25rem' }} /> },
  Downloaded: { color: 'info', icon: <ArrowDown sx={{ fontSize: '1.25rem' }} /> }
}

const RowOptions = ({ id }: { id: number | string }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {/* <MenuItem>
          <Update fontSize='small' sx={{ mr: 2 }} />
          Change Status
        </MenuItem>
        <Link href={`/manage/order/edit/${id}`} passHref>
          <MenuItem>
            <PencilOutline fontSize='small' sx={{ mr: 2 }} />
            Edit
          </MenuItem>
        </Link>
        <MenuItem>
          <ContentCopy fontSize='small' sx={{ mr: 2 }} />
          Duplicate
        </MenuItem> */}
        <MenuItem>
          <StarOutline fontSize='small' sx={{ mr: 2 }} />
          Produto Adquirido
        </MenuItem>
        <MenuItem>
          <ClockOutline fontSize='small' sx={{ mr: 2 }} />
          Aguardando Plataforma
        </MenuItem>
        <MenuItem>
          <Power fontSize='small' sx={{ mr: 2 }} />
          Conta Habilitada
        </MenuItem>
        <MenuItem>
          <Cancel fontSize='small' sx={{ mr: 2 }} />
          Cancelado
        </MenuItem>
        <MenuItem>
          <Check fontSize='small' sx={{ mr: 2 }} />
          Aprovado Exame
        </MenuItem>
      </Menu>
    </>
  )
}

const columns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 90,
    headerName: 'ID',
    renderCell: ({ row }: CellType) => (
      // <Link href={`/manage/order/preview/${row.id}`} passHref>
        <StyledLink>{`#${row.id}`}</StyledLink>
      // </Link>
    )
  },
  {
    flex: 0.3,
    minWidth: 125,
    field: 'service',
    headerName: 'Challenge',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.service}</Typography>
  },
  /* {
    flex: 0.25,
    minWidth: 90,
    field: 'total',
    headerName: 'Total',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>${row.total || 0}</Typography>
  }, */
  {
    flex: 0.25,
    minWidth: 90,
    field: 'issuedDate',
    headerName: 'Start Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.issuedDate}</Typography>
  },
  {
    flex: 0.25,
    minWidth: 90,
    field: 'dueDate',
    headerName: 'Due Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.dueDate}</Typography>
  },
  {
    flex: 0.15,
    minWidth: 80,
    field: 'orderStatus',
    // renderHeader: () => <ArrowUp fontSize='small' sx={{ color: 'action.active' }} />,
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      const { dueDate, balance, orderStatus } = row

      const color = orderStatusObj[orderStatus] ? orderStatusObj[orderStatus].color : 'primary'
      const Icon = orderStatusObj[orderStatus] ? orderStatusObj[orderStatus].icon : null

      return (
        <Tooltip
          title={
            <>
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                {orderStatus}
              </Typography>
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Balance:
              </Typography>{' '}
              {balance}
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Due Date:
              </Typography>{' '}
              {dueDate}
            </>
          }
        >
          <CustomAvatar skin='light' color={color} sx={{ width: 34, height: 34 }}>
            {Icon}
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <Tooltip title='Delete Order'>
          <IconButton size='small'>
            <DeleteOutline />
          </IconButton>
        </Tooltip>
        <Tooltip title='View'>
          <Box>
            <Link href={`/manage/order/preview/${row.id}`} passHref>
              <IconButton size='small' component='a' sx={{ textDecoration: 'none' }}>
                <EyeOutline />
              </IconButton>
            </Link>
          </Box>
        </Tooltip> */}
        <Tooltip title='View'>
          <IconButton size='small'>
            <EyeOutline />
          </IconButton>
        </Tooltip>
        <Tooltip title='Cancel'>
          <IconButton size='small'>
            <Cancel />
          </IconButton>
        </Tooltip>
        <RowOptions id={row.id} />
      </Box>
    )
  }
]

const OrderListTable = ({ orderData }: Props) => {
  // ** State
  const [pageSize, setPageSize] = useState<number>(7)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Var
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      {/* <CardHeader
        title='Order List'
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        titleTypographyProps={{
          variant: 'h6',
          sx: { lineHeight: '32px !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <>
            <Button
              variant='contained'
              aria-haspopup='true'
              onClick={handleClick}
              endIcon={<ChevronDown />}
              aria-expanded={open ? 'true' : undefined}
              aria-controls={open ? 'user-view-overview-export' : undefined}
            >
              Export
            </Button>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
              <MenuItem onClick={handleClose}>PDF</MenuItem>
              <MenuItem onClick={handleClose}>XLSX</MenuItem>
              <MenuItem onClick={handleClose}>CSV</MenuItem>
            </Menu>
          </>
        }
      /> */}
      <DataGrid
        autoHeight
        columns={columns}
        rows={orderData}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
      />
    </Card>
  )
}

export default OrderListTable
