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
import TableHeader from 'src/views/manage/email/list/TableHeader'
import AddEmailDrawer from 'src/views/manage/email/list/AddEmailDrawer'

// ** Data Import
import { rows } from 'src/@fake-db/manage/emailList'

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
    flex: 0.1,
    minWidth: 90,
    field: 'title',
    headerName: 'Title'
  },
  {
    flex: 0.15,
    minWidth: 200,
    field: 'description',
    headerName: 'Description'
  },
  {
    flex: 0.05,
    minWidth: 100,
    field: 'recipient',
    headerName: 'Recipient'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'content',
    headerName: 'Content'
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

const EmailList = () => {

  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [addEmailOpen, setAddEmailOpen] = useState<boolean>(false)

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddEmailDrawer = () => setAddEmailOpen(!addEmailOpen)

  return (
    <Grid container spacing={6}>

      <PageHeader
        title={
          <Typography variant='h6'>
            Emails
          </Typography>
        }
      />

      <Grid item xs={12}>
        <Card>
          <Box >
            <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddEmailDrawer} />
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

      <AddEmailDrawer open={addEmailOpen} toggle={toggleAddEmailDrawer} />

    </Grid>
  )
}

export default EmailList
