function CreateButton() {
    return (
        <button> This is a button </button>
    )
}

const name = 'John Doe';

function App() {
    return (
        <div>
            <h1> Hello, {name}.</h1>
            <p> This is a button </p>
            <CreateButton />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

