---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
categories: "portfolio"
author: Ricardo G.
sqipImage: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/sqip.svg"
portfolioHero1x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/placeHolder_sm.png"
portfolioHero2x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}heroPlaceholder@2x.png"
portfolioHero3x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/heroPlaceholder@3x.png"
portfolioHeroAlt: ""
heroFigcaption: ""
postimage1x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/placeHolder_sm.png"
postimage2x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/placeHolder_sm@2x.png"
postimage3x: "../media/portfolio/{{ replace .TranslationBaseName "-" "_" | lower }}/placeHolder_sm@3x.png"
postimagealt: ""
figcaption: ""
svgClipObjectClass: ""
svgColorClass: ""
tags: []
weight: 10
---
