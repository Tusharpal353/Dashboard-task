
import './App.css';
import Body from './Components/Body/Body';
import Head from './Components/Header/Head';
import {Provider} from "react-redux"
import store from './Utils/Reudx-store/store';
function App() {
  return (
    <Provider store={store}>
    
    <div className=' '>
      
        <Head/>
        <Body/>


  
     

    </div>
    </Provider>
  );
}

export default App;
