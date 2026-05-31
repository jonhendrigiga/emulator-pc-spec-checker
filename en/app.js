function spec(){var core=+document.getElementById('core').value,ram=+document.getElementById('ram').value,gpu=+document.getElementById('gpu').value,game=document.getElementById('game').value;
var need={genshin:{core:6,ram:16,gpu:2},star:{core:6,ram:8,gpu:1},wzry:{core:4,ram:8,gpu:1},pubg:{core:6,ram:8,gpu:1}}[game];
var pass=core>=need.core&&ram>=need.ram&&gpu>=need.gpu,tier,set;
if(core>=need.core+2&&ram>=need.ram&&gpu>=2){tier='High quality OK';set='DirectX/Vulkan · 6 cores · 8192MB · high · 60(120)';}
else if(pass){tier='Smooth at medium';set='DirectX · '+Math.min(6,core)+' cores · '+Math.min(8192,ram*512)+'MB · medium · 60fps';}
else{tier='Below spec - lower settings';set='OpenGL · 2048-4096MB · 720p low · 30fps';}
document.getElementById('out').style.display='block';
document.getElementById('out').innerHTML='<div class=rec>'+tier+'</div><p><b>Settings:</b> '+set+'</p><p><small>Always enable VT (+50-100%); set dnplayer.exe to high performance on dual-GPU laptops; install to an ASCII path.</small></p>';}