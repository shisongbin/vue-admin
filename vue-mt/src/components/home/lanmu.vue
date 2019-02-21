<template>
    <div>
        <mu-row gutter>
            <mu-col span="3">
                <mu-button fab color="red">
                    <mu-icon value="favorite"></mu-icon>
                </mu-button>
                <br/>订阅
            </mu-col>
            <mu-col span="3">
                <mu-button fab color="red">
                    <mu-icon value="stars"></mu-icon>
                </mu-button>
                <br/>每日推荐
            </mu-col>
            <mu-col span="3">
                <mu-button fab color="red">
                    <mu-icon value="queue_music"></mu-icon>
                </mu-button>
                <br/>频道
            </mu-col>
            <mu-col span="3">
                <mu-button fab color="red">
                    <mu-icon value="format_list_numbered"></mu-icon>
                </mu-button>
                <br/>排行榜
            </mu-col>
        </mu-row>
    </div>
</template>
<script>
export default {
    computed:{
        calendar(){
            
        }
    }
}
</script>

<style>
.col-3{
    text-align: center;
}
</style>
