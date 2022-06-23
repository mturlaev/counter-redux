import css from "./App.module.css";
import Button from "./Components/Button";
import Number from "./Components/Number";

function App() {
  return (
    <div className={css.container}>
      <Number />
      <Button />
    </div>
  );
}

export default App;
