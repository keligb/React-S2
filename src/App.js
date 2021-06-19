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
import FilmsNote from './pages/Films_note';


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

      <Route path="/popular">
        <Navigation />
        <Films />
      </Route>

      <Route path="/all">
        <Navigation />
        <All />
      </Route>

      <Route path="/movie-top-rated">
        <Navigation />
        <FilmsNote />
      </Route>
    </div>
  )
}
