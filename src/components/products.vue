<template>
    <div class="products">
        <div class="options">
            <h2>What You Area Looking For?</h2>
            <p>Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus
                habitasse.</p>
        </div>
        <div class="images">
            <div>
                <img src="../assets/images/Component 2.png" alt="">
                <span>Living House</span>
            </div>
            <div>
                <img src="../assets/images/Component 3.png" alt="">
                <span>House Appartment</span>
            </div>
            <div>
                <img src="../assets/images/Component 4.png" alt="">
                <span>House Villa</span>
            </div>
            <div>
                <img src="../assets/images/Component 5.png" alt="">
                <span>Office Floor</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.products {
    margin: 50px 0;
}

.options {
    margin: 0px 72px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.options h2 {
    width: fit-content;
    margin: 0 auto;
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


.options p {
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
    text-align: center;
    /* 130% */

}



.images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.images>div {
    cursor: pointer;
    transition: 0.6s;
    position: relative;
    width: 306px;
    height: 450px;
    overflow: hidden;
}

.images>div img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.images div span{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgb(27, 27, 27);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(242, 242, 242);
    transition: 0.6s;
}

.images div:hover span{
    height: 100%;
    background-color: rgba(27, 27, 27, 0.718);
}


</style>