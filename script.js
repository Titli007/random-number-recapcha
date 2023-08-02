let fname;
let lname;
let email;
let pass;


randomNumber();


function submitCapcha(){
    let x = document.getElementById('capcha-input').value;
    let y = document.getElementById('random').innerHTML;
    if(x === y){
        console.log('true');
        document.getElementById('btn').removeAttribute("disabled");
        document.getElementById('btn').classList.remove('btn');
        document.getElementById('btn').classList.add('btn-capcha');
    }
    else{
        window.alert("Invalid capcha");
        randomNumber();
        document.getElementById('capcha-input').value="";
    }
}

function randomNumber(){

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    let arr=[];
    arr[0]=alphabet[Math.floor(Math.random() * alphabet.length)];
    arr[1]=alphabet[Math.floor(Math.random() * alphabet.length)];
    arr[2]=Math.floor(Math.random() * 10);
    arr[3]=alphabet[Math.floor(Math.random() * alphabet.length)];
    arr[4]=Math.floor(Math.random() * 10);
    arr[5]=alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // console.log(arr);
    
    let str=arr.join("");
    
    // console.log(str);
    
    document.getElementById('random').innerHTML=str;
    
};


let capchaText=document.getElementById('random');
let capchaInput= document.getElementById('capcha-input');
let submit= document.getElementById('cap-btn');




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
        window.location.reload();
    }

    console.log(fname, lname, email, pass);

};


// console.log(document.getElementById("fname"));
// console.log(document.getElementsByClassName("f")[0]);




