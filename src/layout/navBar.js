import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedInLink'
import SignedOutLinks from './signedOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth} = props;
  const links = auth.uid ? <SignedInLinks profile={auth} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="brand-logo">BisNic</div>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Navbar)