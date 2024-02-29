import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Header.js"
import HeaderSection from "./HeaderSection.js"
import Body from "./Body.js"
import Main from "./Main.js"
import Assembly from "./Assembly.js"
function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSection />
      <Body />
      <Main />
      <Assembly />
    </div>
  );
}

export default App;
