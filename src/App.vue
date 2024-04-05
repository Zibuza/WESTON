<template>
  <div class="skin">
    <header>
      <router-link class="link" to="/">
        <img src="./assets/images/WESTON.png" alt="Company Logo" />
      </router-link>
      <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/About">About</router-link>
        <router-link class="link" to="/Properties">Properties</router-link>
        <a href="#" class="link" @click="show=true">Contact</a>
      </nav>
    </header>
    <Contact class="popup"  ref="disabled" :class="{ 'closed ': !show }" @close="close" />
    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>

import About_us from "./components/about_us.vue";
import Slider from "./components/slider.vue";
import Areas from "./components/areas.vue"
import Blogs from "./components/blogs.vue"
import Testimonials from "./components/testimonial.vue";
import Help_center from "./components/help_center.vue"
import Footer from "./components/footer.vue"
import Contact from "./components/contact.vue"
import Inner from "./pages/inner.vue"

export default {
  components: {

      About_us,
      Slider,
      Areas,
      Blogs,
      Testimonials,
      Help_center,
      Footer,
      Contact,
      Inner

  },
  data(){
        return{
            show: false
        }
    },
    methods:{
        close(){
          this.show = false
          
          
        }

    }
};
</script>

<style scoped>
.skin {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  margin: auto;
  width: 1440px;


}

header {
  padding: 0 80px;
  margin-top: 25px;
  position: absolute;
  width: 100%;
  align-items: center;
  display: flex;
  z-index: 2;
  justify-content: space-between;
}

header nav {
  width: fit-content;
  display: flex;
  margin-right: 20px;
  height: 25px;
  gap: 32px;
}

header a {
  color: #000;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.8px;
  /* 130% */
  letter-spacing: -0.176px;
  text-transform: capitalize;
  padding: 10px 20px;
  
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ;
}

</style>
