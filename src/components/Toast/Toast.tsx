import { Alert, Snackbar } from '@mui/material'
interface toastProps {
  open:boolean;
  handleClose:()=>void;
  message:string
}
const Toast = (props:toastProps) => {
  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose}   sx={{ width: '100%', background:"green",color:"#f2f2f2" }}>
          {
            props.message
          }
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Toast