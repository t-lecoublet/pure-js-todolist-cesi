import './style/main.css';
import * as job from './job';
//Todo list app by Afolabi Sheriff
//features
//store in localstorage of browser
//delete list items


let addButton = document.getElementById('addButton');
let addInput = document.getElementById('itemInput');
let todoList = document.getElementById('todoList');
//declare addToList function


let changeToComp = function(){

    let parent = this.parentElement;
    console.log('Changed to complete');
    parent.className = 'uncompleted well';
    this.innerText = 'Incomplete';
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);


    job.changeListArray(parent.firstChild.innerText,'complete');

}

let changeToInComp = function(){

    let parent = this.parentElement;
    console.log('Changed to incomplete');
    parent.className = 'completed well';
    this.innerText = 'Complete';
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);


    job.changeListArray(parent.firstChild.innerText,'incomplete');

}

let removeItem = function(){

    let parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    let data = this.parentElement.firstChild.innerText;

    
    job.removeItem(data);


}



//function to chage the dom of the list of todo list
let createItemDom = function(text,status){

    let listItem = document.createElement('li');

    let itemLabel = document.createElement('label');

    let itemCompBtn = document.createElement('button');

    let itemIncompBtn = document.createElement('button');

    listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';

    itemLabel.innerText = text;
    itemCompBtn.className = 'btn btn-success';
    itemCompBtn.innerText = (status == 'incomplete')?'Complete':'Incomplete';
    if(status == 'incomplete'){
        itemCompBtn.addEventListener('click',changeToComp);
    }else{
        itemCompBtn.addEventListener('click',changeToInComp);
    }


    itemIncompBtn.className = 'btn btn-danger';
    itemIncompBtn.innerText = 'Delete';
    itemIncompBtn.addEventListener('click',removeItem);

    listItem.appendChild(itemLabel);
    listItem.appendChild(itemCompBtn);
    listItem.appendChild(itemIncompBtn);
    console.log(listItem)
    return listItem;
}



let addToList = function(){
    let newItem = new job.listItemObj();
    newItem.content = addInput.value;


    job.listArray.push(newItem);
    //add to the local storage
    job.refreshLocal();
    
    //change the dom
    let item = createItemDom(addInput.value,'incomplete');
    todoList.appendChild(item);
    addInput.value = '';
}

//function to clear todo list array
let clearList = function(){
    job.clearList();
    todoList.innerHTML = '';

}

window.onload = function(){
    let list = job.getToDoList();

    if (list != null) {
        console.log('test', list)
        let todos = JSON.parse(list);
        job.setListArray(todos);

        for(let i=0; i<job.listArray.length;i++){
            let data = job.listArray[i].content;

            let item = createItemDom(data,job.listArray[i].status);
            todoList.appendChild(item);
        }

    }

};
//add an event binder to the button
addButton.addEventListener('click',addToList);
clearButton.addEventListener('click',clearList);