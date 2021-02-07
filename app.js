



function buttonW(inputW) {
    const input = document.getElementById('input').value;
    var inputValue = input;
    // document.getElementById('input').value = '';
    console.log(inputValue);
    displayMeal(inputValue);
}
const displayMeal = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayIteam(data))
        
}

const displayIteam = foodName => {
    const containerDiv = document.getElementById('container-div')
    const mealName = foodName.meals;
    const mealDiv = document.createElement('div');
    mealDiv.className = "mealDiv";
    mealName.forEach(mealMe => {
        const mealInfo = `
                <img src="${mealMe.strMealThumb}">
                <h4 class="ingTitle">${mealMe.strMeal}</h4>
               <button class="btn btn-lg btn-primary inputBtn" onclick="seeDetails('inputValue')">See Details</button>
        `
            ;
        mealDiv.innerHTML = mealInfo;
        containerDiv.appendChild(mealDiv);


    });

    

}



    
const  seeDetails = inputW => {
    const input = document.getElementById('input').value;
    var inputValue = input;
    console.log(inputValue);
    document.getElementById('input').value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayIng(data))
            
       
        
    }





    const displayIng = foodName =>{
    const containerDiv = document.getElementById('container-div')
    const mealName = foodName.meals;
    const mealDiv = document.createElement('div');
    mealDiv.className = "mealDiv";
    mealName.forEach(mealMe => {
        const mealInfo = `
                <img src="${mealMe.strMealThumb}">
                <h4 class="ingTitle">${mealMe.strMeal}</h4>
                <h3>Ingredients</h3>
                <ul class="listDiv list-group">
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient2}<li>
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient3}<li>
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient4}<li>
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient5}<li>
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient6}<li>
                <li class="list-group-item list-group-item-primary listStyle">${mealMe.strIngredient7}<li>
                </ul>
                
               
              
        `
            ;
           
        mealDiv.innerHTML = mealInfo;
        containerDiv.appendChild(mealDiv);


    });
    }



