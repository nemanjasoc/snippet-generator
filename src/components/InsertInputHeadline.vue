<template>
  <div class="headline-image">
    <div class="input-headline-container">
      <h1>Insert Input Headline</h1>
      <input type="text" v-model="insertedHeadline" placeholder="Insert your headline">
      <div class="buttons">
        <router-link class="prev-button" tag="button" :to="{name: 'SelectColors'}">Prev</router-link>
        <button class="next-button" @click="toSelectFont()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insertedHeadline: ''
    }
  },
  methods: {
    toSelectFont() {
      this.$store.commit('setCurrentSnippetsHeadline', this.insertedHeadline);
      this.$router.push({name: 'SelectFont'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.headline-image {
  background-color: #fff;
  background-image: url("../assets/headline.jpg");
  background-repeat: repeat;
  position: relative;
  width: 100%;
  height: 100vh;
  animation-delay: 0s;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: move-right;
}

.input-headline-container {
  background-color: #dbe4f0a3;
  opacity: 0.9;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: center;
  flex-direction: column;
}

@-webkit-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@-moz-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@-o-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

input[type=text] {
  max-width: 260px;
  width: 100%;
  height: 22px;
  padding: 3px 5px;
  margin-bottom: 8px;
}

.buttons {
  @include buttons-position;
}

.prev-button {
  @include prev-button-style;
  background-color: $delete-prev-button-color;
}

.next-button {
  @include prev-button-style;
  background-color: $next-button-color;
}
</style>
