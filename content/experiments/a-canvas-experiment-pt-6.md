---
title: "A Canvas Experiment Pt 6"
date: 2017-12-27T18:24:35-05:00
categories: "experiments"
draft: false
author: Ricardo G.
tags: ["test", "sass", "canvas", "templates"]
vendorJS: "paperJS"
---
This post is serves up our example screen w/ placeholder images set to the right resolution for the right screen 
content/media/desktopPlaceHolderTemplate.png
{{< image_wrapper class="portfolio-image-wrapper" >}}

    {{< image 
    srcsetOne="/media/desktopPlaceHolderTemplate1280@3x.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate960@2x.png 960w" 
    srcsetThree="/media/desktopPlaceHolderTemplate640.png 640w" srcsetFour="/media/desktopPlaceHolderTemplate360.png 320w" src="/media/desktopPlaceHolderTemplate360.png" 
    class="image-block__100" 
    alt="This is the first image, its a placeholder... which we havent got yet..." 
    figcaption="The Main image..." title="My title: Dynamic or User set?" >}}

{{< /image_wrapper >}}

{{< image_wrapper class="portfolio-image-wrapper" >}}

    {{< image 
    srcsetOne="/media/desktopPlaceHolderTemplate960@2x.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate640.png 960w" srcsetThree="/media/desktopPlaceHolderTemplate360.png 640w" srcsetFour="/media/desktopPlaceHolderTemplate360.png 320w" src="/media/desktopPlaceHolderTemplate360.png" 
    class="image-block__50" 
    alt="this image is only a placeholder there is nothing to see" 
    figcaption="This Image is the user supplied caption yeah..." 
    >}}
    
    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate960@2x.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate640.png 960w" srcsetThree="/media/desktopPlaceHolderTemplate360.png 640w" srcsetFour="/media/desktopPlaceHolderTemplate360.png 320w" src="/media/desktopPlaceHolderTemplate360.png" 
      class="image-block__50" 
      alt="this image is only a placeholder there is nothing to see" 
      figcaption="This Image is the supplied caption yeah..." 
    >}}

{{< /image_wrapper >}}
{{< image_wrapper class="portfolio-image-wrapper" >}}

    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate640.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 640w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__33"
    >}}

    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate640.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 640w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__33"
    >}}

    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate640.png 1280w" srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 640w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__33"
    >}}

{{< /image_wrapper >}}
{{< image_wrapper class="portfolio-image-wrapper" >}}

    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate360.png 1280w"
      srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 320w"
      srcsetFour="/media/desktopPlaceHolderTemplate360.png 1280w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__25" alt="My alt here..."
     >}}
    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate360.png 1280w"
      srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 320w"
      srcsetFour="/media/desktopPlaceHolderTemplate360.png 1280w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__25" alt="is getting the with.." 
    >}}
    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate360.png 1280w"
      srcsetTwo="/media/desktopPlaceHolderTemplate360.png 960w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 320w"
      srcsetFour="/media/desktopPlaceHolderTemplate360.png 1280w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__25" alt="" 
    >}}
    {{< image 
      srcsetOne="/media/desktopPlaceHolderTemplate360.png 1280w"
      srcsetTwo="/media/desktopPlaceHolderTemplate360.png 320w"
      srcsetThree="/media/desktopPlaceHolderTemplate360.png 320w"
      srcsetFour="/media/desktopPlaceHolderTemplate360.png 1280w"
      src="/media/desktopPlaceHolderTemplate360.png"
      class="image-block__25" alt="Some other alt text as well" >}}

{{< /image_wrapper >}}