<style>
    .photo-gallery {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .photo-gallery > img {
        width: 310px;
        height: auto;
    }
</style>
<script>
        import hand from './assets/image-gallery/hand_cropped.png'
        import hays from './assets/image-gallery/Hays.png'
        import rehab from './assets/image-gallery/rehab.png'
        import crumpled from './assets/image-gallery/crumpled_truck.png'
</script>
<div class="photo-gallery">
    <img src={hays} alt="Hays"/>
    <img src={hand} alt="Hand" />
    <img src={rehab} alt="Rehab" />
    <img src={crumpled} alt="Crumpled" />
</div>