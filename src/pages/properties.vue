<template>
        <div class="banner">
            <div class="content">
                <h1>our properties</h1>
                <p>
                    Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus
                    habitasse.
                </p>

            </div>


            <img src="../assets/images/Rectangle 112 (1).png" alt="" />
        </div>
        <div class="projects">
            <div class="titles">
                <h2>LIST OF PROPERTIES</h2>
                <p>
                    Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus
                    habitasse.
                </p>
            </div>
            <div class="tabs">
                <div>Living House</div>
                <div>House Villa</div>
                <div>House Appartments</div>
                <div>Office Floors</div>
            </div>
            <div class="filter">
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search by Area or Location">
                </div>
                <select name="" id="">
                    <option value="">Filter</option>
                </select>

            </div>
            <div class="properties">
                <Property></Property>
                <Property></Property>
                <Property></Property>
                <Property></Property>
                <Property></Property>
                <Property></Property>
                <Property></Property>
             
            </div>
               <button>LOAD MORE PROPERTIES</button>

        </div>


</template>

<style scoped>
.banner {
    padding-left: 80px;
    z-index: 1;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.content h1 {
    color: #000;
    font-family: Lato;
    font-size: 56px;
    font-style: normal;
    font-weight: 500;
    line-height: 72.8px;
    /* 130% */
    letter-spacing: -0.616px;
    text-transform: capitalize;
}

.content p {
    width: 468px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
    /* 130% */
}

.titles {
    margin-top: 103px;
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



.projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tabs {
    display: flex;
    flex-direction: space-between;
    gap: 32px;
}

.tabs div {
    display: inline-flex;
    padding: 10px 30px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #808080;
    color: #808080;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23.4px;
    /* 130% */
    letter-spacing: -0.198px;
    text-transform: capitalize;
    transition:  0.3s ease-in;
    cursor: pointer;
}
.tabs div:hover{
    background-color: #000;
    color: white;
}

.tabs div:nth-child(1) {
    background-color: #000;
    color: white;

}

.filter{
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.filter div{
    display: flex;
    gap: 10px;
    position: relative;
    width: 200px;
    height: 26px;
}

.filter div::after{
    content: "";
    height: 1px;  
    background: #808080;
    position: absolute;
    bottom: -5px;
    width: 80%;     
}

.filter input{
    width: 100%;
    border: none;

}

.filter input::placeholder{
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.176px;
    
}


.filter select{
    padding: 17px 24px;
    width: 180px;
    height: 56px;
    flex-shrink: 0;
    border: 1px solid #000;
    background: #FFF;
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px; /* 130% */
}

.properties{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    
}

property:nth-child(3n){
   
    background-color: red;    
    margin-right: 0;
}
property{
    width: calc(33% - 24px);
    margin-right: 24px;    
    display: flex;
    justify-content: space-between;
    gap: 18px;
    flex-direction: column;
    
}

.details{
    display: flex;
    justify-content: space-between;
    gap: 9px;
    flex-direction: column;
    

}

.details span{
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px; /* 130% */
    
}

.details h4{
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
    line-height: 20.8px; /* 130% */
}

.details p{
    color: #808080;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px; /* 130% */
}


button{

    margin: 81px auto 81px auto;
    width: fit-content;
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
    transition:  0.3s ease-in;
}
</style>

<script>
import Property from "../components/property.vue"
export default {
    components: {
        Property
    }
}

</script>