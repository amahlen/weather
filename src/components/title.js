import React from "react";//importing React from react

class Titles extends React.Component {//creating a class called Titles and extends it with React. component

    render() {//rendering the class

        return (//returning the class

            <div>

                <h1 className="title-container__title">Amahle's Weather Scanner </h1>
                <p className="title-container__subtitle"> Helps you find weather conditions in cities...  </p>
            </div>
        )
    }
}

export default Titles;//exporting the class