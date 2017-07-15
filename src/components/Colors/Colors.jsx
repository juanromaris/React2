import  React from 'react'

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color:'blue'
        };
    }

    _handleChange = (event) =>{
        this.setState({
            color:event.target.value
        })
    }

    render (){
        return(
            <div>
                <select onChange={this._handleChange}>
                    {this.props.colorList.map((color)=>{
                        return <option value={color}>{color}</option>;
                    })}
                </select>
                <div style={{backgroundColor:this.state.color}}>{this.state.color}</div>
            </div>
        );
    }
}
