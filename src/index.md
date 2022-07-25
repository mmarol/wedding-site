---
title: "Home"
layout: base
eventDate: "Jan 4, 2023"
location: "Bangalore, India"
headerImageA: "/assets/images/Illustration-2-b.png"
headerImageB: "/assets/images/Illustration-2-a.png"
galleryImageA: "/assets/images/gallery_01.jpg"
galleryImageB: "/assets/images/gallery_02.jpg"
galleryImageC: "/assets/images/gallery_03.jpg"
---

<section class="page__header">
    <figure class="header__image left"><img src="{{ headerImageA }}" alt=""></figure>
    <h1 class="header__title">Holly & Jay</h1>
    <figure class="header__image right"><img src="{{ headerImageB }}" alt=""></figure>
</section>
<section class="intro">
    <h2 class="intro__message page__title">
        We're getting married! Again!
    </h2>
    <h2 class="intro__info page__title">
        {{ eventDate }}<br>
        {{ location }}
    </h2>
    <p class="intro__contact">Contact us at <a href="mailto:contact@hollyandjay.com">contact@hollyandjay.com</a> with any questions or concerns.</p>
</section>
<section class="page__nav">
    <ul class="page__links">
        <li class="page__link"><a href="/schedule">Schedule</a></li>
        <li class="page__link"><a href="/travel">Travel</a></li>
        <li class="page__link"><a href="/stay">Stay</a></li>
        <li class="page__link"><a href="/faq">FAQ</a></li>
    </ul>
</section>
<section class="gallery">
    <figure class="gallery__image">
        <img src="{{ galleryImageA }}" alt="">
    </figure>
    <figure class="gallery__image">
        <img src="{{ galleryImageB }}" alt="">
        <img src="{{ galleryImageC }}" alt="">
    </figure>
    <figure class="gallery__video">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/669887417?h=944bfa4414&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jay &amp;amp; Holly Wedding Ceremony 2021"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <figcaption class="gallery__caption">We had a small ceremony on Jan 23, 2021 at the Rhode Island Desert</figcaption>
    </figure>
</section>
