import React from 'react'
export default class HelloWorld extends React.Component {
    
     constructor (props){
        //super es la forma del hijo de comunicar al padre que existe
        super(props);

        this.state = {
            message:'hola mundo'
           
        }
    }


    render(){
        return (
            
                <div>{this.state.message}</div>
               
            
        );
    }
}