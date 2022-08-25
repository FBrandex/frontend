// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Restart = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Reiniciar'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Reinício Solicitado.</Typography>
            <Typography sx={{ mb: 2 }}>
              Apenas desafios que permitem reiniciar desafio.
            </Typography>
            <Typography>
              Esta tela lista todos os desafios que trader solicitou reinício de exame. Admin seta os parametros e libera.
            </Typography>
            <Typography>
              Seleciona vários, clica em setar parâmetros, abre modal listando somente os selecionados, clica no botão reiniciar e aqueles selecionados são reiniciados.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Restart
