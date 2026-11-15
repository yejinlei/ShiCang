/* 诗藏本体论 · 统一朱红宣纸顶栏注入
   所有页面只需要 <script src="(相对路径)topnav.js"></script>
   就会自动在 body 开头注入唯一导航，无需手写 nav */
(function(){
  // 根据当前页面路径判断 base 前缀与激活项
  var path = location.pathname;
  var base = '';
  // 判断当前所在目录层级
  var m = path.match(/\/ShiCang\/(?:shicang-([^/]+)\/)?/);
  var activeKey = 'home';
  if (m && m[1]) {
    var dir = m[1];
    // 映射目录 -> 激活项 key
    var dirMap = {
      'jingdu':'jingdu','mingpian':'jingdu','poem':'jingdu','ci':'jingdu','qu':'jingdu','chuci':'jingdu',
      'galaxy':'galaxy','road':'galaxy','xinghe':'galaxy','poet-journey':'galaxy','map':'galaxy',
      'cipai':'cipai',
      'imagery':'imagery',
      'meipi':'meipi','pingshi':'meipi',
      'duilian':'duilian','duilian-corpus':'duilian','zoumadeng':'duilian',
      'yunshu':'yunshu','rili':'yunshu'
    };
    activeKey = dirMap[dir] || '';
    base = '../';
  } else {
    activeKey = 'home';
    base = '';
  }

  var NAV = [
    {k:'home',   t:'首页',    href:base+'index.html'},
    {k:'jingdu', t:'名篇精读', href:base+'shicang-jingdu/'},
    {k:'galaxy',t:'诗路星河', href:base+'shicang-galaxy/'},
    {k:'cipai', t:'词牌',    href:base+'shicang-cipai/'},
    {k:'imagery',t:'意象',   href:base+'shicang-imagery/'},
    {k:'meipi', t:'眉批',    href:base+'shicang-meipi/'},
    {k:'duilian',t:'对弈',   href:base+'shicang-duilian/'},
    {k:'yunshu',t:'韵书',    href:base+'shicang-yunshu/'}
  ];

  var html = '<nav class="shicang-topnav" id="shicangSiteNav"><div class="shicang-topnav-inner">'
    + '<a href="'+base+'" class="shicang-logo"><span class="shicang-logo-mark">詩</span><span>诗藏本体论</span></a>'
    + '<div class="shicang-nav-links">';
  NAV.forEach(function(it,i){
    var cls = 'shicang-nav-link' + (it.k===activeKey?' active':'');
    if(i>0) html += '<span class="shicang-nav-sep">·</span>';
    html += '<a href="'+it.href+'" class="'+cls+'">'+it.t+'</a>';
  });
  html += '</div>'
    + '<button class="shicang-menu-btn" id="shicangMenuBtn" aria-label="菜单">☰</button>'
    + '<div class="shicang-mobile-menu" id="shicangMobileMenu">';
  NAV.forEach(function(it){
    var cls = 'shicang-mnav-link' + (it.k===activeKey?' active':'');
    html += '<a href="'+it.href+'" class="'+cls+'">'+it.t+'</a>';
  });
  html += '</div></div></nav>';

  // DOM ready 后注入到 body 最顶部，并移除页面里旧的 shicang-topnav
  function inject(){
    // 清掉旧版重复 nav（页面手写的那些）
    var olds = document.querySelectorAll('nav.shicang-topnav, .shicang-topnav:not(#shicangSiteNav), .topbar, .page-banner-tip, .page-topbar');
    olds.forEach(function(n){ n.remove(); });

    // 插入新 nav
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    var nav = wrap.firstElementChild;
    document.body.insertBefore(nav, document.body.firstChild);

    // 移动端菜单按钮
    var btn = document.getElementById('shicangMenuBtn');
    var menu = document.getElementById('shicangMobileMenu');
    if(btn && menu){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        menu.classList.toggle('open');
      });
      document.addEventListener('click', function(e){
        if(!menu.contains(e.target) && e.target!==btn){
          menu.classList.remove('open');
        }
      });
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
