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
          <CardHeader title='Habilitar'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Aguardando Plataforma.</Typography>
            <Typography>
              Esta tela lista os desafios que estão aguardando o email da corretora para ser habilitado e começar a operar.
            </Typography>
            <Typography>
              O admin seleciona os desafios que já tem plataforma e clica no botão “Habilitar desafios”.
            </Typography>
            <Typography>
              Status muda pra “conta habilitada”
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EnableTest
