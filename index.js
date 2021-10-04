const results = document.getElementById("random-result")

const meals = [
    "Pancakes",
    "Pasta",
    "Ice Cream",
    "Tacos",
    "Burger",
    "Fried Rice",
    "Apple Pie",
    "Ice Cream Cake",
    "Burritos",
    "Chimichangas",
    "Lasagna",
    "Grilled Chicken",
    "Pizza",
];
  
const times = ["breakfast", "dinner", "lunch"];
  

getRandomMeal = () =>{
    
    const name = meals[Math.floor(Math.random()*meals.length)]
    const time = times[Math.floor(Math.random()*times.length)]

    results.innerHTML = `<p>You are eating... <a href="https://www.google.com/search?q=${name.replace(/\s/g, '+')}" target="_blank">${name.toLowerCase()}</a> for ${time}.</p><img src="src/images/${name.split(' ').join("-").toLowerCase()}.jpg" alt="${name}"/>`
}

