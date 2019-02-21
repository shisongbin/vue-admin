<template>
    <div id="ad">
       <mu-carousel hide-controls interval="10000">
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>
    </div>
</template>

<script>
export default {
    data () {
        return {
            carouselImg1 : 'http://p1.music.126.net/gaaeLcTtm6GBKFayv-7E1A==/109951163877620012.jpg' ,
            carouselImg2 : 'http://p1.music.126.net/zqq0erQ81iGxm40ht9lB6Q==/109951163878124026.jpg',
            carouselImg3 : 'http://p1.music.126.net/3EkE22fC1WCsgFwiUch-VQ==/109951163875622458.jpg',
            carouselImg4 : 'http://p1.music.126.net/axLfNGNMsY_nk3cC3kFzzw==/109951163878084901.jpg'
        }
    }
};
</script>
<style>
.mu-carousel{
    max-height:160px;
}
.mu-carousel-item {
    max-height:160px;
}
.mu-carousel-item img{
    height:100%;
}
</style>
