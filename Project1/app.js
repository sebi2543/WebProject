function calculate(){

    let first_number=document.getElementById("first_input");
    first_number=Number(first_number.value);

    let second_number=document.getElementById("second_input");
    second_number=Number(second_number.value);

    let thirth_number=document.getElementById("thirth_input");
    thirth_number=Number(thirth_number.value)

    let a=first_number;
    let b=second_number
    let c=thirth_number;
    
    let answer=((a*b) + (b*c)) / (a+b);
    alert(("The result is ")+answer);
}