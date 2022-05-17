

let listArray = [];


function listItemObj(content, status) {//
    this.content = content ?? '';
    this.status = status ?? 'incomplete';
}

//function to change the todo list array
let changeListArray = function(data,status){

    for(let i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray[i].status = status;
            refreshLocal();
            break;
        }
    }
}


function removeItem(data){
    for(let i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }
}

let refreshLocal = function(){//
    let todos = listArray;
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(todos));
}

function addToList(newItem){//
    listArray.push(newItem);
    //add to the local storage
    refreshLocal();
}

function clearList(){//66
    listArray = [];
    localStorage.removeItem('todoList');
}


function getToDoList(){//
    return localStorage.getItem('todoList');
}

function setListArray(list){listArray = list}//

export {
    listArray,
    listItemObj,
    changeListArray,
    removeItem,
    refreshLocal,
    addToList,
    clearList,
    getToDoList,
    setListArray
}