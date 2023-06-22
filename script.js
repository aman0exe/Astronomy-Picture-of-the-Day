const apiKey = "BYu5zWIWARWTBREUETnhafYSxrIxEKtCLb3mPHsq"
const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=`

$img = document.querySelector("#img")
$picDiscription = document.querySelector("#picDiscription")
$date = document.querySelector("#date")
$title = document.querySelector("#title")

function fetchData() {
    try {
        fetch(apodUrl + apiKey)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                $date.textContent = json.date
                $img.setAttribute("src", json.url)
                $picDiscription.textContent = json.explanation
                $title.textContent = json.title
            })
    } catch (error) {
        console.log(error)
    }
}
fetchData()



// function hello(name) {
//     console.log("hello", this)
//     console.log(name)
// }

// let person = {
//     user: "Aminhan",
//     age: 17,
// }

// hello.bind(person, "Aminhan")()
// hello.call(person, "Aminhan")
// hello.apply(person, ['Aminhan', 'sdakkskadksd'])



// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${ this.name } logged in`);
//     },

//     loginFail() {
//         alert(`${ this.name } failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };

// askPassword(user.login.bind(user, this), user.login.bind(user)); // ?


// let array = [1,2,3,4,5]

// Array.prototype.Sum = function(num){
//     return this.map((item) => {
//         if(item = Number(item)){
//             return item * num
//         }else if(item = String(item)){
//             return item + item
//         }
//     })
// }

// console.log(array.Sum(10))

// let arr = [1,2,3,4,5 , 'a']

// console.log(arr.Sum(2))