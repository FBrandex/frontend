// ** React Imports
import { useState, useCallback } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import PageHeader from 'src/@core/components/page-header'
import TableHeader from 'src/views/challenge/list/TableHeader'

// ** Data Import
import { rows } from 'src/@fake-db/challenge/list'

// ** Icons Imports
import PencilOutline from 'mdi-material-ui/PencilOutline'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

const statusObj: StatusObj = {
  1: { title: 'Primary', color: 'primary' },
  2: { title: 'Active', color: 'success' },
  3: { title: 'Canceled', color: 'error' },
  4: { title: 'Waiting Platform', color: 'warning' },
  5: { title: 'New Challenge', color: 'info' }
}

const columns = [
  {
    flex: 0.05,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: 'orderId',
    headerName: 'Order'
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'title',
    headerName: 'Challenge'
  },
  {
    flex: 0.1,
    minWidth: 90,
    editable: true,
    field: 'startDate',
    headerName: 'Start Date'
  },
  {
    flex: 0.1,
    minWidth: 90,
    editable: true,
    field: 'dueDate',
    headerName: 'Due Date'
  },
  {
    flex: 0.1,
    minWidth: 90,
    editable: true,
    field: 'cancelDate',
    headerName: 'Cancel Date'
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'client',
    headerName: 'Cliente Name'
  },
  {
    flex: 0.15,
    minWidth: 90,
    editable: true,
    field: 'status',
    headerName: 'Status',
    renderCell: () => {
      const status = statusObj[5]

      return (
        <CustomChip
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    }
  },
  {
    flex: 0.05,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title='Edit'>
          <IconButton size='small' sx={{ mr: 0.5 }} >
            <PencilOutline />
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
]

const ChallengeList = () => {

  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6}>

      <PageHeader
        title={
          <Typography variant='h6'>
            Challenges
          </Typography>
        }
      />

      <Grid item xs={12}>
        <Card>
          <Box >
            <TableHeader value={value} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              columns={columns}
              rows={rows.slice(0, 10)}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
            />
          </Box>
        </Card>
      </Grid>

    </Grid>
  )
}

export default ChallengeList
