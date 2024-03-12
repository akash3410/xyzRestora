import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import myStore from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
