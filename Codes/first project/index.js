// const heading = document.createElement('h1');
// heading.innerHTML = "Hello Beta!"
// document.getElementById('root').appendChild(heading)

const parent = React.createElement('div', {id: "parent"}, React.createElement('div', {id: "child"}, [
    React.createElement('h1', {key:"1"}, 'Top heading' ), React.createElement('h2', {key:'2'}, 'Second top heading' )
]))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);