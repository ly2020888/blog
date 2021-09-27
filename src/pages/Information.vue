<script setup lang="ts">
    import { ref } from "vue"
    import { Moment } from 'moment';
    const value = ref<Moment>();
        const onPanelChange = (value: Moment, mode: string) => {
        console.log(value, mode);
        };
const data: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
</script>
<template>
    <div class="m-container">
        <div class="info-container">
            <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
        </div>
        <div class="info-container">
            <a-list size="small"  :data-source="data">
            <template #renderItem="{ item }">
                <a-list-item>{{ item }}</a-list-item>
            </template>
            <template #header>
                <div>相关链接</div>
            </template>
            <template #footer>
                <div>Footer</div>
            </template>
            </a-list>
        </div>
  </div>
</template>
<style>
.m-container{
    display: flex;
    flex-direction: column;
}
.info-container{
    margin: 5px;
    margin-left: 20px;
    padding: 15px 15px;
}
</style>