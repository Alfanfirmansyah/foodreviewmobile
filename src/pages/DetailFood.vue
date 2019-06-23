<template>
    <q-page class="flex ">
        <div class="row">
            <div class="col-12">
                <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="http://192.168.3.10/images/melati.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{food.name}}</q-item-label>
          <q-item-label caption>{{food.address}}</q-item-label>
        </q-item-section>
      </q-item>

      <img src="http://192.168.3.10/images/kepiting.jpg">
      <q-card-section>
        <center> <q-chip dense  color="deep-orange" text-color="white" icon="local_dining">
        {{food.foodname}} / Rp.{{food.price}},- ( per porsi )
      </q-chip></center>
      <br>
       <q-separator />
       <br>
        <div class="text-h6">Rate this Makanan {{food.foodname}}</div>
        <div class="text-subtitle2">Tell others what you think</div>
        <br>
        <center> <q-rating
        @click="prompt = true"
        v-model="rating"
        size="3.5em"
        color="orange"
        icon="star_border"
      /></center><br>
    <center> <q-badge color="teal">WRITE A REVIEW</q-badge></center>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">WRITE A REVIEW</div>
        </q-card-section>

        <q-card-section>
          <center> <q-rating
        v-model="rating"
        size="3.5em"
        color="orange"
        icon="star_border"
      /></center>
          <q-input dense v-model="nama" autofocus @keyup.enter="prompt = false" label="Input your name" />
          <q-input dense v-model="review" autofocus @keyup.enter="prompt = false" label="Describe your experience" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn @click="submitreview()" flat label="Submit Review" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <br>
      </q-card-section>
    </q-card>


            </div>
        </div>
        <div class="row">
          <div class="col-sm-5 col-xs-10 q-mr-lg" v-for="datas in datareview" :key="datas.id">
            <q-card flat bordered class="my-cardreview bg-grey-10 text-white shadow-2 rounded-borders">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle2">{{datas.name}}</div>
            <q-rating
        v-model="datas.rating"
        size="1em"
        color="orange"
        readonly
      />
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Edit Review</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Delete Review</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
       {{datas.judulcomment}} 
      </q-card-section>

  
    </q-card>
          </div>
          
        </div>
    </q-page>
</template>
<script>
const axios = require('axios')
export default {
  
    name: 'detail-food',
    data () {
    return {
      food:{},
      datareview:[],
      prompt: false,
      rating:null,
      nama:null,
      review:null,
      id:null
    }
  },

  created: function(){
      this.id = this.$route.params.foodid
      this.getdetailfood()
      this.getdetailfoodreview()
    
  },
  methods:{
    getdetailfood(){
      this.$store.dispatch('detailresto/getDetailFood',(this.id))
        .then(response=> (this.food =  response.data)) 
    },
    getdetailfoodreview(){
      this.$store.dispatch('detailresto/getDetailFoodReview',(this.id))
        .then(response=> (this.datareview =  response.data)) 
    },
    submitreview(){
      axios.post('http://192.168.3.10:3000/reviews',{
        name: this.nama,
        comment: this.review,
        rating: this.rating,
        foods_id: this.id
        
    })


    }

  }
    
}
</script>
<style lang="stylus">
.my-card
  width 100%
  padding-top 10px

.my-cardreview
  width 100%
  margin 10px
  margin-left 25px

</style>


