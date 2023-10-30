import Footer from "./components/Footer";
import NavBar from "./components/Nav";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100 justify-content-between">
        <NavBar />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
