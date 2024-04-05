<template>
    <div class="images">
        <div>
          <img src="../assets/images/Rectangle 185.png" alt="">  
        </div> 
        <div class="small_images">
          <img src="../assets/images/Rectangle 186.png" alt="">
        <img src="../assets/images/Rectangle 187.png" alt="">
        <img src="../assets/images/Rectangle 188.png" alt="">
        <img src="../assets/images/Rectangle 189.png" alt="">  
        </div>    
    </div>
    <InnerDetails></InnerDetails>
    <RelatedProperties></RelatedProperties>
</template>

<style scoped>
.images {
    margin-top: 158px;
    height: 600px; 
    width: 644px; 
    margin-left: 72px;
    display: flex;
    
    
}

.small_images{
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-left: 8px;
}
.small_images img{
    width: 318px;
    height: 296px;
}



</style>

<script>
import InnerDetails from "../components/innerDetails.vue";
import RelatedProperties from "../components/related_properties.vue"

export default{
    components:{
        InnerDetails,
        RelatedProperties
    }
}

</script>