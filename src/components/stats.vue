<template>
    <div class="stats">
        <img src="../assets/images/Rectangle 4.png" alt="">
        <h3>TEAM ACCOLADES</h3>
        <div class="container">
            <div>
                <span>35</span>
                <p>COMBINED YEARS IN BUSINESS</p>
            </div>
            <div>
                <span>1.5%</span>
                <p>TOP 1.5% OF TEAMS NATIONWIDE</p>
            </div>
            <div>
                <span>$2B+</span>
                <p>OVER 1 BILLION IN TOTAL SALES</p>
            </div>
            <div>
                <span>150M+</span>
                <p>DEAL VOLUME IN THE PAST 12 MONTH</p>
            </div>
            <div>
                <span>4%</span>
                <p>LIST TO SOLD AVERAGE</p>
            </div>
            <div>
                <span>900+</span>
                <p># OF CHAMPAGNE BOTTLES DELIVERED</p>
            </div>
            
            


        </div>
    </div>
</template>

<style scoped>
.stats {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 95px;
}

.stats h3 {
    position: absolute;
    padding-top: 40px;
    color: #FFF;
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    /* 130% */
}

.container {

    padding: 46px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 130px;
    position: absolute;
    width: 914px;
    height: 434px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.80);
}

.container span{
    
    color: #FFF;
    font-family: Lato;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px; /* 115.556% */
}

.container p{
    padding-top: 16px;
    color: #FFF;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.4px; /* 130% */
    letter-spacing: -0.198px;
}
</style>

<script>
export default{
    
}

</script>