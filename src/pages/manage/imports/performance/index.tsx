// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Styled Component
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Demo Components Imports
import FileUploaderSingle from 'src/views/file-uploader/FileUploaderSingle'

// ** Source code imports
import * as source from 'src/views/file-uploader/FileUploaderSourceCode'

const FileUploader = () => {
  return (
    <DropzoneWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <Link href='https://github.com/react-dropzone/react-dropzone/' target='_blank'>
                Relatório de performance
              </Link>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Carregue o arquivo CSV fornecido pela plataforma.</Typography>}
        />
        {/* <Grid item xs={12}>
          <CardSnippet
            title='Upload Multiple Files'
            code={{
              tsx: source.FileUploaderMultipleTSXCode,
              jsx: source.FileUploaderMultipleJSXCode
            }}
          >
            <FileUploaderMultiple />
          </CardSnippet>
        </Grid> */}
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Single Files'
            code={{
              tsx: source.FileUploaderSingleTSXCode,
              jsx: source.FileUploaderSingleJSXCode
            }}
          >
            <FileUploaderSingle />
          </CardSnippet>
        </Grid>
        {/* <Grid item xs={12}>
          <CardSnippet
            title='Upload Files with Restrictions'
            code={{
              tsx: source.FileUploaderRestrictionsTSXCode,
              jsx: source.FileUploaderRestrictionsJSXCode
            }}
          >
            <FileUploaderRestrictions />
          </CardSnippet>
        </Grid> */}
      </Grid>
    </DropzoneWrapper>
  )
}

export default FileUploader
