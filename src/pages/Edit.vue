<script setup lang="ts">
    import { ref, reactive, nextTick, inject } from "vue"
    import MdEditor from 'md-editor-v3';
    import { Passage } from "../api/interfaces"
    import 'md-editor-v3/lib/style.css';
    import Md5 from "../api/md5"
    import { uploadPassage } from "../api/http"
    import { message } from "_ant-design-vue@2.2.8@ant-design-vue";
    let getAppInfo = inject("getAppInfo", Function, true);
    let resetAppInfo = inject("resetAppInfo", Function, true)
    let app = getAppInfo();
    let text = ref("");
    let title = ref("")
    const inputRef = ref();
    const state = reactive({
      tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: '',
    });
    function handleClose( removedTag:string ):void{
      const tags = state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      state.tags = tags;
    }
    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };
    const handleInputConfirm = () => {
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    };

    function sendPassage(){
      
      if(app.value.account){
        
        if(!title.value || !text.value){
          message.error("请输入标题和文章内容", 2);
          return
        }
        const passageId = new Md5().get_md5(text.value.slice(0, 20)+Math.round(Math.random()*100));
        let passage:Passage = {
          passageId: passageId,
          title: title.value,
          content: text.value,
          createdAt: undefined,
          updatedAt: undefined
        }
        uploadPassage(passage, app.value.account).then(function(res){
          console.log(res);
          if(!res.data.code){
            message.success(res.data.text, 2);
          }
          else {
            message.error(res.data.text, 2);
            resetAppInfo();
          } 
        })
      }else{
        message.error("请先登录", 2);
      }
      
    }
</script>
<template>
    <div class="container">
        <a-input v-model:value="title" placeholder="请输入文章标题" />
        <md-editor v-model="text" class="editor"/>
        <!-- <div class="tag-box">

            <template v-for="(tag, index) in state.tags" :key="index">
                <a-tooltip v-if="tag.length > 20" :title="tag">
                <a-tag :key="tag" :closable="index !== 0" @close="handleClose(tag)">
                    {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
                </a-tooltip>
                <a-tag v-else :closable="index !== 0" @close="handleClose(tag)">
                {{ tag }}
                </a-tag>
            </template>

            <a-input
            v-if="state.inputVisible"
            ref="inputRef"
            type="text"
            size="small"
            :style="{ width: '78px' }"
            v-model:value="state.inputValue"
            @blur="handleInputConfirm"
            @keyup.enter="handleInputConfirm"
            />

            <a-tag v-else @click="showInput" style="background: #fff; border-style: dashed">
            <plus-outlined />
                New Tag
            </a-tag>
        </div> -->
        <div class="btn-box">
            <a-button type="primary" class="btn" @click="sendPassage">发送文章</a-button>
            <a-button type="primary" class="btn" >保存草稿</a-button>
        </div>
    </div>
</template>
<style>
.container{
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.editor{
    width: 100%;
    height: 100%;
}
.btn{
    margin: 10px;
}
.btn-box{
    display: flex;
    width: 100%;
    margin: 5px;
    justify-content: flex-start;
}
.tag-box{
    display: flex;
    width: 100%;
    margin: 5px;
}
</style>