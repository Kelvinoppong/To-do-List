const inputBox = document.getElementById("inputbox")
const listConatiner = document.getElementById("list-container")
function addTask() {
    if (inputBox.value === ''){// here when the input box is empty, a text will be pop to enter
        alert('You must write something');
                
    }
    else {
        let li = document.createElement('li')// we have created li element in our html and stored in li
        li.innerHTML = inputBox.value;// the content of the li should be equal to the value inside the to do box
        listConatiner.appendChild(li)//then it will be appended in li. so new values will be appended as well
        let span = document.createElement("span")//we have creeated a span element, it has not been displayed yet 
        span.innerHTML = "\u00d7" // so the content of the span 
        li.appendChild(span)// this will append it as well
     }
     // this makes the input box empty after we click the add
     inputBox.value = "";
     saveData();// the save function is called here to save this part as well after we click on our add button 
}
listConatiner.addEventListener('click',function(e) {// here we have added an event to the listcontainer anytime it clicke. the e is the argument to our function
    if(e.target.tagName === "LI") {// so when we the click targets the li, it shouldbe cheeckd
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData()
    }


}, false);
// this function helps us to store our data with a specific name data
function saveData() {
    localStorage.setItem('data',listConatiner.innerHTML)

}
// this function here helps us to display the stored items anytime weopen our browser
function showTask() {
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask() 