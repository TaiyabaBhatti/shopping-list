// Practice 1

// console.log(document.body.textContent);

// console.log(document.links);
// console.log(document.links[1]);

// console.log(document.body);  result in null if script tag is place inside head without defer attribute

// let childNodes = document.body.childNodes;
// for (let index = 0; index < childNodes.length; index++) {
//     console.log(childNodes[index],childNodes[index].nodeType);  
// }

//  1= element node
// 3 = text node
//8 comment node

// for (let index = 0; index < document.body.children.length; index++) {
//     // const element = array[index];
//     console.log(document.body.children[index]);  
// }



//  practice 2

// let output;
// const grandParent = document.querySelector("#grand-parent");
// const parent = document.querySelector("#parent");
// output = parent.children;
// output = parent.children[2].className;
// output = parent.firstElementChild.innerText;
// output = parent.lastElementChild.innerText;

// // Parent elements from child
// const child = document.querySelector("#parent .children:nth-child(2)");

// output = child.parentElement;
// // output = child.parentNode;
// const sibling = document.querySelector("#parent .children:nth-child(1)");
// output=sibling.nextElementSibling.innerText;



// // Dom Nodes

// output= parent.childNodes;
// output= parent.childNodes[3].outerHTML;
// // console.log(output);


// const grandParent = document.querySelector("#grand-parent");
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#parent .children:nth-child(1)");
// // console.log(list);


// function insertElement(string){  
//     const list = document.createElement("div");
//     list.innerText = `${string}`;
//     list.className = "children";
//      return list;
// }

// parent.insertAdjacentElement("afterbegin",insertElement("afterbegin"));
// // parent.insertAdjacentElement("beforebegin",insertElement("beforebegin"));
// // parent.insertAdjacentElement("beforeend",insertElement("beforeend"));
// // parent.insertAdjacentElement("afterend",insertElement("afterend"));
// // child.insertAdjacentText("afterbegin","AfterBegin");
// // child.insertAdjacentText("beforeend","BeforeEnd");
// // child.insertAdjacentText("beforebegin","Beforebegin");
// // child.insertAdjacentText("afterend","afterend");

// parent.insertAdjacentHTML("afterbegin","<h1>Heading</h1>");


// console.log(grandParent.innerHTML);



const grandParent = document.querySelector("#grand-parent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#parent .children:nth-child(1)");

// const childNew = document.createElement("li");
// childNew.className="children"
// childNew.innerText="New One";
// // parent.insertBefore(childNew,child);

// function insertAfter(newItem,targetItem){
// targetItem.insertAdjacentElement("afterend",newItem);
// }


// insertAfter(childNew,child);
// console.log(parent.innerHTML);














