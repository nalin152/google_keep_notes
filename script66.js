console.log("WELCOME");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  console.log(addTxt.value);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<form class="savedNotes">
        <label class="snLabel">Notes-${index + 1}</label>
        <textarea class="snText" cols="35" rows="10">${element}</textarea>
        <button id="${index}" onclick="deleteNode(this.id)" class="btnLabel" type="button">Delete Note</button>
      </form>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add Your Note" section above to add notes.`;
  }
}

function deleteNode(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    
    let inputTxt = search.value.toLowerCase();
    //console.log('Input event fired!', inputTxt);
    let savedNotes = document.getElementsByClassName('savedNotes');
    Array.from(savedNotes).forEach(function(element){
        let notesTxt = element.getElementsByTagName("textarea")[0].innerText;
        
        notesTxt = notesTxt.toLowerCase();
        console.log(notesTxt);
        
        if(notesTxt.includes(inputTxt)){
            console.log("YES");
            element.style.display = "flex";
        }
        else{
            element.style.display = "none";
        }
    })

})
