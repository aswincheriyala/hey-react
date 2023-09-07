const child = React.createElement('h1', {key: 'child'}, 'Inner h1 tag')
const child1 = React.createElement('h2', {key: 'child1'}, 'Inner h2 tag')
console.log({child})

const heading = React.createElement('div', {id: 'heading'}, [child, child1])
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(heading)