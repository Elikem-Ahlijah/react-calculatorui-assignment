import Button from './Button';


function Row(props) {
    return(
        <div class='row'>
            {/* <Button number={props.value1}/>
            <Button number={props.value2}/>
            <Button number={props.value3}/>
            <Button number={props.value4} style={{backgroundColor:'orange'}} />
            <div class="col-md-3 orange"><h1>km,;l</h1></div> */}
            
                <div class="col-md-3 ROWS"><h1>{props.value1}</h1></div>
                <div class="col-md-3 ROWS"><h1>{props.value2}</h1></div>
                <div class="col-md-3 ROWS"><h1>{props.value3}</h1></div>
                <div class="col-md-3 orange"><h1>{props.value4}</h1></div>
            
        </div>
    )
}


export default Row;