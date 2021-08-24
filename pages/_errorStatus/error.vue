<template>
   <div>
      <h1>エラーページです</h1>
      <div v-if="status == internal_server_error">予期せぬえらえーが発生しました</div>
      <div v-else-if="status == unprocessable_entity">入力に間違いがあります。確認してくだい</div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         status: 0,
         internal_server_error: 0,
         unprocessable_entity: 0
      }
   },
   created: {
      function() {
         this.internal_server_error = this.$INTERNAL_SERVER_ERROR
         this.unprocessable_entity = this.$UNPROCESSABLE_ENTITY
         this.status = this.$route.params.errorStatus
      }
   }
}
</script>
