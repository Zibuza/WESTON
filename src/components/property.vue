<template>
    <div class="property">
        <div class="img">
            <img src="../assets/images/propertie_img.png" alt="">
        </div>
        <div class="overlay">
            <router-link class="link" to="/Inner">
                <button>VIEW DETAILS</button>
            </router-link>
        </div>
        <div class="details">
            <span>$12,750,000</span>
            <h4>20724 visa Court, london, CA 95476</h4>
            <p>4 BEDS | 5 BATHS | 5,776 SQ.FT.</p>
        </div>
    </div>
</template>

<style scoped>
.property {
    position: relative;
}

.details {
    display: flex;
    justify-content: space-between;
    gap: 9px;
    flex-direction: column;

}

.details span {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
    /* 130% */

}

.details h4 {
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
    line-height: 20.8px;
    /* 130% */
}

.details p {
    color: #808080;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    /* 130% */
}

img {
    width: 100%;
    height: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 84px;
    opacity: 0;
    transition: 0.4s ease-in-out;
    background-color: rgba(0, 0, 0, 0.775);
    cursor: pointer;

}

.overlay button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 162px;
    height: 49px;
    padding: 15px 25px;
    border: 1px solid #ffffff;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px;
    letter-spacing: 0.42px;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;

}

.overlay button:hover {
    background-color: black;
    color: white;
}

.overlay:hover {
    opacity: 1;
}
</style>

<script>

export default {

}

</script>