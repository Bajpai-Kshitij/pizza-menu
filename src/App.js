import './App.css';
import { pizzaData } from './data';

export default function App() {
  // console.log(pizzaData)
  return (
    <main className='container'>
      <Headers />
      <Menu />
      <Footers />
    </main>
  );
}

function Menu(){
  const pizzas = pizzaData
  return(
    <div className='menu'>
      <h2>Our Menu</h2>
      {pizzas.length >0 ? (
        <>
        <p>We Only sell authentic pizzas</p>
        <div className='pizzas'>
        {pizzas.map(element => 
          <Pizza {...element} key={element.name} />
        )}
      </div>
        </>
      ): 
      <p>We are still working on our menu. Please try after some time</p>}
    </div>
  )
}

function Pizza({name,photoName,ingredients,price,soldOut}){
  
  return (
  <div className={`pizza ${soldOut ? "sold-out":""}`}>
    <img src={photoName} alt={name}></img>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <span>{soldOut ? "SOLD OUT" : price}</span>
  </div>
  )
}


function Headers() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footers() {
  const hour = new Date().getHours()
  const startHour = 6;
  const closeHour = 22;
  const status = hour >= startHour && hour <= closeHour ? "Open":"Closed"
  return (
    <footer className='footer'>
      {status === "Open"? 
      (<>
      <p>Restaurant is now <strong>Open</strong>. We will be accepting orders by {closeHour}:00</p>
      <br></br>
      <button className="btn" >Order now</button>
      </>)
        :(<>
        <p>Restaurant is now <strong>Closed</strong>. We will start accepting orders from {startHour}:00</p>
        <p>{new Date().toString()}</p>
        </>)
         }
    </footer>

  )
}