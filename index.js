<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Multi-object Animation</title>
<style>
  .object {
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
  }
</style>
</head>
<body>
<div class="object" id="object1"></div>
<div class="object" id="object2"></div>
<div class="object" id="object3"></div>

<script>
  // 获取物体元素
  const object1 = document.getElementById('object1');
  const object2 = document.getElementById('object2');
  const object3 = document.getElementById('object3');

  // 定义物体的初始位置和速度
  let position1 = 0;
  let position2 = 0;
  let position3 = 0;
  const speed1 = 2;
  const speed2 = 3;
  const speed3 = 1.5;

  // 定义动画函数
  function animate() {
    // 更新物体位置
    position1 += speed1;
    position2 += speed2;
    position3 += speed3;

    // 设置物体位置
    object1.style.left = position1 + 'px';
    object2.style.left = position2 + 'px';
    object3.style.left = position3 + 'px';

    // 边界检测
    const maxWidth = window.innerWidth - object1.offsetWidth;
    if (position1 >= maxWidth || position1 <= 0) {
      speed1 *= -1; // 反向运动
    }
    if (position2 >= maxWidth || position2 <= 0) {
      speed2 *= -1; // 反向运动
    }
    if (position3 >= maxWidth || position3 <= 0) {
      speed3 *= -1; // 反向运动
    }

    // 递归调用动画函数
    requestAnimationFrame(animate);
  }

  // 启动动画
  animate();
</script>
</body>
</html>
