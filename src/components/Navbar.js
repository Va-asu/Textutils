//in component file there should be name of file with first letter in capital letter
//write rfc to get react function based component
import React from 'react';
import PropTypes from 'prop-types';//impt for importing proptypes.
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* here i used ` not ' */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className="class d-flex">
        <div className="class bg-danger rounded mx-2" onClick={()=>props.toggleMode("danger")} style={{height:"30px",width:"30px"}}></div>
        <div className="class bg-primary rounded mx-2" onClick={()=>props.toggleMode("primary")} style={{height:"30px",width:"30px"}}></div>
        <div className="class bg-success rounded mx-2" onClick={()=>props.toggleMode("success")} style={{height:"30px",width:"30px"}}></div>
        <div className="class bg-warning rounded mx-2" onClick={()=>props.toggleMode("warning")} style={{height:"30px",width:"30px"}}></div>
        <div className={`class bg-${props.mode==='light'?"dark":"light"} rounded mx-2`} onClick={()=>props.toggleMode("dark")} style={{height:"30px",width:"30px"}}></div>
     </div>
    </div>
  </div>
</nav>

    </>
  )
}


Navbar.propTypes={title:PropTypes.string.isRequired,
                  about:PropTypes.string}//pts for proptype string
//this is to set types of props.....

//set default proptypes
Navbar.defaultProps={
    title:"set title here",
    about:"set about here"
}