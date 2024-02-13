import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useCounter, useInput } from "@termterm/hooks";
import { add, minus } from "@termterm/libs";
import { Button } from "@termterm/ui";

function App() {
  const { count, increment } = useCounter();
  const { value, handleValue } = useInput();
  console.log(add(10, 11), minus(10, 11));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button title="유지민 멍청이" />
    </>
  );
}

export default App;
