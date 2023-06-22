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