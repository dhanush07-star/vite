import React, { useState } from "react";
import { MouseEvent } from "react";

// export default function ListGroup() {
//   return (
//     <ul className="list-group">
//       <li className="list-group-item">An item</li>
//       <li className="list-group-item">A second item</li>
//       <li className="list-group-item">A third item</li>
//       <li className="list-group-item">A fourth item</li>
//       <li className="list-group-item">And a fifth one</li>
//     </ul>
//   );
// }

// Fragmentaion on returning more than one element !
//react only accepts one html element ! React.createElement()
// export default function ListGroup() {

//   let cities = ['New York','London','Delhi','Paris','Tokyo'];
//   cities=[]

//   return (
//     <>
//       <h1>This the list of the cities</h1>
//       {cities.length === 0 ? <p>No cities were found!</p> : null}
//       <ul className="list-group">
//         {
//          cities.map(city => ( <li key={city} className="list-group-item" >{city}</li> ))
//         }
//       </ul>
//     </>
//   );
// }

// export default function ListGroup() {

//   let cities = ['New York','London','Delhi','Paris','Tokyo'];

//   return (
//     <>
//       <h1>This the list of the cities</h1>
//       {
//         cities.length === 0 && <p>No cities were found!</p>
//       }
//       <ul className="list-group">
//         {
//          cities.map(city => ( <li key={city} className="list-group-item" onClick={(event)=>console.log(event.target.outerText)} >{city}</li> ))
//         }
//       </ul>
//     </>
//   );
// }

// export default function ListGroup() {

//   let cities = ['New York','London','Delhi','Paris','Tokyo'];
//   let selectedItem = 0;

//   //eventHandler
//   const handleClick = (event:MouseEvent )=>console.log((event.target as HTMLInputElement).outerText)

//   return (
//     <>
//       <h1>This the list of the cities</h1>
//       {
//         cities.length === 0 && <p>No cities were found!</p>
//       }
//       <ul className="list-group">
//         {
//          cities.map((city,index) => ( <li key={city} className={selectedItem === index ? "list-group-item active" : "list-group-item" }  onClick={handleClick} >{city}</li> ))
//         }
//       </ul>
//     </>
//   );
// }

// export default function ListGroup() {
//   let cities = ["New York", "London", "Delhi", "Paris", "Tokyo"];

//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   return (
//     <>
//       <h1>This the list of the cities</h1>
//       {cities.length === 0 && <p>No cities were found!</p>}
//       <ul className="list-group">
//         {cities.map((city, index) => (
//           <li
//             key={city}
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             onClick={() => {
//               setSelectedIndex(index);
//             }}
//           >
//             {city}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }




//expected data
//{items:[],heading: string}

interface Props{
  cities: string[];
  heading: string;
}



export default function ListGroup({cities,heading}:Props) {


  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No cities were found!</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
