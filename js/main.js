


// var arrayTen = []

// var i = 0

// while(arrayTen<10) {


// function addToDo(listItem) {

// arrayTen.push(listItem)

// console.log(arrayTen)

// }}


function addToList() {

var listItem = document.getElementById('addListItem').value 	

var listText = document.createTextNode(listItem)

var listItemElement = document.createElement('LI')
listItemElement.className = "list"

var pElement = document.createElement('P')

pElement.appendChild(listText)
listItemElement.appendChild(pElement)


document.getElementById("ordered").appendChild(listItemElement)

document.getElementById("myForm").reset()

console.log(listItem)

}



document.onkeydown = function(e){
	
   if(e.keyCode == 13){ 
   	e.preventDefault()
   	addToList()
   }
}














