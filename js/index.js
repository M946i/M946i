var text = document.getElementById('pagetitle').innerHTML; // 获取div标签中的文本内容
var colors = ['#d10909', '#d14209', '#d15c09','#d17e09','#d1ca09','#a2d109','#88d109','#52d109','#4cd109','#1ad109','#09d148','#09d1c0','#09b6d1','#0981d1','#094cd1','#0909d1','#5609d1','#7e09d1','#b309d1','#d109b3','#d10959','#d10924']; // 定义颜色数组
var index = 0; // 颜色数组的索引

setInterval(function() { // 定时器，每隔一定时间执行一次代码
  index = (index + 1) % colors.length; // 在颜色数组中循环取值
  var color = colors[index]; // 获取当前颜色
  var newText = ''; // 新文本字符串
  for (var i = 0; i < text.length; i++) { 
    var char = text.charAt(i); // 获取当前字符
    newText += '<span style="color: ' + color + '">' + char + '</span>'; // 使用span标签包裹字符，并设置样式
  }
  document.getElementById('pagetitle').innerHTML = newText
}, 40)
function updateTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();
  
    // 将单个数字转换为两个数字
    hour = addZero(hour);
    minute = addZero(minute);
    seconds = addZero(seconds);
  
    // 更新时分秒的显示
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".seconds").innerHTML = seconds;
  }
  
  function addZero(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }
  
  // 每秒钟更新一次时间
  setInterval(updateTime, 1000);
  
  var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function setVolume(direction) {
  var currentVolume = audio.volume;
  if (direction == '-') { // 减小音量
    if (currentVolume > 0) {
      audio.volume -= 0.1;
    }
  } else if (direction == '+') { // 增大音量
    if (currentVolume < 1) {
      audio.volume += 0.1;
    }
  }
}
