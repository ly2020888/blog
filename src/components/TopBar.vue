<script setup lang="ts">

</script>
<template>
<div class="topbar">
    <div class="container">
        
        <div class="fontbtn" ><a>注册</a></div>
        <div class="fontbtn" ><a>登录</a></div>
    </div>   
    <div class="container">
    
    </div>
</div>
</template>
<style>
.topbar{
    display: flex;
    width:100%;
    height:100%;
    justify-content: space-between;

    margin-bottom: 2px;
}
.container{
    display: flex;
    width: 150px;
    height:100%;
    background-color: #fff;
    justify-self: center;
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
}
.fontbtn{
    font-size: 0.75em;
    margin:0.5em;
}
.fontbtn :hover{
    color:rgb(70, 97, 218);
    cursor: pointer;
}
</style>