import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export class AddTodo extends Component {


    state = {
        title: ''

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({title: e.target.value});

render()
{
return (
    <form onSubmit={this.onSubmit} style={{display: 'flex'}}>

        
        <input 
            type='text' 
            name='title' 
            placeholder='Add Todo...'
            style={{flex: '1', padding: '20px'}}
            value={this.state.title}
            onChange = {this.onChange}
            size="lg"
            />

<Button variant="primary" type="submit" size='lg'>
    Submit           
  </Button>

</form>
)

}


}

export default AddTodo
