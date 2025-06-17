function customRender (reactElement, container){
    const domElememt = document.createElement(reactElement.type)
    domElememt.innerHTML = reactElement.children
    domElememt.setAttribute('href', reactElement.props.href)
    domElememt.setAttribute('target', reactElement.props.target)

    container.appendChild(domElememt)
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.example.com',
        target: '_blank',
    },
    children: 'click me'

}




const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)