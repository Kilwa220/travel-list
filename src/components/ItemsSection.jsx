import Item from "./Item"
import Button from "./Button"
import { useState } from "react"
import { SpecialHeading } from "./Form"


const ItemsSection = ({items, onRemoveItem, onClearItems, onToggleItem }) => {
    const [sortBy, setSortBy] = useState('input')
    
    let sortedItems

    //sortedItems is syncronized with the state of items
    switch(sortBy){
        case "input":
            sortedItems = items
            break
        case "description":
            sortedItems = [...items]
                .sort((a, b) => a.description.localeCompare(b.description))
            break
        default:
            sortedItems = [...items]
                .sort((a, b) => Number(a.isPacked) - Number(b.isPacked))
                break
    }

    const activeStyle = {
        borderBottom: '2px solid #174D3A',
        borderTop: '2px solid #174D3A'
    }


  
  return (
    <>
      <ul className="relative">
        <SpecialHeading as='legend'>
            Items to pack 
            <span className="absolute right-0 text-[14px] text-[#64746B] font-normal">{items.length} items</span>
        </SpecialHeading>
        {
          sortedItems.map(item => 
          <Item  
            key={item.id} 
            id={item.id}
            quantity={item.quantity} 
            description={item.description} 
            isPacked={item.isPacked}
            onTogglePacked={() => onToggleItem(item.id)} 
            onRemove={() => onRemoveItem(item.id)} 
            />)
        }
      </ul> 

      <div className="sort-contianer flex justify-between mt-[10px]">
        <h4 className="text-[15px]">Sort items by</h4>
        <div className="options flex gap-[2px]">
            <Button title="Input" onClick={() => setSortBy('input')} style={{fontSize: '10px', backgroundColor: 'transparent', color: 'black', ...sortBy == 'input' ? activeStyle : ''}}/>
            <Button title="description" onClick={() => setSortBy('description')}  style={{fontSize: '10px', backgroundColor: 'transparent', color: 'black', ...sortBy == 'description' ? activeStyle : ''}}/>
            <Button title="packed" onClick={() => setSortBy('packed')} style={{fontSize: '10px', backgroundColor: 'transparent', color: 'black', ...sortBy == 'packed' ? activeStyle : ''}} />
        </div>
      </div>

      {/* <Button title="CLEAR LIST" type="button" onClick={() => onClearItems()} /> */}
    </>
  )
}

export default ItemsSection