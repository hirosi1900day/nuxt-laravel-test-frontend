<template>
<div>
  <form @submit.stop.prevent="register">
     <input v-model="form.password" placeholder="パスワード">
     <input v-model="form.password_confirmation" placeholder="パスワード確認">
     <button type="submit">送信</button>
  </form>
 

  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email＿token: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register() {
      try {
        this.form.email_token = this.$route.params.token
        const data = await this.$axios.$post('http://localhost:8080/api/user/register', this.form)
        .then(response => {
         this.$router.push('/login')
       });
        console.log(this.form)
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    },
  }
}
</script>

