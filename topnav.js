/* 诗藏本体论 · 统一朱红宣纸顶栏（v6.2 诗人专辑版） */
(function(){
  'use strict';

  // ==== 计算 base 路径与激活项 ====
  var path = location.pathname;
  var prefix = '';
  var m = path.match(/shicang-([a-zA-Z-]+)/);
  if (m) prefix = '../'; // 子目录页统一用 ../ 回到根

  var active = 'home';
  if (m) {
    var d = m[1];
    if (/^(jingdu|mingpian|poem|ci|qu|chuci)$/.test(d)) active = 'jingdu';
    else if (d === 'poets') active = 'poets';
    else if (/^(galaxy|road|xinghe|poet-journey|map)$/.test(d)) active = 'galaxy';
    else if (d === 'cipai') active = 'cipai';
    else if (d === 'imagery') active = 'imagery';
    else if (/^(meipi|pingshi)$/.test(d)) active = 'meipi';
    else if (/^(duilian|duilian-corpus|zoumadeng)$/.test(d)) active = 'duilian';
    else if (/^(yunshu|rili)$/.test(d)) active = 'yunshu';
  }

  var NAV = [
    {k:'home',   t:'首页',    href: prefix + 'index.html'},
    {k:'jingdu', t:'名篇精读', href: prefix + 'shicang-jingdu/'},
    {k:'poets', t:'诗人',     href: prefix + 'shicang-poets/'},
    {k:'galaxy',t:'诗路星河', href: prefix + 'shicang-galaxy/'},
    {k:'cipai', t:'词牌',    href: prefix + 'shicang-cipai/'},
    {k:'imagery',t:'意象',   href: prefix + 'shicang-imagery/'},
    {k:'meipi', t:'眉批',    href: prefix + 'shicang-meipi/'},
    {k:'duilian',t:'对弈',   href: prefix + 'shicang-duilian/'},
    {k:'yunshu',t:'韵书',    href: prefix + 'shicang-yunshu/'}
  ];

  // ==== 构建 nav HTML ====
  var navHtml =
    '<nav class="shicang-topnav" id="shicangSiteNav">' +
      '<div class="shicang-topnav-inner">' +
        '<a href="' + prefix + '" class="shicang-logo">' +
          '<span class="shicang-logo-mark">詩</span>' +
          '<span>诗藏本体论</span>' +
        '</a>' +
        '<div class="shicang-nav-links">';
  for (var i=0; i<NAV.length; i++){
    if (i>0) navHtml += '<span class="shicang-nav-sep">·</span>';
    var cls = 'shicang-nav-link' + (NAV[i].k === active ? ' active' : '');
    navHtml += '<a href="' + NAV[i].href + '" class="' + cls + '">' + NAV[i].t + '</a>';
  }
  navHtml +=
        '</div>' +
        '<button class="shicang-menu-btn" id="shicangMenuBtn" aria-label="菜单">☰</button>' +
        '<div class="shicang-mobile-menu" id="shicangMobileMenu">';
  for (var j=0; j<NAV.length; j++){
    var c2 = 'shicang-mnav-link' + (NAV[j].k === active ? ' active' : '');
    navHtml += '<a href="' + NAV[j].href + '" class="' + c2 + '">' + NAV[j].t + '</a>';
  }
  navHtml += '</div></div></nav>';

  // ==== 清理旧导航 ====
  function cleanupOld(){
    try {
      // 1. 先移除我们自己可能已经注入过的（防重复）
      var old = document.getElementById('shicangSiteNav');
      if (old && old._injected) old.parentNode.removeChild(old);

      // 2. 常见旧顶栏 class
      var classes = [
        '.navbar','.topbar','.topnav','.top-nav','.site-nav','.site-header',
        'header.site-header','.main-nav','.header-nav','.nav-bar','.app-header',
        '.page-banner-tip','.page-topbar','.shicang-breadcrumb',
        'nav.nav','nav.scroll-unfold','nav.scroll-nav',
        '#topbar','#navbar','#siteNav','#mainNav'
      ];
      for (var i=0; i<classes.length; i++){
        var els = document.querySelectorAll(classes[i]);
        for (var j=0; j<els.length; j++){
          var el = els[j];
          if (el.id !== 'shicangSiteNav') el.parentNode.removeChild(el);
        }
      }

      // 3. 关键词扫描：body 最前面的横向容器若含"诗藏本体论"+多个导航链接，判定为旧导航
      var kids = document.body.children;
      var KEYS = ['诗藏本体论','名篇精读','诗路星河','诗人轨迹','诗词地图','词牌格律','意象图谱','诗话眉批','对联斗巧','联语集对','韵书查询','诗河星海','词林','曲林','辞赋','星河'];
      for (var k=0; k<Math.min(kids.length, 10); k++){
        var el = kids[k];
        if (!el || el.id === 'shicangSiteNav') continue;
        if (/^(SCRIPT|STYLE|LINK)$/.test(el.tagName)) continue;
        var txt = (el.innerText || el.textContent || '').replace(/\s+/g,'');
        if (!txt) continue;
        var hits = 0;
        if (txt.indexOf('诗藏本体论') >= 0) hits += 5;
        for (var ki=0; ki<KEYS.length; ki++){
          if (txt.indexOf(KEYS[ki]) >= 0) hits++;
        }
        if (hits >= 4){
          var aCount = el.querySelectorAll('a').length;
          var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {height:999};
          if (aCount >= 3 || r.height < 200){
            el.parentNode.removeChild(el);
          }
        }
      }
    } catch(e){
      console.warn('[topnav] cleanup error', e);
    }
  }

  // ==== 注入 ====
  function inject(){
    cleanupOld();

    var wrap = document.createElement('div');
    wrap.innerHTML = navHtml;
    var navEl = wrap.firstElementChild;
    navEl._injected = true;

    if (document.body.firstChild){
      document.body.insertBefore(navEl, document.body.firstChild);
    } else {
      document.body.appendChild(navEl);
    }

    // 移动端菜单
    var btn = document.getElementById('shicangMenuBtn');
    var menu = document.getElementById('shicangMobileMenu');
    if (btn && menu){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        menu.classList.toggle('open');
      });
      document.addEventListener('click', function(e){
        if (!menu.contains(e.target) && e.target !== btn){
          menu.classList.remove('open');
        }
      });
    }

    // 稍后再清一次（防止异步脚本再插老导航）
    setTimeout(cleanupOld, 200);
    setTimeout(cleanupOld, 800);
  }

  function boot(){
    if (!document.body){
      setTimeout(boot, 20);
      return;
    }
    inject();
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
