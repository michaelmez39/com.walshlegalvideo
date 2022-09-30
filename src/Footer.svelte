<script>
    import linkedin from './assets/linkedin.png';
    import walsh_logo from './assets/walsh_logo.png';

</script>
<style>
    footer {
        min-height: 60px;
        padding: 30px 20px 10px 20px;
        background-color: var(--footer-background);
        color: var(--footer-color);
    }
    ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    h4 {
        font-family: 'Josefin Sans', sans-serif;
        color: var(--dark-purple);
        font-size: 1em;
    }
    ul a {
        text-decoration: none;
        color: var(--footer-links);
    }
    ul nav {
        line-height: 2;
        vertical-align: text-top;
    }
    .branding-card {
        width: 320px;
        height: 120px;
        margin: auto 0;
        background-color: #fff;
        border-radius: 10px;
    }
    @media only screen and (max-width: 900px) {
        ul {
            flex-direction: column;
        }
    }
</style>
<footer>
    <ul>
        <li>
            <h4>Contact Us</h4>
            <address>
                    Maureen Walsh <br />
                    Phone: <a href="tel:+18502199016">(850) 219-9016</a><br>
                    Email: <a href="mailto:maureen@walshlegalvideo.com">maureen@walshlegalvideo.com</a><br />
                    Location: Tallahassee, Florida
            </address>
        </li>
        <li>
            <h4>Links</h4>
            <nav>
                <a href="#kelsey-story">Kelsey's Story</a><br/>
                <a href="#contact-us">Contact Us</a><br>
                <a href="#about">About</a>
            </nav>
        </li>
        <li>
            <h4>Social Media</h4>
            <a href="https://www.linkedin.com/in/maureen-walsh-794760a/"><img width=40 src={linkedin} alt="Linkedin Badge" /></a>
        </li>
        <img class="branding-card" src="{walsh_logo}" alt="Walsh Litigations Logo" />
    </ul>
    <br>
    <span class="center">Walsh Legal Video 2022 &#169;</span>
</footer>