// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Bem vindo, Administrador!'></CardHeader>
          <CardContent>
            <Typography>Navegue entre as opções do menu.</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default Home
