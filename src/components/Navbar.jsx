import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar, Container, Nav } from 'react-bootstrap';
//import InstantLink from './InstantLink';


const NB = () => {
 
  return (
    <header>
      <nav>
        {/*<h1 className = "h1 display-1">ORHSKeyClub</h1>*/}
        <h1 className = "h1 display-1" style = {{display: "inline" }}>ORHSKeyClub</h1>
        
        <a href = "/" style = {{ marginLeft: 600}}>Home</a>
        <a href = "/leadership" style = {{ marginLeft: 200}}>Leadership</a>
      </nav>
    </header>
  );
}

export default NB;