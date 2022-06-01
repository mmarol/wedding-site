---
title: "Holly & Jay"
layout: base
eventDate: "Jan 4, 2020"
location: "Bangalore, India"
intro: "We’re getting married! Again! If you think you can make it, please RSVP below, or send us an email at ___"
headerImageA: "/assets/images/Illustration-b-02.png"
headerImageB: "/assets/images/Illustration-b-01.png"
galleryImageA: "/assets/images/gallery-a.png"
galleryImageB: "/assets/images/gallery-b.png"

---

<section class="page__header">
    <figure class="header__image left"><img src="{{ headerImageA }}" alt=""></figure>
    <h1 class="header__title">{{ title }}</h1>
    <figure class="header__image right"><img src="{{ headerImageB }}" alt=""></figure>
</section>
<section class="intro">
    <h2 class="intro__info page__title">{{ eventDate }}<br>{{ location }}</h2>
    <p class="intro__description page__description">{{ intro | safe }}</p>
</section>
<section class="form__container">
    <form action="" method="POST" class="form">
        <div class="form__item">
            <label for="name">Name </label>
            <input type="text" name="name" id="name" required>
        </div>
        <div class="form__item">
            <label for="email">Email </label>
            <input type="email" name="email" id="email" required>
        </div>
        <div class="form__item">
            <label for="mehndi">Mehndi RSVP<br><span>Monday, Jan 2</span></label>
            <select name="rsvp-options" id="rsvp-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div>
        <div class="form__item">
            <label for="mehndi">Ceremony RSVP<br><span>Wednesday, Jan 4</span></label>
            <select name="rsvp-options" id="rsvp-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div>
        <div class="form__item">
            <label for="mehndi">Reception RSVP<br><span>Wednesday, Jan 4</span></label>
            <select name="rsvp-options" id="rsvp-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div>
        <div class="form__item">
            <label for="mehndi">Dietary restrictions</label>
            <input type="text" id="name" name="name" minlength="4" maxlength="8" size="10">
        </div>
        <div class="form__item">
            <label for="mehndi">Additional comments</label>
            <textarea id="story" name="story" rows="5" cols="33"></textarea>
        </div>
        <div class="form__item">
            <input type="submit" value="RSVP!">
        </div>
    </form>
</section>
<section class="gallery">
    <img src="{{ galleryImageA }}" alt="" class="gallery__image">
    <img src="{{ galleryImageB }}" alt="" class="gallery__image">
</section>