<template>
    <div class="testimonials">
        <div class="titles">
            <h2>WHAT OUR CLIENT SAYS</h2>
            <p>
                Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus
                habitasse.
            </p>
        </div>

        <swiper :slidesPerView="1" :speed="1200"  :keyboard="{
            enabled: true,
        }" :pagination="{
    clickable: true, 
}" :navigation="true" :modules="modules" class="mySwiper">


            <swiper-slide>
                <img src="../assets/images/Rectangle 173.png" alt="">

                <div>
                    <img src="../assets/images/braces.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum commodo eget dictum molestie pretium viverra sed viverra. Lobortis ipsum sed faucibus hendrerit netus fringilla. Tortor vel ut ut mauris condimentum sagittis. Quam ultrices tempor blandit eget pharetra, velit tortor non. Massa pharetra enim fermentum nisi, commodo egestas a, quam. Integer imperdiet eu sit donec convallis tellus nisi. At elit, rhoncus ullamcorper nam enim, </p>
          
                    <img src="../assets/images/braces2.png" alt="">
                    <p>S.T - JOHN</p>
                    <p>-london</p>
                  
                   
                </div>

            </swiper-slide>



            <swiper-slide>
                <img src="../assets/images/Rectangle 173.png" alt="">

                <div>
                    <img src="../assets/images/braces.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum commodo eget dictum molestie pretium viverra sed viverra. Lobortis ipsum sed faucibus hendrerit netus fringilla. Tortor vel ut ut mauris condimentum sagittis. Quam ultrices tempor blandit eget pharetra, velit tortor non. Massa pharetra enim fermentum nisi, commodo egestas a, quam. Integer imperdiet eu sit donec convallis tellus nisi. At elit, rhoncus ullamcorper nam enim, </p>
          
                    <img src="../assets/images/braces2.png" alt="">
                    <p>S.T - JOHN</p>
                    <p>-london</p>
                  
                   
                </div>

            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/Rectangle 173.png" alt="">

                <div>
                    <img src="../assets/images/braces.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum commodo eget dictum molestie pretium viverra sed viverra. Lobortis ipsum sed faucibus hendrerit netus fringilla. Tortor vel ut ut mauris condimentum sagittis. Quam ultrices tempor blandit eget pharetra, velit tortor non. Massa pharetra enim fermentum nisi, commodo egestas a, quam. Integer imperdiet eu sit donec convallis tellus nisi. At elit, rhoncus ullamcorper nam enim, </p>
          
                    <img src="../assets/images/braces2.png" alt="">
                    <p>S.T - JOHN</p>
                    <p>-london</p>
                  
                   
                </div>

            </swiper-slide>

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
            progressContent.value.textContent = `${Math.ceil(time /1000)}s`;
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
.testimonials {
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


.swiper-slide {
    background: #fff;

    display: grid;
    grid-template-columns: 4fr 5fr;
    height: 580px;


}

.swiper-slide> img{
    margin: auto;
}
.swiper-slide div{
    padding-top: 94px;

}
.swiper-slide div p{
    width: 100%;
    width: 500px;
    margin-left: 50px;    
    margin-top: 20px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.176px;
}

.swiper-slide div img:nth-of-type(2){
    float: right;
    margin-right: 150px;
    display: inline-flex;
}
.swiper-slide div p:nth-of-type(2){
    margin-top: 50px;
    color: #000;
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
letter-spacing: -0.176px;
}
.swiper-slide div p:nth-of-type(3){
    margin-top: 0px;

    color: #808080;
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
}
</style>
  