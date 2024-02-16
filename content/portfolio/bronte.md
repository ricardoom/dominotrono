---
title: 'Pearson — Bronte Publishing'
date: 2023-05-11T13:31:19-07:00
draft: false
categories: 'portfolio'
author: Ricardo G.
cloudID: 'v1234567'
## Placeholders
postImageSqip: '../media/portfolio/bronte/postimage-sqip.svg'

portfolioHeroSqip: '../media/portfolio/bronte/hero-sqip.svg'
## Hero Images
portfolioHero1x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1683837501/bronte/brnt-publishing.jpg'
##
portfolioHero2x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1683837501/bronte/brnt-publishing.jpg'
##
portfolioHero3x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1683837501/bronte/brnt-publishing.jpg'
##
portfolioHeroAlt: 'An image of the Bronte authoring interface'
# heroFigcaption goes on the portfolio/ landing page
heroFigcaption: 'Publishing Interface'
postImage1x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio_3x,f_auto/v1683837501/bronte/brnt-publishing.jpg'
postImage2x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio_3x,f_auto/v1683837501/bronte/brnt-publishing.jpg'
postImage3x: 'https://res.cloudinary.com/toupeeproofbullets/image/upload/t_hp_portfolio_3x,f_auto/v1683837501/bronte/brnt-publishing.jpg'
postImageAlt: 'An image of a Bronte authoring interface'
svgClipObjectClass: ''
svgColorClass: 'site-color--acid-green'
projectRoles: ['UX & UI Designer']
projectClients: ['Pearson']
projectCredits: []
projectDate: '2022—2023'
tags: ['User Experience', 'User Interface Design','Product Design', 'Product Research']
tech: ['Figma']
weight: -16
externalURL: ''
projectDesc: 'Most of my work at Pearson centered around an internal eText authoring environment called "Bronte." As a result, the user experience work focused specifically on the publishing workflow and administration. '
newLayout: true
feature: ['user-experience']
---
{{<section_wrapper class="hero-grid" >}}
    
    {{< image_cld
      loading="eager"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1683837501/bronte/brnt-publishing.jpg"
      alt=""
      figcaption=""
      caption=""
      class="hero-grid__imageBlock"
      >}}
    
    {{< copy_wrapper
        class="hero-grid__copyBlock box-shadow" >}}
        The publishing platform Bronte is an internal product used at Pearson, allowing content authors to import or directly create a text and prepare it for publication in the Pearson ecosystem. Bronte is a feature-rich tool. Complete with text editing, image manipulation, layout tools, project management, and deployment. My remit was to improve the publication process. The goal was to reduce the various points an author was required to navigate to and create a flow tightly coupled with other project and content management features.
      {{< /copy_wrapper>}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

{{< section_header level="2" text="Publishing" >}}    

    {{< copy_wrapper
      class=" details-grid__twentyWords copy-block__left" >}}
      The publishing workflow was tedious and time-consuming, compelling the author to navigate to two separate parts of the tool's project management interface to publish the work to Pearson's eText management ecosystem and beyond to their public marketplace.
    {{< /copy_wrapper>}}

    {{< image_cld
      loading="lazy"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686770581/bronte/BrontePublishingWire.webp"
      alt="An image of a set of screens related to the publishing workflow"
      figcaption="Initial overview of my improved publishing workflows"
      class="details-grid__fiftyWords big-image"
      >}}

{{< /section_wrapper>}}
{{< section_wrapper class="details-grid" section-header="Problems to Solve">}}
    
    {{< section_header level="3" text="Problems to Solve" >}}
      {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}
          Below is a set of questions I set out to circumscribe the issues related to a publishing workflow:
        {{< /copy_wrapper>}}
        {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}
          Publishing a Course or Lesson is difficult and requires multiple steps. As a content creator/manager, I want this process to be less time-consuming
        {{< /copy_wrapper>}}
        {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}
          Secondary: Does the UI need a dedicated tab/screen in the workspace view to surface a set of published courses?
        {{< /copy_wrapper>}}
        {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}
          Versions, and their potential to become unwieldy According to stakeholders and admins, the versions, while ultimately useful are rarely deleted. This might necessitate a cultural shift in workflows.
        {{< /copy_wrapper>}}
        {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}          
          Is having many (10s-100s) of Published items a problem? Over 50 might be an edge case and rarely the norm.</li>
        {{< /copy_wrapper>}}
        {{< copy_wrapper
          class="details-grid__twentyWords copy-block__left" >}}  
          Caveats we were keen to observe:
          Where is Publication metadata data and how is it accessed?
          What happens when we need to publish again
          more reliance on content creators to know and explore UI for subtle functionality

      {{< /copy_wrapper>}}
        
{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< section_header level="3" text="Design Discovery" >}}
      
      {{< copy_wrapper
        class="details-grid__twoByTwo copy-block__left" >}}
        My proposed solution was to bring the publishing process into the project management interface activated via a kebab menu interaction alongside other available actions on the file.
      {{< /copy_wrapper>}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}
      {{< image_cld
      loading="lazy"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,w_auto,f_auto/v1686793831/bronte/ListView.webp"
      alt=""
      figcaption=""
      class="details-grid__twoByTwo image-block__left"
      >}}

      {{< image_cld
      loading="lazy"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686793831/bronte/MenuOpenHover.webp"
      alt=""
      figcaption=""
      class="details-grid__twoByTwo image-block__right"
      >}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686860274/bronte/itemTray.webp"
    alt=""
    figcaption=""
    class="details-grid__fiftyWords big-image"
    >}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< section_header level="3" text="Initial visual design and prototype" >}}
    {{< image_cld
        loading="lazy"
        data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686772126/bronte/BrontePublishingInitial.webp"
        alt="An image of a project publishing interface"
        figcaption=""
        class="details-grid__fiftyWords big-image"
        >}}
{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< section_header level="4" text="Publication Progress Modals" >}}

    {{< image_cld
      loading="lazy"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686772776/bronte/ModalActive.webp"
      alt=""
      figcaption="Step one of publishing modal"
      class="details-grid__twentyWords image-block__left"
      >}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}
  
    {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686772777/bronte/DoubleCheckCancel.webp"
    alt=""
    figcaption="Warning modal"
    class="details-grid__twentyWords image-block__right"
    >}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}
    
    {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686772777/bronte/PreparingtoPublish.webp"
    alt="~"
    figcaption="Preparing to publish modal"
    class="details-grid__twentyWords image-block__left"
    >}}
  
