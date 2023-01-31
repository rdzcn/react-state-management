import MyComponent from "./MyComponent";
import MyAsyncComponent from "./MyAsyncComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "48px" }}>Hello State Management</h1>
      <div className="components-container">
        <MyComponent />
        <MyAsyncComponent />
      </div>
    </div>
  );
}
