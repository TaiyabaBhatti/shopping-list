
// window.addEventListener("load",()=>{

// setTimeout(()=>{document.querySelector("h1").textContent="Hello Universe!"},2000);
// })
    
document.querySelector("h1").innerText="Hwllo";

// window.onload = () =>{}
// window.addEventListener("load",()=>{});














// Practice 6
// document.addEventListener("click",(e) => {
// if(e.target.matches(".fa-xmark")){
//   e.target.style.color="green";
//   console.log("hello");
// }
// });
// itemList.addEventListener("click",(e)=>{
  // if(e.target.matches(".fa-xmark")){
  //   e.target.style.color="green";
  //   console.log("hello");
  // }

//   if(e.target.tagName === "LI"){
//     e.target.remove();
//   }

// });

// preventing default submitting form

// practice 6 ends




// Practice 5
//   formBtn the button in the form
// const div =document.querySelector("form div:nth-child(3)");

// div.addEventListener("click",(e)=>{
 
//   alert("parent div also fired");
// })

// formBtn.addEventListener("click",(e) => {
//   alert("1 click");
//   e.stopImmediatePropagation();
// });

// formBtn.addEventListener("click",(e) => {
//   alert("2 click");

// });
// formBtn.addEventListener("click",(e) => {
//   alert("3 click");

// });



// const formSubmit = (e) => {
//   e.preventDefault();
//   // const formData = new FormData(itemForm);
//   // const item =formData.get("item");
//   // const selection =formData.get("priority");
//   // const entries = formData.entries();   
  
//   // console.log(item,selection);
//   // console.log(entries);  //returning an iterator
//   // for (const entry of entries) {
//   //   console.log(entry); 
//   // }

//   }
  
//   itemForm.addEventListener("submit",formSubmit);
  // itemForm.addEventListener("click",()=>{
  //   alert("form also fired");
  // });

  // Practice 5 ends

// Practice 4
//  itemForm form in html

// const formSubmit = (e) => {
// e.preventDefault();
// const formData = new FormData(itemForm);
// const item =formData.get("item");
// const selection =formData.get("priority");
// const entries = formData.entries();   

// // console.log(item,selection);
// // console.log(entries);  //returning an iterator
// for (const entry of entries) {
//   console.log(entry); 
// }



// }

// itemForm.addEventListener("submit",formSubmit);

// Practice 4 Ends
//  itemForm form in html

// practice 3

// itemInput  for inputting items
// const selectList = document.getElementById('priority-input');
// const checkBox = document.getElementById('checkbox');
// const heading = document.querySelector("h1");
// const onInput = (e) => {

// console.log(e.target.value);

// } 
// const selectItems = (e) => {

//   console.log(e.target.value);
  
//   } 
//   const checked =(e)=>{
//     console.log(e.target.checked);
//   }
// const onFocus = (e) => {
// console.log("Focused");
// itemInput.style.outlineStyle="solid";
// itemInput.style.outlineWidth="2px";
// itemInput.style.outlineColor="red";

// }
// const onBlur = (e) => {
//   console.log("Blured");
//   itemInput.style.outlineStyle="solid";
// itemInput.style.outlineWidth="2px";
// itemInput.style.outlineColor="blue";
//   }
// itemInput.addEventListener("input",onInput);  //input field
// selectList.addEventListener("change",selectItems); //select field
// checkBox.addEventListener("input",checked);
// itemInput.addEventListener("focus",onFocus);  
// itemInput.addEventListener("blur",onBlur);  

// itemInput  for inputting items












// Practice 2

//   const keyPress = e => {};  
// const keyUp = e => {console. log(e.type)};
// itemInput.addEventListener("keypress",keyPress);
// itemInput.addEventListener("keyup",keyUp);
// itemList.addEventListener("click",(e)=>{
// console.log(e.target,e.currentTarget);
// })
// const xMArk = document.querySelector(".fa-xmark");
// itemList.addEventListener("click",(e) => {
//   console.log(e.target, e.currentTarget);
//   }); 

//   xMArk.addEventListener(("click"),(e)=>{
// console.log(e.target, e.currentTarget);
//   })

//Practice Learn

// const img= document.querySelector("img");


// const singleClick = (e)=>{

// console.log("SingleClick")

// };
// const doubleClick = ()=>{
//   console.log("DoubleClick")

// };
// const rightClick = ()=>{
//   console.log("RightClick")

// };
// const mouseDown = ()=>{
//   console.log("MouseDown")

// };
// const mouseUp = ()=>{
//   console.log("MouseUp")

// };

// const mouseMove = ()=>console.log("MouseMove");
// const mouseOver = ()=> console.log("MouseOver");
// const mouseOut = () =>  console.log("MouseOut");
// const dragStart = () =>  console.log("Drag Start");
// const dragEnd = () =>  console.log("Drag End");
// const dragEnter = () =>  console.log("Drag Enter");
// const dragOver = () =>  console.log("Drag Over");

// img.addEventListener("click",singleClick);
// img.addEventListener("dblclick",doubleClick);
// img.addEventListener("contextmenu",rightClick);
// img.addEventListener("mousedown",mouseDown);
// img.addEventListener("mouseup",mouseUp);
// img.addEventListener("mousemove",mouseMove);
// img.addEventListener("mouseover",mouseOver);
// img.addEventListener("mouseout",mouseOut);
// img.addEventListener("dragstart",dragStart);
// img.addEventListener("dragend",dragEnd);
// img.addEventListener("dragenter",dragEnter);
// img.addEventListener("dragover",dragOver);


// setTimeout(()=>{
//   clearBtn.removeEventListener("click",clearItems
//   );
// },5000)




// Inputing Items
// const keyDown = e => 
//   {

// if(e.key === "Enter"){
//   e.preventDefault();

// }
//   };
//   itemInput.addEventListener("keydown",keyDown);