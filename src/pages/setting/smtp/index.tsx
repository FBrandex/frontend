// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const SmtpConfig = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Configuração SMTP'></CardHeader>
          <CardContent>
            <Typography>
              Configurar email do remetente, servidor de saída, porta SMTP.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SmtpConfig
