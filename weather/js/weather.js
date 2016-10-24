function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
    var obj=eval(result);
    console.log(result);
    var list = result.results[0].daily;
    var table = '<table><tr><th>城市</th><th>日期</th><th>天气</th><th>温度</th></tr>';
    for(var i in list){
        var d = new Date(list[i].date);
        table += '<tr>';
        table += '<td>'+result.results[0].location.name+'</td>';//城市
        table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';//日期
        table += '<td>'+list[i].text_day+'转'+list[i].text_night+'</td>';//天气
        table += '<td>'+list[i].low+'℃'+'~~'+list[i].high+'℃'+'</td>';//气温
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
console.log(city);
city = city?city:'beijing';
        // https://api.thinkpage.cn/v3/weather/daily.json?key=dofqsxboxkf0zp4i&location=beijing&language=zh-Hans&unit=c&start=0&days=5
var url='https://api.thinkpage.cn/v3/weather/daily.json?key=dofqsxboxkf0zp4i&location='+city+'&language=zh-Hans&unit=c&start=0&days=5';
console.log("城市地址"+url);
httpRequest(url, showWeather);