import React from "react";

function NavbarContainer(props) {
  return (
    <header className="main-header">
            
            <div className="header-upper">
                <div className="container clearfix">
                  {props.children}
                </div>
            </div>
    </header>
    // <nav
    //   className={
    //     "navbar" +
    //     (props.color ? ` is-${props.color}` : "") +
    //     (props.spaced ? " is-spaced" : "")
    //   }
    // >
    //   {props.children}
    // </nav>
  );
}

export default NavbarContainer;
