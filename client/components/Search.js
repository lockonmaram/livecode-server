Vue.component('search',{
    template: `
    <div class="search-item">
      <h2>Search Item</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="input_name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Start Price:</label>
        <input v-model="input_price" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input v-model="input_tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" @click="searchItem">Search</button>
      <hr>
    </div>`,
    data: function(){
      return {
        input_name: null,
        input_price: null,
        input_tags: null
      }
    },
    methods: {
      searchItem(){
        let tagArr = this.input_tags.split(' ')
        this.$emit('search-item-click', {
          name: this.input_name,
          price: this.input_price,
          tags: tagArr
        })
      }
    },
    props: []
})
