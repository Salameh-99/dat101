"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
 const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
  const perimeter = (height + width + height + width);
  const area = (height * width);
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const task2Words = [];

document.getElementById("txtTask2Word").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const word = event.target.value.trim();
        if (word) {
            task2Words.push(word);
            document.getElementById("txtTask2Output").textContent =
                `Words (${task2Words.length}): ${task2Words.join(", ")}`;
            event.target.value = ""; // Clear input
        }
    }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", function () {
    const checkboxes = document.getElementsByName("chkTask3");
    let resultText = ""; // Tømmer teksten, gjør klar til ny utskrift.
    
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            const value = checkbox.value;
            if (value === "4") {
                resultText += `Du valgte alternativ nummer ${value}. Dette kan du ikke mene!!???<br />`;
            } else {
                resultText += `Du valgte alternativ nummer ${value}.<br />`;
            }
        }
    }
    
    document.getElementById("txtTask3Output").innerHTML = resultText || "Ingen valg ble gjort.";
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const carDiv = document.getElementById("divTask4Cars");
CarTypes.forEach(car => {
  carDiv.innerHTML += `<label><input type="radio" name="car" value="${car.caption}"> ${car.caption}</label><br>`;
});
carDiv.addEventListener("change", () => {
  const selected = document.querySelector("input[name='car']:checked")?.value || "None";
  document.getElementById("txtTask4Output").innerText = `Selected Car: ${selected}`;
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("selectTask5Animals").addEventListener("change", function (event) {
  const selectedAnimal = event.target.value;
  document.getElementById("txtTask5Output").textContent = `Selected: ${selectedAnimal}`;
});


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");

GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    selectTask6Girls.appendChild(option);
});

selectTask6Girls.addEventListener("change", function (event) {
    const selectedName = event.target.value;
    document.getElementById("txtTask6Output").textContent = `Selected: ${selectedName}`;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectMovieGenre = document.getElementById("selectMovieGenre");

// Populate the genre dropdown
MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
});

// Add movie data to the table
document.getElementById("cmbAddMovie").addEventListener("click", function () {
    const title = document.getElementById("txtMovieTitle").value.trim();
    const genre = selectMovieGenre.value;
    const director = document.getElementById("txtMovieDirector").value.trim();
    const rating = document.getElementById("txtMovieRating").value.trim();

    if (!title || !genre || !director || isNaN(parseFloat(rating))) {
        alert("Please provide valid input for all fields.");
        return;
    }

    const table = document.getElementById("tblMovies");
    const row = table.insertRow();
    row.insertCell(0).textContent = title;
    row.insertCell(1).textContent = genre;
    row.insertCell(2).textContent = director;
    row.insertCell(3).textContent = rating;

    // Clear inputs
    document.getElementById("txtMovieTitle").value = "";
    document.getElementById("txtMovieDirector").value = "";
    document.getElementById("txtMovieRating").value = "";
});
