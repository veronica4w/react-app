import { Typography } from '@mui/material';
import { Provider } from 'react-redux';
import './App.css';
import AllRoutes from './components/Routes/AllRoutes';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App"  >
      <Typography mt="1rem"  variant='h3' color="#203e99" >
        Crud APP
      </Typography>
      <AllRoutes />
    </div>
    </Provider>
  );
}

export default App;
