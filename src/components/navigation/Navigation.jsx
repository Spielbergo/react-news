import React, { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './navigation.css';

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="nav-logo" to='/'>
                <div>Logo</div>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/'>
                    Home
                </Link>
                <Link className="nav-link" to='/breaking'>
                    Breaking
                </Link>
                <Link className="nav-link" to='/trending'>
                    Trending
                </Link>
                <Link className="nav-link" to='/world'>
                    World
                </Link>
                <Link className="nav-link" to='/weird'>
                    Weird
                </Link>
            </div>
            <Link className="nav-search" to='/search'>
                <FontAwesomeIcon icon={faSearch} size="1x" /> Search
            </Link>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;