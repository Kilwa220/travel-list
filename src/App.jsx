import {useEffect, useState} from 'react'

import './App.css'
import Container from './components/Container'
import Button from './components/Button'



const generateOrderNumber = () => {
  const orderNumber = 1
  return () => {
    return orderNumber + 1
  }
}

const getOrderNumber = generateOrderNumber()

function generateId() {
	return crypto.randomUUID()
}

const Form = ({ addItem }) => {
  const [description, setDescription] = useState('')

  const options = []
  for (let i = 0; i< 20; i++){
    options.push(<option key={i} value={i + 1}>{i + 1}</option>)
  }

  const inputStyle = {
      textColor: 'black',
      border: "1px solid oklch(82.8% 0.111 230.318)",
      padding: "1px 3px",
      textAlign: 'center',
      borderRadius: '3px',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const desc = description.trim()
    const quantity = e.target.quantity.value
    console.log(desc)
    if(desc !== '')  {
      addItem(quantity, desc)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>What do you need for your trip?</legend>
        <select name="quantity" id="" className='text-[15px] pt-[3px] pb-[3px] text-center border border-sky-300 rounded-sm w-[100px]'>
          {options}
        </select>
        <input style={inputStyle} className="bg-gray-200 focus:outline-none" type="text" placeholder='Item...' name="item" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <Button type="submit" title="Add" value="submit"/>
    </form>
  )
}

const Item = ({ quantity, description, onClick }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <li>
      <input type="checkbox" id="item-text" name='j' checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      {isChecked
      ? (<label htmlFor="item-text" className='line-through'>{quantity} {description}</label>)
      : (<label htmlFor="item-text" className=''>{quantity} {description}</label>)
      }
      <button type="button" onClick={onClick}>x</button>
    </li>
  )
}


const ItemsSection = ({ items, setItems }) => {

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const clearItems = () =>  {
    setItems([])
  }

  const sortByInputOrder = () => {
    console.log("sdkfaslk")
    setItems(prevItems => [...prevItems].sort((a, b) => b.orderNumber - a.orderNumber))
  }
  
  return (
    <>
      <ul>
        {
          items.map(item => <Item  key={item.id} quantity={item.quantity} description={item.description} onClick={() => removeItem(item.id)} />)
        }
      </ul>
      <Button title="CLEAR LIST" type="button" onClick={() => clearItems()} />
      <select name="" id="" onChange={() => sortByInputOrder()}>
        <option value="" onSelect={() => sortByInputOrder()}>SORT BY INPUT ORDER</option>
        <option value="">SORT BY DESCRIPTION</option>
        <option value="">SORT BY PACKED STATUS</option>
      </select>
    </>
  )
}

function App() {
  const [items, setItems] = useState([])

  const addItem = (quantity, description) => {
    console.log("hello from add")
    setItems(prev => [
      ...prev,
      {
        id: generateId(),
        order: getOrderNumber(),
        quantity: quantity,
        description: description
      }
    ])
  }


  useEffect(() => {console.log(items)}, [items])


  return (
    <Container>
      <h1>FAR AWAY</h1>
      <main>
        <Form addItem={addItem}/>
        <ItemsSection items={items} setItems={setItems}/>
      </main>

      <footer>You have {items.length} items on your list, and you already packed </footer>
    </Container>
  )
}

export default App
