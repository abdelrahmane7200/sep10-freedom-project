function Introduction() {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center mb-4">React: A JavaScript Library</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h3 className="mb-0">Created by Facebook</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Key Facts</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Created by Jordan Walke at Facebook in 2011</li>
                                    <li className="list-group-item">First deployed on Facebook's newsfeed in 2011</li>
                                    <li className="list-group-item">Released as open-source in May 2013</li>
                                    <li className="list-group-item">Now maintained by Meta (formerly Facebook) and community</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Calculator() {
    const [display, setDisplay] = React.useState('');

    const handleNumber = (number) => {
        setDisplay(display + number);
    };

    const handleOperator = (operator) => {
        setDisplay(display + operator);
    };

    const handleClear = () => {
        setDisplay('');
    };

    const handleCalculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <h1 className="row justify-content-center"> Calculator made using React </h1>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control mb-3" readOnly value={display} />
                    <div className="row g-2">
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('7')}>7</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('8')}>8</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('9')}>9</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning w-100" onClick={() => handleOperator('/')}>/</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('4')}>4</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('5')}>5</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('6')}>6</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning w-100" onClick={() => handleOperator('*')}>*</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('1')}>1</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('2')}>2</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('3')}>3</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning w-100" onClick={() => handleOperator('-')}>-</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('0')}>0</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light w-100" onClick={() => handleNumber('.')}>.</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary w-100" onClick={handleCalculate}>=</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning w-100" onClick={() => handleOperator('+')}>+</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-danger w-100" onClick={handleClear}>Clear</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
function Tips(){
    return (
        <div className="container my-5">
            <div className="card shadow">
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">React Tips for Beginners</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Use Components:</strong> Break your UI into small, reusable components
                                </li>
                                <li className="list-group-item">
                                    <strong>Keep State Simple:</strong> Minimize your state and keep it as close as needed
                                </li>
                                <li className="list-group-item">
                                    <strong>Use Props:</strong> Pass data through props instead of global variables
                                </li>
                                <li className="list-group-item">
                                    <strong>Hooks:</strong> Learn and use React hooks for state management and side effects
                                </li>
                                <li className="list-group-item">
                                    <strong>Keys:</strong> Always use unique keys when rendering lists
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ILikes(){
    return (
        <div className="container my-5">
            <div className="card shadow">
                <div className="card-header bg-info text-white">
                    <h3 className="mb-0">Things I Like About React</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Component-based architecture makes code reusable AND I can easily switch out what goes first/last/in between</li>
                        <li className="list-group-item">Virtual DOM for efficient rendering | Which I don't really know how useful it is</li>
                        <li className="list-group-item">Large ecosystem and community support</li>
                        <li className="list-group-item">Easy to learn and use</li>
                        <li className="list-group-item">Great developer tools and debugging</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
function ReactComponents() {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center mb-4">React Components</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h3 className="mb-0">Components</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">What are React Components?</h5>
                                <p className="card-text">React components are reusable pieces of UI that can be composed to build complex user interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h3 className="mb-0">Types of Components</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Functional Components</h5>
                                <p className="card-text">Functional components are simple JavaScript functions that return JSX.</p>
                                <pre className="bg-light p-3 mt-2">
                                    <code>
                                        {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
                                    </code>
                                </pre>
                                <h5 className="card-title mt-4">Class Components</h5>
                                <p className="card-text">Class components are ES6 classes that extend React.Component and have a render method.</p>
                                <pre className="bg-light p-3 mt-2">
                                    <code>
                                        {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function App() {
    return (
        <div>
            <Introduction />
            <Tips />
            <ILikes />
            <ReactComponents />
            <Calculator />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
