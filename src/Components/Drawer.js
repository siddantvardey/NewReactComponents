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
            {props.position === "left" ? <a style={{position:"fixed", left :"10px", top:"20px", zIndex: "10"}} className="icon" onClick= {HandleDrawer} href = "#">
            {btnImage}
            </a> : <a style={{position:"fixed", right :"10px", top:"20px", zIndex: "10"}} className="icon" onClick= {HandleDrawer} href = "#">
            {btnImage}
            </a>}
            
            {showDrawer === true ?
            <div className ={`drawer ${props.position} opened`} >
                <div className="drawer-header" style = {props.headerStyle}>{header}</div>
                <div className="drawer-body">{body}</div>
                <div className="drawer-footer">{footer}</div>
            </div> 
            : 
            <div className={`drawer closed-${props.position}`} ></div>}
        </div>
        
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
    position: "left"
  }
    

export default Drawer
