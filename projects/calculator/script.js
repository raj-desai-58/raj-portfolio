console.log("Develop by Raj Desai");

function Sum() {

    let sum = 0;
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let output = document.querySelector('#output');
    let mtd = document.querySelector('#sel-meth').value;



    if(mtd == 'add')
    {
        sum = num1 + num2;
        output.value = "Addition is : " + sum;
    }

    else if(mtd == 'sub')
    {
        sum = num1 - num2;
        output.value = "Substraction is : " + sum;
    }

    else if(mtd == 'mul')
    {
        sum = num1 * num2;
        output.value = "Multiplication is : " + sum;
    }

    else if(mtd == 'div')
    {
        sum = num1 / num2;
        output.value = "Divison is : " + sum;
    }

    else if(mtd == 'mod')
    {
        sum = num1 % num2;
        output.value = "Reminder is : " + sum;
    }

    else{
        alert("Please Select a Method");
        output.value = "Please Select a Method";
    }

}