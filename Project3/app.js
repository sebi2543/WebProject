function sum(){
    let first_number=document.getElementById("first_input");
    first_number = Number(first_number.value);

    let second_number=document.getElementById("second_input");
    second_number=Number(second_number.value);

    if(first_number>second_number)
    {
        first_number=second_number+first_number;
        second_number=first_number-second_number;
        first_number=first_number-second_number;
    }
    let sum=0;
    for(let i=first_number;i<=second_number;i++)
            if(i%2==0)
                sum+=i;
    
    let paragraph=document.getElementById("result");
    paragraph.innerHTML="The result is "+sum;


}