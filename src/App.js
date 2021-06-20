import './App.css';
import Navigation from "./components/Navigation"
import Route from "./components/Route.js"
import "./styles/Navigation.css"
import "./styles/Pays.css"
import "./styles/Accueil.css";
import "./styles/Country-Card.css";
import "./styles/MovieCard.css";
import "./styles/All.css";
import "./styles/pres_API_drapeaux.css";
import "./styles/pres_API_films.css";
import Accueil from "./pages/Accueil"
import Films from "./pages/Films"
import Pays from './pages/Pays';
import All from './pages/All';
import FilmsNote from './pages/Films_note';
import FilmsPlaying from './pages/Films_cinema';
import PresAPIDrapeaux from './pages/pres_API_drapeaux';
import PresAPIFilms from './pages/pres_API_films';


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

      <Route path="/movie-now-playing">
        <Navigation />
        <FilmsPlaying />
      </Route>

      <Route path="/pres-drapeaux-API">
        <Navigation />
        <PresAPIDrapeaux />
      </Route>

      <Route path="/pres-films-API">
        <Navigation />
        <PresAPIFilms />
      </Route>

    </div>
  )
}
