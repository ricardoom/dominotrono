---
author: Ricardo G.
categories: []
date: 2018-02-17T09:07:37-05:00
draft: false
postimage: ''
postImageAlt: ''
figcaption: ''
tags: ['javascript', 'gardening']
title: 'Dryyp: A remote garden manager'
---

This project was conceived 

This idea came about whilst preparing my garden to be cared for by a neighbor. We were leaving for vacation and I was lamenting the lack of an automated system that could be controlled remotely or by a timing system. An additional motivation for this project is purely for professional development. The idea is to mock up the  product and grow and cultivate it, starting from basic concept to a finished product. It should come complete with functional and technical specs, wire-frames, screen designs, work flows, . While it may never see the light of day in terms of a real, functional product, it is a good exercise in product development.

<!--more-->

## A Project outline

### Story Frames

- the Dryp app tells you the story about your garden from day to day
- the Dryp is a configurable garden control system that lets you monitor, control and memorialize your garden using open source software and hardware.
- Users will access their "plot" via the Dryp interface and be able to see air and soil temps, soil pH, irrigation and ventilation settings.
- Dryp will visualize the status of various aspects of the garden.
- Dryp will allow user's to schedule
- Dryp will record and monitor Air and soil temp and save it to a database
- The Dryp application can help you control ventilation and lighting if connected
- micro-geography of plants can be mapped

### Functional specs / Software ~ Hardware interface

- Overall the project would be expressed as a web app
- requires a local weather stataion (arduino / raspberry pi)
- raspberryPi
  - hosts node app
  - hosts DB
  - tcp/ip communication
- remote, web based application to control various functions of an automated garden
  - node.js / golang / python / electron?
    - core application / controller: node / go / python
    - hardware control: processing / wiring
- collect data about garden status and store it
- requires access to local weather data

- Irrigation can be scheduled / programmed
- Soil pH can be monitored

### Users

- me, but could be useful for DIYer who possesses a fair amout of technical ability

### Wireframes

### Implementation

- Hardware
  - Arudino
  - raspberryPi
- Software
  - wiring / processing Arduino I/O
  - node
  - html / js front end UI
- Data
  - from weather station
  - data from garden sensors
  - soil temp
  - air temp
  - moisture levels
  - UV levels
- UI
  - main page / system status dashboard
    - see Data section above
  - irrigation control
  - greenhouse control
    - ventilation
  - _Optional:_ garden cameras
    - IR raspberryPi (NoIR?) cameras
- Database

### Screen Design

- primarily a small screen app,
  - tablet and desktop versions would be cool
