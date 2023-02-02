import ChangeLog from "./ChangeLog";
import MyTwoAsyncComponent from "./MyTwoAsyncComponent";
import MyAsyncWithContextComponent from "./MyAsyncWithContextComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "48px" }}>Hello State Management</h1>
      <div className="components-container">
        <ChangeLog />
        <MyAsyncWithContextComponent />
      </div>
    </div>
  );
}
