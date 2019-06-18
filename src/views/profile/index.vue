<template>
    <div class="app-container">
        <div v-if="user">
            <el-row :gutter="24">
                <el-col :span="6">
                    <user-card :user='user'/>
                </el-col>
                <el-col :span="18">
                    <el-card>
                        <el-tabs v-model="activeTab" @tab-click="handleClick">
                            <el-tab-pane label="Activity" name="activity">
                                <activity />
                            </el-tab-pane>
                            <el-tab-pane label="Timeline" name="timeline">
                                <timeline />
                            </el-tab-pane>
                            <el-tab-pane label="Account" name="account">
                                <account />
                            </el-tab-pane>
                        </el-tabs>                        
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
    name: 'Profile',
    components: {
        UserCard,
        Activity,
        Timeline,
        Account
    },
    data(){
        return {
            user: {},
            activeTab: 'activity'
        }
    },
    computed: {
        ...mapGetters([
            'name',
            'avatar',
            'roles'
        ])
    },
    created(){
        this.getUser()
    },
    methods: {
        getUser(){
            this.user = {
                name: this.name,
                avatar: this.avatar,
                role: this.roles.join('')
            }
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

