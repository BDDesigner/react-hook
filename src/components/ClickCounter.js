import withCounter from "./HOC/withCounter";
const ClickCounter = ({count, increment}) => {
    return (
        <div>
            <h2>Click {count} Times</h2>
            <button type="button" onClick={increment}>Click me</button>
        </div>
    )
}

export default withCounter(ClickCounter);

