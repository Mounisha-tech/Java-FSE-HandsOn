import CalculateScore from "./Components/CalculateScore";

function App() {

  return (
    <div>
      <CalculateScore
        name="Mounisha"
        school="VIT-AP"
        total={480}
        goal={6}
      />
    </div>
  );
}

export default App;