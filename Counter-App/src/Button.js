const Button=({Name,a,Classs})=>{
    return(
        <button onClick={a} className={Classs}>{Name}</button>
    )
};
export default Button