function spec(){var core=+document.getElementById('core').value,ram=+document.getElementById('ram').value,gpu=+document.getElementById('gpu').value,game=document.getElementById('game').value;
var need={genshin:{core:6,ram:16,gpu:2},star:{core:6,ram:8,gpu:1},wzry:{core:4,ram:8,gpu:1},pubg:{core:6,ram:8,gpu:1}}[game];
var pass=core>=need.core&&ram>=need.ram&&gpu>=need.gpu;
var tier,set;
if(core>=need.core+2&&ram>=need.ram&&gpu>=2){tier='高画质达标 ✅';set='DirectX/Vulkan · 6 核 · 8192MB · 高画质 · 锁 60(高刷可120)';}
else if(pass){tier='中画质流畅 ✅';set='DirectX · '+Math.min(6,core)+' 核 · '+Math.min(8192,ram*512)+'MB · 中画质 · 锁 60 · 关动态模糊';}
else{tier='偏低，建议降档 ⚠️';set='OpenGL · 内存调 2048-4096MB · 720P 低画质 · 锁 30 · 关高级图形';}
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>'+tier+'</div><p><b>建议设置：</b>'+set+'</p><p><small>务必先开 VT（提 50-100%）；双显卡笔记本把 dnplayer.exe 设高性能；中文路径是隐形兼容杀手，装纯英文路径。</small></p>';}
