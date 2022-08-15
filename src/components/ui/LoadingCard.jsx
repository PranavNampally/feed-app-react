import { Snackbar,Alert} from '@mui/material';
import Load from '../Load';
function LoadingCard(){
    return (
        <>
              <Snackbar open={true} autoHideDuration={5000}>
                <Alert
                  variant='filled'
                  severity='info'
                  sx={{ width: '100%' }}
                  style={{ backgroundColor: 'grey' }}
                >
                  ...Loading...
                </Alert>
              </Snackbar>
              <Load />
              <Load />
              <Load />
            </>
    );
}
export default LoadingCard;