import React from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredient: "Bread with italian olive and rosemary",
    price: 6,
    photoname: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredient: "mozarella",
    price: 10,
    photoname: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinaci",
    ingredient: "cheese, ricotta, spinach",
    price: 12,
    photoname: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Funghi",
    ingredient: "cheese, ricotta, spinach",
    price: 12,
    photoname: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino",
    ingredient: "cheese, ricotta, spinach",
    price: 15,
    photoname: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Prosciutto",
    ingredient: "cheese, ricotta, spinach",
    price: 18,
    photoname: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 style={{ color: "red" }}>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Funghi"
        ingredien="Tomato, mushrooms"
        price="12"
        photoName="pizzas/focaccia.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredien="Tomato, mushrooms"
        price="12"
        photoName="pizzas/funghi.jpg"
      />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open");
  // else alert("Sorry we're closed");

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt="" />
      <h2>{props.name}</h2>
      <p>{props.ingredient}</p>
      <span>{props.price}</span>
    </div>
  );
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
