<template>
    <div class="property-listing">
        <div class="property-details">
            <div class="address-details">
                <h3>ICONIC MEADOW LANE OCEANFRONT</h3>
                <p class="location">
                    2040 Meadow Lane, Southampton Village, Southampton, NY 11968
                </p>
                <div class="pricing">
                    <span>$22,500,000</span><br />
                    <p>
                        <b>Estimated Payment:</b> $9,265.69/mo <br />
                        <b>Status:</b> Active <b>| Days on site:</b> 5
                    </p>
                </div>
            </div>
            <div class="property-stats">
                <div>
                    <span>4</span>
                    <p>Bedrooms</p>
                </div>
                <hr />
                <div>
                    <span>2</span>
                    <p>Bathrooms</p>
                </div>
                <hr />
                <div>
                    <span>1532 SqFt</span>
                    <p>Square Footage</p>
                </div>

            </div>
        </div>



        <div class="details">
            <div class="description">
                <h3>House Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu
                    commodo
                    quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum
                    quam
                    pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero,
                    accumsan
                    amet quam ut orci tristique risus, parturient.</p>
            </div>
            <div class="highlights">
                <h4>Highlights</h4>
                <div>
                    <p>Property Type</p>
                    <span>Residential</span>
                </div>
                <hr>
                <div>
                    <p>Lot/Acreage</p>
                    <span>0.2</span>
                </div>
                <hr>
                <div>
                    <p>Year Built</p>
                    <span>2022</span>
                </div>
                <hr>
                <div>
                    <p>Country</p>
                    <span>United States</span>
                </div>
                <hr>
                <div>
                    <p>Area</p>
                    <span>Southampton</span>
                </div>
                <hr>
                <div>
                    <p>MLS</p>
                    <span>32-123654</span>
                </div>
                <hr>
            </div>

        </div>


   
    
    <div class="exterior-details">
        <h4>Exterior Details</h4>
        <ul>
            <li><b>Plot Size :</b> 0.7 acers</li>
            <li><b>Roof :</b> Partial the roof</li>
            <li><b>Construction :</b> Frame and wood construction</li>
            <li><b>Cooling : </b> Electric air conditioning</li>
        </ul>
    </div>
    <div class="interior-details">
        <h4>Interior Details</h4>
        <ul>
            <li><b>Interior Size :</b> 3000 sq.ft</li>
            <li><b>Bedroom :</b> 4</li>
            <li><b>Bathroom :</b> 3</li>
            <li><b>Garage :</b> 4 cars</li>
            <li><b>Laundry Room :</b>Washer/Dryer Hookups</li>
        </ul>
    </div>
    <div class="room-dimentions">
        <h4>Room Dimentions</h4>
        <ul>
            <li><b>Living Room :</b> 29×18</li>
            <li><b>Bedroom :</b> 23×16</li>
            <li><b>Bathroom :</b> 12×15</li>
            <li><b>Garage :</b> 4 cars</li>
            <li><b>Kitchen : </b>23×18</li>
        </ul>
    </div> 
    </div>
</template>

<style scoped>
.property-listing {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: auto;
    width: 1440px;
}

.property-details {
    padding: 10px 72px;
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.property-details h3 {
    color: #000;
    font-family: Lato;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
}

.location {
    margin-top: 10px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
}

.pricing {
    margin-top: 30px;
}

.pricing span {
    color: #000000;
    font-family: Lato;
    font-size: 36px;
    font-weight: 500;
}

.pricing p {
    padding-top: 27px;
    line-height: 2rem;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
}

.pricing p b {
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-weight: 600;
}

.property-stats {
    display: flex;
    flex-direction: row;
    width: fit-content;
    text-align: center;
    gap: 32px;
    margin-top: 133px;
    margin-left: -200px;
}

.property-stats hr {
    height: 60px;
}

.property-stats span {
    color: #000;
    font-family: Lato;
    font-size: 32px;
    font-weight: 400;
}

.property-stats p {
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-weight: 500;
}


.details{
    margin-left: 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 39px;
}

.description h3{    
    margin-bottom: 16px;
    color: #000;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
}

.description p {
    width: 500px;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.8px;
}


.highlights {     
    width: 280px;
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;

}

.highlights h4 {
    margin-bottom: 16px;
    color: #000;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
}

.highlights div {
    display: flex;
    position: relative;
}

.highlights p {
    margin: 10px 10px auto;
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}

.highlights span {
    margin: 10px 10px auto auto;
    top: -5px;
    height: 5px;
    /* position: absolute; */
    right: 0px;
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.96px;
}

.highlights hr {
    margin-top: 8px;
}

.exterior-details {
    margin-top: 76px;
    padding-left: 72px;
}

.exterior-details h4 {
    color: #000;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
}


.exterior-details li {
    margin-left: 30px;
}

.exterior-details ul {
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 34.8px;
}

.exterior-details ul b {
    color: black;
}

.interior-details {
    margin-left: 630px;
    margin-top: -184px;
}

.interior-details h4 {
    color: #000;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
}

.interior-details ul {
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 34.8px;
}

.interior-details li {
    margin-left: 30px;
}

.interior-details ul b {
    color: black;
}

.room-dimentions {
    margin-left: 1100px;
    margin-top: -214px;
}

.room-dimentions h4 {
    color: #000;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
}

.room-dimentions ul {
    color: #808080;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 34.8px;
}

.room-dimentions li {
    margin-left: 30px;
}

.room-dimentions ul b {
    color: black;
}

.agent-profile {
    display: none;



}

.agent-profile .name {
    margin-left: 96px;
    margin-top: -60px;
}

.agent-profile p {
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 25.8px;
    letter-spacing: -1.1%;
}

.agent-profile a {
    color: #808080;
    text-decoration: underline;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 25.8px;
    letter-spacing: -1.1%;
}

.agent-profile .buttons {
    display: flex;
    gap: 16px;
    margin-top: 24px;
}

.agent-profile button {
    width: 151px;
    height: 45px;
    padding: 12px 24px;
    border: 1px solid black;
    background-color: #00000000;
    cursor: pointer;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    letter-spacing: 0.135px;


}
</style>

<script></script>
