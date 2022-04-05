import { useContext, useState } from 'react';
import { Button } from '../../Components/Button/button.styled';
import DomainCard from '../../Components/DomainCard/DomainCard';
import { DomainContext } from '../../context/domainData';
import httpClient from '../../services/httpClient';
const DomainSearch = (props) => {
  const [domain, setDomain] = useState();
  const [searchDomain, setSearchDomain] = useState('');
  const {setDomains} = useContext(DomainContext);

  const onChangeHandler = (e) => {
    setSearchDomain(e.target.value);
  };
  const onSearch = async (_) => {
    const {data} = await httpClient.findDomain({domain: searchDomain});

    if (data) {
      setDomain(data);
    }
  };

  const addDomain = async (_) =>{
    const {status,data} = await httpClient.addDomain(domain);
    if(status === 200) {
        setDomains(prev=> {
            return [data,...prev]
        })
        setDomain(null)
    }

  }
  return (
    <>
      <input value={searchDomain} onChange={onChangeHandler} />
      <Button onClick={onSearch}>Search</Button>
      {domain && (
        <DomainCard domain={domain}>

          {!domain.isAdded ? <Button onClick={addDomain}>Add</Button>: <span>Already Been Added!!</span>}
        </DomainCard>
      )}
    </>
  );
};

export default DomainSearch;
