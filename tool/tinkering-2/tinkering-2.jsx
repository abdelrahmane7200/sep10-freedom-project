const { useState, useEffect } = React;

function FirstPage() {
    return (
        <div style={{ border: '2px solid black', marginTop: '10px' }}>
            <h1>Welcome to the First Text</h1>
            <p> This is all in one function </p>
        </div>
    )
}
function SecondPage() {
    return (
        <div style={{ border: '2px solid black', marginTop: '30px' }}>
            <h1>Welcome to the Second Page</h1>
            <p> This is all in one function </p>
        </div>
    )
}
function HiddenPage() {
    return (
        <div>
            <h1>This is a hidden page</h1>
        </div>
    )
}
function Prop(prop) {
    return (
        <div>
            <div class="container">
                <h1>This is a prop: <strong>{prop.name}</strong></h1>
            </div>
            <div class="container">
                <p> What I'm doing is adding a variable to the loading of the function; </p>
                <code>
                    {`<functionName name="Propie is so dopie" />`}
                </code>
            </div>
            <div class="container mt-3">
                <p> Then, I'm passing through a parameter into the load of the function; </p>
                <code>
                    {`function functionName(prop) { ... }`}
                </code>
            </div>
            <div class="container mt-3">
                <p> Then, I'm using the prop to display the information; </p>
                <code>
                    {`<h1>This is a prop: <strong>{prop.name}</strong></h1>`}
                </code>
                <p> Where 'prop' is the parameter, and '.name' is the variable.</p>
            </div>
            <div class="container mt-5">
                <h1> How to pass a variable from a function to a prop </h1>
                <code>
                    {`function functionName() {`} <br />
                    {`const variable = "This is a variable";`} <br />
                    {`return <Prop name={variable} />`} <br />
                    {`}`} <br />
                </code>
            </div>
        </div>
    )
}

function CounterWithEffect() {
    const [count, setCount] = useState(0);


     useEffect(() => {
        document.title = `Count is: ${count}`;
        console.log('Effect ran! Count changed to:', count);
    }, [count]); // Only re-run when count changes

    return (
        <div style={{ border: '2px solid black', marginTop: '10px', padding: '10px' }}>
            <h2>useEffect Example</h2>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Check the page title and console to see the effect!</p>
        </div>
    );
}

function App(){
    const [showHidden, setShowHidden] = React.useState(false);

    const toggleHidden = () => {
        setShowHidden(!showHidden);
        if (!showHidden) {
            console.log("showHidden is true");
        }
    }

    return (
        <div>
            <FirstPage />
            <SecondPage />
            <button onClick={toggleHidden}>Show Hidden Page</button>
            {showHidden && <HiddenPage />}
            <CounterWithEffect />
            <Prop name="Propie is so dopie" />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)


