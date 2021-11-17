const Buttons = (props) => {
    //console.log(props.firstButton)
    return (
        <div className='button-grid'>
            <button onClick={props.reset}>AC</button>
            <button> +/- </button>
            <button>%</button>
            <button className='operation'>/</button>
            <button onClick={(e) => props.firstButton(e)} value='7'>7</button>
            <button onClick={(e) => props.firstButton(e)} value='8'>8</button>
            <button onClick={(e) => props.firstButton(e)} value='9'>9</button>
            <button className='operation'>*</button>
            <button onClick={(e) => props.firstButton(e)} value='4'>4</button>
            <button onClick={(e) => props.firstButton(e)} value='5'>5</button>
            <button onClick={(e) => props.firstButton(e)} value='6'>6</button>
            <button className='operation'>-</button>
            <button onClick={(e) => props.firstButton(e)} value='1'>1</button>
            <button onClick={(e) => props.firstButton(e)} value='2'>2</button>
            <button onClick={(e) => props.firstButton(e)} value='3'>3</button>
            <button className='operation' onClick={props.handleAddOperation}>+</button>
            <button className='zero' onClick={props.firstButton}>0</button>
            <button>.</button>
            <button className='operation'>=</button>
        </div>

    )
}


export default Buttons