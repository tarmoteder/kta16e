var kta16e = {};

kta16e.createARQ = function(url,options){
	var arq = false;

	if (window.XMLHttpRequest) {
		arq = new XMLHttpRequest();

	} else { alert("Paha brauser, kommi ei saa");}

	if(arq){
		options = options ||{};
		options.method = options.method || "GET";

	arq.onreadystatechange = function(){
	if ((arq.readyState == 4) && (arq.status == 200 || arq.status == 304) ){
		if (options.complete) {
			options.complete(arq, JSON.parse(arq.responseText));
		}
	}
};
	arq.open(options.method, url, true);
	return arq;

	} else { return false;}

}

kta16e.ajax = function(url,options){
	var arq = kta16e.createARQ(url, options);

	if(arq) {
		arq.send(null);
	}
};