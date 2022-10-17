<script lang="ts">
  import awards from './assets/awards.png';


  import Jumbotron from './Jumbotron.svelte';
  import CallLine from './CallLine.svelte';
  import Footer from './Footer.svelte';
  import Testimonials from './Testimonials.svelte';
  import Services from './Services.svelte';
  import Contact from './Contact.svelte';
  import ImageGallery from './ImageGallery.svelte';
  import KelseyStory from './KelseyStory.svelte';

</script>

<header>
  <div class="header-logo">
  </div>       
</header>

<Jumbotron />
<CallLine />
<ImageGallery />

<Testimonials />
<KelseyStory />
<Services />
<Contact />


<div id="about">
  <h3>About Maureen</h3>
  <p>
    Maureen Walsh is a natural-born storyteller.  She is an experienced television journalist who has been telling engaging stories for more than 30 years.  Maureen has covered everything from the 2000 Presidential Recount to the Summer Olympic Games to documentaries for public television in Florida.  She has spoken at Florida Bar symposiums about the importance of using graphics and video in litigation.  Maureen received her Bachelor's and Master's degrees from Florida State University and she recently earned her commercial drone pilot's license.
  </p>
</div>
<img class="awards" alt="Maureen with trophies" src={awards}>

<Footer />