import { useState } from "react";
import "./App.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhakka", "Chittagong"],
  },
];
console.log(countries[0].cities);

function App() {
  const [value, setValue] = useState("");
  const [second, setSecond] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      setSecond(true);
    } else {
      setSecond(false);
    }
  };

  return (
    <div>
      <label>Countries</label>
      <br />
      <select
        value={value}
        style={{ width: "100px" }}
        name="countries"
        id="select"
        onChange={handleChange}
      >
        {countries.map((country) => (
          <option>{country.name}</option>
        ))}
      </select>

      {second && <select style={{ width: "100px" }} id="second">
          {
            countries.find((country)=> country.name==value).cities.map((city)=>(
              <option key={city} >{city}</option>
            ))
          }

      </select>}
    </div>
  );
}

export default App;
