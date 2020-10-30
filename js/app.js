/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


//grab navbar list
let navigation = document.getElementById("navbar__list");
//number of expected sections
const number = document.getElementsByClassName("landing__container");
//array of sections
let sections = [];
//grab all unorder list items
let unorderedList = document.getElementsByClassName("menu__link");




//populate array with each section
for(let i=0; i<number.length; i++ )
{
//grab each section id (1-4)
sections[i] = document.getElementById("section" + (i+1));
}



// build the nav
for(let i =0; i< sections.length; i++){
    //name of the list item
    let name =  "Section " + (i+1); 
    //create list item
    let listItem = document.createElement('li');
    //set list item name = to the list
    listItem.appendChild(document.createTextNode(name));
    //on click go to the correct section
    listItem.onclick = function(){sections[i].scrollIntoView({behavior: "smooth"})};
    //add in a class for each item
    listItem.classList.add("menu__link");
    //append list item to the navbar section
    navigation.appendChild(listItem);
}





//go through the unordered list and make classes active or not active
for( let x = 0; x < unorderedList.length; x++)
{
    //check for click
    unorderedList[x].addEventListener("click", activeclass);

}

//Function to add an active class
function activeclass()
{
    //remove all active classes first
    for(let y =0; y< unorderedList.length; y++)
    {   
        //go thorugh the list and remove the class "active"
        unorderedList[y].classList.remove("active");
    }
    //add an active class to the element
    this.classList.add("active");
}




//function to check and see if the section is inview
let inview = function(x){

    //bound is set to the section
    let bound = sections[x].getBoundingClientRect();

    //checks the bounds of the section in relation to the window
    //in view will be greater then 0, section width and height will be less then the window area
    if(bound.top >= 0 && bound.left >= 0 && bound.bottom <= (window.innerHeight) && bound.right <= (window.innerWidth))
    {
        //if inview return true
        return(true);
    }
    //else it is not in view
    else{return(false)};
  
}


// Add class 'active' to section when near top of viewport based on the scroll
window.addEventListener('scroll', function(event){

    //go through each section and chekc if its in view
    for(let x =0; x< sections.length; x++)
    {
        //make the class active if it is inview
        if(inview(x)==true)
        {
            sections[x].classList.add("your-active-class");
            navigation.listItem
            
        }
        //else the section is not active
        else{
            sections[x].classList.remove("your-active-class");
        }
    }

});
   


