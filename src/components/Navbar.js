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
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <button className="button mx-2" style={{"borderRadius": "70%",backgroundColor:"red",color:"red"}}>50</button> */}
      
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
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