<template>
  <div class="skin">
    <div class="choose">
      <img src="../assets/images/WESTON.png" alt="Company Logo" />
      <svg
        @click="close"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8789 23.9999L17.6369 19.7579C17.3637 19.475 17.2125 19.0961 17.2159 18.7028C17.2193 18.3095 17.377 17.9333 17.6552 17.6552C17.9333 17.377 18.3095 17.2193 18.7028 17.2159C19.0961 17.2125 19.475 17.3637 19.7579 17.6369L23.9999 21.8789L28.2419 17.6369C28.3803 17.4936 28.5458 17.3793 28.7288 17.3007C28.9118 17.2221 29.1086 17.1807 29.3078 17.179C29.507 17.1773 29.7045 17.2152 29.8888 17.2907C30.0732 17.3661 30.2406 17.4775 30.3815 17.6183C30.5223 17.7591 30.6337 17.9266 30.7091 18.111C30.7845 18.2953 30.8225 18.4928 30.8208 18.692C30.819 18.8912 30.7777 19.088 30.699 19.271C30.6204 19.454 30.5062 19.6195 30.3629 19.7579L26.1209 23.9999L30.3629 28.2419C30.5062 28.3803 30.6204 28.5458 30.699 28.7288C30.7777 28.9118 30.819 29.1086 30.8208 29.3078C30.8225 29.507 30.7845 29.7045 30.7091 29.8888C30.6337 30.0732 30.5223 30.2406 30.3815 30.3815C30.2406 30.5223 30.0732 30.6337 29.8888 30.7091C29.7045 30.7845 29.507 30.8225 29.3078 30.8208C29.1086 30.819 28.9118 30.7777 28.7288 30.699C28.5458 30.6204 28.3803 30.5062 28.2419 30.3629L23.9999 26.1209L19.7579 30.3629C19.475 30.6361 19.0961 30.7873 18.7028 30.7839C18.3095 30.7805 17.9333 30.6227 17.6552 30.3446C17.377 30.0665 17.2193 29.6903 17.2159 29.297C17.2125 28.9037 17.3637 28.5248 17.6369 28.2419L21.8789 23.9999Z"
          fill="black"
        />
        <path
          d="M24 42C26.3638 42 28.7044 41.5344 30.8883 40.6298C33.0722 39.7252 35.0565 38.3994 36.7279 36.7279C38.3994 35.0565 39.7253 33.0722 40.6298 30.8883C41.5344 28.7044 42 26.3638 42 24C42 21.6362 41.5344 19.2956 40.6298 17.1117C39.7253 14.9278 38.3994 12.9435 36.7279 11.2721C35.0565 9.60062 33.0722 8.27475 30.8883 7.37017C28.7044 6.46558 26.3638 6 24 6C19.2261 6 14.6477 7.89642 11.2721 11.2721C7.89642 14.6477 6 19.2261 6 24C6 28.7739 7.89642 33.3523 11.2721 36.7279C14.6477 40.1036 19.2261 42 24 42ZM24 45C18.4305 45 13.089 42.7875 9.15076 38.8492C5.21249 34.911 3 29.5695 3 24C3 18.4305 5.21249 13.089 9.15076 9.15076C13.089 5.21249 18.4305 3 24 3C29.5695 3 34.911 5.21249 38.8492 9.15076C42.7875 13.089 45 18.4305 45 24C45 29.5695 42.7875 34.911 38.8492 38.8492C34.911 42.7875 29.5695 45 24 45Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="form-container">
      <h2>CONTACT</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo excepturi
        enim sint pariatur eaque eligendi necessitatibu
      </p>

      <div class="form-div">
        <div class="first">
          <h3>Contact Information</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vel
            eu, amet pulvinar. Volutpat morbi id.
          </p>

          <ul>
            <li>
              <img src="../assets/images/Group 142.png" />
              Ubud No.88, USA, Renon, New York
            </li>
            <li>
              <img src="../assets/images/Group 143.png" />
              (+75) 81 2345 1234
            </li>
            <li>
              <img src="../assets/images/Group 144.png" />
              Contact@domain.com
            </li>
          </ul>
        </div>
        <div class="second">
          <h3>ONLINE INQUIRY</h3>
          <form>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

    methods:{
        close(){
            this.$emit('close')
        }
    }

}
</script>

<style scoped>
.skin {
    position: relative;
    overflow: hidden;
    margin: auto;
    width: 1440px;
    position: fixed;
    top:0;
    height: 100%;
    width: 100%;
    left: 0;

}

.choose{
    width: 1280px;
    display: flex;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    margin-top: 15px;

}

.form-container{
    width: 1300px;
    height: fit-content;
    margin: 100px auto;

}
.form-container h2 , .form-container p, .second h3{
    width: fit-content;
    margin: 30px auto;
}
.form-container > div{
    height: 470px;
    width: 100%;
    display: flex;
    margin-top: 50px;
}

.first{

    width: 800px;
    height: 100%;
    background-color: black;
    padding: 90px;
}
.first h3 , .first p{
    color: white;
    margin-bottom: 16px;
}
.first ul{
    display: flex;
    flex-direction: column;
    gap: 14px;
}
.first li{
    color: white;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 12px;
}

.form-div{
    border: 2px solid black;
}

.second{

    width: 100%;
    height: 100%;
}


.second form{
    margin-left: 77px;
    display: flex;
    width: 600px;
    flex-direction: column;
    gap: 28px;
}

.second div{
    display: flex;
    justify-content: space-between;

}
.second input, .second textarea{
    width: 280px;
    /* background-color: red; */
    border: none;
    padding: 7px;
    height: 20px;
    position: relative;
    padding-bottom: 34px;
    border-bottom: 1px solid #808080;
}

.second input::placeholder, .second textarea::placeholder{
    color:#808080;
}

.second textarea{
    resize: none;
    height: 60px;
    width: 100%;
    overflow: hidden;
}
.second button{
    width: fit-content;
    margin-left: auto;
    border: 1px solid black;
    background-color: transparent;
    padding: 12px 50px;
    cursor: pointer;
    transition: background-color .3s ease;
}

.second button:hover{
    background-color: black;
    color: white;
    transition: background-color .3s ease;
}

</style>
