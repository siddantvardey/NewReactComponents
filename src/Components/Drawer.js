import React, {useState} from 'react';
import './Drawer.css';
import * as FaIcons from 'react-icons/fa'


function Drawer(props) {
    
    const header = React.Children.map(props.children, child => child.type.displayName === 'Header'? child : null);
    const body = React.Children.map(props.children, child => child.type.displayName === 'Body'? child : null);
    const footer = React.Children.map(props.children, child => child.type.displayName === 'Footer'? child : null);

    const [showDrawer, setShowDrawer] = useState(false);
    const [btnImage, setBtnImage] = useState(FaIcons.FaBars);

    const HandleDrawer = ()=> {
        setShowDrawer(!showDrawer);
        setBtnImage(showDrawer?FaIcons.FaBars : FaIcons.FaRegWindowClose);

    }


    return (
        <div className = "drawer">
            <a style={{position:"absolute", left:"20px", top:"20px", zIndex: "10"}} href='#' className="icon" onClick= {HandleDrawer}>
            {btnImage}
            </a>
            {showDrawer?<div className ={`drawer ${props.position} opened`} >
                <div className="drawer-header" style = {props.headerStyle}>{header}</div>
                <div className="drawer-body">{body}</div>
                <div className="drawer-footer">{footer}</div>
            </div> : <div className={`drawer closed-${props.position}`} ></div>}
        </div>
        
    )
}

const Header = (props) =>{
    console.log(props.mockProperty);
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

export default Drawer
