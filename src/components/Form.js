import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        address: '',
        school: '',
        cls: '',
        isCheck: true
    }

    inputHandle = (e) => {
        if( e.target.name === 'text' ) {
            this.setState({
                name: e.target.value,
            })
        } else if ( e.target.name === 'email' ) {
            this.setState({
                email: e.target.value,
            })
        } else if ( e.target.name === 'number' ) {
            this.setState({
                number: e.target.value,
            })
        } else if ( e.target.name === 'address' ) {
            this.setState({
                address: e.target.value,
            })
        } else if ( e.target.name === 'school' ) {
            this.setState({
                school: e.target.value,
            })
        } else if ( e.target.name === 'cls' ) {
            this.setState({
                cls: e.target.value,
            })
        } else if ( e.target.type === 'checkbox' ) {
            this.setState({
                isCheck: e.target.value,
            })
        } else {
            console.log(e.target.value);
        }
    }

    formHandle = (e) => {
        const {name, email, number, address, school, cls, isCheck } = this.state;
        e.preventDefault();
        console.log(name, email, number, address, school, cls, isCheck);
    }

    render() {
        const { name, email, number, address, school, cls,  } = this.state;
        return (
            <>
                <form onSubmit={this.formHandle}>
                   <label>Name : </label> 
                   <input type="text" placeholder="Enter Your Name" value={name} onChange={this.inputHandle} name="text" />
                    <br />
                    <br />

                    <label>E-Mail : </label> 
                    <input type="email" placeholder="Enter Your E-mail" value={email} onChange={this.inputHandle} name="email" />
                    <br/>
                    <br/>

                    <label>Phone-Number : </label> 
                    <input type="text" placeholder="Enter Your Number" value={number} onChange={this.inputHandle} name="number" />
                    <br/>
                    <br/>

                    <label>Address : </label> 
                    <input type="text" placeholder="Enter Your Address" value={address} onChange={this.inputHandle} name="address" />
                    <br/>
                    <br/>

                    <label>Select School : </label>
                    <select name="school" value={school} onChange={this.inputHandle}>
                        <option value="Rangpur Zila School">Rangpur Zila School</option>
                        <option value="Bogura Zila School">Bogura Zila School</option>
                        <option value="Kurigram Zila School">Kurigram Zila School</option>
                    </select>
                    <br/>
                    <br/>

                    <label>Select Class : </label>
                    <select name="cls" value={cls} onChange={this.inputHandle}>
                        <option value="Six">Six</option>
                        <option value="Seven">Seven</option>
                        <option value="Eight">Eight</option>
                        <option value="Nine">Nine</option>
                        <option value="Ten">Ten</option>
                    </select>
                    <br/> <br/>

                    <label>Reading Book</label>
                    <input type="checkbox" name="read" onChange={this.inputHandle} />
                    <label>Play Criceket</label>
                    <input type="checkbox" name="play" onChange={this.inputHandle} />
                    <label>Watching Tv</label>
                    <input type="checkbox" name="tv" onChange={this.inputHandle} />
                    <br/> <br/>

                    <input type="submit" value="send" />
                </form>
            </>
        )
    }
}

export default Form
