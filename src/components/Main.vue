<template>
<div>
  <div class="main-image"></div>
  <div class="main-container">
      <aside class="left-block">
        <h1 class="main-title">CODETRIBE FRONTENT SNIPPET GENERATOR</h1>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Proin consectetur sem ut 
          vestibulum consequat. Interdum et malesuada 
          fames ac ante ipsum primis in faucibus.
          Aliquam non viverra sem. Suspendisse sagittis
          ultrices velit. Phasellus tincidunt, ligula vitae
          commodo venenatis, diam ipsum tincidunt
          erat, quis pretium risus urna sed felis.</p>
        <router-link tag="button" class="create-button" :to="{name: 'SelectInputType'}">Create your own snippet</router-link>
      </aside>
      <aside class="right-block">
        <h1 class='save'>Saved snippets</h1>
        <ul>
          <li v-for="snippet in snippets">
            <div v-html="generateHtml(snippet)"></div>
            <button class="delete-button" @click="deleteSnippet(snippet)">Delete</button>
            <button class="copy-code" @click="copyToClipboard()" v-clipboard="generateHtml(snippet)">Copy code to clipboard</button>
          </li>
        </ul>
      </aside>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'snippets',
      'templatesObj'
    ])
  },
  methods: {
    generateHtml(snippet) {
      return this.templatesObj[snippet.type].replace('[font]', snippet.font)
      .replace('[color]', snippet.color)
      .replace('[headline]', snippet.headline)
    },
    deleteSnippet(snippet) {
      var confirmMessage = confirm("Are you sure you want to delete this snippet?");
      if (confirmMessage) {
        var newSnippets = [];
        for (var i = 0; i < this.snippets.length; i++) {
          var current = this.snippets[i];
          if (current !== snippet) {
            newSnippets.push(current)
          }
        }
        this.$store.commit('setNewSnippets', newSnippets);
      }
    },
    copyToClipboard() {
      alert("Code is copied!");
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.main-image {
  background-image: url("../assets/main.jpg");
  @include background-img;
}

.main-container {
  @include container-position;
  width: 90%;
  height: 80%;
  padding: 15px;
}

.left-block,
.right-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.main-title {
  width: 30%;
}

p {
  font-size: 15px;
  width: 50%;
  overflow: auto;
}

.create-button {
  max-width: 180px;
  width: 100%;
  height: 30px;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  color: #494949;
  background: #dbe4f0a3;
  border: 3px solid #494949;
  border-radius: 6px;
  display: inline-block;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 50px;
  }
}

ul {
  padding: 10px;
  margin: 10px;
  overflow: auto;
}

li {
  list-style: none;
  padding: 10px;
  border: 1px solid #001f3f;
  margin-bottom: 10px;
  box-shadow: 5px 5px 7px #0000009c;
  -webkit-box-shadow: 5px 5px 7px #0000009c;
  -moz-box-shadow: 5px 5px 7px #0000009c;
}

.save {
  width: 100%;
  text-align: center;
}

.delete-button {
  cursor: pointer;
  max-width: 100px;
  width: 100%;
  height: 22px;
  color: white;
  background-color: $delete-button-color;
  outline: none;
  border: none;
  margin-right: 6px;
  margin-top: 8px;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}

.copy-code {
  cursor: pointer;
  max-width: 150px;
  width: 100%;
  height: 22px;
  color: white;
  background-color:#3D9970;
  outline: none;
  border: none;
  margin-top: 8px;
  border-radius: 50px;
  @include transition(all 0.3s ease 0s);

  &:hover {
    border-radius: 6px;
  }
}
</style>
