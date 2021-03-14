import "./App.css";
import CV from "./photo.png"
import ProfileComponent from "./Profile/Profilecomponent.js";

function App() {
  const handleAlert = (Fullname) => alert (`${Fullname}`)
    return (
    <div className="App">
        <ProfileComponent Fullname= "Karray Abdeljalil" Bio="Civil Engineer, Math Teacher" Profession = "Developer fullstack JS" handleAlert= {handleAlert}>
        {CV}</ProfileComponent> 
    </div>
  );
}

export default App;
