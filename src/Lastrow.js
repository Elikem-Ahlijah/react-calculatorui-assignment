function Lastrow(props) {
    return(
        
        <div class="row">
            <div class="col-md-6 ROWS"><h1>{props.value1}</h1></div>
            <div class="col-md-3 ROWS"><h1>{props.value2}</h1></div>
            <div class="col-md-3 orange"><h1>{props.value3}</h1></div>
        </div>

            
    )
    
}


export default Lastrow;