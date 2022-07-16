import logo from './logo.svg';
import './App.css';
import request from './request';
import Row from './Row';
import requests from './request';
import Bannner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className='Container'>
      <Navbar />
      <Bannner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

      <Row title="Trending " fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocuementaries} />







    </div>

  );
}

export default App;
