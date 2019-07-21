var infoWin;
var tableDom;
/**
 * 封装便捷的撞题
 * @param {AMap.Map} map
 * @param {Array} event
 * @param {Object} content
 */
function openInfoWin(map, event, content) {
    if (!infoWin) {
        infoWin = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            offset: new AMap.Pixel(100, 70)
        });
    }

    var x = event.offsetX;
    var y = event.offsetY;
    var lngLat = map.containerToLngLat(new AMap.Pixel(x, y));

    if (!tableDom) {
        let infoDom = document.createElement('div');
        infoDom.className = 'info';
        tableDom = document.createElement('table');
        tableDom.style.margin = 'auto';
        infoDom.appendChild(tableDom);
        infoWin.setContent(infoDom);
    }

    var trStr = '';
    for (var name in content) {
        //console.log(content[name]);
        if (content[name] !== '<i><font size="1">' + "</font></i>"){
            var val = content[name]
            trStr +=
                '<tr>' +
                    '<td class="content">' + val + '</td>' +
                '</tr>'
        }
    }

    tableDom.innerHTML = trStr;
    infoWin.open(map, lngLat);
}

function closeInfoWin() {
    if (infoWin) {
        infoWin.close();
    }
}