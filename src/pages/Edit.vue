<script setup lang="ts">
    import { ref } from "vue"
    import MdEditor from 'md-editor-v3';
    import 'md-editor-v3/lib/style.css';
    let text = ref("");
</script>
<template>
    <md-editor v-model="text" class="editor"/>
</template>
<style>
.editor{
    width: 1500px;
    height: 100%;
}
</style>