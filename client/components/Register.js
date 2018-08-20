Vue.component('register',{
    template: `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="/action_page.php">
              <div class="form-group">
                <label for="email">Username:</label>
                <input type="email" class="form-control" id="username" v-model='username'>
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model='password'>
              </div>
              <button type="submit" class="btn btn-primary" @click='registerClick'>Register</button>
            </form>
          </div>
        </div>
      </div>`,
    data: function(){
      return {
        username: null,
        password: null
      }
    },
    methods: {
      registerClick(){
        this.$emit('register-click', {
          username: this.username,
          password: this.password
        })
      }
    },
    props: []
})
