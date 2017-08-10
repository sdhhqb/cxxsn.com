// 全局配置
let appConf = {
  info: 'app configure',
  // 接口根路径
  apiPath: '/',
  // 引用静态文件根路径
  contextPath: '/',
  // 路由根路径
  routeRootPath: '/'
};
if (location.pathname.match(/^\/cxxsn_com/)) {
  appConf.contextPath === '/cxxsn_com/';
  appConf.routeRootPath = '/cxxsn_com/';
}
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
