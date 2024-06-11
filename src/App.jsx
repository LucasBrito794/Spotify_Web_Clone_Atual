// Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
