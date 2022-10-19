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
import PageHeader from 'src/@core/components/page-header'
import TableHeader from 'src/views/manage/broker/list/TableHeader'
import AddBrokerDrawer from 'src/views/manage/broker/list/AddBrokerDrawer'

// ** Data Import
import { rows } from 'src/@fake-db/manage/brokerList'

// ** Icons Imports
import PencilOutline from 'mdi-material-ui/PencilOutline'

const columns = [
  {
    flex: 0.05,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Title'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'E-mail'
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: 'account',
    headerName: 'Account'
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

const BrokerList = () => {

  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [addBrokerOpen, setAddBrokerOpen] = useState<boolean>(false)

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddBrokerDrawer = () => setAddBrokerOpen(!addBrokerOpen)

  return (
    <Grid container spacing={6}>

      <PageHeader
        title={
          <Typography variant='h6'>
            Brokers
          </Typography>
        }
      />

      <Grid item xs={12}>
        <Card>
          <Box >
            <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddBrokerDrawer} />
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

      <AddBrokerDrawer open={addBrokerOpen} toggle={toggleAddBrokerDrawer} />

    </Grid>
  )
}

export default BrokerList
