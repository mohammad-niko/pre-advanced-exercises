import { useEffect, useState } from "react";

// function MyButton({ onClick, count }) {
//   return <button onClick={onClick}>Clicked {count} times</button>;
// }
// export function Card() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>

//       <MyButton onClick={()=>{setCount(count + 1)}} count={count} />
//       <MyButton onClick={()=>{setCount(count + 1)}} count={count} />

//     </div>
//   );
// }

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//  const render = products.map(item=>{
//   return  <li key={item.id} style={{color:item.isFruit?"red":"darkgreen"}}>{item.title}</li>
//  });

//  return (
//     <ul>{render}</ul>
//  )
// }

// export  function ShoppingList() {
//   return (
// <ul>
//     {products.map(item=>(
//         <li key={item.id} style={{color:item.isFruit?"green":"red"}}>{item.title}</li>
//     ))}
// </ul>
//   );
// }

// export function IsLogin({ login, userName }) {
//   const [name, setName] = useState(null);
//   useEffect(() => {
//     if (userName) setName(userName);
//   }, [userName]);

//   return <h2>{login ? `Hello ${name}` : "login"}</h2>;
// }

// export function ToggleButton() {
//   const [isOn,setIsOn] = useState(false);
//   const [count,setCount] = useState(0);
//   function handelOnOff() {
//     setIsOn(!isOn)
//      setCount(mmad=>mmad+2)
//   }

//   return(
//     <>
//     <div>you click {count} time</div>
//     <button onClick={handelOnOff}  style={{backgroundColor: isOn ? "green" : "red"   }}>{isOn ? "ON" : "OFF"}</button>
//     </>
//   )
// }

// export function Card() {
//   return (
//     <>
//       <div className="card m-5">
//         <img
//           className="card-img-body"
//           src="[simple-image like apsignals.png]"
//           alt="Card image cap"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Bob Dylan</h5>
//           <p className="card-text">
//             Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
//             singer/songwriter, author, and artist who has been an influential
//             figure in popular music and culture for more than five decades.
//           </p>
//           <a
//             href="https://en.wikipedia.org/wiki/Bob_Dylan"
//             className="btn btn-primary"
//           >
//             go to widipedia
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// function Alert({ text }) {
//   return (
//     <div className="alert alert-danger" role="alert">
//       {text}
//     </div>

//   );
// }

// export default Alert;

// function Card({ info }) {
//   const { image, cardTitle, cardDescription, button } = info;
//   return (
//     <>
//       <div className="card m-5">
//         <img className="card-img-top" src={image} alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">{cardTitle}</h5>
//           <p className="card-text">
//             {cardDescription}
//           </p>
//           <a href={button.url} className="btn btn-primary">
//             {button.label}
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;

// function RenderList({arrayOfList}) {

// function randomKey() {
//     return Math.floor(Math.random() * 1000)
// }

//   return (
//    <ul>
//     {arrayOfList.map(item=><li key={randomKey()}>{item.label}</li>)}
//    </ul>
//   )
// }

// export default RenderList

// function ShowPlanets({arrayOfPlanets}) {
//    function randomKey() {
//     return Math.floor(Math.random() * 1000)
// }
//   return (
//     <ul>
//       {arrayOfPlanets.map(item=><li key={randomKey()}>{item}</li>)}
//     </ul>
//   )
// }

// export default ShowPlanets

// function PokeCard({ data }) {
//   const { id, name, type, image } = data;
//   return (
//     <div key={id} className="my-card">
//       <h2 className="my-card-title">{name}</h2>
//       <img src={image} alt="pokemen image" />
//       <h4>type:{type}</h4>
//     </div>
//   );
// }

// function Pokedex({ data }) {
//   return (
//   <div className="container">
//       {data.map((item) => (
//         <PokeCard data={item} />
//       ))}
//     </div>
//   );
// }

// export default Pokedex;

export function CustomerInformation({data}) {
  const {first_name:fname,last_name:lname} = data
  return (
    <div>
      <h1>My name is {fname}</h1>
      <h2>My last name is {lname}</h2>
    </div>
  );
}
