Vue.component('new-item',{
    template: `
    <div class="new-item">
      <h2>Create new Item</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="input_name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input v-model="input_price" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input v-model="input_stock" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="tags">Tags:</label>
        <input v-model="input_tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" @click="addItem">Submit</button>
      <hr>
    </div>`,
    data: function(){
      return {
        input_name: null,
        input_price: null,
        input_stock: null,
        input_tags: null
      }
    },
    methods: {
      addItem(){
        let tagArr = this.input_tags.split(' ')
        this.$emit('add-item-click', {
          name: this.input_name,
          price: this.input_price,
          stock: this.input_stock,
          tags: tagArr
        })
      }
    },
    props: []
})
