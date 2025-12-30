import Header from "./component/Header";
import Main from "./component/Main";
import SideBar from "./component/SideBar";
import { Toaster } from "sonner";

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
      {/* Toaster */}
      <Toaster position="top-center" />
    </>
  );
}

export default App;
