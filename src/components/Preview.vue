<template>
  <div>
      <div class="preview-image"></div>
      <div class="preview-container">
        <h1>Preview created snippet code and visual</h1>
        <div v-html="generateCurrentSnippetHtml(currentSnippet)"></div>
        <div class="buttons">
          <router-link class="back-to-wizard-button" tag="button" :to="{name: 'SelectInputType'}">Back to wizard</router-link>
          <button class="save-button" @click="toMain()">Save</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'currentSnippet',
      'templatesObj'
    ])
  },
  methods: {
    generateCurrentSnippetHtml(currentSnippet) {
      return this.templatesObj[currentSnippet.type].replace('[font]', currentSnippet.font)
      .replace('[color]', currentSnippet.color)
      .replace('[headline]', currentSnippet.headline)
    },
    toMain() {
      this.$store.commit('setSnippets', Object.assign({}, this.currentSnippet));
      alert('Current snippet is saved!')
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.preview-image {
  background-image: url("../assets/bulb.jpg");
  @include background-img;
}

.preview-container {
  @include container-position;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 4px;
  padding: 15px;
  -moz-transition: width 1s, height 1s;
  -o-transition: width 1s, height 1s;
  -webkit-transition: width 1s, height 1s;
  transition: width 1s, height 1s;

  &:hover {
    width: 80%;
    height: 80%;
  }
}

.buttons {
  @include buttons-position;
  margin-top: 8px;
}

.back-to-wizard-button {
  @include prev-button-style;
  background-color: $prev-button-color;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}

.save-button {
  @include next-button-style;
  background-color: #3D9970;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}
</style>
