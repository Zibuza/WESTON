<template>
  <div class="slider">
    <div class="titles">
      <h2>EXCLUSIVE LISTINGS</h2>
      <p>
        Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
        Sodales semper tempor dictum faucibus habitasse.
      </p>
    </div>
    <swiper :speed="1200"  :centeredSlides="true" :autoplay="{ delay: 3600, disableOnInteraction: false }"
      :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="@/assets/images/slide_1.png" alt="" />
        <div class="hover">
          <span>22,500,000</span>
          <h3>ICONIC MEADOW LANE OCEANFRONT</h3>
          <h5>2040 Meadow Lane, Southhampton Vilage, Southhampton, NY 11968</h5>
          <button>LEARN MORE</button>
        </div>
      </swiper-slide>
      <swiper-slide><img src="@/assets/images/slide_2.png" alt="" />
        <div class="hover">
          <span>22,500,000</span>
          <h3>ICONIC MEADOW LANE OCEANFRONT</h3>
          <h5>2040 Meadow Lane, Southhampton Vilage, Southhampton, NY 11968</h5>
          <button>LEARN MORE</button>
        </div>
      </swiper-slide>
      <!-- Add more slides with images as needed -->
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.slider {
  margin-bottom: 92px;
}

.titles {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
}

.titles h2 {
  color: #000;
  text-align: center;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 41.6px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
}

.titles p {
  padding-top: 16px;
  color: #808080;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.8px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper-slide {
  position: relative;
}

.hover {
  left: -550px;
  bottom: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  gap: 5px;
  opacity: 0;
  transition: 0.5s;


}

.hover span {
  padding-left: 30px;
  text-align: left;
  color: white;
  font-family: Lato;
  font-size: 18.639px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.231px;
  /* 130% */
  letter-spacing: -0.205px;
}

.hover h3 {
  padding-left: 30px;
  text-align: left;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 41.6px;
  /* 130% */
  letter-spacing: 0.96px;
}

.hover h5 {

  margin-left: -60px;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  /* 162.5% */
  letter-spacing: -0.176px;
}

.hover button {
  margin-top: 10px;
  margin-left: 30px;
  width: 173px;
  height: 49px;
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
  /* 130% */
  letter-spacing: 0.42px;
  background-color: #00000000;
}

.hover button:hover {
  background-color: white;
  color: #000;
  cursor: pointer;
  transition: .3s ease;
}

.swiper-slide:hover .hover {
  opacity: 1;
  left: 26px;

}

.swiper-slide::before {
  opacity: 0;
  content: "";
  width: 1440px;
  position: absolute;
  width: 100%;

  height: 100%;

  background-color: rgba(27, 27, 27, 0.383);
}

.swiper-slide:hover::before {
  opacity: 1;
  transition: 0.3s ease;
}
</style>
