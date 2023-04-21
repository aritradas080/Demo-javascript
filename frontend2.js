function createProject(data){
const postData=
{
    Title: document.getElementById("Title").value,
    Status: document.getElementById("Status").value,
    Startdate: document.getElementById("Startdate").value,
    Enddate: document.getElementById("Enddate").value
}
const js = JSON.stringify(postData);
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    if(this.response != null){
        document.getElementById("response").innerHTML="OK";
    }
    else{
        document.getElementById("response").innerHTML="NO"; 
    }
}
xhttp.open("POST","https://localhost:44359/api/projects/create",true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(js);
return false;

}