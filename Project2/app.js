function maximum(){
    const INT_MIN=-975000;
    let maxi=INT_MIN;

    let first_number = document.getElementById("first_input");
  
    if(first_number.value!=="")
    {
        first_number = Number(first_number.value);
       if(maxi < first_number)
           maxi=first_number;

    }
    let second_number = document.getElementById("second_input");

    if(second_number.value!=="")
    {
        second_number = Number(second_number.value); 
        if(maxi<second_number)
            maxi=second_number;  
        
    }
    
    let thirth_number = document.getElementById("thirth_input");

    if(thirth_number.value!=="")
    {
        thirth_number = Number(thirth_number.value);
        if(maxi<thirth_number)
            maxi=thirth_number;
    }

    let paragraph=document.getElementById("result");
    if(maxi !== INT_MIN)
    paragraph.innerHTML="The result is "+maxi;
    else{
        paragraph.innerHTML="Please introduce a number!"
    }
   
}