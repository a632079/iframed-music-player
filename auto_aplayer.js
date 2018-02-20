function reinitAplayer() {
    var iframe = document.getElementById("cplayer");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
    } catch (e) {
        console.log(e);
    }
}

window.setInterval("reinitAplayer", 200);