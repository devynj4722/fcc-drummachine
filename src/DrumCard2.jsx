import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/DrumCard2.css"
import Button from 'react-bootstrap/Button';

class DrumMachine2 extends React.Component {
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

toggleMusic(e) {
    const audio = e.target.children[0];
    audio.play();
    document.getElementById('display').innerHTML =  e.target.id
};
/*toggleMusic = (event) => {
    const musicArray = [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        ]
console.log(event.target)
let song0 = new Audio(document.querySelector('#Q'))
let song1 = new Audio(document.querySelector('#W'))
let song2 = new Audio(document.querySelector('#E'))
let song3 = new Audio(document.querySelector('#A'))
let song4 = new Audio(document.querySelector('#S'))
let song5 = new Audio(document.querySelector('#D'))
let song6 = new Audio(document.querySelector('#Z'))
let song7 = new Audio(document.querySelector('#X'))
let song8 = new Audio(document.querySelector('#C'))
for(let i = 0; i < musicArray.length; i++){
    if (event.target.id == 'Heater-1') {
        song0.play()
        this.setState(state =>{
         return {display: 'Heater 1'}
        })
           } else if (event.target.id == 'Heater-2') {
            song1.play()
            this.setState(state =>{
                return {display: 'Heater 2'}
               })
               }  else if (event.target.id == 'Heater-3') {
                song2.play()
                this.setState(state =>{
                    return {display: 'Heater-3'}
                   })
                   }  else if (event.target.id == 'Heater-4') {
                    song3.play()
                    this.setState(state =>{
                        return {display: 'Heater-4'}
                       })
                       }  else if (event.target.id == 'Clap') {
                        song4.play()
                        this.setState(state =>{
                            return {display: 'Clap'}
                           })
                           }  else if (event.target.id == 'Open-HH') {
                            song5.play()
                            this.setState(state =>{
                                return {display: 'Open-HH'}
                               })
                               }  else if (event.target.id == 'Kick-n-Hat') {
                                song6.play()
                                this.setState(state =>{
                                    return {display: 'Kick-n-Hat'}
                                   })
                                   }  else if (event.target.id == 'Kick') {
                                    song7.play()
                                    this.setState(state =>{
                                        return {display: 'Kick'}
                                       })
                                       }  else if (event.target.id == 'Closed-HH') {
                                        song8.play()
                                        this.setState(state =>{
                                            return {display: 'Closed-HH'}
                                           })
                                           }

           
                       
}  



}*/
logVolume = (event) => {
    if(event){
        this.setState(state => {
         return {display: 'Volume:' + event.target.value}  
        })
    }

}
/*handleKey = (event) =>{
    const musicArray = [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        ]
let song0 = new Audio(document.querySelector('#Q'))
let song1 = new Audio(document.querySelector('#W'))
let song2 = new Audio(document.querySelector('#E'))
let song3 = new Audio(document.querySelector('#A'))
let song4 = new Audio(document.querySelector('#S'))
let song5 = new Audio(document.querySelector('#D'))
let song6 = new Audio(document.querySelector('#Z'))
let song7 = new Audio(document.querySelector('#X'))
let song8 = new Audio(document.querySelector('#C'))
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
}*/

handleKey(e) {
    const audio = e.target.children[0];
    audio.play();
    document.getElementById('display').innerHTML =  e.target.id
};
render(){



    return(
        
        <div className="container" id="drum-machine">
            <div className="display">
               
                <div className='pads'>



               <div className='drum-pads'> <Button id="Heater-1" onClick={this.toggleMusic} onKeyDown={this.handleKey} className="drum-pad Drum">Q<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'>Q</audio></Button></div>
               <div className='drum-pads'> <Button id="Heater-2" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">W<audio className='clip' id="W" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'>W</audio></Button></div>
               <div className='drum-pads'> <Button id="Heater-3" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">E <audio className='clip' id="E" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'>E</audio></Button></div>
               <div className='drum-pads'> <Button id="Heater-4" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">A<audio className='clip' id="A" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'>A</audio></Button></div>
               <div className='drum-pads'> <Button id="Clap" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">S<audio className='clip' id="S" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'>S</audio></Button></div>
               <div className='drum-pads'> <Button id="Open-HH" onClick={this.toggleMusic} onKeyDown={this.handleKey}   className="drum-pad Drum">D<audio className='clip' id="D" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'>D</audio></Button></div>
               <div className='drum-pads'> <Button id="Kick-n-Hat" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">Z<audio className='clip' id="Z" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'>Z</audio></Button></div>
               <div className='drum-pads'> <Button id="Kick" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">X<audio className='clip' id="X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'>X</audio></Button></div>
               <div className='drum-pads'> <Button id="Closed-HH" onClick={this.toggleMusic} onKeyDown={this.handleKey}  className="drum-pad Drum">C<audio className='clip' id="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'>C</audio></Button></div>
               

                </div>
                <div className='control-panel'>
                    <div className='power'><p>Power</p>
                    <input type="checkbox"/></div>
                    <p id="display"></p>
                    <div className='slider'>
                        <input onMouseUp={this.logVolume} id="volume" type="range" max="1" min="0" step="0.01" ></input>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

}

export default DrumMachine2;