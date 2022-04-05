import {useState} from 'react';
import { DomainContext } from '../../context/domainData';
import DomainList from '../DomainList/DomainList';
import DomainSearch from '../DomainSearch/DomainSearch';
const {Provider} = DomainContext;

const Domains = (props) => {
  const [domains, setDomains] = useState([]);

  return (
    <Provider value={{domains, setDomains}}>
      <DomainSearch />
      <DomainList />
    </Provider>
  );
};

export default Domains;
