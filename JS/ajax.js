

// loeme tavalists teksti

(function(){

var link = document.getElementsByTagName("a")[0];

link.onclick = function(){
	var arq = new XMLHttpRequest();

// 0 - uninitializaed 1 - loading 2 - loaded 3 - interactive 4 -complete

arq.onreadystatechange = function(){
	if ((arq.readyState == 4) && (arq.status == 200 || arq.status == 304) ){
		var body = document.getElementsByTagName("body")[0];
		var p = document.createElement("p");
		var pText = document.createTextNode(arq.responseText);

		p.appendChild(pText);
		body.appendChild(p);
//		body.removeChild(link);
	}
};

// avame päringu
arq.open('GET', "data/ajax.txt",1);

// sooritame päringu

arq.send(null);

return false;
}

})();

// HTML'ist teksti pärimine

(function(){

var link = document.getElementsByTagName("a")[1];

link.onclick = function(){
	var arq = new XMLHttpRequest();

arq.onreadystatechange = function(){
	if ((arq.readyState == 4) && (arq.status == 200 || arq.status == 304) ){
		var body = document.getElementsByTagName("body")[0];
		var d = document.createElement("div");
		body.appendChild(d);

		var div = document.getElementsByTagName("div")[0];
		div.innerHTML = arq.responseText;
	}
};

// avame päringu
arq.open('GET', "data/ajax.html");

// sooritame päringu

arq.send(null);

return false;
}

})();


// loeme XML'i

(function(){

var link = document.getElementsByTagName("a")[2];

link.onclick = function(){
	var arq = new XMLHttpRequest();

arq.onreadystatechange = function(){
	if ((arq.readyState == 4) && (arq.status == 200 || arq.status == 304) ){
		var body = document.getElementsByTagName("body")[0];
		var pealkiri = arq.responseXML.getElementsByTagName("pealkiri")[0].firstChild.nodeValue;
		var h2 = document.createElement("h2");
		var h2Text = document.createTextNode(pealkiri);
		h2.appendChild(h2Text);

		var list = document.createElement("ol");
		var items = arq.responseXML.getElementsByTagName("list")[0];
		items = items.getElementsByTagName("punkt");

		for (var i=0; i<items.length; i++ ){
			var item = items[i].firstChild.nodeValue;
			var li = document.createElement("li");
			var liText = document.createTextNode(item);
			li.appendChild(liText);
			list.appendChild(li);
		}

		body.appendChild(h2);
		body.appendChild(list);
	}

};

arq.open('GET', "data/ajax.xml");

arq.send(null);

return false;
}

})();

// loeme JSON failist infot

(function(){

var link = document.getElementsByTagName("a")[3];

link.onclick = function(){
	var arq = new XMLHttpRequest();

arq.onreadystatechange = function(){
	if ((arq.readyState == 4) && (arq.status == 200 || arq.status == 304) ){
		var body = document.getElementsByTagName("body")[0];

		var json = JSON.parse(arq.responseText);
		
		var pealkiri = json.pealkiri;
		var h2 = document.createElement("h2");
		var h2Text = document.createTextNode(pealkiri);
		h2.appendChild(h2Text);

		var list = document.createElement("ul");
// teeme listsist alamobjekti
		var items = json.list;
// lõhume objekti listi punktideks

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

	

};

arq.open('GET', "data/ajax.json");

arq.send(null);

return false;
}

})();