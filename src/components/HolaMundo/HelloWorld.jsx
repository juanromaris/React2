import React from 'react'
export default class Chat extends React.Component {
    constructor (props){
        //super es la forma del hijo de comunicar al padre que existe
        super(props);

        this.state = {
            message:'Hola Mundo',
            
        }
    }
    
    render(){
        return (
            <div>
                <div>{this.state.message}</div>
               
            </div>
        );
    }
}