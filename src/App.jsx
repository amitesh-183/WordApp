import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
function App() {
  // react useState for re-rendering elements

  /* useState functionality integration  */

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // react useEffect it executes every time it is viewed or re-rendered

  // useEffect(() => {
  //   console.log("showing effect");
  // }, [count]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        <Footer />
      </Router>

      {/* useState functionality integration  */}

      {/* <button onClick={increment}>Add</button>
      <div>{count}</div>
      <button onClick={decrement}>minus</button> */}
    </div>
  );
}

export default App;
