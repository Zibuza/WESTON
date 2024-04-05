<template>
  <div>
    <div v-if="show">
      <Contact class="popup" ref="disabled" :class="{ 'closed': !show }" @close="close" />
    </div>

    <div class="skin">
      <div class="banner">
        <div class="details">
          <h1>Trusted Real Estate Property for You</h1>
          <p>
            Looking for your dream house or property? Search here and select your best one from more than 1 million listings.
          </p>
          <div class="btns">
            <button>Discover Properties</button>
            <button @click="show = true">Contact Now</button>
          </div>

          <div class="counter">
            <div>
              <span>35+</span>
              <span>YEARS IN BUSINESS</span>
            </div>
            <div>
              <span>200+M</span>
              <span>DEAL VOLUME IN PAST 12 MONTHS</span>
            </div>
            <div>
              <span>$1B+</span>
              <span>IN TOTAL SALES</span>
            </div>
          </div>
        </div>

        <img src="../assets/images/building.png" alt="Building Image" />
      </div>
    </div>

    <Products></Products>
    <About_us></About_us>
    <Slider></Slider>
    <Areas></Areas>
    <Testimonials></Testimonials>
    <Blogs></Blogs>
    <Help_center></Help_center>
    
  </div>
</template>

<script>
import Products from "../components/products.vue";
import About_us from "../components/about_us.vue";
import Slider from "../components/slider.vue";
import Areas from "../components/areas.vue";
import Blogs from "../components/blogs.vue";
import Testimonials from "../components/testimonial.vue";
import Help_center from "../components/help_center.vue";
import Footer from "../components/footer.vue";
import Contact from "../components/contact.vue";

export default {
  components: {
    About_us,
    Products,
    Slider,
    Areas,
    Blogs,
    Testimonials,
    Help_center,
    Footer,
    Contact,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    close() {
      this.show = false;
      
    },
  },
};
</script>


<style scoped>
.skin {
    position: none;
    overflow: hidden;
    margin: auto;
    width: 1440px;
    left: 0;
    right: 0;


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
    height: 25px;
    gap: 32px;
}

header a {
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
    /* 130% */
    letter-spacing: -0.176px;
    text-transform: capitalize;

}

.banner {
  padding-left: 80px;
  z-index: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.details h1 {
  color: #000;
  font-family: Lato;
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  line-height: 72.8px;
  /* 130% */
  letter-spacing: -0.616px;
  margin-top: 200px;

}

.details p {
  color: #808080;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.8px;
  /* 130% */
  letter-spacing: -0.176px;
  margin-top: 40px;

  width: 564px;
}

.details .btns {
  display: flex;
  margin-top: 44px;


}

.details button {
  color: #FFF;
  cursor: pointer;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
  /* 130% */
  letter-spacing: 0.42px;

  border: none;
  padding: 15px 30px;
  border: 1px solid #000;

  background: #000;
}

.details button:nth-child(2) {
  color: #000;
  margin-left: 8px;
  border: none;
  background-color: transparent !important;
}

.counter {
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  background: #FFF;
  box-shadow: 0px 13.979px 27.958px 0px rgba(0, 0, 0, 0.10);
  height: 100px;
}

.counter div {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

}

.counter span:nth-child(1) {
  color: #000;
  font-family: Lato;
  font-size: 18.639px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.231px;
  /* 130% */
  letter-spacing: -0.205px;
}

.counter span {
  text-align: center;
  color: #000;
  font-family: Lato;
  font-size: 11.183px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.538px;
  /* 130% */
  letter-spacing: -0.123px;
  text-transform: capitalize;
}

</style>
