import { useState } from "react";

import CakeCard from "./CakeCard";
import Header from "./Header";
import SearchBar from "./SearchBar"
import CakeDetail from "./CakeDetail"
import CakeForm from "./CakeForm"

import cakes from "./Cakes";


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const [cakeList, setCakes] = useState(cakes)

  function handleAddCake(cake){
    setCakes(
      [
        ...cakeList,
        cake
      ]
    )
  }

  return (
    <>
      <Header />

      {visible? <SearchBar /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Search'}</button>

      <p></p>

      <CakeForm handleAddCake={handleAddCake} />

      {cakes.map(cake => <CakeCard setSelectedCake={setSelectedCake} cake={cake}/>)}

      {selectedCake?<CakeDetail cake={selectedCake} /> : null}

    </>
  );
}
export default App;