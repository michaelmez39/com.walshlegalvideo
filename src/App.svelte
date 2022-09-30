<script lang="ts">
  import awards from './assets/awards.png';
  import thumbnail from './assets/thumbnail.jpg';


  import Jumbotron from './Jumbotron.svelte';
  import Footer from './Footer.svelte';
  import Testimonials from './Testimonials.svelte';
  import Contact from './Contact.svelte';
  import SecondStory from './SecondStory.svelte';
</script>

<header>
  <div class="header-logo">
  </div>
  <address>
      <span>Call</span><br>
      <a href="tel:+18502199016">(850)219-9016</a>
  </address>          
</header>

<Jumbotron />

<aside>
  <h3>Services</h3>
  <ul>
      <li>Day in the Life</li>
      <li>Settlement documentaries</li>
      <li>Trial Graphics</li>
      <li>Consultation</li>
      <li>Scripting</li>
      <li>Aerial & Drone Video</li>
  </ul>
  <h3>Testimonials</h3>
  <Testimonials />

  <h4 id="contact-us">Contact Us</h4>
  <h5>(850) 219-9016</h5>
  <Contact />
</aside>

<article>
  <section id="kelsey-story">
      <h4>Kelsey's Story</h4>
      <div class="story center">
          <video class="story-video" poster={thumbnail} controls>
              <source src="/kelsey_video.mp4" type="video/mp4" />
              Sorry, your browser does not support embedded videos
          </video>
     
              <figure>
                  <blockquote>
                      <p>
                          “I definitely would not have been able to do this without Maureen’s compassion and understanding.”
                      </p>
                  </blockquote>
                  <figcaption>Kelsey Mezzina<br />Client</figcaption>
              </figure>
      </div>
  </section>
  <section>
      <SecondStory />
  </section>
</article>

<div id="about">
  <h3>About Maureen</h3>
  <p>
    Maureen Walsh is a natural-born storyteller.  She is an experienced television journalist who has been telling good stories for more than 30 years.  Maureen has covered everything from the 2000 Presidential Recount to the Summer Olympic Games to documentaries for public television in Florida.  She has spoken at Florida Bar symposiums about the importance of using graphics and video in litigation.  Maureen received her Bachelor's and Master's degrees from Florida State University and she recently earned her commercial drone pilot's license.
  </p>
</div>
<img class="awards" alt="Maureen with trophies" src={awards}>

<Footer />