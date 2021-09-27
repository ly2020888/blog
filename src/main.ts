import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/route"
import { Button, Checkbox, LayoutHeader, LayoutContent, LayoutFooter, Layout, Menu, Avatar, Input, Card, Calendar, List } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

[Button, Checkbox, Layout, LayoutHeader,
     LayoutContent, LayoutFooter, Menu, Avatar,
      Input, Card, Calendar, List,
       router].forEach( ( el:any ) =>
    app.use(el))

app.mount('#app');