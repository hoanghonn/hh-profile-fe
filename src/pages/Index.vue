<template>
  <Layout>
    <div class="introduction-container 100vh bg-cover bg-center">
      <h1 class="text-white font-bold pt-72 text-8xl text-center font-sans">
        HELLO WOLRD
      </h1>
      <h2 class="text-white font-bold mt-5 text-xl text-center">
        I’M HOANG NGUYEN. SOFTWARE ENGINEER, TECH ENTHUSIAST AND CREATOR
      </h2>
    </div>
    <div class="h-screen flex flex-row ">
      <div
        class="grid grid-cols-2 gap-2 auto-cols-fr auto-rows-fr w-2/3 h-screen"
      >
        <div class="">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
        <div class="">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
        <div class="">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
        <div class="">
          <img
            src="../../static/277011014_2832340660245846_2965447647884837296_n.jpeg"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
      </div>
      <div class="basis-1/4 bg-white"></div>
    </div>
    <div class="h-screen flex flex-row flex-wrap w-full">
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit"
        />
      </div>
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit "
        />
      </div>
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit"
        />
      </div>
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit"
        />
      </div>
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit"
        />
      </div>
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img
          src="../../static/henrik-donnestad-t2Sai-AqIpI-unsplash.jpeg"
          alt=""
          class="object-fit"
        />
      </div>
    </div>
    <div class="h-screen">
      <h1 class="text-black text-center font-bold text-5xl pt-72 ">
        CONTACT ME
      </h1>
      <ul
        class="bg-blue flex flex-row gap-6 justify-center text-xl font-bold mt-5"
      >
        <li>facebook</li>
        <li>linkedin</li>
        <li>github</li>
        <li>email</li>
        <li>resume</li>
      </ul>
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
