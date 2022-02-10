import {HeaderContainer} from "./header.style";
import {CheckBtn} from "../common/Buttons/CheckBtn/CheckBtn";
import {BalanceCount} from "../BalanceCount/BalanceCount";
import {fetchConnectWallet, fetchDisConnectWallet} from "../../app/redusers/asyncActionCreator";
import {useSelector, useDispatch} from "react-redux";

export const Header = () => {

  const dispatch = useDispatch()
  const { wallet } = useSelector(state => state.useReducer)

  const handleConnect = async () => {
    dispatch(fetchConnectWallet())
    }

  const handleDisconnect = async () => {
    dispatch(fetchDisConnectWallet())
  }

  const ConnectDisconnect = wallet?.addressWallet.length > 0 ? handleDisconnect : handleConnect;

  const textBtnSync = wallet?.addressWallet.length > 0 ? 'unsync' : 'sync';

  return (
    <HeaderContainer>
      {wallet?.addressWallet && <BalanceCount count={wallet.balance}/>}
      <CheckBtn
        handleClick={ConnectDisconnect}
        text={textBtnSync}
      />
    </HeaderContainer>
  )
}