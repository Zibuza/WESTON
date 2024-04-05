<template>
    <div class="blogs">
        <div class="titles">
            <h2>OUR BLOGS</h2>
            <p>
                Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus
                habitasse.
            </p>
        </div>
        <div class="flex-box">
            <div class="blog1"><img src="../assets/images/Rectangle 66.png" alt="">
                <h6>LUXURY REAL ESTATE MARKET COMPARISION IN LOS ANGELES</h6>
                <p>We had the opportunity to interview John Verhoff owner of Plumbing Nerds. They are a full service
                    Plumbing Company serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over
                    $800K year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the
                </p><button>READ MORE</button>
            </div>
            <div class="blog2"><img src="../assets/images/Rectangle 67.png" alt="">
                <h6>LUXURY REAL ESTATE MARKET COMPARISION IN LOS ANGELES</h6>
                <p>We had the opportunity to interview John Verhoff owner of Plumbing Nerds. They are a full service
                    Plumbing Company serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over
                    $800K year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the
                </p><button>READ MORE</button>
            </div>
            <div class="blog3"><img src="../assets/images/Rectangle 68.png" alt="">
                <h6>LUXURY REAL ESTATE MARKET COMPARISION IN LOS ANGELES</h6>
                <p>We had the opportunity to interview John Verhoff owner of Plumbing Nerds. They are a full service
                    Plumbing Company serving the Southwest Florida Area. Discover how he grew to 10 trucks and is up over
                    $800K year over year (on pace for $2.7M this year). He shares some amazing insights on how they keep the
                </p><button>READ MORE</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blogs {
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

.flex-box{
    display: flex;
    justify-content: space-between;
}

.flex-box div{
    display: flex;
    width: 416px;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #FFF;
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.10);
}



.flex-box div h6{
    width: 264px;
    color: #000;
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.176px;
}

.flex-box div p{
    align-self: stretch;
    color: #808080;
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.176px;
}

.flex-box div button{
    padding: 15px 30px;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px; /* 130% */
    letter-spacing: 0.42px;
    background-color: white;
    
    
}

.flex-box div button:hover{
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 0.3s ease;
    
    
}


</style>

<script>
export default {

}

</script>