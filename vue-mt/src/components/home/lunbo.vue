<template>
    <div>
        <mu-appbar style="width: 100%; ">
            <span>推荐频道</span>
            <mu-button flat slot="right"><mu-icon value="keyboard_arrow_right"></mu-icon></mu-button>
        </mu-appbar>
        <mu-flex class="demo-linear-progress">
            <mu-linear-progress></mu-linear-progress>
        </mu-flex>
        <mu-grid-list class="gridlist-demo" :cols="3">
            <mu-grid-tile v-for="item in items">
                 <img :src="item.img" >
                <span slot="title">{{item.title}}</span>
                <span slot="subTitle">在线收看 <b>{{item.onlineNums}}</b></span>
                <mu-button slot="action" icon>
                    <mu-icon value="favorite_border"></mu-icon>
                </mu-button>
            </mu-grid-tile>
        </mu-grid-list>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    },
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    },
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    },
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    },
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    },
                    {
                        img:'http://p2.music.126.net/IDaThUP7VUTxDKyWnhiOig==/109951163862893514.jpg?param=140y140',
                        title:'中央電視台',
                        onlineNums:'1萬'
                    }
                ]
        }
    }
}
</script>

<style>
.mu-appbar{
    height: 0.4rem;
    margin-top: 0.1rem;
}
</style>
