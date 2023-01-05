import React from "react";

class FormPart extends React.Component {
    // console.log(this.setState())
    //  userInput = React.createRef();
    state = {
        userName: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const rawRes = await fetch(`https://api.github.com/users/${this.state.userName}`);
        var info = await rawRes.json();
            
        console.log(info);
        this.props.presSubmit(info)
        this.setState({userName :''});
    }

    render() {
        return (
        <div id="formpart">
            <h2>Github Card App</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} 
                onChange={event=>this.setState({userName:event.target.value})}
                 placeholder="Github Username" required />
                <button>Add Card</button>
            </form>
        </div>
        );
    }
}

export default FormPart;