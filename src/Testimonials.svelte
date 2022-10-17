<style>
    .circle {
        border-radius: 100%;
        height: 12px;
        width: 12px;
        background-color: #497f7f;
        box-shadow: 0 0 2px rgb(23, 53, 65);
    }
    .active {
        background-color:#86e2e2
    }
    .quote-picker {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: 20px auto;
    }
    figure {
        /* position: absolute; */
        margin: 0 auto;
        width: 100%;
    }
    .anchor {
        position: relative;
        height: 300px;
        overflow: hidden;
        width: 100%;
    }
    blockquote {
        margin: auto 40px auto 40px;
        line-height: 2.5em;
    }
</style>
<script>
    import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';    
    const quote_interval = 16_000;
    const quotes = [
            {statement: "We’ve worked with Maureen for more than 20 years and she has never let us down once. She is professional, insightful, and compassionate. She brings everyone’s story to life.", author: "Beth Sumners", position: "Paralegal", association: "Guilday Law"},
            {statement: "This script is truly beautiful. I don’t have a single change. I LOVE it. You have FAR EXCEEDED MY EXPECTATIONS, yet again. You’re an incredible story teller. THANK YOU", author: "Carrie Roane", position: "Attorney",association: "Fasig Brooks"},
            {statement: "I have been in the court reporting industry for over 40 years and Maureen’s “In the Life of” trial video was the best I have ever seen.", author: "Barbara Memory", position: "RPR, CPR", association: "Memory Reporting, Inc."},
            {statement: "You’re seriously gifted. You made him an actual person rather than a claim number. It’s cinematic genius and is going to move every single person who watches it.", author: "Britney Waldo", position: "Paralegal", association: "Fasig Brooks"},
            {statement: "An accident doesn’t just affect you; it affects your entire family too. Maureen worked with me and my entire family to share my story through my eyes and theirs. From the first phone call to my mom to the care I needed afterwards, the settlement video captured it all.", author: "Kelsey Mezzina", position: "Client", association: ""}
        ];
    let index = 0;
    $: quote = quotes[index];
    $: statement = quote.statement;
    $: author = quote.author;
    $: position = quote.position;
    $: association = quote.association;
    const switchTo = (idx) => {
        index = idx;
    }
    setInterval(() => {
        index = (index + 1) % quotes.length;
        console.log("switch quote");
    }, quote_interval)
</script>
<div class="testimonials">
    <div class="quote-picker">
        {#each quotes as q, idx}
            {#if idx == index}
                <div  class="circle active"></div>
            {:else}
                <div class="circle" on:click={() => switchTo(idx)}></div>
            {/if}
        {/each}
    </div>
    <!-- out:fade="{{delay: 0, duration: 300}}" in:fade="{{delay: 320, duration: 300}}" -->
    <div class="anchor">
        {#key quote}
        <figure in:fade="{{duration: 300, delay:400}}" out:fly="{{delay: 0, duration: 400, x: 100, y: 0, opacity: 0.1, easing: backOut}}" class="testimonial">
            <blockquote>
                <p>{statement}</p>
            </blockquote>
            <figcaption>
                {author}<br>{position}<br>{association}
            </figcaption>
        </figure>
        {/key}
    </div>    
</div>


