// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Reset = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Resetar Parâmetros'></CardHeader>
          <CardContent>
            <Typography>
              Em caso de trader solicitar cancelamento e solicitar nova plataforma
              em seguida, se for a mesma plataforma, não é disparado email pra corretora
              cancelar a plataforma. Nesta tela o admin consegue resetar os parâmetros
              da subconta e liberar o novo exame de forma mais rápida.
            </Typography>
            <Typography>
            (pensar em como vai ser feito cancelamento do anterior e habilitação do novo no dashboard)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Reset
