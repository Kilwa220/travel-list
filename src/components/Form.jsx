import { useState } from "react"
import Button from "./Button"

export const SpecialHeading = ({ as: Tag = 'div', children }) => {

  return (
    <Tag className="text-[#64746B] font-medium text-[16px]">
      {children}
    </Tag>
  )
}

const Form = ({ addItem }) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const options = Array.from({length: 20}, (_, i) => (
    <option key={i + 1} value={i}>
      {i + 1}
    </option>
  ))

  const inputStyle = {
      textColor: 'black',
      padding: "4px 8px",
      borderRadius: '3px',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const desc = description.trim()
    
    if(!desc) return

    addItem(quantity + 1, desc)

    setDescription("")
    setQuantity(1)
  }

  return (
    <form onSubmit={handleSubmit} className="text-[16px] pb-[10px] mb-[10px] border-b-1 border-[#E7E4DA]">
      
      <SpecialHeading as='legend'>
        Add a new item
      </SpecialHeading>

      <input style={inputStyle} className="bg-[#F7F5EF] w-full block mt-[15px] mb-[15px] focus:outline-[#174d3ac7]" type="text" placeholder='Item description' name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>


      <div className="add-item-footer flex">
          <div className="quantity inline mr-auto">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='text-[15px] pt-[3px] pb-[3px] text-center  rounded-sm w-[50px]'>
              {options}
            </select>
          </div>

          <Button type="submit" title="+ Add item" value="submit" style={{backgroundColor: '#174D3A'}}/>
      </div>

    </form>
  )
}

export default Form