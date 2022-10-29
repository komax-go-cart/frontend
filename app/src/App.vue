<script setup lang="ts">
import { ref } from 'vue';
import { io } from "socket.io-client"

const socket = io("http://192.168.0.100:5000");

const velocity = ref(0);
const rpm = ref(0);

socket.on("currentVelocity", (data) => {
  console.log(data)
  velocity.value = Number(data);
});

socket.on("currentRPM", (data) => {
  rpm.value = Number(data);
});
</script>

<template>
  <section class="h-screen">
    <div class="h-full grid grid-cols-2">
      <div class="flex justify-center items-center bg-custom-100">
        <h1 class="font-extrabold text-3xl">{{ velocity }} km/h</h1>
      </div>

      <div class="flex justify-center items-center bg-custom-200">
        <h1 class="font-extrabold text-3xl">{{ rpm }} rpm</h1>
      </div>
    </div>
  </section>
</template>
