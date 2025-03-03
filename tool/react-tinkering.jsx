function Calculator() {
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const handleAddition = () => {
        setResult(num1 + num2);
    };

    const handleSubtraction = () => {
        setResult(num1 - num2);
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
            />
            <button onClick={handleAddition}>Add</button>
            <button onClick={handleSubtraction}>Subtract</button>
            <h2>Result: {result}</h2>
        </div>
    );
}

function CreateButton() {
    return (
        <button> This is a button </button>
    )
}

const name = 'John Doe';

function App() {
    return (
        <div>
            {/* <CreateButton /> */}
            <Calculator />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
