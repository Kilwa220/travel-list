import {useState} from 'react'
import './App.css'
import Container from './components/Container'
import Form from './components/Form'
import ItemsSection from './components/ItemsSection'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Logo from './components/Logo'

const generateOrderNumber = () => {
    let orderNumber = 0

    return () => {
        orderNumber++
        return orderNumber
    }
}

const getOrderNumber = generateOrderNumber()


function generateId() {
	return crypto.randomUUID()
}


function App() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      order: getOrderNumber(),
      quantity: 2,
      description: "Laptop",
      isPacked: false
    },
    {
      id: crypto.randomUUID(),
      order: getOrderNumber(),
      quantity: 4,
      description: "T-shirt",
      isPacked: false
    },
    {
      id: crypto.randomUUID(),
      order: getOrderNumber(),
      quantity: 1,
      description: "Scarf",
      isPacked: false
    },
  ])

  const handleAddItem = (quantity, description) => {
    const newItem = {
            id: generateId(),
            order: getOrderNumber(),
            quantity,
            description,
            isPacked : false,
    };
    setItems(prev => [...prev, newItem])
  }

  const handleToggleItem = (id) => {
    setItems(prevItems => 
      prevItems.map(item => item.id === id ? {...item, isPacked:!item.isPacked} : item)
    )
  }

  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const handleClearItems = () =>  {
    setItems([])
  }
  

  return (
    <div className="app bg-[#F7F5EF]">
      <header className='flex items-center justify-between bg-[#174D3A] text-white m-2 rounded-lg p-3 shadow'>
        <Logo />
        <p className='uppercase text-[12px]'>your next adventure starts here</p>
      </header>
      <Container>
        <main className='flex flex-col md:flex-row gap-4 pl-3 pr-3 md:pl-0 md:pr-0 mt-[30px] mb-[30px]'>
          <div className="text-start content-end  md:w-[60%] md:w-max-[100%]">
            <div className="text text-start leading-[1.2]">
              <h2 className='text-[#174D3A] font-medium'>Your packing list</h2>
              <p className='text-[#64746B] text-[14px]'>Get everything ready for your next trip</p>
            </div>
            
            <div className="items-controller mt-[20px]   rounded-md border border-[#E7E4DA] bg-white pl-2 pr-2 pt-3 pb-3">
              <Form addItem={handleAddItem}/>
              {
                items.length == 0 
                ? ""
                : (
                  <ItemsSection 
                    items={items} 
                    onRemoveItem={handleRemoveItem}
                    onToggleItem={handleToggleItem}
                  />
                )
              }
            </div>

          </div>

          {
            items.length === 0
            ? ""
            : (<Stats items={items} />)
          }
        </main>
      </Container>
      <Footer />
    </div>
  )
}

export default App
