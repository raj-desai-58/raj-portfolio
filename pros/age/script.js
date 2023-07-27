console.log("Hello From Raj Desai");

function find_age() {
    let by = document.getElementById("input").value;

    let cy = 2023;

    let age = 0;

    age = cy - by;

    if(by/1000 >= 1)
    {
        document.getElementById("display").value = "Your Age is : " + age + " Years";
    }
    else{
        alert("Please Enter a Valid Year of Birth");
        document.getElementById("display").value ="Enter A Valid Year";
    }

}
