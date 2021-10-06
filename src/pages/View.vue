<script setup lang="ts">
import { ref, onMounted } from "vue"
import moment from 'moment';
import { PassageUrl } from "../api/settings"
import PassageInfo from "../components/PassageInfo.vue";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import a from "../testData/md"
type Comment = Record<string, string>;
const comments = ref<Comment[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>('');
const handleSubmit = () => {
    if (!value.value) { // 没有值直接返回
            return;
    }
    submitting.value = true; //设置开始加载
    setTimeout( () => {
        submitting.value = false;
        comments.value = [{

            author: 'Han Solo', //这里后期换成httpapi拉去后台数据
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: value.value,
            datetime: moment().fromNow(),

        },...comments.value,];

        value.value = '';
    }, 1000);

};


const text:string = a
</script>
<template>

    <div class="view-container">
        
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="/Index">Index</a></a-breadcrumb-item>
            <a-breadcrumb-item>Passage</a-breadcrumb-item>
        </a-breadcrumb>
        <p class=" h1 bold">文章标题在这里</p>
        <PassageInfo></PassageInfo>
        <md-editor 
                :modelValue="text" 
                :previewOnly="true"
        />
        <p class="declear">文章著作权属于作者，未经许可禁止转载</p>
        <div class="comment">    
            <a-comment>
                <template #avatar>
                    <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                </template>
                <template #content>
                    <a-form-item>
                        <a-textarea :rows="4" v-model:value="value" />
                    </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit" style="margin:10px;">
                    Add Comment
                    </a-button>
                </a-form-item>
                </template>
            </a-comment>
        </div>
        <a-list
            v-if="comments.length"
            :data-source="comments"
            :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
            item-layout="horizontal"
            class="comment"
        >
            <template #renderItem="{ item }">
            <a-list-item>
                <a-comment
                    :author="item.author"
                    :avatar="item.avatar"
                    :content="item.content"
                    :datetime="item.datetime"
                />
            </a-list-item>
            </template>
        </a-list>
       
    </div>
</template>
<style>
@import url("../../public/css/mystyle.css");
.view-container{
    width: 100%;
    padding: 30px;
}
.comment{
    width: 100%;
}
</style>