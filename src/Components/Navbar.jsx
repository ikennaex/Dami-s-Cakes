import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo } from "../imports";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleDropdown() {
    setDropdown(true);

    if (dropdown) {
      setDropdown(false);
    }
  }

  return (
    <div className="navbar">
      <nav className="navbar-items ">
        
        <Link to = "/" >
        <img className="logo-dami" src= {logo} alt="" />
        </Link>

        <ul className="nav1st-half">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li className="celebration-cakes" onClick={handleDropdown}>
            Celebration Cakes
          </li>

          {dropdown && (
            <div className="dropdown-nav">
              <ul className="dropdown-ul">
                <li>
                
                  <Link to="/placeorder"> Place an Order </Link>
                </li>
                <li>
                  
                  <Link to="/flavour-menu"> Flavour Menu</Link>
                </li>
                <li>
                  
                  <Link to="/serving-guide"> Serving Guide </Link>
                </li>
                <li>
                
                  <Link to="/availability"> Availability Calender</Link>
                </li>
                <li>
                  
                  <Link to="/gallery">Gallery</Link>
                </li>
                {/* <li> <Link to ="/price-guide" >Price Guide</Link></li> */}
              </ul>
            </div>
          )}

          <li>
            
            <Link to="/cupcakes"> Cupcakes </Link>{" "}
          </li>
        </ul>

        <ul className="nav2nd-half">
          <li>
            
            <Link to="/corperate-orders">Corperate Orders</Link>
          </li>
          <li>More</li>
        </ul>
      </nav>

      {/* NAVBAR MENU  */}
      <div className="gpt3-navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
             color="#000"
             size={27}
             onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }

        {toggleMenu && (
          <div className="gpt3-navbar-menu-container scale-up-center">
            <div className="gpt3-navbar-menu-container-links">
              {/* NAVBAR STUFF  */}

              <nav className="menu-items">
                <ul className="menu-ul">
                  <li>
                    <Link to="/"> Home</Link>
                  </li>
                  <li className="celebration-cakes" onClick={handleDropdown}>
                    Celebration Cakes
                  </li>

                  {dropdown && (
                    <div className="dropdown-nav">
                      <ul className="dropdown-ul">
                        <li>
                          
                          <Link to="/placeorder"> Place an Order </Link>
                        </li>
                        <li>
                        
                          <Link to="/flavour-menu"> Flavour Menu</Link>
                        </li>
                        <li>
                          
                          <Link to="/serving-guide"> Serving Guide </Link>
                        </li>
                        <li>
                          
                          <Link to="/availability"> Availability Calender</Link>
                        </li>
                        <li>
                          
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        {/* <li> <Link to ="/price-guide" >Price Guide</Link></li> */}
                      </ul>
                    </div>
                  )}

                  <li>
                    
                    <Link to="/cupcakes"> Cupcakes </Link>
                  </li>

                  <li>
                    
                    <Link to="/corperate-orders">Corperate Orders</Link>
                  </li>
                  <li>More</li>

                </ul>

                <ul className="">

                </ul>

              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
