<template>
  <form @submit.prevent="login">
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
        console.log('test')
        const response = await this.$auth.loginWith('local1', { data: this.form })
        console.log(this.form)
        console.log(response)
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

