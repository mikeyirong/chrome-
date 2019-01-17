//sh601212，sz002522
var result =[];
function httpRequest(url, result){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result.push(xhr.responseText);
        }
    };
    xhr.send();
}

function showWeather(result){
    var table = '<table><tr><th>股票代码</th><th>名称</th><th>涨幅</th><th>现价</th><th>涨跌</th></tr>';
        var resultJSON = parseResult(result.pop());
        table += '<tr>';
        table += '<td>'+stockCode+'</td>';//股票代码
        table += '<td>'+resultJSON["stockName"]+'</td>';//名称
        table += '<td>'+resultJSON["priceAddPer"]+'</td>';//涨幅
        table += '<td>'+resultJSON["stockPrice"]+'</td>';//现价
        table += '<td>'+resultJSON["priceAdd"]+'</td>';//涨跌
        table += '</tr>';
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}
function parseResult(result) {
    result = result.substring(result.indexOf("=")+2, result.length-2);
    var resultArr = result.split(",");
    var resultJSON = {};
    resultJSON["stockName"] = resultArr[0];
    resultJSON["stockPrice"] = parseFloat(resultArr[3]).toFixed(2);
    resultJSON["priceAdd"] = (parseFloat(resultArr[3])-parseFloat(resultArr[2])).toFixed(2);
    resultJSON["priceAddPer"] = (resultJSON["priceAdd"]/parseFloat(resultArr[2])).toFixed(2);
    return resultJSON;
}
var stockCode = "sz002522";
var stack = ["sz002522","sh601212"];
stockCode = stockCode?stockCode:'sz002522';
        // https://api.thinkpage.cn/v3/weather/daily.json?key=dofqsxboxkf0zp4i&location=beijing&language=zh-Hans&unit=c&start=0&days=5
for(var i=0;i<stack.length;i++){
    var url='http://hq.sinajs.cn/list='+stack[i];
    console.log("城市地址"+url);
    httpRequest(url, result);
}
console.log(result);
//showWeather(result);
