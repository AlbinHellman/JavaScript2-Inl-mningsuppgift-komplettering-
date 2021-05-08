<template>
  <div class="col mb-4">
    <div class="card p-3">
      <img
        :src="product.image"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>
        <p class="card-text">{{ product.price }}$</p>
        
        
        


      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
 
    
 
  props: ['id'],
  
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}



</script>

<style>
</style>