<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="pageSizes"
      :page-size.sync="pageSize"
      :layout="layout"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

import { scrollTo } from '@/utils/scroll-to'

export default {
    name: 'Pagination',
    props: {
        background: {
            type: Boolean,
            default: true
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 40]
            }
        },
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper'
        },
        total: {
            type: Number,
            default: 100
        },
        limit: {
            type: Number,
            default: 20
        },
        hidden: {
            type: Boolean,
            default: false
        },
        autoScroll: {
            type: Boolean,
            default: true
        },
        page: {
            type: Number,
            default: 1
        }
    },
    computed: {
        currentPage: {
            get(){
                return this.page
            },
            set(val){
                this.$emit('update:page', val)
            }
        },
        pageSize: {
            get() {
                return this.limit
            },
            set(val) {
                this.$emit('update:limit', val)
            }
        }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('pagination',{
            page: this.currentPage,
            limit: val
        })

        if(this.autoScroll){
            scrollTo(0, 800)
        }

        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.$emit('pagination', {
              page: val,
              limit: this.pageSize
          })
        if(this.autoScroll){
            scrollTo(0, 800)
        }
        
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style scoped>
.pagination-container {
    background-color: #fff;
    padding: 32px 16px
}

.pagination-container.hidden {
    display: none;
}
</style>