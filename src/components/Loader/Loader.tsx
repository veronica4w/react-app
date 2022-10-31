import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

const Loader = () =>  {
  return (
    <Box sx={{ width: '100%',position:'absolute',top:'1px' }}>
      <LinearProgress color='secondary' />
    </Box>
  );
}

export default Loader;