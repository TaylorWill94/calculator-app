const DisplayOperation = (props) => {
    console.log(props.displayResult)
    return (
            <div>
           <section className='section'>
               {props.displayResult}
            </section>
            </div>
          
        

    )
}


export default DisplayOperation;