{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

  {{< section_header level="4" text="Publication Complete" >}}

  {{< copy_wrapper
      class="details-grid__twentyWords copy-block__left" >}}
      Once the publication process is finished, the content author can access the published document and its metadata. The author will receive visual indicators showing whether the publication was successful or not, along with user information and the type of publication, such as eText, ePub, or ePub 3. The location within the Pearson ecosystem where the publication is found, such as staging, QA, or production, is also displayed.
    {{< /copy_wrapper>}}

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1683837501/bronte/brnt-publishing.jpg"
    alt=""
    figcaption="Publish complete UI"
    class="details-grid__fiftyWords big-image"
    >}}

    {{< video_cld 
      class="details-grid__fiftyWords big-image" >}}
      https://res.cloudinary.com/toupeeproofbullets/video/upload/w_auto,q_auto,vc_vp9/v1687295928/bronte/publishing-open-tray.webm
      https://res.cloudinary.com/toupeeproofbullets/video/upload/q_auto/v1687295928/bronte/publishing-open-tray.mp4
    {{< /video_cld >}}

  {{< /section_wrapper>}}

  {{< section_wrapper class="details-grid" >}}
    
      {{< image_cld
      loading=" lazy"
      data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686866819/bronte/rowItemExpanded.webp"
      alt=""
      figcaption=""
      class="details-grid__twentyWords image-block__left"
      >}}
    
{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< section_header level="3" text="Artifacts" >}}
    {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1685993538/bronte/UI-Specs.webp"
    alt=""
    figcaption=""
    class="details-grid__fiftyWords big-image"
    >}}

    {{< copy_wrapper
      class="details-grid__twentyWords copy-block__right" >}}
      As a general rule, we created specification sheets for all proposed components. We needed to outline specifically where there are state changes, subsequent animations, etc.
    {{< /copy_wrapper>}}

    
{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}

    {{< section_header level="4" text="Accessibility & Tab Order" >}}
     {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686794395/bronte/tabThroughDetails.webp"
    alt="an image detailing the accessibility tab through order and focus ring styling"
    figcaption="A detailed view of the accessibility tab order"
    class="details-grid__fiftyWords big-image"
    >}}
    {{< copy_wrapper
      class="details-grid__twentyWords copy-block__left" >}}
      A critical part of the team's process was to produce specifications for state and accessibility. In the following examples, I produced artifacts that covered all possible states of buttons and tab order, with careful attention to hover, focus and the combined state of having both focus and being hovered.
    {{< /copy_wrapper>}}

 {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1686794395/bronte/kebabDetails.webp"
    alt=""
    figcaption="A detailed Figma view of the kebab menu icon and its subsequent states"
    class="details-grid__fiftyWords big-image"
    >}}
   

{{< /section_wrapper>}}

{{< section_wrapper class="details-grid" >}}
 {{< image_cld
    loading="lazy"
    data-src="https://res.cloudinary.com/toupeeproofbullets/image/upload/q_auto,f_auto,w_auto/v1685993592/bronte/PublicationIcons.webp"
    alt=""
    figcaption="The full scope of button artifacts and states"
    class="details-grid__twentyWords image-block__left"
    >}}

{{< /section_wrapper>}}
