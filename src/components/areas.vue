<template>
  <div class="areas">
    <div class="titles">
      <h2>AREAS OF EXPERTISE</h2>
      <p>
        Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
        Sodales semper tempor dictum faucibus habitasse.
      </p>
    </div>
    <div class="parent">
      <div>
        <img src="../assets/images/Rectangle 18.png" />
        <span>WASHINGTON</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 19.png" />
        <span>FRANKLIN</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 20.png" />
        <span>CLINTON</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 21.png" />
        <span>GREENVILLE</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 22.png" />
        <span>BRISTOL</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 23.png" />
        <span>FAIRVIEW</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 24.png" />
        <span>FAIRVIEW</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 25.png" />
        <span>SALEM</span>
        <button>View Properties</button>
      </div>
      <div>
        <img src="../assets/images/Rectangle 26.png" />
        <span>MADISON</span>
        <button>View Properties</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.areas {
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

.parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.parent>div img {
  transition: 0.5s;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;



}

.parent>div {
  overflow: hidden;
  display: grid;
  position: relative;
  place-items: center;
}

.parent div span {

  transition: 0.5s;
  position: absolute;
  color: #FFF;
  font-family: Lato;
  font-size: 28px;
  font-weight: 600;
  line-height: 36.4px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;


}

.parent div button {
  position: absolute;
  margin-top: 100px;
  opacity: 0;
  padding: 20px 40px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  cursor: pointer;
  transition: 0.5s;

}




.parent>div:hover span,
.parent div:hover button {
  opacity: 1;
  margin-bottom: 50px;


}

.parent>div::before {
  opacity: 0;
  content: "";
  width: 100px;
  position: absolute;
  width: 100%;

  height: 100%;

  background-color: rgba(27, 27, 27, 0.718);

}

.parent>div:hover img {
  transform: scale(1.2);

  object-fit: cover;

}

.parent>div:hover::before {
  opacity: 1;
}

.parent>div button:hover {
  background-color: white;
  color: #000;
}
</style>

<script>
export default {

}
</script>
