console.log("Hello From Raj Desai");

function check() {
    let age = document.getElementById("age").value;

    if(age >=18)
    {
        alert("You are Eligible for Voteing ... Thanks You ...!");
        document.getElementById("cont").style.backgroundColor = "lime";
    }
    else if(age < 0)
    {
        alert("Please Enter a Valid Age ... Thanks You ...!");
        document.getElementById("cont").style.backgroundColor = "orange";
    }
    else if(age == "")
    {
        alert("Please Enter Age First ... Thanks You...!")
    }
    else{
        alert("You are Not Eligible for Voteing ... Thanks You ...!");
        document.getElementById("cont").style.backgroundColor = "red";
    }
}