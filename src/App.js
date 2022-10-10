import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./component/Tours";
import Loading from "./component/Loading";
const url = "https://course-api.com/react-tours-project";
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
