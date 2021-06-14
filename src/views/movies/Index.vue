<template>
  <div class="movies-index">
    <div v-for="movie in movies" v-bind:key="movie.id">
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

export default {
  data: function () {
    return {
      movies: [],
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
