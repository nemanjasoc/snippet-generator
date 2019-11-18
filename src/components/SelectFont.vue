<template>
  <div>
    <div class="font-image"></div>
    <div class="select-font-container">
      <h1>Select Input Font</h1>
      <select v-model="selectedFont">
        <option v-for="font in fonts">{{font}}</option>
      </select>
      <div class="buttons">
        <router-link class="prev-button" tag="button" :to="{name: 'InsertInputHeadline'}">Prev</router-link>
        <button class="preview-button" @click="toPreview()">Preview</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedFont: 'Arial'
    }
  },
  computed: {
    ...mapGetters([
      'fonts'
    ])
  },
  methods: {
    toPreview() {
      this.$store.commit('setCurrentSnippetsFont', this.selectedFont);
      this.$router.push({name: 'Preview'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.font-image {
  background-image: url("../assets/fonts.jpg");
  @include background-img;
}

.select-font-container {
  @include container-position;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  border-radius: 4px;
  padding: 15px;
  -moz-transition: width 1s, height 1s;
  -o-transition: width 1s, height 1s;
  -webkit-transition: width 1s, height 1s;
  transition: width 1s, height 1s;

  &:hover {
    border-radius: 50%;
    width: 380px;
    height: 380px;
  }
}

select {
  @include select-style;
}

.buttons {
  @include buttons-position;
}

.prev-button {
  @include prev-button-style;
  background-color: $delete-prev-button-color;
}

.preview-button {
  @include next-button-style;
  background-color: $next-button-color;
}
</style>
