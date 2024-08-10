const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const items = itemList.querySelectorAll("li")
const filterBlock = document.querySelector('.filter');

const formBtn = itemForm.querySelector('button');
const container = document.querySelector(".container");
let isEditMode = false;
let clearBtn;
let inputFilter;
let itemFromStorage =getItemFromLocalStorage();


function displayItems(){

if(localStorage.length != 0){

  let storageItems = getItemFromLocalStorage();

  storageItems.forEach((item) => {

createItems(item);

  })



}
}

function clearItems(){
while(itemList.firstChild){
  itemList.removeChild(itemList.firstChild);
}
  filterBlock.innerHTML =" ";
  clearBtn.removeEventListener("click",clearItems
  );
  clearBtn.remove();
  localStorage.clear();
  itemInput.value = "";
}
// clearing Items

function getItemFromLocalStorage(){
return JSON.parse(localStorage.getItem("item")) || [];

}

function addItemToLocalStorage(item){
return  localStorage.setItem("item",JSON.stringify(item));
}


const createFilterBlock = () => {
const input =document.createElement("input");
input.className ="form-input-filter";
input.setAttribute("type","text");
input.setAttribute("placeholder","Filter Items");
filterBlock.appendChild(input);
inputFilter=input;

}
// populating filterBlock


const enableClearBtn = () => {
  const button =document.createElement("button");
  button.id="clear";
  button.className ="btn-clear";
  button.innerText = "Clear All";
  button.addEventListener("click",clearItems);
  container.insertAdjacentElement("beforeend",button);
  clearBtn=button;
}
// enabling Clear Btn

const createItems = (itemName) => {

if(itemList.innerHTML === ""){
  createFilterBlock();
  enableClearBtn();
}


  const li = document.createElement("li");
  const button = document.createElement("button");
  const icon = document.createElement("i");
  
  button.className = "remove-item btn-link text-red";
  icon.className = "fa-solid fa-xmark";
  
  button.appendChild(icon);
  li.appendChild(button);
  li.insertAdjacentText("afterbegin",itemName);
  itemList.appendChild(li);
  }
  // creating Items



const formSubmission = (e) => {
e.preventDefault();
let newItem = itemInput.value.toLowerCase();
itemFromStorage=getItemFromLocalStorage(); 
if(itemInput.value === ""){
  alert("Please Enter Item!");
}

else if(!itemFromStorage.includes(newItem)){ 
itemFromStorage.push(newItem);
addItemToLocalStorage(itemFromStorage);
createItems(itemInput.value);
itemInput.value="";

}



}
// Form submission


// Remove Item
const removeItem = (e) => {
if(e.target.classList.contains("fa-xmark") || e.target.matches("button")){
   const button = e.target.parentElement;
   const li = button.parentElement;
   const text = li.textContent.toLowerCase();
   itemFromStorage = itemFromStorage.filter((item)=>{
    return item.toLowerCase() != text;
   })
  addItemToLocalStorage(itemFromStorage);
   itemList.removeChild(li);
}

if(itemFromStorage.length === 0){
  clearItems();
}

}



// Filter ItemList
const filterItems = (event) => {

  const string = event.target.value.toLowerCase();
const items =  Array.from(itemList.querySelectorAll("li"));

items.forEach((item)=>{
const itemName = item.firstChild.textContent;
item.style.display = itemName.toLowerCase().includes(string) ? "flex" : "none";


});


}

// // Initialize app
function init() {
  // Event Listeners
  displayItems();
  itemForm.addEventListener("submit",formSubmission);
  itemList.addEventListener("click",removeItem);
  document.addEventListener("click",(e)=>{
  if(e.target.matches("button#clear")){
    clearItems();
  }
  
  
  
  })
  document.addEventListener("keyup",(e)=>{
    if(e.target.matches("input.form-input-filter")){
     filterItems(e);
    }
    });

  // checkUI();
}
init();


















