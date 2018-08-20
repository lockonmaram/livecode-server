var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data: null,
    token: localStorage.getItem('authorization') || null
  },
  methods: {
    login(value){
      axios.post('http://localhost:3000/request_token', value)
      .then(res=>{
        if (res.data === 'wrong password') {
          swal("Wrong password!");
        }else if (res.data === 'username is not found') {
          swal("Username not found!")
        }else {
          // console.log('resasdfadsf',res);
          this.token = res.data.token
          // console.log(this.userId);
          // console.log(this.token);
          localStorage.setItem('authorization', res.data.token);
          swal("Yeay", "You are logged in!", "success")
          .then(ok=>{
            window.location.reload()
          })
        }
      })
    },
    logout(){
      localStorage.clear();
      swal("You have logged out", "See you later!")
      .then(ok=>{
        window.location.reload()
      })
    },
    addItem(value){
      console.log(value);
      axios.post('http://localhost:3000/items', value, {
        headers: {
          Authorization: localStorage.getItem('authorization')
        }
      })
      .then(result=>{
        swal("Yeay", "You have added an item!", "success")
        .then(ok=>{
          window.location.reload()
        })
      })
      .catch(err=>{
        swal("Failed!", "Item failed to input", "error");
      })
    },
    getItems(){
      axios.get('http://localhost:3000/items')
      .then(items=>{
        this.data = items.data
      })
    }
  },
  created(){
    this.getItems()
  },
})
