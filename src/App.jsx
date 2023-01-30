// import MyComponent from "./MyComponent";
// import MyAsyncComponent from "./MyAsyncComponent";
// import MyTwoAsyncComponent from "./MyTwoAsyncComponent";
import "./App.css";
import MyAsyncWithContextComponent from "./MyAsyncWithContextComponent";

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
