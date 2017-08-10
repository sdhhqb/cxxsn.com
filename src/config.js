// 全局配置
let appConf = {
  info: 'app configure',
  apiPath: '',
  contextPath: '',
  routeRootPath: ''
};
window.AppConf = appConf;

function setSize() {
  let ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let appw;
  let apph;

  appw = ww;
  apph = wh;

  window.APP_W = appw;
  window.APP_H = apph;
}

window.addEventListener('resize', function () {
  setSize();
});
setSize();
