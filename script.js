let score = 0
let wickets = 0
let ballwise = [];
let hit = 0;
let inputref = React.createRef();

// function clickone(){
//     alert("1 is clicked")
// }

// function clickone(){
//     score+=1;
//     rootelement.render(<App/>)
// }

function addnum(num){
    // if(wickets<10){
    //     ballwise.push(num)
    //     score+=num;
    //     rootelement.render(<App/>)
    //     console.log(ballwise);
    // }
    hit = num;
    rootelement.render(<App/>)
}

function addwick(num){
    // if(wickets<10){
    //     ballwise.push("w")
    //     wickets+=num;
    //     rootelement.render(<App/>)
    //     console.log(ballwise);
    // }
    hit = "W"
    rootelement.render(<App/>)
}

const Scorebuttons=()=>(
    <>
    <div>
        {/* <button onClick = {addnum}>1</button>             This is adding reference of a function */}
        <button onClick = {() => addnum(0)}>0</button>
        <button onClick = {() => addnum(1)}>1</button>        {/*This is adding inline function */}
        <button onClick = {() => addnum(2)}>2</button>
        <button onClick = {() => addnum(3)}>3</button>
        <button onClick = {() => addnum(4)}>4</button>
        <button onClick = {() => addnum(5)}>5</button>
        <button onClick = {() => addnum(6)}>6</button>
        <button onClick = {() => addwick(1)}>wicket</button>
    </div>
    </>
)

const Result = ()=>(
    <div>
        {ballwise.map((res,idx) => (
            <>
            {idx%6 ==0?<br/>:null}
            <span key = {idx}>{res==0?(<strong>.</strong>):res==="w"?(<span style = {{color:"red"}}>w</span>):(res)}</span>&nbsp;&nbsp;&nbsp;
            </>
        ))}
    </div>
)

function handleevent(event){
    event.preventDefault();
    if(hit == "W"){
        wickets+=1;
    }
    else{
        score+=hit;
    }
    console.log(inputref.current.value);
    ballwise.unshift(
        <span>{`${hit}, ${inputref.current.value}`}</span>
    );
    hit=0;
    inputref.current.value="";
    rootelement.render(<App/>)
}

const Form = ()=>(
    <form onSubmit={handleevent}>
        <input value = {hit}/>
        <input ref={inputref} placeholder = "Add a comment"/>
        <button>submit</button>
    </form>
)



const App = ()=>(
    <>
    <h1>Score Keeper</h1>
    <h2>Score:{score}/{wickets}</h2>
    <Scorebuttons/>
    <br/>
    {/* <Result/> */}
    <Form/>
    <hr/>
    {ballwise.map((res,idx) => (
        <p key = {idx}>{res}</p>
    ))}
    </>
)

const rootelement = ReactDOM.createRoot(document.getElementById("root"));
rootelement.render(<App/>)
