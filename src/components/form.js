import React from "react";//importing React

class Form extends React.Component{//creating a class called Form and extends it with React. component

    render(){//rendering the class

        return(//returning the class
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form>
           
        )
    }
}

export default Form;//exporting the form