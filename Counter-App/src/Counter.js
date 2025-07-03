import Container from "./Container";
const Counter=({val,handleDecrement,handleIncrement})=>{
    return(
        <div className="CounterApp">
        <p>{val}</p>
        <Container handleDecrement={handleDecrement} handleIncrement={handleIncrement}></Container>
      </div>
    )
};

export default Counter