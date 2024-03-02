
function Counter({count = 2, children}) {
 
    let isLoading = true;

    if(false){
    return (
        <h2>Loading...</h2>
    )
    }

    return(
        <>
        <div>this is count {count}</div>
        </>
    )

}

export default Counter;


