import { Provider } from 'react-redux';
import './App.css';
import AllRoutes from './components/Routes/AllRoutes';
import Title from './components/Title/Title';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App"  >
      <Title />
      <AllRoutes />
    </div>
    </Provider>
  );
}

export default App;
