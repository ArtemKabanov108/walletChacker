import {Balance, Count} from "./balanceCount.style";

export const BalanceCount = ({count}) => {
  return (
    <Balance>
      Your balance:
      <Count>
        {count}
      </Count>
      coins
    </Balance>
  )
}