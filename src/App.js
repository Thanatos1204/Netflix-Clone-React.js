import './App.css'; 
import Nav from './components/nav/Nav';
import Header from './components/header/Header'
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '1a608a5f537fddc552b0fe31cffb263e'
};

//APP Function
const App = () =>{
  return(
    <div>
        <Nav/>
        <Header/>
        <Content/>
      </div>

  );

  
};

export default App; // exporting app function