import Fun from "./Fun";

function App() {
  const data = [
    { name: "tami", id: 1, age: 23 },
    { name: "kassa", id: 2, age: 43 },
    { name: "abate", id: 3, age: 33 },
    { name: "meng", id: 4, age: 213 },
    { name: "tamikassa", id: 5, age: 231 },
    { name: "kassatami", id: 6, age: 23 },
    { name: "tami", id: 12, age: 23 },
  ];

  function change(e) {
    console.log(e.target.value);
  }

  function suma(e) {
    e.preventDefault;
    console.log("submitted");
  }
  return <div className="text-red-500">App</div>;
}
export default App;
