<template>
  <div>
    <div class="select-color-image"></div>
    <div class="select-color-container">
      <h1>Select Colors</h1>
      <select v-model="selectedColor">
        <option v-for="color in colors">{{color}}</option>
      </select>
      <div class="buttons">
        <router-link class="prev-button" tag="button" :to="{name: 'SelectInputType'}">Prev</router-link>
        <button class="next-button" @click="toInsertInputHeadline()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {  
  data() {
    return {
      selectedColor: "red"
    }
  },
  computed: {
    ...mapGetters([
      'colors'
    ])
  },
  methods: {
    toInsertInputHeadline() {
      this.$store.commit('setCurrentSnippetsColor', this.selectedColor);
      this.$router.push({name: 'InsertInputHeadline'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';

.select-color-image {
  background-image: url("../assets/select-color.jpg");
  @include background-img;
  filter: blur(5px);
  -webkit-filter: blur(5px);
}

.select-color-container {
  @include container-position;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 15px;
  -moz-transition: width 1s, height 1s;
  -o-transition: width 1s, height 1s;
  -webkit-transition: width 1s, height 1s;
  transition: width 1s, height 1s;

  &:hover {
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
  background-color: #2ECC40;
}

.next-button {
  @include prev-button-style;
  background-color: #B10DC9;
}
</style>
