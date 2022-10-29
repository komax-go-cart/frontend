<template>
  <ion-page>
    <ion-header :translucent="true">

    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        
      </ion-header>



      <div class="row">
        <div class="col-12 col-lg-6 kx-card-padding">
          <div class="kx-card" style=" height: ">
            <div class="kx-card-maxhight" style="height: 20.5rem">
              <q-card class="no-margin full-height" square style="background-color: #C7CBCD  ">
                <link rel="shortcut icon" type="image/png" href="<%= BASE_URL %>assets/icon/Logo_Komax.svg.png" />
                <div class="row justify-center q-pa-md text-center">
                  <div>
                    <vue-speedometer :value="kmh" needleColor="red" :needleTransitionDuration="10" id="speedometer1" :maxValue="150" startColor="#396999" endColor="#396999"
                      needleTransition="easeElastic" />
                  </div>
                  <br>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6 col-lg-6 kx-card-padding">
          <div class="kx-card-maxhight" style="height: 17.5rem">
            <!-- <div class="row justify-center q-pa-md text-center">-->
            <q-card class="no-margin full-height" square style="background-color: #EEEDED;">
              <div class="row justify-center q-pa-md text-center">
                <h4 id="gear"> Gang {{ gear }}</h4>
              </div>
            </q-card>
          </div>
        </div> 

        <div class="col-6 col-lg-6 kx-card-padding">
          <div class="kx-card-maxhight" style="height: 17.5rem">
            <q-card class="no-margin full-height" square style="background-color: #A88C7B"> <!--:segmentColors="['#32a852', '#62a138', '#ebdd42', '#f7ab05', '#eb3838']"-->
              <div class="row justify-center q-pa-md text-center">
                <h5>Rpm</h5>
                <div>
                    <vue-speedometer :value="rpm" needleColor="red" :needleTransitionDuration="5" id="speedometer2" :maxValue="3000" :heigth="200" margin-top="300px"  startColor="#32a852" endColor="#eb3838"
                      needleTransition="easeElastic" />
                  </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, iosTransitionAnimation } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ref } from 'vue';
import VueSpeedometer from "vue-speedometer"
import { io } from "socket.io-client"

const socket = io("http://192.168.0.100:5000")

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    VueSpeedometer
  },
  data() {
    return {
      kmh: ref(0),
      rpm: ref(0),
      gear: 'D'
    }
  },
  mounted() {
    socket.on("currentVelocity", (data) => {
      this.kmh = Number(data);
    });

    socket.on("currentRPM", (data) => {
      this.rpm = Number(data);
    });
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}
body {
  overflow: hidden; /* Hide scrollbars */
  -ms-overflow-style: none;  /* IE and Edge */

}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

#speedometer1 {
  margin-top: 20%;
  width: 400;
}
#speedometer2 {
  margin-top: 15%;
}
#gear {
  margin-top: 15%;
}


</style>
