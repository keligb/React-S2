import './App.css';
// import './fleche.jpeg';
import Navigation from "./components/Navigation"
import Route from "./components/Route.js"
import "./styles/Navigation.css"
import "./styles/Pays.css"
import "./styles/Accueil.css";
import "./styles/Country-Card.css";
import "./styles/MovieCard.css";
import "./styles/All.css";
import Accueil from "./pages/Accueil"
import Films from "./pages/Films"
import Pays from './pages/Pays';
import All from './pages/All';


export default () => {
  return (
    <div className = "">
      <Route path="/">
        <Navigation />
        <Accueil />
      </Route>

      <Route path="/pays">
        <Navigation />
        <Pays />
      </Route>

      <Route path="/films">
        <Navigation />
        <Films />
      </Route>

      <Route path="/all">
        <Navigation />
        <All />
      </Route>
    </div>
  )
}
