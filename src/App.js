import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DomainContext } from './context/domainData';
import DomainById from './resource/DomainById/DomainById';
import Domains from './resource/Domains/Domains';
const {Provider} = DomainContext;

function App() {

  return (
    <Routes>
       <Route index element={<Domains />}/>
       <Route path=":domaindId" element={<DomainById />}/>
    </Routes>


  );
}

export default App;
