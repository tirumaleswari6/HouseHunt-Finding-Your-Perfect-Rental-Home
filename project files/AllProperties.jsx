import { useEffect, useState } from "react";
import axios from "axios";

const AllProperties = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/users/properties").then(res => setData(res.data));
  }, []);

  return (
    <div>
      {data.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.location} - ${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProperties;
