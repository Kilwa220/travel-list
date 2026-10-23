import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

const Item = ({ id, quantity, description, isPacked, onTogglePacked, onRemove }) => {
  
    return (
    <li className="flex items-center mt-[10px] pt-[20xp] pb-[20px] border-b border-b-[#E7E4DA]" style={{...isPacked ? {opacity : '.5'} : {opacity: '1'}}}>
      {/* we hidde the input because is a little bit hard to make the design */}
      <input type="checkbox" hidden id={id} value={isPacked}  onChange={onTogglePacked}/>

      <label className="flex items-center leading-[1.2] grow cursor-pointer" htmlFor={id} >
        <div className="text-[25px]">
        {isPacked
            ? (<CiCircleCheck />)
            : (<span style={{...isPacked ? {backgroundColor:'blue'} : {border: '1px solid gray'}}} className="block w-[20px] h-[20px] rounded-[50%] transition cursor-pointer"></span>)
        }
        </div>

        <div className="pl-[15px] pr-[15px]">
            <span className="block text-[#174D3A]" style={{...isPacked ? {textDecoration: 'line-through'} : '' }}>
                {description}
            </span>
            <span className="text-[13px] italic">
                {quantity} items
            </span>
        </div>
      </label>
      <button className="ml-auto text-[15px] cursor-pointer hover:text-red-700" type="button" onClick={onRemove}><FaRegTrashAlt /></button>
    </li>
  )
}

export default Item
