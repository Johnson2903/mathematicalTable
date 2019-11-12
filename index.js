col.focus()
     function myadd(){
        var y= "";
			y+= "<table border= 1;>";
         if(col.value <=0 && row.value <=0 || col.value =="" && row.value==""){
     hid.innerHTML="inpute a value";
     
         }

         else {
             
             col.focus
             for (i =1; i<=col.value; i++ ) {
                y += "<td >";
	y+= "Table"+i;
	y += "<table border='2px' solid red>"
	for(j=1;j<=row.value;j++)
	{
		
		y +="<tr><td>"+(i+mary.value+j)+"="+eval(i+mary.value+j)+"</td></tr>";
		}y += "</table></td>";	
    }
    y += "</tr></table>";
    	hid.innerHTML= y;
    	}
                 
             }

             
         

     
