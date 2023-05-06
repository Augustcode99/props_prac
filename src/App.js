import Person from "./components/Person";

function App() {
  return (
    <>
      <h1>React</h1>
      <Person
        name="august"
        image="https://cdn.pixabay.com/photo/2023/04/23/18/44/ai-generated-7946503_960_720.jpg"
        phoneNo="000555000"
      />
      <Person
        name="alexa"
        image="https://cdn.pixabay.com/photo/2023/02/26/22/33/girl-7817118_960_720.jpg"
        phoneNo="000111000"
      />
      <Person
        name="dave"
        image="https://cdn.pixabay.com/photo/2023/04/21/06/28/ai-generated-7941217_960_720.jpg"
        phoneNo="000333000"
      />
    </>
  );
}

export default App;
