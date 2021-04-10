import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import friend from '../../icons/friend.png';

import './About.css';

class About extends React.Component{
    render(){
        return (
            <div className="outer">
            <div className="infoBar1">
            <div className="leftInnerContainer1">
              <h1>Realtime Chat Application </h1>
              </div>
              <div className="middle">
              
              <p> This is a Realtime Chat Application. We've used React on the front end, with NodeJS + Socket.io web socket library on the back end.</p>
              <p> You can make your own rooms and chat with your friends and family in that room  </p>
              <p>Created By: Rahul and Sudiksha <img width="30" height="25" src={friend} alt="close icon" /></p>

              </div>
             
            
            <div className="rightInnerContainer1">
              <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
          </div>
          </div>
        )
    }
}
export default About;
