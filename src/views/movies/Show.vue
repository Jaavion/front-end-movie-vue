<template>
  <div class="movies-show">
    <h1>{{ movie.title }}</h1>
    <img :src="movie.image_url" alt="" /> <br />
    <h3>{{ movie.plot }}</h3>
    <router-link :to="`/movies/${movie.id}/edit`">Edit</router-link> |
    <router-link :to="`/movies/${movie.id}/edit`">Delete</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
};
</script>
s
