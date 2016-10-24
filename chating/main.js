document.getElementById('msg').onkeyup = function(e){
    chrome.system.cpu.getInfo(function(info){
        console.log("cpu信息"+info.archName+info.numOFProcessors+info.modelName+info.features);
    });
    if(e.keyCode==13){
        console.log("这个值"+this.value);
        chrome.runtime.sendMessage({
            action:'send',
            msg:encodeURIComponent(this.value)
        });
        
    }
}

chrome.runtime.onMessage.addListener(function(message, sender, callback){
    if(message.action == 'receive'){
        var el = document.createElement('div');
        el.innerText = decodeURIComponent(message.msg);
        document.getElementById('history').appendChild(el);
    }
});
 