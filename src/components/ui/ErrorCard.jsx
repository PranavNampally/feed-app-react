import { Snackbar,Alert} from '@mui/material';
function ErrorCard(){
    return (
        <Snackbar open={true} autoHideDuration={6000}>
            <Alert variant='filled' severity='error' sx={{ width: '100%' }}>
              Please Refresh the Page and Try Again...
            </Alert>
          </Snackbar>
    );
}
export default ErrorCard;