<template>
  <q-page class="flex ">
    <q-list v-if="this.$route.name == 'index'">
      <q-item v-for="dataresto in resto" :key="dataresto.id"
      clickable v-ripple :to="{name:'detail-resto', params:{id:dataresto.id}}">
        <q-card class="my-card">
      <img :src="'http://192.168.3.10/images/' + dataresto.gambar">
      
 <q-card-actions vertical class="">
        <q-chip color="deep-orange" text-color="white" icon="local_dining">
        {{dataresto.name}}
      </q-chip>
      </q-card-actions>
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="store_mall_directory" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Alamat</q-item-label>
            <q-item-label caption>{{dataresto.address}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="warning" name="web" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Website</q-item-label>
            <q-item-label caption>{{dataresto.website}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
      </q-item>

    </q-list>
<transition
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  appear
  :duration="1000"
>
    <router-view/>
</transition>
  </q-page>
</template>

<style lang="stylus" scoped>
.my-card
  width 100%
  margin 30px
</style>

<script>
export default {
  name: 'index',
   data () {
    return {
      resto:[]
    }
  },

  created: function(){
      this.pushdata()
  },

  methods:{
      pushdata(){
        this.$store.dispatch('home/getData')
        .then(response=> (this.resto =  response.data))  
      }

  }

  
}
</script>
