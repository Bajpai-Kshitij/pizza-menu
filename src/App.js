import './App.css';
// import { pizzaData } from './data';

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
  return(
    <div className='menu'>
      <h2>Our Menu</h2>
      <div className='pizzas'>
        <Pizza name={'Pizza Margherita'} image={"pizzas/margherita.jpg"} 
          indegreints = {"Tomato and mozarella"} price={10} />
        <Pizza name={'Focaccia'} image={"pizzas/focaccia.jpg"} 
          indegreints = {"Bread with italian olive oil and rosemary"} price={6} />
        <Pizza name={'Pizza Spinaci'} image={"pizzas/spinaci.jpg"} 
          indegreints = {"Tomato, mozarella, spinach, and ricotta cheese"} price={12} />
      </div>
    </div>
  )
}

function Pizza(props){
  return (
  <div className='pizza'>
    <img src={props.image} alt={props.name}></img>
    <h3>{props.name}</h3>
    <p>{props.indegreints}</p>
    <span>{props.price}</span>
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

  const status = hour >= 8 && hour <= 22 ? "Open":"Closed"
  return (
    <footer className='footer'>
      <p>Restaurant is now <strong>{status}</strong>.</p>
      <p>{new Date().toString()}</p>
    </footer>

  )
}