import React, {Component} from "react";
import { type } from "os";

export default class FormExample extends Component {

    render() {

        const clark: Person = {
            title: "Mr.",
            firstName: "Clark",
            lastName: "Kent",
            city: "Metropolis"
        };

        const bruce: Person = {
            title: "Mr.",
            firstName: "Bruce",
            lastName: "Wayne",
            city: "Gotham"
        };

        const personFormProps: PersonFormProps = {
            
        };

        return (
            <div>
                <PersonForm {...personFormProps} />
            </div>
        );
    }
}

type Person = {
    title?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
}

type PersonFormProps = {
    person?: Person
}

type PersonFormState = {
    person?: Person
}

class PersonForm extends Component<PersonFormProps, PersonFormState> {

    constructor(iProps: PersonFormProps) {
        super(iProps);
        this.state = {
            person: iProps.person ? iProps.person : {
                title: "",
                firstName: "",
                lastName: "",
                city: ""
            }
        };
        this.formUpdateHandler = this.formUpdateHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }


    formUpdateHandler(updatedEvent: any) {
        let target = updatedEvent.target;
        console.log("Updated Field: ", target.name);
        console.log("Updated Value: ", target.value);
        let updatedPerson: Person = {...this.state.person, [target.name]: target.value};
        this.setState({...this.state, person: updatedPerson});
    }

    formSubmitHandler(event: any) {
        event.preventDefault();
        console.log("Form submitted with data: ", this.state.person);
    }


    render() {
        return (
            <form>
                <div>
                    Title: 
                    <select onChange={this.formUpdateHandler} name="title" value={this.state.person?.title}>
                        <option>Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                    </select>
                </div>
                <div>
                    First name: 
                    <input onChange={this.formUpdateHandler} name="firstName" value={this.state.person?.firstName} type="text" />
                </div>
                <div>
                    Last name: 
                    <input onChange={this.formUpdateHandler} name="lastName" value={this.state.person?.lastName} type="text" />
                </div>
                <div>
                    City: 
                    <input onChange={this.formUpdateHandler} name="city" value={this.state.person?.city} type="text" />
                </div>
                <button type="submit" onClick={this.formSubmitHandler} >Submit</button>
            </form>
        );
    }
}