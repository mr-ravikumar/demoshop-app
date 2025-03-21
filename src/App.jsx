import React from "react";
import "./App.css";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) 
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  return (
    <div className="h-auto gap-5 py-5 w-screen bg-slate-300 flex flex-col justify-center items-center">
      <NewProduct />
      <Products products={products} />
    </div>
  );
}

export default App;
