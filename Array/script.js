var input = document.getElementById('input').value;
var age = document.getElementById("age").value

var userData = []

function getData(e){
   e.preventDefault()
    let addData = {
        id : Date.now(),
        name : document.getElementById('input').value,
        age : document.getElementById("age").value
    }

    userData.push(addData)
    document.querySelector('form').reset()
    if(input !== "" && age !== "" || input !== " " && age !== " ")
    {
        console.log('added', {userData})
        let pre = document.querySelector('#preview ')
        // alert("Your data has been saved : " + pre)
        localStorage.setItem("List",JSON.stringify(userData) );
    }else
    {
        alert("Please fill the blanks")
    }


  }

function showData(even) {
    even.preventDefault()
    var getItems = Object.values(localStorage)
    for(var i of getItems)
    {
        document.getElementById('preview').innerHTML += getItems
    }
}


