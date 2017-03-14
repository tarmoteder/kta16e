    window.onload = function () {
        (function () {
            var date = new Date();
            // paneme aja õigel kujul kokku
            var time = date.getHours() + ':' + date.getMinutes()+':' +date.getSeconds()+':'+date.getMilliseconds();
            // otsime lehelt esimese div tag'i
            document.getElementsByTagName('div')[1].innerHTML = "Aeg JS'is: "+time;
            window.setTimeout(arguments.callee, 500);
        })();
    };