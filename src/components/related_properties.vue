<template>
    <div class="related-properties">
        <div class="titles">
            <h2>WHAT OUR CLIENT SAYS</h2>
        </div>
        <div class="properties">
            <div class="property">
                <div class="img">
                    <img src="../assets/images/propertie_img.png" alt="">
                </div>
                <div class="details">
                    <span>$12,750,000</span>
                    <h4>20724 visa Court, london, CA 95476</h4>
                    <p>4 BEDS | 5 BATHS | 5,776 SQ.FT.</p>
                </div>
            </div>
            <div class="property">
                <div class="img">
                    <img src="../assets/images/propertie_img.png" alt="">
                </div>
                <div class="details">
                    <span>$12,750,000</span>
                    <h4>20724 visa Court, london, CA 95476</h4>
                    <p>4 BEDS | 5 BATHS | 5,776 SQ.FT.</p>
                </div>
            </div>
            <div class="property">
                <div class="img">
                    <img src="../assets/images/propertie_img.png" alt="">
                </div>
                <div class="details">
                    <span>$12,750,000</span>
                    <h4>20724 visa Court, london, CA 95476</h4>
                    <p>4 BEDS | 5 BATHS | 5,776 SQ.FT.</p>
                </div>
            </div>
        </div>
        <button>LOAD MORE PROPERTIES</button>
    </div>

</template>

<style scoped>

.related-properties{
    margin-top: 1000px;        
}
.titles {
    margin-top: 78px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 78px;
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

.properties {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

}


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
    margin-top: 16px;
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

button {
   
    margin: 81px auto ;
    width: fit-content;
    height: 49px;
    display: block;    
    padding: 15px 25px;
    justify-content: center;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px;
    letter-spacing: 0.42px;
    background-color: #ffffff00;
    cursor: pointer;
}

button:hover {
    background-color: #000;
    color: white;
    transition: 0.3s ease-in;
}
</style>

<script>

</script>