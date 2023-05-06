import Person from "./components/Person";
import data from "./data.js";

function App() {
  return (
    <>
      <h1>People</h1>
      {data.map((person) => {
        return (
          <Person
            name={person.name}
            image={person.image}
            phoneNo={person.phoneNo}
          />
        );
      })}
    </>
  );
}

export default App;
