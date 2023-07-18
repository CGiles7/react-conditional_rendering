import "./App.css";
//import Greeting from "./Greeting"

//function Notifications({ notifications }) {
  //if (notifications.length > 0) {
    //return <p>You have {notifications.length} notifications today!</p>;
  //}
  //return null;
//}

function Notifications({ notifications }) {
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notifications today!</p>
    )
  );
}

function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  return <Notifications notifications={notifications} />;
}

//function App() {
  //return (
    //<div>
      //<Greeting language="es" />
      //<Greeting />
    //</div>
  //);
//}

export default App;
