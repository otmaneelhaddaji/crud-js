function validateForm() {
    let firstName =document.getElementById("firstName").value;
    let lastNmae =document.getElementById("lastNmae").value;
    // let ville =document.getElementById("ville").value;
    // let type=document.querySelectorAll('input[name="type"]')
if(firstName==''){
        alert("u have to entre ur name");


        return false
    }
    if(lastNmae==''){
        alert("u have to entre ur lastNmae");


        return false
    }


}
function insert() //function for insert
{
    document.getElementById("table").style.display="block";
    
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var date = row.insertCell(0);
    var desc = row.insertCell(1);
    // var amt = row.insertCell(2);
    date.innerHTML = document.getElementById("firstName").value;
    desc.innerHTML = document.getElementById("lastNmae").value;
    // amt.innerHTML = document.getElementById("amount").value;
    
    return false;
}