<template>
    <q-page class="flex ">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card">
      <q-img
        :src="'http://192.168.3.10/images/' + resto.gambar"
        basic
      >
        <div class="absolute-bottom text-h6">
          {{resto.name}}
        </div>
      </q-img>

      <q-card-section>
        {{resto.description}}
         
      </q-card-section>
    </q-card>
            </div>
        </div>

        <div class="row">
     <div class="col-5 q-mr-lg" v-for="datafood in food" :key="datafood.id">
                <q-card class="mycardfood">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="'http://192.168.3.10/images/' + resto.gambar">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{datafood.name}}</q-item-label>
          <q-item-label caption>
              <q-rating
        v-model="datafood.rating"
        size="1.5em"
        color="orange"
        readonly
      />
          </q-item-label>
        </q-item-section>
      </q-item>

      <img :src="'http://192.168.3.10/images/' + datafood.pic">
      <q-card-section>
        <center> <q-chip color="deep-purple" text-color="white" icon="local_dining">
        Harga : Rp.{{datafood.price}},-
      </q-chip></center>
        <center><q-btn class="glossy" rounded color="deep-orange" label="View Reviews" /></center>
      </q-card-section>
    </q-card>
            
            </div>
            
            
            
            
            </div>
    </q-page>
</template>
<script>
export default {
    name: 'detail-resto',
    data () {
    return {
      resto:{},
      food:{},
      id:null,
      
      


    }
  },

  created: function(){
      this.id = this.$route.params.id
      this.getrestodetail() 
      this.getfood()
      this.$store.commit('detailresto/resetDetailResto')
  },

  methods:{
      getrestodetail(){
        this.$store.dispatch('detailresto/getData',(this.id))
        .then(response=> (this.resto =  response.data))  
          
      },
      getfood(){
        this.$store.dispatch('detailresto/getFood',(this.id))
        .then(response=> {
          response.data.forEach(data=>{
            this.$store.commit('detailresto/setDetailResto',data)
            this.food = this.$store.getters['detailresto/getDetailResto']
          })        
        })

      },

     
      

  }
}
</script>
<style lang="stylus">
.my-card
  width 100%


.mycardfood
  width 100%
  margin-left 30px
  margin-top 30px
  margin-bottom 20px

  
 

</style>


