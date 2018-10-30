//////
///// svg.js 
/////
const svgContainer = document.querySelector('.svgjs');

if (svgContainer != null) {
//console.log(svgContainer);

const draw = SVG(svgContainer).size('100%', '100%').viewbox(0,0,1000,1000),
        circle = draw.circle(50).fill('rgba(255,255,200,0.3)').move(120, 20),
        mask = draw.mask().add(circle.clone().fill('rgba(200,100,50,.5)')),
        path = draw.path("M760.3239,900.668S767,906,771,912c0,0-31,41-92.48609,51.02112C662,967,610,967,562.74944,910.5292,503,818,413,605,351.0719,586.52063a66.75826,66.75826,0,0,0-29.20819-6.82773c-10.8646-.23109-21.37952,2.01431-31.98247,3.72468-2.48758.40125-3.22047,2.13721-2.82874,4.43535.78289,4.593,2.45936,23.21372,2.4,27.93631-.0201,1.59927.14866,2.72073,2.0294,3.29209C295.205,620.21219,303,622,315.78251,621.31744a147.88881,147.88881,0,0,0,30.04361-5.26365c9.76495-2.84938,18.56066-7.01647,26.23866-13.62463l1.61944-1.61943c10.52629-10.26335,19.12491-22.34742,30.66327-31.70957,4.84728-3.93294,9.57689-7.976,14.63779-11.66928,9.35246-6.82521,19.99062-11.03753,30.42825-15.68371C449.41353,541.74717,410,492,396,461c-13.23345-29.30265-22.69671-60.34812-43.96028-84.93051C307,324,209,322,209,322c.40486,0,31.15591-13.89315,79-9,88,9,130.93712,64.63873,142.97224,79.07117C440.30019,403.25723,466.30135,458.42426,477,473c20.99926,28.97644,90.61135,68.70042,90.61135,68.70042-10.63.87124-20.2743,5.10767-29.43634,9.94082C528,559,502.80451,586.08835,492.9758,597.44835,481.13039,611.13925,453,635,430,644"),
        length = path.length()
  
//const maskPath = path.fill('none').stroke({width: 1, color: 'rgba(0, 0, 0, 1)'})
//const visiblePath = path.fill('none').stroke({width: 5, color: 'rgba(0, 0, 0, 0.5)'})
// var cover = draw.circle(100, 100).move(20, 20).fill('#f06');


//var hide = draw.circle(100, 100).move(20, 20).fill('#c8f');
// mask.animate(10000, '<>').during(function(pos, morph, eased){
  
//   let m = path.pointAt(eased * length)
//   circle.center(m.x, m.y).fill('rgba(255, 225, 225, 0.5)')
//   path.maskWith(mask)
// }).loop(true, true);
const maskPath = path.fill('none').stroke({width: 1, color: 'rgba(255,255, 255, 0.5)'});

circle.animate(10000, '<>').during(function(pos, morph, eased){
    
    var p = maskPath.pointAt(eased * length)
     circle.center(p.x, p.y).fill('rgba(255, 0, 102, .95)')
    //mask.add(circle.center(p.x, p.y))
    //maskPath.maskWith(mask.center(p.x, p.y))
}).loop(true, true);

////

// var draw = SVG(svgContainer).size(300, 130)
// var circle = draw.circle(50).fill('#fff')

// var mask = draw.mask()
// mask.add(circle.center(35, 35))
// mask.add(circle.clone().center(70, 70).size(70).fill('#ccc'))
// mask.add(circle.clone().center(90, 30).size(30).fill('#999'))
// mask.add(circle.clone().center(105, 115).size(50).fill('#333'))

// var rect = draw.rect(100, 100).move(20, 20).fill('#f06')
// rect.maskWith(mask)

// rect.on('mouseover', function() {
// 	this.animate(300, '<>').fill('#0f9')
// })
// rect.on('mouseout', function() {
// 	this.animate(300, '<>').fill('#f06')
// })


}
///
/// end svg.js
///