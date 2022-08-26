// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ApprovedTest = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Aprovados'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>status: Conta Habilitada.</Typography>
            <Typography>
              Esta tela exibe desafios com status “conta habilitada” que alcançaram os requisitos mínimos para serem aprovados.
            </Typography>
            <Typography>
              Admin seleciona desafios, clica em “aprovado” e um email é disparado ao trader informando a aprovação com link para comprar plataforma. Status altera para “aprovado exame”
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ApprovedTest
