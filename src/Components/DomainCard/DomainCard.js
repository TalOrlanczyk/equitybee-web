import {DomainWrapper} from './Domain.styled';
const DomainCard = ({domain, children}) => {
    console.log(domain);
  return (
    <DomainWrapper>
      <DomainWrapper.DataWrapper>
        <div>
          {domain.additionalInformation?.type && (
            <span>type:{domain?.additionalInformation?.type}</span>
          )}
          {domain?.additionalInformation?.name && (
            <>
              <br />
              <span>name:{domain?.additionalInformation?.name}</span>
            </>
          )}
        </div>
        {domain?.additionalInformation?.logo && (
          <div>
            <img src={domain.additionalInformation.logo} />
          </div>
        )}
      </DomainWrapper.DataWrapper>
      {children}
    </DomainWrapper>
  );
};

export default DomainCard;
