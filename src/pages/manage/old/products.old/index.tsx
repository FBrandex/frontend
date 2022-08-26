// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Products = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Produtos'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Produtos.</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ornare metus vitae convallis faucibus. Sed at lorem justo. Vivamus
              eu nisi id eros tincidunt tincidunt id nec mi. Aliquam non finibus.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Products
