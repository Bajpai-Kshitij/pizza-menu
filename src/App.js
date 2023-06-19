import './App.css';
import { pizzaData } from './data';

export default function App() {
  console.log(pizzaData)
  return (
    <main>
      <Headers />
      <Menu />
      <Footers />
    </main>
  );
}

function Menu(){
  return(
    <div>
      <Pizza />
      <Pizza />
    </div>
  )
}

function Pizza(){
  return (
  <div>
    <img src="pizzas/margherita.jpg" alt={'Pizza Margherit'}></img>
    <h3>Pizza Margherita</h3>
    <p>Tomato and mozarella</p>
    <span>10</span>
  </div>
  )
}


function Headers() {
  return (
    <header>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footers() {
  return (
    <footer>
      This is footer
    </footer>

  )
}