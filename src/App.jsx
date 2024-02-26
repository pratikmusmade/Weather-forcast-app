import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage";
function App() {
  const [location, setLocation] = useState({ lat: 0, log: 0 });
  function getCordinate() {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        setLocation({
          lat: position.coords.latitude,
          log: position.coords.latitude,
        });
      },
      async function (error) {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getCordinate();
  }, []);

  return <HomePage />;
}

export default App;
