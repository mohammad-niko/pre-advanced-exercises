import { Routes, Route, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";


function App() {
const element = useRoutes(routes)
  return (
    <>
      {element}
    </>
  );
}

export default App;

// function App() {
//   console.log(routes);
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {routes.map(({ path, element }) => (
//           <Route path={path} element={element} />
//         ))}
//       </Routes>
//     </>
//   );
// }

// function App() {
//   const [page, setPage] = useState({
//     pages: {
//       Home: true,
//       About: false,
//       Content: false,
//     },
//   });
// console.log(page.pages);
//   function handleHomePage() {
//     setPage({
//       pages: {
//         Home: true,
//         About: false,
//         Content: false,
//       },
//     });
//   }

//   function handleAboutPage() {
//     setPage({
//       pages: {
//         Home: false,
//         About: true,
//         Content: false,
//       },
//     });
//   }

//   function handleContentPage() {
//     setPage({
//       pages: {
//         Home: false,
//         About: false,
//         Content: true,
//       },
//     });
//   }

//   return (
//     <>
//       <div>
//         <span onClick={handleHomePage}>Home</span>
//         <span onClick={handleAboutPage}>About</span>
//         <span onClick={handleContentPage}>Content</span>
//       </div>

//       {page.pages.Home && <Home />}
//       {page.pages.About && <About />}
//       {page.pages.Content && <Content />}
//     </>
//   );
// }

// export default App;
