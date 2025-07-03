import Button from "./Button";
// import Dec from "./Dec";
// import Inc from "./Inc";
const Container=({handleDecrement,handleIncrement})=>{
    return(
        <div className="Bottoncontainer">
            <Button Name={"Increment"} a={handleIncrement} Classs={"Inc"}></Button>
            <Button Name={"Decrement"} a={handleDecrement} Classs={"Dec"}></Button>
          {/* <Dec handleDecrement={handleDecrement}></Dec>
          <Inc handleIncrement={handleIncrement}></Inc> */}
        </div>
    )
};
export default Container