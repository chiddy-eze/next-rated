import React from 'react';
import './App.css';
import './index.css'
import ProfileDetails from './Components/ProfileDetails';
import ProfileImage from './Components/ProfileImage';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
 
  return (
    <div className = "App">
      <Header /> 
      <div className = 'center'>
        <ProfileImage />
        <ProfileDetails />
      </div>
      <Footer/>

    </div>
    
      
  );
}

export default App;
 // const date = new Date();
 // const hours = date.getHours();
 // let timeOfDay;
 // const styles = {

 // }
 // if (hours < 12) {
 //   timeOfDay = "Good morning!";
 //   styles.color = "#04756F";
 //   styles.fontSize = 50;
 //   styles.backgroundColor = "#ab4"
 // }
 // else if (hours >= 12 && hours < 17) {
 //   timeOfDay = "Good afternoon!";
 // }
 // else {
 //   timeOfDay = "Good night!";
 // }