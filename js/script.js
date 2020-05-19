let itemList = []

let addItem = () => {
    let toDo ={
        contents: document.getElementById("to-do-input").value,
        isDone: false
    }
    itemList.push(toDo)
    showList(itemList)
    document.getElementById("to-do-input").value = null
}

let showList =(list)=>{
    let message = list.map((item, index) => {
    if (item.isDone){
      return `<li>
        ${item.contents}
        <a href="#" onclick='remove(${index})'>x</a> 
        <input type ="checkbox" checked=true onchange ="toggleDone(${index})">
        <span id="Done-not-Done">Done</span>
        </li>`.strike()
    }
     else {return `<li>
        ${item.contents}
        <a href="#" onclick='remove(${index})'>x</a> 
        <input type ="checkbox" onchange ="toggleDone(${index})">
        <span id="Done-not-Done">Not Done</span>
        </li>`
     }
        
    // `<li>
    // ${item.contents}
    // <a href="#" onclick='remove(${index})'>x</a> 
    // <input type ="checkbox" onchange ="toggleDone(${index})">
    // <span id="Done-not-Done">Not Done</span>
    // </li>`
    }
    ).join('')
    document.getElementById("to-do-list").innerHTML = message
}

function remove(index){
 itemList.splice(index,1)
 showList(itemList)
 }

function toggleDone(index){
    itemList[index].isDone= !itemList[index].isDone
    // doneNotDone(index)
    showList(itemList)
}

// document.getElementById("Done-not-Done").innerHTML = func

// function doneNotDone(index){
//  if (itemList[index].isDone=true){
//     document.getElementById("Done-not-Done").innerHTML = `Done!`
//  }
//   else 
//     {document.getElementById("Done-not-Done").innerHTML = `Not Done!`}
//  }


