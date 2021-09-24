<script setup lang="ts">
import { ref } from "vue"
import { Moment } from 'moment';
const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };
</script>
<template>
    <div class="info-container">
     <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
    </div>
</template>
<style>
.info-container{
    margin: 5px;
    margin-left: 20px;
    padding: 15px 15px;
}
</style>