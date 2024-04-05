<template>
    <div class="titles">
        <h2>MEMBERS OF WESTON GROUP</h2>
        <p>
            Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse.
        </p>
    </div>
    <div class="members">
        <div>
            <img src="../assets/images/Rectangle 113.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        <div>
            <img src="../assets/images/Rectangle 119.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        <div>
            <img src="../assets/images/Rectangle 120.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        <div>
            <img src="../assets/images/Rectangle 121.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        <div>
            <img src="../assets/images/Rectangle 122.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        <div>
            <img src="../assets/images/Rectangle 123.png" alt="">
            <p>STEVEN  GREEN</p>
            <span>owner</span>
        </div>
        
    </div>
    <button>LOAD MORE</button>

</template>

<style scoped>


.titles {
    margin-top: 80px;
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

.members{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0px 210px;
    gap: 24px;
    
    
}
.members div{
    margin-top: 70px;
    
    width: 324px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.members div p{
    padding-top: 24px;
    color: #000;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 130% */
}

.members div span{
    color: #808080;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 130% */
}

button{
    margin: 81px 644px 55px;
    width: 153px;
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
    line-height: 18.2px; /* 130% */
    letter-spacing: 0.42px;
    background-color: #ffffff00;
    cursor: pointer;
}

button:hover{
    background-color: #000;
    color: white;
    transition: 0.3s ease;
}
</style>

