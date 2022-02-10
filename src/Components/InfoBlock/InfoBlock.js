import {ContainerInfo, InfoBox} from './infoBlock.style'

export const InfoBlock = ({contentWallet}) => {

  const renderInfoBoxes = (walletForRender) => {

    return (
      <>
        {walletForRender.balance > 0
          ? <InfoBox> {`Let's play with as!`}</InfoBox>
          : <InfoBox> {`Your have ${walletForRender.balance} coins. Please top up your balance!`}</InfoBox>
        }
      </>
    )
  }

  return (
    <ContainerInfo>
      {renderInfoBoxes(contentWallet)}
    </ContainerInfo>
  )
}