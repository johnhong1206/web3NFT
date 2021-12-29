import { useState } from "react";
import { Welcome, Navbar, Services, Footer } from "./components";
import Transactions from "./components/Transaction";

function App() {
  return (
    <div className="min-h-screen">
      <div className=" gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
