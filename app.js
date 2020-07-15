'use strict'

const e = React.createElement;


class HelloWorld extends React.Component {
    render () {
        return <h1>Hello World</h1>
    }
}



var containers = document.querySelectorAll(".cfe-app")

containers.forEach(domContainer => {
    const userid = domContainer.dataset.userid

    ReactDom.render(
        e(HelloWorld, {userid: userid}),
        domContainer
        )
})