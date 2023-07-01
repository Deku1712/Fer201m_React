import React, { Component } from "react";
import { Connect } from "react-redux";
import { Form,Control } from "react-redux-form";

class UserForm extends Component {
    handleSubmit (user){
        console.log(user);
    }
    render(){
        return(
            <Form model="user" onSubmit={(user) => this.handleSubmit(user)} >
                <label>First Name</label>
                <Control.text model=".firstName"/>
                <label>Last name</label>
                <Control.text model=".lastName"/>
                <label>email</label>
                <Control.text model=".email"/>
                <button type="submit">submit</button>
            </Form>
        )
    }
}
export default (UserForm);