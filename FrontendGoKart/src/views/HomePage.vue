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
                    <vue-speedometer :value="kmh" needleColor="red" :needleTransitionDuration="40" :maxValue="250" startColor="#396999" endColor="#396999"
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
                <h1> {{ gear }}</h1>
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
                    <vue-speedometer :value="rpm" needleColor="red" :needleTransitionDuration="40" :maxValue="3000"   startColor="#32a852" endColor="#eb3838"
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
      kmh: 29,
      rpm: 2500,
      gear: 'D'
    }
  },
  setup() {
    const socket = io("http://192.168.0.100:5000")

    socket.on("velocity", (response) => {
      console.log(response);
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
</style>
