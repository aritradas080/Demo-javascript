function abc() {

    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data=JSON.parse(this.responseText)
    var row="" ;
    
        
          
            for (var i = 0; i < Object.keys(data).length; i++){
                row += `<tr>
                                <td>${data[i].Id}</td>
                                <td>${data[i].Title}</td>
                                <td>${data[i].Status}</td>                           
                                <td>${data[i].Startdate}</td>
                                <td>${data[i].Enddate}</td> 
                          </tr>`

            }
           document.getElementById("table").innerHTML=row;
        
           
        }
      };
    xhttp.open("GET", "https://localhost:44359/api/projects", true);
      
      xhttp.send();
    
     
    return false;
     
     };