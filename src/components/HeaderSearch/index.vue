<template>
  <div :class="{'show': show}" class="header-search">
      <svg-icon class="search-icon" icon-class="search" @click.stop="click"></svg-icon>
      <el-select
        v-model="search"
        filterable
        remote
        default-first-option
        class="header-search-select"
        placeholder="search">
        <el-option
          v-for="item in options"
          :key="item.path"
          :label="item.title.join('>')">
        </el-option>
      </el-select>
  </div>
</template>

<script>

import path from 'path'

export default {
    name: 'search',
    data(){
      return {
        show: false,
        search: '',
        options: []
      }
    },
    computed: {

    },
    watch: {
      // show(value){
      //   if(value){

      //   }
      // }
    },
    methods: {
      click(){
        this.show = !this.show
      }
    }
}
</script>

<style lang="scss" scoped>
  .header-search {
    font-size: 0 !important;
    
    .search-icon {
      cursor: pointer;
      font-size: 18px;
      vertical-align: middle;
    }

    .header-search-select {
      font-size: 18px;
      transition: width 0.2s;
      width: 0;
      overflow: hidden;
      background: transparent;
      border-radius: 0;
      display: inline-block;
      vertical-align: middle;
      
      /deep/ .el-input__inner {
        border-radius: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
    }

    &.show {
      .header-search-select {
        width: 210px;
        margin-left: 10px;
      }
    }
  }
</style>