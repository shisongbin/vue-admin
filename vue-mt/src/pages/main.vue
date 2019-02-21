<template>
  <div>
    <!-- 子路由渲染-->
    <router-view/>
    <div id="useless"></div>
    <mu-container>
      <mu-bottom-nav :value.sync="shift" id="footer">
        <mu-bottom-nav-item value="/home" title="发现" icon="toys" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="/recent" title="电视" icon="live_tv" to="/recent"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="/guang" title="我的" icon="play_circle_filled" to="/guang" ></mu-bottom-nav-item>
        <mu-bottom-nav-item value="/me" title="账户" icon="account_circle" to="/me" ></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed:{
    shift(){
      if(!this.$route.path || this.$route.path == '/'){
        return '/home';
      }else{
        return this.$route.path;
      }
    }
  }
}
</script>

<style>
#useless{
  height: 60px;
}
#footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

#footer .mu-bottom-item {
    min-width: 0.62rem;
}
</style>
