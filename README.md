# Map-of-Graduation-Direction
A visual distribution map of graduation destinations, using AMAP API.

DEMO: https://h5.app.pizyds.com/chzx-2019-11-byqx/

## 一个可视化的毕业去向分布地图，使用了高德地图API。

技术不佳，文档翻遍。东改西改，代码凌乱。

但是可变数据均在 `.\js\schoools.js` 下，可直接修改使用。

本地调试建议建立一小型http服务器，如不更换API Key，~~请在hosts里将`localhost.pizyds.com`解析至`127.0.0.1`~~，全局安装express后，可直接运行`express.js`来建立本地http服务器，访问`localhost.pizyds.com:8080`来进行调试（我的API设有Referer限制）。

建议电脑端浏览，手机端尚可，但未做界面适配。
