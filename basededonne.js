function createNode(element){

    return document.createElement(element);
    
    }
    
    function append(parent, el){
    
     return parent.appendChild(el); //el = element
    
    }
    
  
    
    const url = "http://localhost:8080/ords/hr2/ingredient";
    
    fetch(url)
    
    .then((resp) => resp.json())
    
    .then(function (data) {
    console.log(data);
   let employees = data.items;
    
    return employees.map (function(ingredient) {
    
    let li = createNode("li"),
    
     span = createNode("span");
    
     span.innerHTML = `${ingredient.nom_ingredient}`;
    
    append(li,span);
    
    append(document.getElementById('ingredientsList'), li);
    
     });
    
    })
    
    .catch(function(error) {
    
    console.log(error);
    
    });