//监听bg的消息
chrome.runtime.onMessage.addListener(function (request, sender, response) {
    switch (request.msg) {
        case 'clearCacheOK':
            window.postMessage({ from: 'cs', msg: 'clearCacheOK', callBack: 'clearCacheCallBack' }, '*')
            break;
    }
});

//监听页面发送的消息
window.addEventListener("message", function (event) {
    if (event.source != window){
        return;
    }

    if (event.data.from == 'page') {
        console.log("内容脚本接收到页面传来的消息：" + event.data.msg);
        switch (event.data.msg) {
            case 'clearCache':
                chrome.runtime.sendMessage({ msg: 'clearCache' });
        }
    }
}, false);