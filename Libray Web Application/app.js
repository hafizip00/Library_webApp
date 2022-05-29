console.log("FREE");


function Book(name, author,type){
    this.name = name;
    this.author = author;
    this.type = type
}

// Display constructor
function Display(){

}

//Add Method

Display.prototype.add = function(book){
  let tbody = document.getElementById('tbody');
  
    let date = new Date().toDateString();
    
    let uiString = `<div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
    <div class="px-2 flex">
      <span id="book-name">${book.name}</span>
    </div>
    <div>
      <span id="author">${book.author}</span>
    </div>
    <div class="px-2">
      <span id="type">${book.type}</span>
      </div>
    <div class="px-2">
    <span id="time">${date}</span>
    </div>
  </div>`;
  
  tbody.innerHTML += uiString;
}

//Clear Method
Display.prototype.clear = function(){
  let name = document.getElementById('name').value = ' ';
  let author = document.getElementById('author').value = ' ';
  let type = document.getElementById('type').value = ' ';
    let kayword = document.getElementById('keyword').value = ' ';

    console.log("Removed")
}
//Validate Method

Display.prototype.validate = function(book){
  if((book.name.length < 2) && (book.author.length < 2) ||(book.type.length < 2)){
    return false
} 
else{
  return true;
}

}

Display.prototype.show = function(variable){
  let message = document.getElementById('message');
if(variable == 'Success'){
  let alert = `<div class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200" role="alert">
  <strong>SUCCESS</strong> Your Book has been issued!
</div>`;
  message.innerHTML = alert;

  this.timeout();
  }
else{
  let warn = `<div class="py-3 px-5 mb-4 bg-yellow-100 text-yellow-900 text-sm rounded-md border border-yellow-200" role="alert">
  <strong>WARNING!</strong> You missed something please fill out each field properly.
</div>`;
message.innerHTML = warn;
this.timeout();
  } 
}

Display.prototype.timeout = function(){
  setTimeout(() => {
    message.innerHTML = '';
  }, 2000);
}

// Dipslay Method


// Add submit listener add-book
let addBook = document.getElementById('add-book');
addBook.addEventListener('click' , addbook , false);

function addbook(){
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let type = document.getElementById('type').value;
    let book = new Book(name,author,type);
    console.log('You have submitted for book');
    let display = new Display();

    if(display.validate(book)){
      display.add(book);
      display.clear();
      display.show('Success');
    }
    else{
      display.show()
    }
    
    

    

    console.log(book);
}


