import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // default props ,props, prototypes are some used to parse some value from child component(header) to main app (app.js)
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* //`` backticks are here so that we can use template literals */}
      <div className="container-fluid">


        {/* reference of {} is if we have to pass props we have to change the title as  title='' and then we will give props in header's (props) and then we will write {props.title} in the place where title is written */}


        <Link className={`navbar-brand text-${props.mode === `light` ? 'dark' : 'light'}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === `light` ? 'dark' : 'light'} `} aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === `light` ? 'dark' : 'light'} `} to="/About"> About </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary  sd" type="submit">Search</button>
          </form>

          {/* devide and conquor -- (turnary opperator was used) {} used so that we canm use javascript `` was used and content inside it was made tmeplate lateral bwcause of this and then $ or {} used so that we can make any variable ${props.mode===`light`?'dark':'light'} like this and then this variable is having a turnary operator which is specifiying that if props ka mode light h to dark ho jaye or dark h to light ho jaye  */}




          <div className={`form-check form-switch mx-2 text-${props.mode === `light` ? 'dark' : 'light'}`}>
            {/* text-light is the property of botstrap to change color to white */}
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // is required is used to markout the essentials for code 
  aboutText: PropTypes.string
}

// Navbar.defaultProps ={
//   title:'set title here',
//   aboutText:'About text here'
// }