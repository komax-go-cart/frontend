<template>
  <ion-page>
    <ion-header :translucent="true">

    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>



      <div class="row">
        <div class="col-12 col-lg-6 kx-card-padding">
          <div class="kx-card" style=" height: ">
            <div class="kx-card-maxhight" style="height: 20.5rem">
              <q-card class="no-margin full-height" square style="background-color: #C7CBCD  ">
                <div class="row justify-center q-pa-md text-center">
                  <h1>Km/h: {{ kmh }}</h1>
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
              <div class="statsHeader">Gang</div>
              <div class="row justify-center q-pa-md text-center">
                <h1> {{gear}}</h1>
              </div>
            </q-card>
          </div>
        </div>

        <div class="col-6 col-lg-6 kx-card-padding">
          <div class="kx-card-maxhight" style="height: 17.5rem">
            <q-card class="no-margin full-height" square style="background-color: #A88C7B">
              <div class="row justify-center q-pa-md text-center">
                <h1>Rpm: {{ rpm }}</h1>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data () {
    return {
      kmh: '0',
      rpm: '0',
      gear: 'D'
    }
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
