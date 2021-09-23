import { useState } from "react";
import CakeCard from "./CakeCard";
import Header from "./Header";
import cakes from "./Cakes";
import SearchBar from "./SearchBar"
import CakeDetail from "./CakeDetail"


function App() {
  const [visible, setVisible] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  return (
    <>
      <Header />
      {visible? <SearchBar /> : null}
      <button onClick={() => setVisible(!visible)}>{visible ? 'x' : 'Form'}</button> 

      {cakes.map(cake => <CakeCard setSelectedCake={setSelectedCake} cake={cake}/>)}

      {selectedCake?<CakeDetail cake={selectedCake} /> : null}

    </>
  );
}
export default App;