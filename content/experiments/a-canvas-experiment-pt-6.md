---
title: "A Canvas Experiment Pt 6"
date: 2017-12-27T18:24:35-05:00
categories: "experiments"
draft: false
author: Ricardo G.
tags: ["test", "sass", "canvas", "templates"]
---
This is moving right along. Faithful readers will now see I have created a custom Hugo short-code that allows us to easily embed canvas elements into a markdown file. Yeah. I've also conimaged Gulp to concatenate and uglify the javascript so we can use multiple project files to work from but we serve a nice minified and concatenated javascript file. Next up... lets do the same minifiying to our css shall we?

Ultimately I think Hugo logic would be better at creating our  

{{< image_wrapper class="portfolio-image-wrapper" >}}
    {{< image srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w" srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w" srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w" srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w" src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png" class="image-block__100" alt="this image is only a placeholder there is nothing to see" figcaption="This Image is the supplied caption yeah..." figcaption="The Main image..." >}}
{{< /image_wrapper >}}
{{< image_wrapper class="portfolio-image-wrapper" >}}
    {{< image srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w" srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w" srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w" srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w" src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png" class="image-block__50" alt="this image is only a placeholder there is nothing to see" figcaption="This Image is the supplied caption yeah..." >}}
    {{< image srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w" srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w" srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w" srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w" src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"  class="image-block__50" alt="this image is only a placeholder there is nothing to see" figcaption="This Image is the supplied caption yeah..." >}}
{{< /image_wrapper >}}
{{< image_wrapper class="portfolio-image-wrapper" >}}
    {{< image srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w" srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w" srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w" srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w" src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png" class="image-block__33" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__33" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__33" >}}
{{< /image_wrapper >}}
{{< image_wrapper class="portfolio-image-wrapper" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__25" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__25" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__25" >}}
    {{< image 
    srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
    srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
    srcsetThree="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png 320w"
    srcsetFour="/media/portfolio/placeholders/desktopPlaceHolderTemplate640.png 640w"
    src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png"
    class="image-block__25" >}}
{{< /image_wrapper >}}