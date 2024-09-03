import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  // const Keyword = "Ryeo-A";
  // const name = "Ryeo-A";
  const BodyProps = {
    name: "령희",
    location: "서울시",
    // favorList: ["파스타", "떡볶이"],
  };
  return (
    <div className="App">
      <Header />
      {/* <Body name={Keyword} /> */}
      {/* <Body name={name} location={"서울시"} /> */}
      <Body {...BodyProps} />
      <Footer />
    </div>
  );
}

export default App;
