import { useEffect, useState } from "react";
import props from "prop-types";

const Second = () => {
  const [value, setValue] = useState(10)
  const [tring, setTring] = useState('')
  useEffect(()=> {setValue(30)},[])
  let a=10

  const ass = (e) =>
  {setTring(e.target.value)
  }


  return (
    <div>
    <p>{value}</p>
    <button onClick={() => setValue(20)}>click</button>
    <input onChange={(e)=> ass(e)}></input>
    {console.log(tring)}
    </div>)
}

export default Second;



// function PropsExample() {
//   const [change, setChange] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setChange(!change)}>Click Here!</button>
//       {change ? (
//         // <p>'Welcome to GeeksforGeeks'</p>
//         Example('Welcome to GeeksforGeeks')
//       ) : (
//         // <p>A Computer Science Portal for Geeks</p> 
//         Example('A Computer Science Portal for Geeks')
//       )}
//     </div>
//   );
// }

// const Example = (value) => {
//     return <h1>{value}</h1>;
//   };

// export default PropsExample;
