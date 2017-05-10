
(function() {
var link = document.getElementsByTagName("a")[0];
link.onclick = function(){
kta16e.ajax("data/ajax.json", {
    method: "GET",
    complete: function(response){
        var body =document.getElementsByTagName("body")[0];
        var json = response;
		var pealkiri = json.pealkiri;
        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode(pealkiri);
        h2.appendChild(h2Text);
        var list = document.createElement("ul");        
        var items = json.list;
        for (var key in items){
            var item = items[key];
            var li = document.createElement("li");
            var liText = document.createTextNode(item);
            li.appendChild(liText);
            list.appendChild(li);
        }        
         body.appendChild(h2);
         body.appendChild(list);        
    }
});
return false ;
}})();
      
    
   




