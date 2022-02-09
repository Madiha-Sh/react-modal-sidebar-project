import React, { useContext } from 'react';
import { AppContext, useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg'

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src='https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg' className='logo' alt='coding addict' />
        <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
      </div>        
      <ul className='links'>
        {links.map(link => {
          const {id, url, text, icon} = link;
          return (
            <li key={id}>
              <a href={url}>{icon} {text}</a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map(link => {
          const {id, url, icon} = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default SideBar;