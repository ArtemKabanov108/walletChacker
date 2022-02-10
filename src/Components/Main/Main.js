import {Container, ContentContainerMain} from "./main.style";
import {Header} from "../Header/Header";
import {InfoBlock} from '../InfoBlock/InfoBlock'
import {useSelector} from "react-redux";

export const Main = () => {
  const { wallet } = useSelector(state => state.useReducer)

  const renderInfo = (myWallet) => {
    return (
      <>
        {myWallet?.addressWallet.length > 0 && <InfoBlock contentWallet={wallet}/>}
      </>
    )
  }

  return (
    <Container>
      <Header/>
      <ContentContainerMain>
        {renderInfo(wallet)}
      </ContentContainerMain>
    </Container>
  )
}
