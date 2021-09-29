<script setup lang="ts">

import { watch, reactive, toRefs } from "vue"
import { SettingOutlined, UserOutlined, UnorderedListOutlined, EditOutlined  } from '@ant-design/icons-vue';

let {selectedKeys, openKeys} = toRefs(reactive({
      collapsed: true,
      selectedKeys: ['1'],
      openKeys: [],
      preOpenKeys: [],
    }));

 watch( () =>selectedKeys.value, (val_)=>{
    console.log(val_)
 })

</script>

<template>
   <a-menu
      mode="inline"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <template #icon>
           <router-link to="/Index"><UnorderedListOutlined /></router-link>
        </template>
        <span>主页</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <router-link to="/Edit"><EditOutlined /></router-link>
        </template>
        <span>编辑</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <UserOutlined />
        </template>
        <span>个人</span>
      </a-menu-item>

      <a-menu-item key="4">
        <template #icon>
          <SettingOutlined />
        </template>
        <span>设置</span>
      </a-menu-item>

    </a-menu>
</template>

<style>

</style>