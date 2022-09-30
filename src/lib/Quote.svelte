<script>
    import {fade} from 'svelte/transition';
    export let quote;
    let {statement, author, position, association} = quote;
</script>

<figure class="testimonial">
    <blockquote>
        <p>{statement}</p>
    </blockquote>
    <figcaption>
        {author}<br>{position}<br>{association}
    </figcaption>
</figure>