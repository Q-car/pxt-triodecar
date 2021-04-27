# 教程1：用micro:bit按钮控制电机

## Introduction @unplugged



## step 1 

从 ``||input:输入||`` 中将``||input:当按钮A被按下时||``拖放至编辑区内

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## step 2
将triodecar的积木
```blocks
input.onButtonPressed(Button.A, function () {
    triodecar.CarDirection(triodecar.direction.right)
})
```
## 

``||input:temperature||``  ``||basic:show number||``

```blocks
basic.showNumber(input.temperature())
basic.pause(1000)
```

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
