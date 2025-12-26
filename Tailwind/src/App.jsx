import Header from "./component/Header";
import Main from "./component/Main";
import SideBar from "./component/SideBar";

function App() {
  return (
    <>
      <header className="bg-[#fefefe]">
        <Header />
      </header>
    <aside>
      <SideBar />
    </aside>
    <main>
      <Main />
    </main>
    </>
  );
}

export default App;
