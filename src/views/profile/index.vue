<template>
    <div class="app-container">
        <div>
            <el-row :gutter="24">
                <el-col :span="6">
                    <user-card />
                </el-col>
                <el-col :span="18">

                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapGetter } from 'vuex'
import UserCard from './components/UserCard'

export default {
    name: 'Profile',
    components: {
        UserCard
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

