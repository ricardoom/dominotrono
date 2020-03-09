---
author: Ricardo G.
categories: ['experiments']
date: 2019-01-02T23:02:49-05:00
draft: false
tags: ['GSAP']
title: 'Wear the Green Socks'
vendorJS: 'gsapJS'
experimentJS: 'whatsthehaps.js'
---

Trying another library. just to see...

<!--more-->

one should actually make something instead of endlessly tinkering w/ the tooling... just saying.

{{< experiment >}}

<style>
  .title {color: pink;}
  .box {
  width:50px;
  height:50px;
  position:relative;
  border-radius:6px;
  margin-top:4px;
  display:inline-block;
  line-height:50px;
  text-align:center;
  color:#333;
  
}
.green{
  background-color:#6fb936;
}

.orange {
  background-color:#f38630;
}
.grey {
  background-color:#989898;
}

</style>
<h2 class="title">gsap.to() Basic Usage</h2>
<div class="box orange"></div>
<div class="box grey"></div>
<div class="box green"></div>
{{< /experiment >}}
