import {ButtonCheck} from "./checkbtn.style";

export const CheckBtn = ({text, handleClick}) => {
  return (
    <ButtonCheck
      onClick={() => handleClick()}
    >
      {text}
    </ButtonCheck>
  )
}