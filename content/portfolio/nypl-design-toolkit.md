---
title: 'NYPL Design Toolkit'
date: 2018-08-16T09:21:38-04:00
draft: false
categories: 'portfolio'
author: Ricardo G.
postImageSqip: '../media/portfolio/design_toolkit/dtkCard.svg'
postImage1x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio/v1549729406/nypl-design-toolkit/dtkCard.jpg'
postImage2x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio_2x/v1549729406/nypl-design-toolkit/dtkCard.jpg'
postImage3x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio_3x/v1549729406/nypl-design-toolkit/dtkCard.jpg'
postImageAlt: 'An image of the website'
figcaption: ''
portfolioHeroSqip: '../media/portfolio/design_toolkit/dtkHeroSqip.svg'
portfolioHero1x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_portfolio_hero_16_9/v1548722203/nypl-design-toolkit/Design-Toolkit.jpg'
portfolioHero2x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_portfolio_hero_2x/v1548722203/nypl-design-toolkit/Design-Toolkit.jpg'
portfolioHeroAlt: 'An image of the website'
heroFigcaption: ''
svgClipObjectClass: ''
svgColorClass: 'site-color--punk-pink'
tags: ['Design Systems']
weight: 3
projectRoles: ['Product Owner', 'Design', 'Developer']
projectClients: ['NYPL Digital Team']
projectCredits: ['Mauricio Giraldo Arteaga', 'Willa Armstrong', 'Edwin Guzman']
projectDate: '2016 - 2018'
externalURL: 'https://nypl.github.io/design-toolkit/'
projectDesc: "The Design Toolkit was the Library's robust guide and design system for semantics, style, behavior, and accessibility. Complete with functional examples and ready to use code."
newLayout: true
---

{{< section_wrapper class="hero-grid" >}}

      {{< image_cld
        class="hero-grid__imageBlock"
        
        data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto,t_portfolio_hero_16_9/v1548722203/nypl-design-toolkit/dtk.small.jpg"
        alt="An image of a NYPL Design Toolkit page"
      >}}

    {{< copy_wrapper class="hero-grid__copyBlock">}}
      The Design Toolkit at NYPL was our online style-guide and foundation for a more extensive design system. We wanted to free the front end developers up from having to make design decisions and create an opportunity to develop reusable components and styles. We also needed to have robust documentation and code examples.
    {{< /copy_wrapper >}}

{{< /section_wrapper >}}

### SVG Icons

{{< section_wrapper class="details-grid" >}}

     {{< copy_wrapper
        class=" details-grid__twentyWords copy-block__right" >}}
        We wanted to follow industry best practices and reduce our use of raster images to improve page performance and overall bandwidth usage. Part of that effort was to employ SVGs wherever we had flat, simple graphics, like icons and logos. SVGs are markup and, while not cacheable, are very flexible and portable. We took extra precautions to ensure our SVG icons were accessible.
      {{< /copy_wrapper>}}

    {{< image_cld
      class="details-grid__twentyWords image-block__left"
      
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/t_portfolio_full_size_2x/v1551120694/nypl-design-toolkit/NYPL_Design_toolkit_svg.jpg"
      alt="An image of the NYPL Discovery full record result"
      figcaption="Developers and Designers can easily copy SVG code here and paste it into their applications or prototypes."
      >}}

{{< /section_wrapper >}}

### Accessibility

{{< section_wrapper class="details-grid" >}}

    {{< copy_wrapper
      class=" details-grid__twentyWords copy-block__left" >}}
      We conducted an extensive survey of nypl.org and all of our internal tools, micro-sites, and applications for proper WCAG 2.0 Compliance. With the understanding that the Design Toolkit will need to inform and influence all projects going forward. For structure and style to be fully accessible by default, all components included in the Design Tool Kit would have their accessibility rules baked into their design patterns.
    {{< /copy_wrapper>}}
        
    {{< image_cld
      class="details-grid__twentyWords image-block__left"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576614197/nypl-design-toolkit/nypl-dtk-colors.jpg"
      
      alt=""
      figcaption="The NYPL brand set color table"
      >}}

    {{< image_cld
      class="details-grid__twentyWords image-block__right"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576612344/nypl-design-toolkit/nypl-dtk-forms.jpg"
      alt=""
      figcaption=""
    >}}

      {{< copy_wrapper
        class="details-grid__twentyWords copy-block__right" >}}
       We paid close attention to getting our forms correct. Assigning the exact ARIA attributes and states was key to our implementation.
      {{< /copy_wrapper>}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

        {{< image_cld
          class="details-grid__twoByTwo image-block__left"
          data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576615031/nypl-design-toolkit/nypl-dtk-forms-detail.jpg"
          
          alt=""
          figcaption="Each section has explicit directions on how to utilize each component.  Each component is supplied with correct classes and attributes and the necessary JavaScript for handling state."
        >}}

        {{< image_cld
          class="details-grid__twoByTwo image-block__right"
          data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576700879/nypl-design-toolkit/nypt-dtk-results-detail.jpg"

          alt="A detailed image from the Design Toolkit"
          figcaption=""
        >}}

{{< /section_wrapper>}}

### Components

{{< section_wrapper class="details-grid" >}}

    {{< copy_wrapper
      class=" details-grid__twentyWords copy-block__left" >}}
     Broadly speaking, the guiding principle in our design was to remove as much guesswork a developer might have concerning design, structure, or behavior. The final product culminated in two avenues for implementation. The first method being via an NPM module install. Which could then be integrated into a given application. Another way to use the Design Toolkit is by compiling the SASS file. And then copy and pasting individual instances of a component into one's app.
    {{< /copy_wrapper>}}

        {{< image_cld
         class="details-grid__twentyWords image-block__left"
         data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576612344/nypl-design-toolkit/nypl-dtk-buttons.jpg"
         
         alt=""
         figcaption=""
        >}}

        {{< image_cld
          class="details-grid__twentyWords image-block__right"
          data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,c_scale,f_auto/v1576615031/nypl-design-toolkit/nypl.dtk-microformat-detail.jpg"
          
          alt=""
          figcaption="Details from a component. Listed are all the necessary usage instructions."
        >}}

{{< /section_wrapper>}}