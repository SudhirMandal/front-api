import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          ID: "1",
        });

        const response = await fetch(
          `http://localhost:8080/api/point-service/rewards?\${params}`
        );
        if (!response.ok) {
          setData(0);
          console.error("Error:", response.status, response.statusText);
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setData(0);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="heading">My Rewards Points</h1>
      <h4>{data}</h4>
    </div>
  );
}

export default App;
