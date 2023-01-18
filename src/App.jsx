import MyComponent from "./MyComponent";
import MyAsyncComponent from "./MyAsyncComponent";
import "./App.css";
import MyTwoAsyncComponent from "./MyTwoAsyncComponent";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "48px" }}>Hello State Management</h1>
      <div class="components-container">
        <MyComponent />
        <MyAsyncComponent />
        <MyTwoAsyncComponent />
      </div>
    </div>
  );
}
