<template>
  <div>
    <!-- 子路由渲染-->
    <router-view/>
    <mu-container>
      <mu-bottom-nav :value.sync="shift" id="footer">
        <mu-bottom-nav-item value="home" title="首页" icon="home" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="recent" title="附近" icon="room" to="/recent"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="guang" title="关注" icon="favorite" to="/guang" ></mu-bottom-nav-item>
        <mu-bottom-nav-item value="order" title="订单" icon="add_shopping_cart" to="/order" ></mu-bottom-nav-item>
        <mu-bottom-nav-item value="me" title="我的" icon="account_circle" to="/me" ></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shift: 'home'
    }
  }
}
</script>

<style>
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
