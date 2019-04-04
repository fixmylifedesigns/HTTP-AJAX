import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

changeHander = e => {
    e.persist();
    let value = e.target.value;

    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [e.target.name]: value
        }
    }));
};

    handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);

    this.setState({
        friends: {
            name: '',
            age: '',
            email: ''
        }
    });
};
    
 render() {
    return (
         <div>
            <h2>add new friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    onchange={this.changeHander}
                    placeholder="name"
                    value={this.state.friend.name}
                     />

                    <input
                    type="number"
                    name="age"
                    onchange={this.changeHander}
                    placeholder="age"
                    value={this.state.friend.age}
                     />    

                    <input
                    type="text"
                    name="email"
                    onchange={this.changeHander}
                    placeholder="email"
                    value={this.state.friend.email}
                     />       

                    <button>Add new friend </button>
                </form>
        </div>

        )
    }
};

export default FriendForm;