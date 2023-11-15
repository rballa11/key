import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar, Container, Nav } from 'react-bootstrap';
//import InstantLink from './InstantLink';

import download from "../pics/download.png";

const NB = () => {
 
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{width: "100%"}}>
        {/*<h1 className = "h1 display-1">ORHSKeyClub</h1>*/}
         <a class="navbar-brand display-1" href="/" style = {{fontSize: 30, fontWeight: "bold", marginLeft: 20}}>
         <img src={download} width="35" height="35" class="d-inline-block align-top" alt="" />
          Oak Ridge High School Key Club
          </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        {/*<h1 className = "h1 display-1" style = {{display: "inline" }}>ORHSKeyClub</h1>
        <EmbeddedButton link = "/" text = "Home" style = {{ marginLeft: 200}}/>
        <EmbeddedButton link = "/leadership" text = "Leadership" style = {{ marginLeft: 200}}/>
  <EmbeddedButton link = "/events" text = "Events" style = {{ marginLeft: 200}}/>*/}
        <div class = "collapse navbar-collapse">
          <ul class = "navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/" style = {{ marginLeft: 650, fontWeight: "bold"}}>Home <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/leadership" style = {{ fontWeight: "bold"}}>Leadership</a>
          </li>
          <li class = "nav-item">
            <a class = "nav-link text-white" href = "/events" style = {{fontWeight: "bold"}}>Events</a>
          </li>
          </ul>
        </div>
        {/*<a href = "/leadership" style = {{ marginLeft: 200}}>Leadership</a>
        <a href = "/events" style = {{ marginLeft: 200}}>Events</a>*/}
      </nav>
    </header>
  );
}

export default NB;