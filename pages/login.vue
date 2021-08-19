<template>
  <form @submit.stop.prevent="login">
     <input v-model="form.email" placeholder="edit me">
     <input v-model="form.password" placeholder="edit me">
     <button type="submit">送信</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.form });
        console.log(this.form)
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

