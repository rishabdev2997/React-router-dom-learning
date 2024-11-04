import { useContext, useState } from "react";
import { CountCountext } from "./context";

function App() {
  const [count , setCount] = useState(0);


  return(
    <div>
     <CountCountext.Provider value={count}>
        <Count setCount={setCount} />
     </CountCountext.Provider>
     
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Button setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountCountext)
  return <div>
    {count}
  </div>
}

function Button({ setCount}){
  const count = useContext(CountCountext)
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease</button>
  </div>

}


export default App
