/* 诗藏本体论 v4.2 浪漫进阶交互 */
(function(){
  /* ========== 1. 二十四节气判定 ========== */
  function getSolarTerm(d){
    // 简化版二十四节气日期（公历），对应节气诗词主题
    var m = d.getMonth()+1, day = d.getDate();
    var terms = [
      {m:1,d:5,name:'小寒',poem:'小寒时节，炉边煮茶温酒',theme:'winter',color:'#6b8cae'},
      {m:1,d:20,name:'大寒',poem:'大寒已过，春信将至',theme:'winter',color:'#5a7d9a'},
      {m:2,d:4,name:'立春',poem:'春到人间草木知',theme:'spring',color:'#7cb342'},
      {m:2,d:19,name:'雨水',poem:'天街小雨润如酥',theme:'spring',color:'#4fc3f7'},
      {m:3,d:6,name:'惊蛰',poem:'春雷响，万物长',theme:'spring',color:'#66bb6a'},
      {m:3,d:21,name:'春分',poem:'春风十里不如你',theme:'spring',color:'#81c784'},
      {m:4,d:5,name:'清明',poem:'清明时节雨纷纷',theme:'spring',color:'#a5d6a7'},
      {m:4,d:20,name:'谷雨',poem:'谷雨春光晓，山川黛色青',theme:'spring',color:'#9ccc65'},
      {m:5,d:6,name:'立夏',poem:'晴日暖风生麦气',theme:'summer',color:'#ffb74d'},
      {m:5,d:21,name:'小满',poem:'小满小满，江河渐满',theme:'summer',color:'#ffcc80'},
      {m:6,d:6,name:'芒种',poem:'家家麦饭香，处处菱歌长',theme:'summer',color:'#ffd54f'},
      {m:6,d:21,name:'夏至',poem:'荷风送香气，竹露滴清响',theme:'summer',color:'#ff8a65'},
      {m:7,d:7,name:'小暑',poem:'何以消烦暑，端坐一院中',theme:'summer',color:'#ff7043'},
      {m:7,d:23,name:'大暑',poem:'赤日几时过，清风无处寻',theme:'summer',color:'#f4511e'},
      {m:8,d:7,name:'立秋',poem:'空山新雨后，天气晚来秋',theme:'autumn',color:'#ef6c00'},
      {m:8,d:23,name:'处暑',poem:'离离暑云散，袅袅凉风起',theme:'autumn',color:'#fb8c00'},
      {m:9,d:8,name:'白露',poem:'露从今夜白，月是故乡明',theme:'autumn',color:'#ffb300'},
      {m:9,d:23,name:'秋分',poem:'金气秋分，风清露冷秋期半',theme:'autumn',color:'#ffa000'},
      {m:10,d:8,name:'寒露',poem:'袅袅凉风动，凄凄寒露零',theme:'autumn',color:'#f57c00'},
      {m:10,d:23,name:'霜降',poem:'霜叶红于二月花',theme:'autumn',color:'#e65100'},
      {m:11,d:7,name:'立冬',poem:'冻笔新诗懒写，寒炉美酒时温',theme:'winter',color:'#546e7a'},
      {m:11,d:22,name:'小雪',poem:'晚来天欲雪，能饮一杯无',theme:'winter',color:'#78909c'},
      {m:12,d:7,name:'大雪',poem:'孤舟蓑笠翁，独钓寒江雪',theme:'winter',color:'#90a4ae'},
      {m:12,d:22,name:'冬至',poem:'冬至阳生春又来',theme:'winter',color:'#b0bec5'}
    ];
    for(var i=terms.length-1;i>=0;i--){
      if(m>terms[i].m || (m===terms[i].m && day>=terms[i].d)){
        return terms[i];
      }
    }
    return terms[terms.length-1];
  }

  /* ========== 2. 十二时辰氛围 ========== */
  function getShichen(h){
    if(h>=5 && h<7) return {name:'卯时 · 旭日东升',bg:'rgba(255,220,180,0.08)',tint:'#ffd180',poem:'日出江花红胜火'};
    if(h>=7 && h<9) return {name:'辰时 · 朝食',bg:'rgba(255,240,200,0.06)',tint:'#ffe082',poem:'晨兴理荒秽，带月荷锄归'};
    if(h>=9 && h<11) return {name:'巳时 · 隅中',bg:'rgba(255,248,220,0.04)',tint:'#fff59d',poem:'读书佳处，晨光满窗'};
    if(h>=11 && h<13) return {name:'午时 · 日中',bg:'rgba(255,240,180,0.05)',tint:'#ffd54f',poem:'日长睡起无情思，闲看儿童捉柳花'};
    if(h>=13 && h<15) return {name:'未时 · 日昳',bg:'rgba(255,230,200,0.05)',tint:'#ffcc80',poem:'竹影扫阶尘不动，月轮穿沼水无痕'};
    if(h>=15 && h<17) return {name:'申时 · 晡时',bg:'rgba(255,210,180,0.06)',tint:'#ffab91',poem:'山气日夕佳，飞鸟相与还'};
    if(h>=17 && h<19) return {name:'酉时 · 日落',bg:'rgba(255,160,120,0.08)',tint:'#ff8a65',poem:'夕阳无限好，只是近黄昏'};
    if(h>=19 && h<21) return {name:'戌时 · 黄昏',bg:'rgba(200,150,180,0.09)',tint:'#ce93d8',poem:'月上柳梢头，人约黄昏后'};
    if(h>=21 && h<23) return {name:'亥时 · 人定',bg:'rgba(100,120,180,0.08)',tint:'#9fa8da',poem:'床前明月光，疑是地上霜'};
    if(h>=23 || h<1) return {name:'子时 · 夜半',bg:'rgba(60,80,120,0.10)',tint:'#7986cb',poem:'姑苏城外寒山寺，夜半钟声到客船'};
    if(h>=1 && h<3) return {name:'丑时 · 鸡鸣',bg:'rgba(70,90,130,0.09)',tint:'#7986cb',poem:'三更灯火五更鸡，正是男儿读书时'};
    return {name:'寅时 · 平旦',bg:'rgba(150,130,180,0.07)',tint:'#b39ddb',poem:'平旦出秦关，晨光初照梁'};
  }

  /* ========== 3. 应用节气时辰氛围 ========== */
  function applySeasonalTheme(){
    var now = new Date();
    var term = getSolarTerm(now);
    var sc = getShichen(now.getHours());
    var theme = term.theme;
    
    // 页面氛围色调
    var root = document.documentElement;
    root.style.setProperty('--season-tint', term.color);
    root.style.setProperty('--shichen-bg', sc.bg);
    root.style.setProperty('--shichen-tint', sc.tint);
    
    // 添加氛围层
    var atmos = document.getElementById('shicang-atmosphere');
    if(!atmos){
      atmos = document.createElement('div');
      atmos.id = 'shicang-atmosphere';
      atmos.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;transition:background 1.5s ease;';
      document.body.appendChild(atmos);
    }
    atmos.style.background = `radial-gradient(ellipse at 30% 20%, ${sc.bg}, transparent 60%), radial-gradient(ellipse at 70% 80%, ${term.color}12, transparent 60%)`;
    
    // 节气小提示（左下角）
    var tip = document.getElementById('shicang-season-tip');
    if(!tip){
      tip = document.createElement('div');
      tip.id = 'shicang-season-tip';
      tip.style.cssText = 'position:fixed;bottom:80px;left:20px;z-index:100;font-family:STKaiti,KaiTi,serif;font-size:13px;color:var(--ink2,#6b4a2b);background:rgba(247,241,227,0.85);padding:8px 14px;border-radius:2px;border-left:3px solid var(--zhuyin,#8b2f2f);backdrop-filter:blur(4px);opacity:0.85;cursor:pointer;transition:opacity 0.3s;';
      tip.title = '点击切换节气主题显示';
      tip.addEventListener('click',function(){
        var s = localStorage.getItem('shicang_season_tip');
        if(s==='off'){ localStorage.removeItem('shicang_season_tip'); tip.style.display='block'; }
        else{ localStorage.setItem('shicang_season_tip','off'); tip.style.display='none'; }
      });
      document.body.appendChild(tip);
    }
    if(localStorage.getItem('shicang_season_tip')!=='off'){
      tip.innerHTML = `<div style="color:var(--zhuyin,#8b2f2f);font-weight:bold;font-size:14px;margin-bottom:2px">${term.name} · ${sc.name}</div><div style="font-style:italic">${term.poem}</div>`;
      tip.style.display = 'block';
    }
    
    // 根据节气加对应小装饰（粒子）
    if(theme==='spring' && !document.getElementById('spring-petals')){
      addSpringPetals();
    }
    if(theme==='winter' && now.getMonth()===11 && now.getDate()>15 && !document.getElementById('winter-snow')){
      addWinterSnow();
    }
  }

  /* ========== 4. 春日花瓣（加强） ========== */
  function addSpringPetals(){
    var petals = ['🌸','❀','✿','🌸','❀'];
    var canvas = document.createElement('canvas');
    canvas.id = 'spring-petals';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var P = [];
    for(var i=0;i<25;i++){
      P.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        s:Math.random()*14+8,
        v:Math.random()*0.8+0.3,
        a:Math.random()*Math.PI*2,
        va:(Math.random()-0.5)*0.02,
        petal:petals[Math.floor(Math.random()*petals.length)]
      });
    }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(var i=0;i<P.length;i++){
        var p = P[i];
        p.y += p.v;
        p.x += Math.sin(p.a)*0.5;
        p.a += p.va;
        if(p.y>canvas.height+20){ p.y=-20; p.x=Math.random()*canvas.width; }
        ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(p.a);
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = '#e8a0b4';
        ctx.font = p.s+'px serif';
        ctx.fillText(p.petal,0,0);
        ctx.restore();
      }
      requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize',function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  /* ========== 5. 冬日雪花 ========== */
  function addWinterSnow(){
    var canvas = document.createElement('canvas');
    canvas.id = 'winter-snow';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var S = [];
    for(var i=0;i<60;i++){
      S.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*3+1,
        v:Math.random()*1.2+0.4
      });
    }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      for(var i=0;i<S.length;i++){
        var s = S[i];
        s.y += s.v;
        s.x += Math.sin(s.y*0.01)*0.5;
        if(s.y>canvas.height+5){ s.y=-5; s.x=Math.random()*canvas.width; }
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize',function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  /* ========== 6. 求签：随机诗签 ========== */
  function addQiuqian(){
    var qian = document.createElement('div');
    qian.id = 'shicang-qian';
    qian.innerHTML = '<span style="font-size:20px">🎋</span>';
    qian.title = '求一签 · 得一诗';
    qian.style.cssText = 'position:fixed;bottom:20px;left:20px;width:48px;height:48px;background:var(--zhuyin,#8b2f2f);color:#f7f1e3;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;z-index:200;box-shadow:0 4px 14px rgba(139,47,47,0.4);font-size:18px;transition:transform 0.3s, box-shadow 0.3s;';
    qian.addEventListener('mouseenter',function(){ this.style.transform='scale(1.15) rotate(-10deg)'; });
    qian.addEventListener('mouseleave',function(){ this.style.transform=''; });
    qian.addEventListener('click',openQian);
    document.body.appendChild(qian);
  }
  
  var shiqian = [
    {poem:'海内存知己，天涯若比邻',from:'王勃《送杜少府之任蜀州》',explain:'有缘之人，相隔万里亦如在侧。今日所思，终有回响。'},
    {poem:'莫愁前路无知己，天下谁人不识君',from:'高适《别董大》',explain:'不必忧虑前路，你本身便是光。所到之处，自有识你之人。'},
    {poem:'行到水穷处，坐看云起时',from:'王维《终南别业》',explain:'顺其自然，山穷水尽处自有云开月明。不必急，路还长。'},
    {poem:'山重水复疑无路，柳暗花明又一村',from:'陆游《游山西村》',explain:'看似困局，转角便是新天。坚持一步，豁然开朗。'},
    {poem:'长风破浪会有时，直挂云帆济沧海',from:'李白《行路难》',explain:'此签上上。大风起兮云飞扬，你要的时机不远了。'},
    {poem:'但愿人长久，千里共婵娟',from:'苏轼《水调歌头》',explain:'思念之人，此刻亦在同一片月光下。心意相通，无需多言。'},
    {poem:'采菊东篱下，悠然见南山',from:'陶渊明《饮酒》',explain:'心安即是归处。不必追赶，慢下来自有风景。'},
    {poem:'会当凌绝顶，一览众山小',from:'杜甫《望岳》',explain:'志向高远者，必能登顶。今日积累，他日凌云。'},
    {poem:'两情若是久长时，又岂在朝朝暮暮',from:'秦观《鹊桥仙》',explain:'真情不在朝夕相伴，两心相知，距离亦是成全。'},
    {poem:'沉舟侧畔千帆过，病树前头万木春',from:'刘禹锡《酬乐天扬州初逢席上见赠》',explain:'往事已矣，向前看，万千新气象正在等你。'},
    {poem:'落红不是无情物，化作春泥更护花',from:'龚自珍《己亥杂诗》',explain:'所有失去，都以另一种方式归来。放下，才得新生。'},
    {poem:'纸上得来终觉浅，绝知此事要躬行',from:'陆游《冬夜读书示子聿》',explain:'此签劝学。心动不如行动，亲身走过方是真懂得。'},
    {poem:'问渠那得清如许，为有源头活水来',from:'朱熹《观书有感》',explain:'常学常新，永葆好奇。保持输入，内心自有清渠。'},
    {poem:'众里寻他千百度，蓦然回首，那人却在灯火阑珊处',from:'辛弃疾《青玉案·元夕》',explain:'苦苦寻觅之物，或许就在身边，回头便见。'},
    {poem:'等闲识得东风面，万紫千红总是春',from:'朱熹《春日》',explain:'东风已至，百花将开。美好的事情正在向你走来。'},
    {poem:'春风得意马蹄疾，一日看尽长安花',from:'孟郊《登科后》',explain:'上上签。所求之事，近期必有佳音。'},
    {poem:'海上生明月，天涯共此时',from:'张九龄《望月怀远》',explain:'此刻有人与你同望一轮月，思念不必说出口。'},
    {poem:'野火烧不尽，春风吹又生',from:'白居易《赋得古原草送别》',explain:'你比想象中更坚韧。跌倒了，站起来就是新生。'},
    {poem:'欲穷千里目，更上一层楼',from:'王之涣《登鹳雀楼》',explain:'站得高，看得远。再往前走一步，风景不同。'},
    {poem:'何当共剪西窗烛，却话巴山夜雨时',from:'李商隐《夜雨寄北》',explain:'相聚有期，耐心等待。他日重逢，共话今宵。'},
    {poem:'一蓑烟雨任平生',from:'苏轼《定风波》',explain:'豁达自在，不畏风雨。任他世事起伏，我自安然。'},
    {poem:'清水出芙蓉，天然去雕饰',from:'李白《经乱离后天恩流夜郎忆旧游书怀赠江夏韦太守良宰》',explain:'做你自己就好，无需刻意，本真最美。'},
    {poem:'千淘万漉虽辛苦，吹尽狂沙始到金',from:'刘禹锡《浪淘沙》',explain:'历经磨砺，终得真金。现在的辛苦，都是未来的勋章。'},
    {poem:'青山遮不住，毕竟东流去',from:'辛弃疾《菩萨蛮·书江西造口壁》',explain:'该来的总会来，该走的留不住。顺势而为，不必强留。'},
    {poem:'不要人夸颜色好，只留清气满乾坤',from:'王冕《墨梅》',explain:'不必迎合他人，做你自己，风骨自有清名。'},
    {poem:'不识庐山真面目，只缘身在此山中',from:'苏轼《题西林壁》',explain:'当局者迷。跳出来看，问题便清晰了。'},
    {poem:'谁言寸草心，报得三春晖',from:'孟郊《游子吟》',explain:'珍惜眼前人，莫待亲不在时空遗憾。'},
    {poem:'少壮不努力，老大徒伤悲',from:'汉乐府《长歌行》',explain:'此签劝学劝进。光阴宝贵，莫负好时光。'},
    {poem:'天生我材必有用，千金散尽还复来',from:'李白《将进酒》',explain:'你自有你的价值。不必妄自菲薄，属于你的终会来。'},
    {poem:'路漫漫其修远兮，吾将上下而求索',from:'屈原《离骚》',explain:'道路漫长，但方向正确。一步一步走，终抵彼岸。'}
  ];
  
  function openQian(){
    var q = shiqian[Math.floor(Math.random()*shiqian.length)];
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;font-family:STKaiti,KaiTi,serif;';
    var card = document.createElement('div');
    card.style.cssText = 'background:linear-gradient(135deg,#f7f1e3 0%,#ede2cb 100%);padding:50px 60px;border-radius:4px;max-width:420px;text-align:center;position:relative;border:2px solid #8b2f2f;box-shadow:0 20px 60px rgba(0,0,0,0.4);transform:scale(0.8);opacity:0;transition:all 0.5s cubic-bezier(0.34,1.56,0.64,1);';
    card.innerHTML = `
      <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:#8b2f2f;color:#f7f1e3;padding:6px 24px;font-size:15px;letter-spacing:4px;border-radius:2px">第${Math.floor(Math.random()*99)+1}签</div>
      <div style="font-size:26px;color:#8b2f2f;font-weight:bold;margin:20px 0 8px;letter-spacing:2px;line-height:1.6">${q.poem}</div>
      <div style="font-size:14px;color:#8B5A2B;margin-bottom:24px;font-style:italic">—— ${q.from}</div>
      <div style="width:60px;height:1px;background:#8b2f2f;margin:0 auto 20px"></div>
      <div style="font-size:15px;color:#3a2a1a;line-height:1.8;margin-bottom:30px">${q.explain}</div>
      <button id="qian-close" style="background:#8b2f2f;color:#f7f1e3;border:none;padding:10px 36px;font-family:STKaiti,KaiTi,serif;font-size:15px;letter-spacing:2px;cursor:pointer;border-radius:2px;transition:background 0.3s">谢过签文</button>
      <div style="margin-top:24px;font-size:11px;color:#8B5A2B;opacity:0.6">诗藏本体论 · 诗意占卜 · 仅供一笑</div>
    `;
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    setTimeout(function(){ card.style.transform='scale(1)'; card.style.opacity='1'; },50);
    overlay.addEventListener('click',function(e){
      if(e.target===overlay || e.target.id==='qian-close'){
        card.style.transform='scale(0.8)'; card.style.opacity='0';
        setTimeout(function(){ overlay.remove(); },400);
      }
    });
  }

  /* ========== 7. 墨痕阅读进度条 ========== */
  function addInkProgress(){
    var bar = document.createElement('div');
    bar.id = 'shicang-ink-progress';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#8b2f2f,#c0392b,#8b2f2f);z-index:9999;width:0;transition:width 0.1s;box-shadow:0 0 8px rgba(139,47,47,0.4);';
    document.body.appendChild(bar);
    
    function update(){
      var h = document.documentElement;
      var scrolled = h.scrollTop || document.body.scrollTop;
      var total = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      var p = total>0 ? (scrolled/total)*100 : 0;
      bar.style.width = p + '%';
    }
    window.addEventListener('scroll',update,{passive:true});
    update();
  }

  /* ========== 8. 悬停水墨晕染效果 ========== */
  function addInkHover(){
    var style = document.createElement('style');
    style.textContent = `
      .ink-hover { position:relative; overflow:hidden; transition:all 0.3s; }
      .ink-hover::before {
        content:''; position:absolute; top:50%; left:50%; width:0; height:0;
        background:radial-gradient(circle, rgba(139,47,47,0.12), transparent 70%);
        border-radius:50%; transform:translate(-50%,-50%);
        transition:width 0.6s, height 0.6s; z-index:-1;
      }
      .ink-hover:hover::before { width:200%; height:200%; }
      a, button, .poem-card, .book-item, .tab-item { transition:color 0.3s, background 0.3s, transform 0.3s; }
      a:hover, button:hover { color:var(--zhuyin,#8b2f2f) !important; }
      .poem-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(139,47,47,0.12); }
      /* 平滑滚动 */
      html { scroll-behavior:smooth; }
      /* 选中文字朱砂色 */
      ::selection { background:#8b2f2f; color:#f7f1e3; }
      /* 墨痕风格滚动条 */
      ::-webkit-scrollbar { width:8px; }
      ::-webkit-scrollbar-track { background:#f0e6d2; }
      ::-webkit-scrollbar-thumb { background:#c9a87c; border-radius:4px; }
      ::-webkit-scrollbar-thumb:hover { background:#8b2f2f; }
    `;
    document.head.appendChild(style);
  }

  /* ========== 9. 卷轴展开入场 ========== */
  function addScrollReveal(){
    var items = document.querySelectorAll('.poem-card, .book-item, .section-block, .module-card');
    items.forEach(function(el){
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s, transform 0.6s';
    });
    function reveal(){
      items.forEach(function(el){
        if(el.getBoundingClientRect().top < window.innerHeight - 80){
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }
    window.addEventListener('scroll',reveal,{passive:true});
    setTimeout(reveal,100);
    setTimeout(reveal,600);
  }

  /* ========== 初始化所有功能 ========== */
  function init(){
    if(document.body){
      applySeasonalTheme();
      addQiuqian();
      addInkProgress();
      addInkHover();
      setTimeout(addScrollReveal,200);
      // 每小时更新一次节气时辰
      setInterval(applySeasonalTheme, 3600000);
    } else {
      setTimeout(init,50);
    }
  }
  
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }
})();
