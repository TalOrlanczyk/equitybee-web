import styled from 'styled-components';
const DataWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;
export const DomainWrapper = styled.div`
  margin: 10px auto 0;
  background: #dbd4d4;
  border-radius: 8px;
  width: 500px;

  padding: 10px;
`;
DomainWrapper.DataWrapper = DataWrapper;
