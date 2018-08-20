Vue.component('login',{
    template: `
    <div class="modal fade" id="loginModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
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
              <button type="submit" class="btn btn-primary" @click='loginClick'>Login</button>
            </form>
          </div>
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
      loginClick(){
        this.$emit('login-click', {
          username: this.username,
          password: this.password
        })
      }
    },
    props: []
})
