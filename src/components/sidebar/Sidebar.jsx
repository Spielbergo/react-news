import React from 'react';

import Icons from '../icons/Icons';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <h2>Popular</h2>
      <div className="sidebar__popular">
          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>

          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>

          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>
      </div>

      <div className="sidebar__ads">
        <h5>Google Ad</h5>
        <img src="https://via.placeholder.com/250x300.png?text=Google Ad 1"/>
      </div>

      <h2>Weird News</h2>
      <div className="sidebar__popular">
          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>

          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>

          <div>
              <img src="https://via.placeholder.com/150x150.png?text=sidebar-1"/>
              <div className="sidebar__popular-item">
                  <h3>Heading</h3>
              </div>
          </div>
      </div>

      <div className="sidebar__ads">
        <h5>Google Ad</h5>
        <img src="https://via.placeholder.com/250x300.png?text=Google Ad 2"/>
      </div>

      <Icons />
    </div>

    
    
  );
};

export default Sidebar;