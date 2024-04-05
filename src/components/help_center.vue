<template>
  <div class="help-center">
    <div class="text-content">
      <h4>We Help You Buy Or Sell Property Quickly</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        vestibulum semper malesuada tristique. Magna at arcu tincidunt felis
        elementum egestas.
      </p>
    </div>
    <form>
      <input type="text" name="name" placeholder="Full Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="" id="" cols="50" rows="10" placeholder="Message"></textarea>
      <input type="submit" name="submit" />
    </form>
  </div>
</template>

<style scoped>
.help-center{
    position: relative;
    margin-top: 98px;
    padding-left: 200px;
    padding-right: 200px;
    width: 1440px;
    height: 600px;
    background-image: url("../assets/images/Rectangle 107.png");
}
.text-content{
    position: absolute;
}
.text-content h4{
    width: 372px;
    color: white;
    margin-top: 215px;
    color: #FFF;
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 36.4px; /* 130% */
    letter-spacing: -0.308px;
    }
.text-content p{
    padding-top: 20px;
    width: 468px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.176px;
}

form{
    padding-top: 48px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 432px;
    height: 454px;
    top: 73px;
    left: 808px;
    background: rgba(0, 0, 0, 0.80);
}
form input{
    width: 350px;
    height: 44px;
    border: none;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.20);
    outline: none;
    color: white;
}
form input::placeholder{
    color: #d9d9d9bc;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px; /* 148.571% */
}

form textarea {
  resize: none;
  width: 350px;
  padding: 12px 24px;

  outline: none;
  height: 91px;
  color: white;
  background: rgba(255, 255, 255, 0.20);

}

  form textarea::placeholder {
    color: #d9d9d9bc;


    position: absolute;
    top: 20px;
    left: 24px;
}

form input[type="submit"]{
    display: flex;
    width: 150px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFF;
    color: #FFF;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px; /* 130% */
    letter-spacing: -0.154px;
    background-color: rgba(0, 0, 0, 0);
}
form input[type="submit"]:hover{
    background-color: white;
    color: black;
    transition: 0.3 ease;
    cursor: pointer;


}
</style>

<script>
export default{

}
</script>
