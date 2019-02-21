<template>
  <div id="router">
    <daohang></daohang>
    <ad></ad>
    <lanmu></lanmu>
    <lunbo></lunbo>
    <other></other>
  </div>
</template>

<script>
import ad from '@/components/home/ad'
import daohang from '@/components/home/daohang'
import lanmu from '@/components/home/lanmu'
import lunbo from '@/components/home/lunbo'
import other from '@/components/home/other'

export default {
  components:{
    ad,
    daohang,
    lanmu,
    lunbo,
    other
  }
}
</script>

<style scoped>
</style>
