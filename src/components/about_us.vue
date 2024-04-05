<template>
  <div class="skin">


    <div class="titles">
      <h2>Who We Are?</h2>
      <p>
        Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales
        semper tempor dictum faucibus habitasse.
      </p>
    </div>
    <div class="about-us">
      <div class="content">
        <h3>MEET THE WESTON REAL ESTATE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem
          convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl.
          Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam
          pellentesque cras blandit urna. Consequat odio non vel habitant
          pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique
          risus, parturient.
          <br><br>
          Imperdiet mauris duis ut morbi non, a quam vehicula. Condimentum risus
          donec varius consectetur accumsan, metus. Sit at nec facilisis blandit
          sed adipiscing mauris tortor tincidunt. Viverra commodo id a dapibus
          enim. Felis, volutpat, diam duis posuere scelerisque mauris, venenatis
          nunc. Odio diam et, et a condimentum sed morbi. Vitae diam, sed
          suspendisse ullamcorper risus sit. Ac viverra urna gravida sed. Cursus
          auctor donec blandit neque, et. Id purus in suscipit orci. <br>
          Eget pharetra nisl vel arcu. Aliquam lorem praesent lectus eget sapien.
        </p>
        <button>LEARN MORE</button>
      </div>

      <img src="../assets/images/Rectangle 15.png" alt="" />

    </div>
  </div>
</template>
<style scoped>
.skin {
  margin: 92px 0 !important;
}

.titles {

  display: flex;
  justify-content: center;
  flex-direction: column;
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
  /* 130% */
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
  /* 130% */
}

.about-us {
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.content h3 {
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

.about-us img {
  width: 550px;
  height: 700px;
  margin-left: auto;
}
</style>

<script>
export default {

}
</script>

