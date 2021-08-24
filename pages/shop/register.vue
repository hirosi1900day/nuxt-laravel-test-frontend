<template>
  <form @submit.stop.prevent="register">
     <input v-model="form.email" placeholder="メールアドレス">
     <input v-model="form.password" placeholder="パスワード">
     <input v-model="form.password_confirmation" placeholder="パスワード確認">
     <button type="submit">送信</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register() {
      try {
       const data = await this.$axios.$post('http://localhost:8080/api/shop/register', this.form)
       .then(response => {
         console.log('response body:', response.data);
       });

        console.log(this.form)
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

