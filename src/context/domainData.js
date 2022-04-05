import {createContext} from 'react';
export const DomainContext = createContext({
  domains: [],
  setDomains: () => {},
});
