import React, {useState, useEffect, useRef} from 'react';
import './Drawer.css';
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


function Drawer(props) {
    
    const header = React.Children.map(props.children, child => child.type.displayName === 'Header'? child : null);
    const body = React.Children.map(props.children, child => child.type.displayName === 'Body'? child : null);
    const footer = React.Children.map(props.children, child => child.type.displayName === 'Footer'? child : null);

    const [state, setState] = useState(false);

    const handleDrawer = ()=> {
        state === false ? setState(true) : setState(false);
    }
    
    let DOMNode = useClickOutside(()=>{setState(false)});

    return (
        <>
            <i className = {`icon ${props.anchor}`} onClick= {handleDrawer} >
                {state? <GrClose/> : <FaBars/>}
            </i>
            <div className ={`drawer ${props.anchor}-${state?'open':'close'}`} ref = {DOMNode}>
                {header}
                {body}
                {footer}
            </div>
        </>
    )
}

const Header = (props) =>{
    return props.children;
}
Header.displayName = "Header";
Drawer.Header = Header;

const Body = (props) =>{
    return props.children;
}
Body.displayName = "Body";
Drawer.Body = Body;

const Footer = (props) =>{
    return props.children;
}
Footer.displayName = "Footer";
Drawer.Footer = Footer;


Drawer.defaultProps = {
    anchor: "left"
  }
    

//Click Outside for closing component Utility
const useClickOutside = (handler) => {
    let DOMNode = useRef();
    useEffect(() => {
        let mayBeHandler = (event) => {
            if(!DOMNode.current.contains(event.target)){
                handler();
            }
        };
        document.addEventListener('mousedown', mayBeHandler);
        return () => {
            document.removeEventListener('mousedown', mayBeHandler);
        };
    });
    return DOMNode;
}

export default Drawer