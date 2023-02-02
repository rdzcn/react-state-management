import ChangeLog from "./ChangeLog";
import MyComponent from "./MyComponent";
import MyAsyncComponent from "./MyAsyncComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "48px" }}>Hello State Management</h1>
      <div className="components-container">
        <ChangeLog />
        <MyComponent />
        <MyAsyncComponent />
      </div>
    </div>
  );
}
