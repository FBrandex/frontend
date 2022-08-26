// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const DisableTest = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Desabilitar'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Conta Habilitada.</Typography>
            <Typography>
            Esta tela mostra desafios que estão habilitados.
            </Typography>
            <Typography>Verificar melhor forma:</Typography>
            <Typography>- Se lista todos os habilitados e admin seleciona oq cancelar ou</Typography>
            <Typography>- Se lista apenas os que atingiram drawdown ou tiveram cancelamento solicitado pelo trader</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DisableTest
