<template>
  <Layout>
    <div class="introduction-container">
      <h1 class="hello-text">
        HELLO WOLRD
      </h1>
      <h2 class="short-des-text">
        I’M HOANG NGUYEN. SOFTWARE ENGINEER, TECH ENTHUSIAST AND CREATOR
      </h2>
    </div>
    <div class="h-screen flex flex-row">
      <div class="grid grid-cols-2 gap-2 bg-black w-3/4 h-full">
        <div class="h-1/2">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="aspect-square w-full"
          />
        </div>
        <div class="h-1/2">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="aspect-square w-full"
          />
        </div>
        <div class="h-1/2">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="aspect-square w-full"
          />
        </div>
        <div class="h-1/2">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="aspect-square w-full"
          />
        </div>
      </div>
      <div class="basis-1/4 bg-white"></div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../layouts/Layout.vue";
export default {
  components: { Layout },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.introduction-container {
  height: 100vh;
  background-image: url("../../static/adrien-olichon-2M_DMVrt444-unsplash copy.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.hello-text {
  color: white;
  padding: 40vh 0 20px 0;
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 5em;
}

.short-des-text {
  color: white;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
}
</style>
