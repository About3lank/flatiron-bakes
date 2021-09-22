import { useState } from "react";
import CakeCard from "./CakeCard";
import Header from "./Header";
import cakes from "./Cakes";
import SearchBar from "./SearchBar"

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Header />
      {visible? <SearchBar /> : null}

      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Form'}</button> 

      {cakes.map(cake => <CakeCard flavor = {cake.flavor} price ={cake.price} size = {cake.size} image={cake.image}/>)}

    </>
  );
}
export default App;