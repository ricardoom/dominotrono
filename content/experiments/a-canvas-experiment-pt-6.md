---
title: "A Canvas Experiment Pt 6"
date: 2017-12-27T18:24:35-05:00
categories: "experiments"
draft: false
author: Ricardo G.
tags: ["test", "sass", "canvas"]
---
This is moving right along. Faithful readers will now see I have created a custom Hugo short-code that allows us to easily embed canvas elements into a markdown file. Yeah. I've also conimaged Gulp to concatenate and uglify the javascript so we can use multiple project files to work from but we serve a nice minified and concatenated javascript file. Next up... lets do the same minifiying to our css shall we?

{{< image 
srcsetOne="/media/portfolio/placeholders/desktopPlaceHolderTemplate640@2x.png 640w"
srcsetTwo="/media/portfolio/placeholders/desktopPlaceHolderTemplate320@2x.png 320w"
src="/media/portfolio/placeholders/desktopPlaceHolderTemplate.png" class="image-block__100" 
alt="this image is only a placeholder there is nothing to see" 
figcaption="This Image is the supplied caption yeah..." >}}

{{< image src="https://i.pinimg.com/736x/c5/0d/24/c50d24c6a9f9b44d29e92e77ffb9018c.jpg" srcsetOne="https://i.pinimg.com/736x/c5/0d/24/c50d24c6a9f9b44d29e92e77ffb9018c.jpg 500w" srcsetTwo="https://i.pinimg.com/736x/c5/0d/24/c50d24c6a9f9b44d29e92e77ffb9018c.jpg 250w" class="image-block__50" alt="the alt via the source file" >}}

{{< image src="https://picsum.photos/200/300/?random" srcsetOne="https://picsum.photos/200/120/?random 150w" srcsetTwo="https://picsum.photos/300/160/?random 160w" class="image-block__33" >}}

{{< image src="https://picsum.photos/200/300/?random" srcsetOne="https://picsum.photos/200/120/?random" srcsetTwo="https://picsum.photos/300/160/?random" class="image-block__33" >}}

{{< image src="https://picsum.photos/200/300/?random" srcsetOne="https://picsum.photos/200/120/?random" srcsetTwo="https://picsum.photos/300/160/?random" class="image-block__33" >}}

{{< image class="image-block__25"  scrsetOne="https://picsum.photos/160/90/?random" >}}
{{< image class="image-block__25" >}}
{{< image class="image-block__25" >}}
{{< image class="image-block__25" >}}
<!-- 
{{< gallery class="shortcode-gallery">}} -->
