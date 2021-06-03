import React , {  Fragment ,useEffect } from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModel from './components/logs/AddLogModel';
import EditLogModel from './components/logs/EditLogModel';
import AddTechModel from './components/techs/AddTechModel';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';



const App = () => {

  useEffect(() => {
    // Init Materialize JS
   M.AutoInit();
  },[])

  return (
    <Provider store = {store}>
          <Fragment>
           <SearchBar />
            <div className="container">
              <AddBtn />
              <AddLogModel />
              <EditLogModel />
              <AddTechModel />
              <Logs />  
            </div>
         </Fragment>
    </Provider>  

      );   
}

export default App;
