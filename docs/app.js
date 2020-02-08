const display = document.querySelector(".display");
document.querySelectorAll(".num-key").forEach(el =>
{
    el.onclick = ()=> {
    if(display.innerText==="Result.."){
        display.innerText = "";
        display.innerText = el.innerText;
    }
    else 
    {
    display.innerText = display.innerText+el.innerText;
    }
}
});

const operation = (opName) =>() => {
    let currentval = parseFloat(display.innerText);
    // console.log(currentval);
    if(memory && memory.length){
        memory.push({value:currentval});
        const result = evaluate(memory);
        memory.push({value:result});
        memory.push({value:opName});
        display.innerText="";

    }
    else{
       memory.push({value:currentval});
       memory.push({value:opName});
       display.innerText="";
    }
}

 const memory =[];
 const evaluate = (memory) =>{
    const second = memory.pop().value;
    const operator = memory.pop().value;
    const first = memory.pop().value;
    switch (operator){
        case "add" :
            return first + second;
            break;
            case "subtract":
                return first - second;
                case "multiply" :
            return first * second;
            break;
            case "divide" :
               return first / second;
               break; 
               default:
               return first;
    }
};

const functions = ["add","subtract","multiply","divide"];
 functions.forEach((opName) =>{
    document.querySelector(`.fun-key[operator=${opName}]`).onclick = operation(opName);
    // console.log(opName);
 });
  
 document.querySelector(".fun-key[operator=equal]").onclick =
  () => {
    if (memory && memory.length) {
      memory.push({ value: parseFloat(display.innerText) });
      display.innerText = evaluate(memory);
    }
  }
 
document.querySelector(".fun-key[operator=clear]").onclick =
  () => {
    display.innerText = "Result..";
    memory.length = 0;
  }
  