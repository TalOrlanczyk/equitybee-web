import {useState, useEffect, useContext} from 'react';
import {Button} from '../../Components/Button/button.styled';
import DomainCard from '../../Components/DomainCard/DomainCard';
import {DomainContext} from '../../context/domainData';
import httpClient from '../../services/httpClient';
const DomainList = () => {
  const {domains, setDomains} = useContext(DomainContext);
  useEffect(() => {
    const initData = async () => {
      const {data} = await httpClient.domainList();
      setDomains(data);
    };
    initData();
  }, []);

  const moreInfoHandler = (e) => {};
  return (
    <div>
        <h3>list</h3>
      {domains.length > 0 && (
        <>
          {domains.map((domain) => {
            return (
              <DomainCard domain={domain} key={domain.id}>
                <Button onClick={moreInfoHandler}>More Info</Button>
              </DomainCard>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DomainList;
