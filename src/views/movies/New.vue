<template>
  <div class="movies-new">
    <form v-on:submit.prevent="submit()">
      <h1>New Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>title:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.title"
        />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="newMovieParams.year" />
      </div>
      <div class="form-group">
        <label>plot:</label>
        <input type="text" class="form-control" v-model="newMovieParams.plot" />
      </div>
      <div class="form-group">
        <label>english:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.english"
        />
      </div>
      <div class="form-group">
        <label>director:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.director"
        />
      </div>
      <div class="form-group">
        <label>director:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.image_url"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
