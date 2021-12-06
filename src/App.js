import Drawer from "./Components/Drawer";
import * as FaIcons from 'react-icons/fa'

function App() {
  return (
    <div>
      <Drawer position = "right">
          <Drawer.Header>
            <div className = "sampleHeader" style = {{height: "20vh", display: "flex",  justifyContent: "center",  margin: "2px",  border: "1px solid red"}}>
              <h1 style = {{padding: "0px 5px"}}>I'm Header</h1>
            </div>
          </Drawer.Header>
          <Drawer.Body>
            <div className = "sampleBody" style = {{height:"70vh", width:"100%", display:"grid", overflow:"scroll", alignItems: "center",gridAutoFlow: "row", gridAutoRows: "25%", gridTemplateColumns: "auto auto", gridTemplateRows: "unset",}}>
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
              <FaIcons.FaHive className="body-item" />
            </div>
          </Drawer.Body>
          <Drawer.Footer>
            <div className="sampleFooter" style={{display: "flex", margin: "2px", border: "1px solid green", justifyContent: "center", alignItems:"center",  height: "10vh", width: "100%", background:"black", color: "white", padding: "2% 0"}} >
              I'm Footer
            </div>
          </Drawer.Footer>
      </Drawer>
    </div>
  );
}

export default App;
