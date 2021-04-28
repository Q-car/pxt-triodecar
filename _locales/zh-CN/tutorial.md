# 教程1：使用micro:bit按钮控制电机

## step 1 @unplugged

本节教程将指导学员在MakeCode中应用TriodeCar扩展积木来构建程序，使用micro:bit的按钮来控制TriodeCar左右两个电机的启停，控制TriodeCar行进方向。

在此教程以外进行MakeCode编程需要导入TriodeCar扩展积木，链接：https://github.com/Q-car/pxt-triodecar

点击确定开始教程。

## step 2 

从 ``||input:输入||`` 中将``||input:当按钮A被按下时||``积木拖放至编辑区内。

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## step 3

从``||TriodeCar:TriodeCar||``中将``||TriodeCar:let the car go foward||``积木置入``||input:当按钮A被按下时||``积木中。

将此积木的可选项改为"turn right",即变更为``||TriodeCar:let the car turn right||``。

此时的程序实现的功能为：按钮A被按下时，TriodeCar向右行驶。

```blocks
input.onButtonPressed(Button.A, function () {
    triodecar.CarDirection(triodecar.direction.right)
})
```

## step 4

鼠标悬停在编辑区中的``||input:当按钮A被按下时||``积木上，单击鼠标右键，弹出一列选项，点击第一个选项"重复"，即可将此积木与其内部的积木一同复制一遍，并会自动放置在编辑区内。

将复制出的``||input:当按钮A被按下时||``积木中的可选项改为"B"，即变更为``||input:当按钮B被按下时||``。

同时将``||TriodeCar:let the car turn right||``积木中的可选项改为"turn left"，即变更为``||TriodeCar:let the car turn left||``。

此时实现的功能为：按钮B被按下时，TriodeCar向左行驶。

```blocks
input.onButtonPressed(Button.A, function () {
    triodecar.CarDirection(triodecar.direction.right)
})
input.onButtonPressed(Button.B, function () {
    triodecar.CarDirection(triodecar.direction.left)
})
```

## step 5

重复上一步的操作复制``||input:当按钮A被按下时||``积木，可选项改为"A+B" 。

同时将``||TriodeCar:let the car turn right||``积木中的可选项改为"go foward"。

此处实现的功能为：按钮A与按钮B被同时按下时，TriodeCar向前行驶。

```blocks
input.onButtonPressed(Button.A, function () {
    triodecar.CarDirection(triodecar.direction.right)
})
input.onButtonPressed(Button.B, function () {
    triodecar.CarDirection(triodecar.direction.left)
})
input.onButtonPressed(Button.AB, function () {
    triodecar.CarDirection(triodecar.direction.foward)
})
```

## step 6

从``||TriodeCar:TriodeCar||``中将``||TriodeCar:let the car go foward||``积木置入 ``||basic:当开机时||``，将可选项改为"stop"。

此处实现的功能为：micro:bit开机或重置时停止TriodeCar的电机。

```blocks
 triodecar.CarDirection(triodecar.direction.stop)
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
