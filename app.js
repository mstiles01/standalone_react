'use strict'

const e = React.createElement;


class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.handleClick.bind(this)
    }
    handleClick = function(event) {
        alert("Hello There")
    }
    render () {
        return <h1><span onClick={this.handleClick}>Hello World</span></h1>
    }
}



var containers = document.querySelectorAll(".cfe-app")

containers.forEach(domContainer => {
    const userid = domContainer.dataset.userid

    ReactDOM.render(
        e(HelloWorld, {userid: userid}),
        domContainer
        )
})