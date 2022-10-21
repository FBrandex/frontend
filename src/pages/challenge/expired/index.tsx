// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Expired = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Expirados'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Conta Habilitada.</Typography>
            <Typography>
              Exibe desafios que vencem hoje.
            </Typography>
            <Typography>
              Envia solicitação de cancelamento à plataforma automaticamente ou manualmente
            </Typography>
            <Typography>
              (Verificar se precisa fazer alguma verificação antes de cancelar).
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Expired
