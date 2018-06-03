$(document).ready(function(){

   $.get("/getBrowseInfo", function(data, status){
   		Console.log(JSON.parse(data));
   }); 

}); 