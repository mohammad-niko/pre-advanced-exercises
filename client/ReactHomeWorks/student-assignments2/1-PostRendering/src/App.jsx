import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Card, fetchData } from "./Components";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIslsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIslsLoading(true);
        const getData = await fetchData();

        setData(getData);
      } catch (error) {
        console.log(error);
      } finally {
        setIslsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="preant">
        {isLoading ? (
          <div className="loding">Loading...</div>
        ) : data ? (
          data.map((item) => {
            return <Card key={item.id} data={item} />;
          })
        ) : (
          <div className="error">No data found</div>
        )}
      </div>
    </>
  );
}

export default App;

