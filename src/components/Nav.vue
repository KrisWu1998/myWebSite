<template>
  <nav :class="['wrap', flag ? 'bg-change' : '']">
    <div class="wrap-left">
      <div class="logo" />
      <span>Kris Wu</span>
    </div>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/">文章</router-link>
      </li>
      <li>
        <router-link to="/">关于我</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { toRefs, watch } from 'vue'
export default {
  props: {
    flag: Boolean,
  },
  setup (props) {
    const state = {
      flag: props.flag
    }
    watch(()=>props.flag, (newVal, oldVal)=>{
      state.flag = newVal;
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;
  width: 100%;
  padding: 10px 20px;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .5s;
  text-decoration: none;
  a, span {
    color: #07122E;
  }
  &.bg-change {
    background: #07122E;
    a, span {
      color: #FFF;
    }
    li {
      &::after { 
        background-color: #FFF !important;
      }
    }
  }
  .wrap-left {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    .logo {
      width: 50px;
      height: 40px;
      margin-right: 10px;
      background: url('../assets/img/logo.png') no-repeat;
      background-size: 100% 100%;
    }
  }  
  ul {
    display: flex;
    li {
      position: relative;
      list-style: none;
      box-sizing: border-box;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #07122E;
        visibility: hidden;
        transform: scaleX(0);
        transition: .3s ease-in-out;
      }
      &:hover {
        &::after {
          visibility: visible;
          transform: scaleX(1);
        }
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>