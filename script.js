display=(data)=>{
    result.value+=data
}
erase=()=>{
    result.value=""
}
finalResult=()=>{
    if(result.value!=""){
        try{result.value=eval(result.value)}
    catch{
        result.value="Error!!"
    }
    }
}
lastClr=()=>{
    result.value=result.value.slice(0,-1)
}

