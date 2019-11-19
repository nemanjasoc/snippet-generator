<template>
<div>
  <div class="type-image"></div>
    <div class="select-type-container">
      <h1>Select Input Type</h1>
      <select v-model="selectedType">
        <option v-for="type in types">{{type}}</option>
      </select>
      <div class="buttons">
        <router-link class="prev-button" tag="button" :to="{name: 'Main'}">Prev</router-link>
        <button class="next-button" @click="toSelectColor()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedType: 'input'
    }
  },
  computed: {
    ...mapGetters([
      'templatesObj',
      'currentSnippet'
    ]),
    types() {
      return Object.keys(this.templatesObj)
    }
  },
  methods: {
    toSelectColor() {
      this.$store.commit('setCurrentSnippetsInputType', this.selectedType);
      this.$router.push({name: 'SelectColors'});
    }
  },
  mounted() {
    if (this.currentSnippet.type) {
      this.selectedType = this.currentSnippet.type;
    } 
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.type-image {
  background-image: url("../assets/type.jpg");
  @include background-img;
}

.select-type-container {
  @include container-position;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
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

select {
  @include select-style;
}

.buttons {
  @include buttons-position;
}

.prev-button {
  @include prev-button-style;
  background-color: $prev-button-color;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}

.next-button {
  @include next-button-style;
  background-color: $next-button-color;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}
</style>
