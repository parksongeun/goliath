 $(document).ready(function() {
  var canvas = $('#canvas')[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 0.5;
    ctx.lineCap = 'round';
    
    
    var init = [];
    var maxParts = 1000;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 6,
        ys: Math.random() * 10 + 10
      })
    }
    
    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }
    
    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }
    
    setInterval(draw, 30);
    
  }
});


function play(){
var audio = document.getElementById("audio");
audio.play()
}

$(function(){
  $('.play').click(function(){
  // [재생] 버튼을 클릭하면 -webkit-animation-play-state: running 속성 적용
    $('.test').css('animation-play-state','running');
  });
  $('.stop').click(function(){
  // [멈춤] 버튼을 클릭하면 -webkit-animation-play-state: paused 속성 적용
    $('.test').css('animation-play-state','paused');
  });
});

$(function(){
  $('.play').click(function(){
  // [재생] 버튼을 클릭하면 -webkit-animation-play-state: running 속성 적용
    $('.test2').css('animation-play-state','running');
  });
  $('.stop').click(function(){
  // [멈춤] 버튼을 클릭하면 -webkit-animation-play-state: paused 속성 적용
    $('.test2').css('animation-play-state','paused');
  });
});

$(function(){
  $('.play').click(function(){
  // [재생] 버튼을 클릭하면 -webkit-animation-play-state: running 속성 적용
    $('.test3').css('animation-play-state','running');
  });
  $('.stop').click(function(){
  // [멈춤] 버튼을 클릭하면 -webkit-animation-play-state: paused 속성 적용
    $('.test3').css('animation-play-state','paused');
  });
});