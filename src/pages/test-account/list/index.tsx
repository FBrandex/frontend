// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const EnableTest = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Listar'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Todos.</Typography>
            <Typography>
              Esta tela lista todos os desafios.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EnableTest
