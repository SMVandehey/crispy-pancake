$(document).ready(function(){

   $.get("/getBrowseInfo", function(data, status){
   		obj = JSON.parse(data);
   		console.log(obj);
   }); 

}); 