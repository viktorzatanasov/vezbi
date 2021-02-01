let inputArray = [];
let newArray = [];
let numberOfElements = prompt("enter the number of elements in the array");
for(let i = 0 ; i< numberOfElements; i++)
{
    inputArray[i] = prompt("enter the element");
    if(isNaN(inputArray[i]))
    {
        alert("you have enter a value that is not a number please reload the page and try again");
        break;
    }
}
for(let i = 0; i<numberOfElements*2;i++)
{
   
    if(inputArray[i] %2 ==0 && inputArray[i+1] %2==0)
    {
        newArray[i] = inputArray[i];
        newArray[i+1] = "-";
        
        
    }
    else 
    {
        newArray[i+1] = inputArray[i];
    }
    
   
}
//newArray = newArray.filter(Boolean);
console.log(newArray);