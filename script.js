let fname;
let lname;
let email;
let pass;



// document.getElementById("btn").onclick = () => {
//     fname = document.getElementById("fname").value;
//     lname = document.getElementById("lname").value;
//     email = document.getElementById("email").value;
//     pass = document.getElementById("pass").value;
//     if (fname === "" || lname === "" || email === "" || pass === "") {
//         // alert("Please enter a value for all fields.");
//         document.getElementById("one").innerHTML ="first name cannot be empty";
//         document.getElementById("two").innerHTML ="last name cannot be empty";
//         document.getElementById("three").innerHTML ="email cannot be empty";
//         document.getElementById("four").innerHTML ="password cannot be empty";
//     }
//     console.log(fname, lname, email, pass);
// }


let tick=document.getElementById('tick');
tick.addEventListener('click', () =>{
    // tick.innerHTML="&#10004;";
    tick.style.backgroundColor="white";
    bal.style.opacity="1";
    document.getElementById('btn').classList.add('btn-capcha');
    document.getElementById('btn').classList.remove('btn');
    if(tick.innerHTML === "&#10004;"){
        document.getElementById('btn').removeAttribute("disabled", false);
    }
    else{
        document.getElementById('btn').removeAttribute("disabled", true);
    }
});
document.getElementById('capcha-icon').addEventListener('mouseover', () =>{
    document.getElementById('tip').style.opacity="1";
});
document.getElementById('capcha-icon').addEventListener('mouseout', () =>{
    document.getElementById('tip').style.opacity="0";
});


document.getElementById("btn").onclick = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (fname === "") {
        document.getElementById("one").innerHTML = "First name cannot be empty.";
        document.getElementById("i1").style.visibility = "visible";
        document.getElementById("fname").classList.add("cls");
    } 
    if (lname === "") {
        document.getElementById("two").innerHTML = "Last name cannot be empty.";
        document.getElementById("i2").style.visibility = "visible";
        document.getElementById("lname").classList.add("cls");
    }
    if (email === "") {
        document.getElementById("email").value = "email/example.com";
        document.getElementById("email").style.color = "hsl(0, 100%, 74%)";
        document.getElementById("three").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEmail cannot be empty.";
        document.getElementById("i3").style.visibility = "visible";
        document.getElementById("email").classList.add("cls");
    } 
    if (pass === "") {
        document.getElementById("four").innerHTML = "Password cannot be empty.";
        document.getElementById("i4").style.visibility = "visible";
        document.getElementById("pass").classList.add("cls");
    } 
    else{
        window.alert("YOUR ACCOUNT HAS BEEN SUCCESFULLY CREATED");
    }

    console.log(fname, lname, email, pass);
};


// console.log(document.getElementById("fname"));
console.log(document.getElementsByClassName("f")[0]);


