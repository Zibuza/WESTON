<template>
  <Contact class="popup"  :class="{ 'closed ': !show }"  @close="close" />
  <div class="skin" v-if="!show">
    <div class="banner">
      <div class="content">
        <h3>MEET THE WESTON REAL ESTATE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem
          convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est
          nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet
          ipsum quam pellentesque cras blandit urna. Consequat odio non vel
          habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci
          tristique risus, parturient.
          <br /><br />
          Imperdiet mauris duis ut morbi non, a quam vehicula. Condimentum risus
          donec varius consectetur accumsan, metus. Sit at nec facilisis blandit
          sed adipiscing mauris tortor tincidunt. Viverra commodo id a dapibus
          enim. Felis, volutpat, diam duis posuere scelerisque mauris, venenatis
          nunc. Odio diam et, et a condimentum sed morbi. Vitae diam, sed
          suspendisse ullamcorper risus sit. Ac viverra urna gravida sed. Cursus
          auctor donec blandit neque, et. Id purus in suscipit orci. <br />
          Eget pharetra nisl vel arcu. Aliquam lorem praesent lectus eget
          sapien.
        </p>
        
        <button @click="show=true">Contact Now</button>
        
      </div>

      <img src="../assets/images/Rectangle 112.png" alt="" />
    </div>
    <Stats></Stats>
    <Members></Members>
  </div>
</template>

<style scoped>
.skin {
    position: none;
    overflow: hidden;
    margin: auto;
    width: 1440px;
    left: 0;
    right: 0;


}



.banner {
    padding-left: 80px;
    z-index: 1;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
}



.content h3 {
    margin-top: 97px;
    width: 383px;
    color: #000;
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 36.4px;
    /* 130% */
    letter-spacing: 5.6px;
}

.content p {
    margin-top: 40px;
    width: 603px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    letter-spacing: -0.176px;
}

.content button {
    margin-top: 54px;
    width: 162px;
    height: 49px;
    display: inline-flex;
    padding: 15px 25px;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px;
    /* 130% */
    letter-spacing: 0.42px;
    background-color: white;
    cursor: pointer;
    transition: background-color .3s ease;

}

.content button:hover {
    background-color: black;
    color: white;

}


</style>

<script>
import Stats from "../components/stats.vue"
import Members from "../components/members.vue"
import Contact from "../components/contact.vue"
export default {
    components:{
      Stats,
      Members  ,
      Contact
    },
    data(){
        return{
            show:null
        }
    },
    methods:{
        close(){
            this.show = false
        }
      
    }


}
</script>
