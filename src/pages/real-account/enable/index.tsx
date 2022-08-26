// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const EnableReal = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Habilitar'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Aprovado Exame.</Typography>
            <Typography>
            Esta tela lista os desafios que foram aprovados e estão aguardando entrevista.
            </Typography>
            <Typography>
            O admin seleciona os desafios que já passaram pela entrevista e clica em “conta real”
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EnableReal
