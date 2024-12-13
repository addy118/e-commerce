import "./App.css";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-10 my-8">
        <h1 className="text-8xl">Welcome to our shop</h1>
        <h2 className="my-8 text-4xl">
          Shop from our varied range of products!
        </h2>
        <Categories />
        <div className="my-8 flex items-center justify-center gap-3">
          <h3>Don't know where to start?</h3>
          <button className="cursor-pointer rounded-md border border-black bg-black p-2 text-white">
            Browse all our products
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
