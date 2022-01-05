import React,{useState} from 'react';
import './Left_navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Left_sidebar_Data} from './../Left_sidebar_Data';



export default function Left_navbar() {
  const [sidebar,setSidebar] = useState(false)
  const showsidebar=()=>setSidebar(!sidebar)

  return (
      <>
       
    <div className='navbar'>
        <Link to='#' className="menu-bars">
            <FaIcons.FaBars />
        </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineArrowLeft onClick={showsidebar} />
              </Link>

            </li>
            {Left_sidebar_Data.map((item,index)=>{
              return(
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}

          </ul>


        </nav>

      </>
  )}