<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    alertText: String
  },
  data () {
    return {

    }
  },
  methods: {
    closeTip () {
      this.$emit('closeTip')
    }
  }
}
</script>

<style scoped>

</style>
