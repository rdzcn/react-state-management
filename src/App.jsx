// import MyComponent from "./boxes/MyComponent";
// import MyAsyncComponent from "./boxes/MyAsyncComponent";
// import MyTwoAsyncComponent from "./boxes/MyTwoAsyncComponent";
import "./App.css";
import MyAsyncWithContextComponent from "./boxes/MyAsyncWithContextComponent";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "48px" }}>Hello State Management</h1>
      <div className="components-container">
        <MyAsyncWithContextComponent />
      </div>
    </div>
  );
}
