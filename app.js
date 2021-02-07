// search and outer part 
document.getElementById('searchButton').addEventListener('click',function(){
    const input = document.getElementById('input').value   
    const meals = document.getElementById('meals') 
    document.getElementById('input').value =''
    if (input === '') {
        alert('Please enter valid food name')
        // meals.style.display = 'block';
    }
    else{
        // meals.style.display = 'none';
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
.then(res => res.json())
.then(data=>{ mealList(data)
})
.catch(err => alert("please enter valid value"))
}
})
const mealList= data=>{
data.meals.forEach(element => {
    meal(element)
    
});

}
const meal =element=>{

    const mealName = document.getElementById('meals')
    const createDiv = document.createElement('div')
    createDiv.className = 'mealClass'
    createDiv.innerHTML = `
    <img src='${element.strMealThumb}' onclick="hell('${element.strMeal}')">
    <h4>${element.strMeal}</h4>
`  
    mealName.appendChild(createDiv)
}

// ingredents part 

function hell(foodName){
    console.log()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
.then(res => res.json())
.then(data => ingredents(data))
}
const ingredents= data=>{
    data.meals.forEach(ingredentsElement => {
    ingredentsDetails(ingredentsElement)
        
    });
    
    }

    const  ingredentsDetails =ingredentsList=>{
        const ingredentsDiv = document.getElementById('ingredients')
        const createInnerIngredentsDiv = document.createElement('div')
        createInnerIngredentsDiv.className = 'InnerIngredentsClass'
        createInnerIngredentsDiv.innerHTML = `
        <img src='${ingredentsList.strMealThumb}'>
        <h4>Ingredents</h4>
        <ul>
        <li>${ingredentsList.strMeasure1}</li>
        <li>${ingredentsList.strMeasure2}</li>
        <li>${ingredentsList.strMeasure3}</li>
        <li>${ingredentsList.strMeasure4}</li>
        <li>${ingredentsList.strMeasure5}</li>
        <li>${ingredentsList.strMeasure6}</li>
        <li>${ingredentsList.strIngredient1}</li>
        <li>${ingredentsList.strIngredient2}</li>
        <li>${ingredentsList.strIngredient3}</li>
        <li>${ingredentsList.strIngredient4}</li>
        <li>${ingredentsList.strIngredient5}</li>
        <li>${ingredentsList.strIngredient6}</li>
        
        <ul>    
        `
      
        ingredentsDiv.appendChild(createInnerIngredentsDiv)
    }










// function hello(kkk){
//     console.log('list',kkk)}
//     document.getElementById('imageId').addEventListener("click",function (){
//         console.log('hiii')
//   const ingredients = document.getElementById('ingredients')
//   const ingredientsInnerDiv = document.createElement('div')
//   ingredientsInnerDiv.innerHTML=`
//   <img onclick ="hello()" src='${meal.strMealThumb}'>
//   <h4>${meal.strMeal}</h4>

//   <h4>Ingredients</h4>
//   `
//   ingredients.appendChild(ingredientsInnerDiv)

//     // console.log('heyyy')


// })
// }


