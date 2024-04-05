<template>
    <footer>
        <div class="main">
            <h4>WESTON</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent</p>
        </div>
        <div class="cta">
            <p>For exclusive news and market updates sign up for our newsletter.</p>
            <input type="email" placeholder="Enter Your Email Adress" />
            <button>SUBMIT</button>
        </div>
        <div class="contact">
            <p>CONTACT US</p>
            <p class="number">(+75) 81 2345 1234</p>
            <p class="mail">Contact@domain.com</p>
            <span>Ubud No.88, New York USA, <br />
                Renon, New York</span>
        </div>
        <div class="media">
            <p>FOLLOW US</p>
            <div class="icons">
                <img src="../assets/images/akar-icons_facebook-fill.png" alt="" />
                <img src="../assets/images/akar-icons_instagram-fill.png" alt="" />
                <img src="../assets/images/akar-icons_linkedin-box-fill.png" alt="" />
                <img src="../assets/images/akar-icons_twitter-fill.png" alt="" />
            </div>
        </div>
        <div class="line"></div>
        <div class="copyright">Copyright 2022 @weston all Right Riserved.</div>
    </footer>
</template>
<style scoped>
footer {
    padding-top: 50px;
    display: flex;
    width: 1440px;
    height: 342px;
    background: #000;
}

.main {
    margin-left: 72px;
}

.main h4 {
    padding-bottom: 36px;
    color: #FFF;
    font-family: Lato;
    font-size: 28px;
    font-style: italic;
    font-weight: 800;
    line-height: 36.4px;
    /* 130% */
    letter-spacing: -0.308px;
}

.main p {

    width: 258px;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    letter-spacing: -0.176px;
}

.cta {
    position: relative;
    margin-left: 45px;

}

.cta p {

    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    letter-spacing: 0.12px;
}

.cta input {
    margin-top: 36px;
    width: 376.845px;
    height: 56px;
    border: 1px solid #FFF;
    background: #FFF;
    background-image: url('../assets/images/fluent_mail-16-filled.png');
    background-position: 34px 12px;
    background-repeat: no-repeat;
    padding: 17px 89px 16px 86px;

}

.cta button {
    width: 154.868px;
    height: 56px;
    margin-left: 24px;
    color: #FFF;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    /* 144.444% */
    letter-spacing: 0.135px;
    background-color: #00000000;
    border: 1px solid #FFF;
}

.cta button:hover {
    cursor: pointer;
    background-color: white;
    color: black;

}

.contact {
    margin-left: 46px;
    color: white;
}

.contact p {
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    /* 162.5% */
}

.contact .number {
    padding-top: 36px;

    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
}

.contact .mail {
    padding-top: 12px;
    padding-bottom: 12px;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
}

.contact span {

    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
}

.media p {
    padding-bottom: 36px;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
    /* 130% */
}

.media .icons {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

.line{
    position: absolute;
    margin-left: 72px;
    margin-top: 231px;
    width: 1369px;
    height: 1px;
    background: #FFF;
}
.copyright{
    position: absolute;
    margin-top: 247px;
    margin-left: 74px;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
}

</style>
<script></script>
