<style>
    .jumbotron-message-background {
        display: relative;
    }
    .jumbotron-message {
        color: white;
        text-align: center;
        display: absolute;
        overflow: hidden;
    }
    .jumbotron-message h2 {
        font-size: 80px;
        font-weight: 400;
        color: white;
        margin: 0;
        padding: 0;
    }
    .jumbotron-message > h3 {
        font-family: 'Josefin Sans', sans-serif;
        color: white;
        font-size: 42px;
    }
    .jumbotron-message>p {
        line-height: 36px;
        font-size: 24px;
    }
    .jumbotron-message-background {
        height: 100%;
    }
</style>

<script>
    import {onDestroy} from 'svelte';
    import { fade } from 'svelte/transition';
    const message_interval = 15_000;
    let message_switcher = true;
    const interval = setInterval(() => {
        let opposite = !message_switcher
        message_switcher = opposite;
        console.log(message_switcher);
    }, message_interval);
</script>
<div class="jumbotron">
    <div class="jumbotron-message-background">
            {#if message_switcher}
                <div out:fade="{{delay: 0, duration: 300}}" in:fade="{{delay: 300, duration: 300}}" class="jumbotron-message">
                    <h2>Why Walsh?</h2>
                    <h3>Return On Investment.</h3>
                    <p>A Walsh production makes a difference.  Every one of our documentaries has garnered better settlements for our wrongful death and personal injury clients.  Whether it is a Day In The Life or a settlement documentary, we don't simply make videos.  We create broadcast quality productions that are full of feeling.  Our videos take you out of the mediation room and put you into the lives of your clients:  their homes, their families and their struggles.  The result is powerful.</p>
                </div>
            {:else}
            <div out:fade="{{delay: 0, duration: 300}}" in:fade="{{delay: 300, duration: 500}}" class="jumbotron-message">
                <h2>Why Video?</h2>
                <p>Because you cannot write a brief that is as powerful as a good video.  The camera is an unblinking witness to your client's world-- the trauma, the tears and the triumph.  You don't need cheap tricks like dramatic music to manipulate viewers.  Just listen to your clients.  Look into their eyes. Let them tell their story with all of the intimacy and power of their real life.  That is the human element of your case and you cannot replace it with words on a page or in a courtroom.</p>
            </div>
            {/if}
    </div>
</div>