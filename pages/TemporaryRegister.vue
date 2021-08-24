<template>
  <form @submit.prevent="register">
     <input  v-model="form.email" placeholder="メールアドレス">
     <button type="submit">送信</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
       form: {
          email: '',
       }   
    }
  },
  methods: {
    async register() {
      try {
       const data = await this.$axios.$post('http://localhost:8080/api/user/temporary/register', this.form)
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