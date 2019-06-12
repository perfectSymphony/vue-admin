<template>
    <div class="wscn-http404-container">
        <div class="wscn-http404">
            <div class="pic-404">
                <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
                <!-- <img class="pic-404__child" src="@/assets/404_images/404_cloud.png" alt="404">
                <img class="pic-404__child" src="@/assets/404_images/404_cloud.png" alt="404">
                <img class="pic-404__child" src="@/assets/404_images/404_cloud.png" alt="404"> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Page404',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.wscn-http404-container{
    transform: translate(-50%, -50%);
    position: absolute;
    top: 40%;
    left:50%;
}
</style>

