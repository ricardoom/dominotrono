---
author: Ricardo G.
categories: []
date: 2018-02-17T09:07:37-05:00
draft: false
tags: []
title: "Dryp: A remote garden manager"
---
This project is to fulfill a couple ends. The first is purely for professional development and add new and releveant work to my portfolio. The idea is to create a "mock" product and run it through from basic concept to a finished product complete w/ screen designs, work flows, functional and technical specs. While it may never see the light of day in terms of a real, functional product, I think that, as a project demonstrating the breadth of my abilities it will be apparent.



## A Project outline

### Story Frames
* Overall the project would be expressed as a web app
* a user will visit the site to see aggregated stats on their plot
* Status of various aspects of garden can be observed
* Irrigation can be scheduled / programmed
* Soil pH can be monitored
* Air and soil temp can be recorded and monitored
* If part of a greenhouse ventilation can controlled
* geography of plants can be mapped

### Functional specs
* remote, web based application to control various functions of an automated garden
* collect data about garden status and store it
* requires access to local weather data
* requires a local weather stataion (arduino / raspberry pi)

### Users
* me, but could be useful for DIYer who possesses a fair amout of technical ability

### Wireframes

### Implementation
* Hardware
  - Arudino
  - raspberryPi
* Software
  - wiring / processing Arduino I/O
  - node
  - html / js front end UI
* Data
  - from weather station
  - data from garden sensors
  - soil temp
  - air temp
  - moisture levels
  - UV levels
* UI
  - main page / system status dashboard
    * see Data section above
  - irrigation control
  - greenhouse control
    * ventilation
  - _Optional:_ garden cameras
    * IR raspberryPi (NoIR?) cameras
* Database

### Screen Design
* primarily a small screen app,
  - tablet and desktop versions would be cool
