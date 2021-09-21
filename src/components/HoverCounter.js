import withCounter from "./HOC/withCounter";
const HoverCounter = ({count, increment}) => {
    return (
        <div>
            <h2>Hover {count} Times</h2>
            <button type="button" onMouseOver={increment}>Hover me</button>
        </div>
    )
}

export default withCounter(HoverCounter);
