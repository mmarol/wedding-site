---
title: "Holly & Jay"
layout: base
eventDate: "Jan 4, 2022"
location: "Bangalore, India"
headerImageA: "/assets/images/Illustration-b-02.png"
headerImageB: "/assets/images/Illustration-b-01.png"
galleryImageA: "/assets/images/gallery_01.jpg"
galleryImageB: "/assets/images/gallery_02.jpg"
galleryImageC: "/assets/images/gallery_03.jpg"

---

<section class="page__header">
    <figure class="header__image left"><img src="{{ headerImageA }}" alt=""></figure>
    <h1 class="header__title header__title--desktop">Holly & Jay</h1>
    <h1 class="header__title header__title--mobile">
        <span class="header__title--one">Holly</span><span class="header__title--two">&</span><span
            class="header__title--three">Jay</span>
    </h1>
    <figure class="header__image right"><img src="{{ headerImageB }}" alt=""></figure>
</section>
<section class="intro">
    <!-- <h2 class="intro__info page__title">
        <span class="intro__message">We're getting married! Again!</span><br>
        <span class="intro__location">{{ location }}</span>
        <span class="intro__date">{{ eventDate }}</span>
    </h2> -->
    <h2 class="intro__info page__title">
        We're getting married! Again!<br>
    </h2>
    <h2 class="intro__info page__title">
        {{ eventDate }}<br>
        {{ location }}
    </h2>
</section>
<section class="form__container">
    <h3 class="form__title">Think you can make it?</h3>
    <p class="page__description form__description">Fill out the form so we can send you updates. This will help us get
        a starting headcount — please respond by <strong>July 15.</strong></p>
    <form method="POST"
        action="https://script.google.com/macros/s/AKfycbwlde-OicLMZeyrAcZvXZgkPFbYA0yhKy4TlPfVBu-OP4LNn_Fkm1Kx99T5Mogm1Lfc/exec"
        class="form" id="wedding-form">
        <div class="form__item">
            <label for="name">Name </label>
            <input type="text" name="name" id="name" required>
        </div>
        <div class="form__item">
            <label for="email">Email </label>
            <input type="email" name="email" id="email" required>
        </div>
        <div class="form__item">
            <!-- <label for="email">Email </label> -->
            <div class="form__radio">
                <input type="radio" name="attending" id="yes" value="Yes">
                <span class="checkmark"></span>
                <label for="yes">Will definitely be there</label>
            </div>
            <div class="form__radio">
                <input type="radio" name="attending" id="maybe" value="Maybe">
                <span class="checkmark"></span>
                <label for="maybe">Not sure, but hope so</label>
            </div>
            <div class="form__radio">
                <input type="radio" name="attending" id="no" value="No">
                <span class="checkmark"></span>
                <label for="no">Sorry, I can’t make it</label>
            </div>
        </div>
        <div class="form__item form__conditional hidden">
            <label for="name">How many people will be in your party? </label>
            <input type="number" name="party" id="party">
        </div>
        <!-- <div class="form__item">
            <label for="mehndi">Mehndi RSVP<br><span>Monday, Jan 2</span></label>
            <select name="mehndi-options" id="mehndi-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div>
        <div class="form__item">
            <label for="ceremony">Ceremony RSVP<br><span>Wednesday, Jan 4</span></label>
            <select name="ceremony-options" id="ceremony-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div>
        <div class="form__item">
            <label for="reception">Reception RSVP<br><span>Wednesday, Jan 4</span></label>
            <select name="reception-options" id="reception-options">
                <option value="yes">Yes, I'll be attending</option>
                <option value="no">No, I can't make it</option>
            </select>
        </div> -->
        <!-- <div class="form__item">
            <label for="dietary-restrictions">Dietary restrictions</label>
            <input type="text" id="dietary-restrictions" name="dietary-restrictions" minlength="4" maxlength="8"
                size="10">
        </div>
        <div class="form__item">
            <label for="comments">Additional comments</label>
            <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
        </div> -->
        <div class="form__item">
            <input type="submit" value="Submit" id="submit-form">
        </div>
    </form>
    <article class="form-success">
        <h2 class="page__title">Thank you!</h2>
        <p class="page__description">Thank you for filling out that form! If you have questions or if your plans change,
            you can email us at <a href="mailto:contact@hollyandjay.com">contact@hollyandjay.com</a></p>
    </article>
</section>
<section class="gallery">
    <figure class="gallery__image">
        <img src="{{ galleryImageA }}" alt="">
    </figure>
    <figure class="gallery__image">
        <img src="{{ galleryImageB }}" alt="">
        <img src="{{ galleryImageC }}" alt="">
    </figure>
</section>