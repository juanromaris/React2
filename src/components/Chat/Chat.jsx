import React from 'react'
export default class Chat extends React.Component {
    constructor (props){
        //super es la forma del hijo de comunicar al padre que existe
        super(props);

        this.state = {
            message:'',
            bg:'transparent'
        }
    }
    _handleKeyUp = (e) => {
        this.setState({
            message:e.target.value
        })
    };
    _handleFocus = () => {
        this.setState({
            bg:'green'
        })
    }
    _handleBlur = () => {
        this.setState({
            bg:'transparent'
        })
    }
    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                <textarea onFocus={this._handleFocus} onBlur={this._handleBlur} onKeyUp={this._handleKeyUp} style={{backgroundColor:this.state.bg}}/>
            </div>
        );
    }
}