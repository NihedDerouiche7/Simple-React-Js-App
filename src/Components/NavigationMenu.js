import React from "react";
import{Link}from "react-router-dom";

function NavigationMenu(props){

    return(
        <div>
                <div className="font-bold py-3 ">
                    Menu
                </div>
                    <ul>
                            <li>
                              <Link to="/" className='text-blue-500 py-3 border-t border-b block '
                              onClick={props.closeMenu}
                              >Home  </Link>
                            </li>


                            <li>
                              <Link to="/Products/2" className='text-blue-500 py-3 border-b block'
                               onClick={props.closeMenu}
                              >Product  </Link>
                            </li>

                            <li>
                              <Link to="/About" className='text-blue-500 py-3 border-b block'
                               onClick={props.closeMenu}
                              >About  </Link>
                            </li>
                  </ul>
        </div>
    )

}

export default NavigationMenu