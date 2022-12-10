import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/DrumCard.css"
import Button from 'react-bootstrap/Button';

class DrumMachine extends React.Component {
constructor(props){
super(props)
this.state = {
    display: '', 
   
}
this.toggleMusic = this.toggleMusic.bind(this)
this.logVolume = this.logVolume.bind(this)
this.handleKey = this.handleKey.bind(this)
}
componentDidMount(){
    document.addEventListener('keydown', this.handleKey)
}

toggleMusic = (event) => {
    const musicArray = [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        ]
console.log(event.target)
let song0 = new Audio(musicArray[0])
let song1 = new Audio(musicArray[1])
let song2 = new Audio(musicArray[2])
let song3 = new Audio(musicArray[3])
let song4 = new Audio(musicArray[4])
let song5 = new Audio(musicArray[5])
let song6 = new Audio(musicArray[6])
let song7 = new Audio(musicArray[7])
let song8 = new Audio(musicArray[8])
for(let i = 0; i < musicArray.length; i++){
    if (event.target.id == 1) {
        song0.play()
        this.setState(state =>{
         return {display: 'Heater 1'}
        })
           } else if (event.target.id == 2) {
            song1.play()
            this.setState(state =>{
                return {display: 'Heater 2'}
               })
               }  else if (event.target.id == 3) {
                song2.play()
                this.setState(state =>{
                    return {display: 'Heater 3'}
                   })
                   }  else if (event.target.id == 4) {
                    song3.play()
                    this.setState(state =>{
                        return {display: 'Heater 4'}
                       })
                       }  else if (event.target.id == 5) {
                        song4.play()
                        this.setState(state =>{
                            return {display: 'Clap'}
                           })
                           }  else if (event.target.id == 6) {
                            song5.play()
                            this.setState(state =>{
                                return {display: 'Open- HH'}
                               })
                               }  else if (event.target.id == 7) {
                                song6.play()
                                this.setState(state =>{
                                    return {display: 'Kick-n-Hat'}
                                   })
                                   }  else if (event.target.id == 8) {
                                    song7.play()
                                    this.setState(state =>{
                                        return {display: 'Kick'}
                                       })
                                       }  else if (event.target.id == 9) {
                                        song8.play()
                                        this.setState(state =>{
                                            return {display: 'Closed-HH'}
                                           })
                                           }

           
                       
}  



}
logVolume = (event) => {
    if(event){
        this.setState(state => {
         return {display: 'Volume:' + event.target.value}  
        })
    }

}
handleKey = (event) =>{
    const musicArray = [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        ]
let song0 = new Audio(musicArray[0])
let song1 = new Audio(musicArray[1])
let song2 = new Audio(musicArray[2])
let song3 = new Audio(musicArray[3])
let song4 = new Audio(musicArray[4])
let song5 = new Audio(musicArray[5])
let song6 = new Audio(musicArray[6])
let song7 = new Audio(musicArray[7])
let song8 = new Audio(musicArray[8])
    if(event.key == "q"){
        
        song0.play() 
        console.log(event.key)
        this.setState(state =>{
            return {display: 'Heater 1'}
           })
    }
    if(event.key == "w"){
        song1.play() 
        this.setState(state =>{
            return {display: 'Heater 2'}
           })
    }
    if(event.key == "e"){
        song2.play() 
        this.setState(state =>{
            return {display: 'Heater 3'}
           })
    }
    if(event.key == "a"){
        song3.play() 
        this.setState(state =>{
            return {display: 'Heater 4'}
           })
    }
    if(event.key == "s"){
        song4.play() 
        this.setState(state =>{
            return {display: 'Clap'}
           })
    }
    if(event.key == "d"){
        song5.play() 
        this.setState(state =>{
            return {display: 'Open-HH'}
           })
    }
    if(event.key == "z"){
        song6.play() 
        this.setState(state =>{
            return {display: 'Kick-n-Hat'}
           })
    }
    if(event.key == "x"){
        song7.play() 
        this.setState(state =>{
            return {display: 'Kick'}
           })
    }
    if(event.key == "c"){
        song8.play() 
        this.setState(state =>{
            return {display: 'Closed-HH'}
           })
    }
}
render(){



    return(
        
        <div className="container" id="drum-machine">
            <div className="display "id="display">
               
                <div className='pads'>



               <div className='drum-pads'> <Button id="1" onClick={this.toggleMusic} onKeyDown={(e) => this.handleKey(e)} className="Drum">Q</Button></div>
               <div className='drum-pads'> <Button id="2" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">W</Button></div>
               <div className='drum-pads'> <Button id="3" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">E</Button></div>
               <div className='drum-pads'> <Button id="4" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">A</Button></div>
               <div className='drum-pads'> <Button id="5" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">S</Button></div>
               <div className='drum-pads'> <Button id="6" onClick={this.toggleMusic} onKeyDown={this.handleKey}   className="Drum">D</Button></div>
               <div className='drum-pads'> <Button id="7" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">Z</Button></div>
               <div className='drum-pads'> <Button id="8" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">X</Button></div>
               <div className='drum-pads'> <Button id="9" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="Drum">C</Button></div>
               

                </div>
                <div className='control-panel'>
                    <div className='power'><p>Power</p>
                    <input type="checkbox"/></div>
                    <p id="display">{this.state.display}</p>
                    <div className='slider'>
                        <input onMouseUp={this.logVolume} id="volume" type="range" max="1" min="0" step="0.01" ></input>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

}

export default DrumMachine;