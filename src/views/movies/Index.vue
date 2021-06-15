<template>
  <div class="movies-index">
    <input type="text" v-model="search" />
    <div
      v-for="movie in filterBy(movies, search, 'title')"
      v-bind:key="movie.id"
    >
      <h1>{{ movie.title }}</h1>
      <img :src="movie.image_url" alt="" /> <br />
      <h2>{{ movie.year }}</h2>
      <h3>{{ movie.plot }}</h3>
      <router-link :to="`/movies/${movie.id}`">Show</router-link> |
      <router-link :to="`/movies/${movie.id}/edit`">Edit</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      search: "",
    };
  },
  created: function () {
    axios.get("/movies").then((response) => {
      console.log(response.data);
      this.movies = response.data;
    });
  },
  methods: {},
};
</script>
