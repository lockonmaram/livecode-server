Vue.component('alert',{
    template: `
    <div class="my-4">
      <div class="success-alert" style="">
        <div class="alert alert-success">
          Login success
        </div>
      </div>
      <div class="error-alert" style="display: none;">
        <div class="alert alert-danger">
          Error message
        </div>
      </div>
    </div>`,
})
