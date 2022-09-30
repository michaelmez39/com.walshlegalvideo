<style>
    .photo-gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 15px;
    }
    .photo-gallery > img {
        width: 100%;
        border-radius: 10px;
    }
</style>
<script>
        import hand_cropped from './assets/hays/hand_cropped.jpg'
        import hays from './assets/hays/Hayscropped.jpg'
        import rehab_cropped from './assets/hays/rehab_cropped.jpg'
</script>

<h4>Hay's Story</h4>
<div class="photo-gallery">
    <img src={hays} alt="Hays"/>
    <img src={hand_cropped} alt="Hand" />
    <img src={rehab_cropped} alt="Rehab" />
</div>