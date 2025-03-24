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

function App() {
    return (
        <div>
            <Calculator />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
