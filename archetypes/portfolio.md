---
title: '{{ replace .TranslationBaseName '-' ' ' | title }}'
date: {{ .Date }}
draft: false
categories: 'portfolio'
author: Ricardo G.
## Placeholders
postImageSqip: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/sqip.svg'

portfolioHeroSqip: '../media/portfolio/{{ replace .TranslationBaseName '-' '_' | lower }}/sqip.svg'
## Hero Images
portfolioHero1x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.portfolioHero }}{{ .Site.Params.cloudinary.cloudId }}{{ replace .TranslationBaseName '-' '_' | lower }}/placeHolder_sm.png'
##
portfolioHero2x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.portfolioHero }}{{ .Site.Params.cloudinary.cloudId }}{{ replace .TranslationBaseName '-' '_' | lower }}/heroPlaceholder@2x.png'
##
portfolioHero3x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.portfolioHero }}{{ .Site.Params.cloudinary.cloudId }}{{ replace .TranslationBaseName '-' '_' | lower }}/heroPlaceholder@3x.png'
##
portfolioHeroAlt: ''
# heroFigcaption goes on the portfolio/ landing page
heroFigcaption: ''
postImage1x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.postImage }}{{ .Site.Params.cloudinary.cloudID }}{{ replace .TranslationBaseName '-' '_' | lower }}/file-name.jpg'
postImage2x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.postImage }}{{ .Site.Params.cloudinary.cloudID }}{{ replace .TranslationBaseName '-' '_' | lower }}/file-name.jpg'
postImage3x: '{{ .Site.Params.cloudinary.cloudPath }}{{ .Site.Params.cloudinary.postImage }}{{ .Site.Params.cloudinary.cloudID }}{{ replace .TranslationBaseName '-' '_' | lower }}/file-name.jpg'
postImageAlt: ''
svgClipObjectClass: ''
svgColorClass: ''
projectRoles: ['role one', 'role two']
projectClients: ['client A', 'client B']
projectCredits: ['collaborator 1', 'collaborator 2']
projectDate: ''
tags: []
weight: 10
externalURL: ''
projectDesc: ''
newLayout: #true or false
---
