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
    if (item.contents == 0){
            itemList.splice(index,1)
            alert ("You must enter something!")
            return null 
        }
    if (item.isDone){
      return `<li>
        <span>${item.contents}</span>
        <input type ="checkbox" checked=true onchange ="toggleDone(${index})">
        <span id="Done-not-Done">Done</span>
        <a href="#" onclick='remove(${index})'><i class="far fa-window-close" style="color:red"></i></a> 
        </li>`.strike()
    }
     else {return `<li>
        <span>${item.contents}</span>
        <input type ="checkbox" onchange ="toggleDone(${index})">
        <span id="Done-not-Done">Not Done</span>
        <a href="#" onclick='remove(${index})'><i class="far fa-window-close" style="color:red"></i></a> 
        </li>`
     }
    }
    ).join('')
    console.log(message)
    document.getElementById("to-do-list").innerHTML = message
}

function remove(index){
 itemList.splice(index,1)
 showList(itemList)
 }

function toggleDone(index){
    itemList[index].isDone= !itemList[index].isDone
    showList(itemList)
}

function checkSameNumber(x){
    if (itemList.length >=0 && +x==0){
        alert("You must enter something!")
        document.getElementById("to-do-input").value=null
       return true
    }
    else if (itemList.length >=0 && +x == itemList[itemList.length-1]){
       alert("You must not enter the same thing again!")
       document.getElementById("to-do-input").value=null
      return true
    }
    else {
       return false;
    }
   }

function toggleDoneList(itemList){
    doneList = itemList.filter(item => itemList.IsDone === true)
    console.log(doneList)

}   