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
import TableHeader from 'src/views/manage/product/list/TableHeader'
import AddProductDrawer from 'src/views/manage/product/list/AddProductDrawer'

// ** Data Import
import { rows } from 'src/@fake-db/manage/productList'

// ** Icons Imports
import PencilOutline from 'mdi-material-ui/PencilOutline'

const columns = [
  {
    flex: 0.05,
    field: 'id',
    maxWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'title',
    headerName: 'Title'
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'previousPrice',
    headerName: 'Previous Price'
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'price',
    headerName: 'Current Price'
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: 'productGroup',
    headerName: 'Category'
  },
  {
    flex: 0.05,
    maxWidth: 90,
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

const ProductList = () => {

  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [addProductOpen, setAddProductOpen] = useState<boolean>(false)

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddProductDrawer = () => setAddProductOpen(!addProductOpen)

  return (
    <Grid container spacing={6}>

      <PageHeader
        title={
          <Typography variant='h6'>
            Products
          </Typography>
        }
      />

      <Grid item xs={12}>
        <Card>
          <Box >
            <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddProductDrawer} />
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

      <AddProductDrawer open={addProductOpen} toggle={toggleAddProductDrawer} />

    </Grid>
  )
}

export default ProductList
