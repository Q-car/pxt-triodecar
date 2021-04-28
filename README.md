
> Open this page at [https://bigqubot.github.io/pxt-triodecar/](https://bigqubot.github.io/pxt-triodecar/)

> edited by webduino-cn

## Usage

### ``CarDirection``

Use the ``CarDirection`` blocks to control the car

```blocks 
basic.forever(() => {
    triodecar.CarDirection(triodecar.direction.foward)
})
```

### ``readPatrol``

Use the ``readPatrol`` blocks to control the car

```blocks 
basic.forever(() => {
    serial.writeLine("" + (triodecar.readPatrol(triodecar.Patrol.PatrolLeft)))
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/bigqubot/pxt-triodecar** and import

## Tutorials

* [tutorial](/pxt-triodecar/tutorial) | [start](https://makecode.microbit.org/#tutorial:github:q-car/pxt-triodecar/tutorial)



## Edit this project ![Build status badge](https://github.com/bigqubot/pxt-triodecar/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/bigqubot/pxt-triodecar** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
