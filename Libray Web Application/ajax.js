console.log("AJAX IN ONE VIDEO");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click' , fetchClickHandler);

function fetchClickHandler(){
    console.log('CLICKEd')
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json')


    // optional
    xhr.onprogress = function(){
        console.log("PROGRESS ho rhi hai")
    }
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
        console.log("HAPPY")
        }
        else console.log('SOME ERROR OCCURRED')
    }
    // pramas = `{"name":"test1","salary":"123","age":"23"}`;
    xhr.send();
    console.log('WE ARE DONE')
}