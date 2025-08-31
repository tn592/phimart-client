// import "./App.css";
import Button from "./components/Button";
function App() {
  const handleClick = () => console.log("Button Clicked");
  return (
    <>
      {/*//      <FirstComponent />
//      <List items={fruits} heading="Fruits"/>
//      <List items={cities} heading="Cities"/>*/}
      {/*<Button handleClick={handleClick}><span className="font-bold text-pink-700">My Button</span></Button>*/}
      <Button handleClick={handleClick} color="danger">My Button</Button>
      {/*<Button handleClick={handleClick}>My Button</Button>*/}
    </>
  );
}

export default App;
