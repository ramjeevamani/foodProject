import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (count) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand"> Restaurant</a>
        <Link to='/orders' >
        <button className="btn btn-primary">
          Orders <span className="badge bg-secondary">0</span>
        </button>
        </Link>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  count : state.orderreducer.length
})
export default connect(mapStateToProps)(Header);
