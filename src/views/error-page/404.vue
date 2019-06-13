<template>
    <div class="wscn-http404-container">
        <div class="wscn-http404">
            <div class="pic-404">
                <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
                <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
                <!-- <img class="pic-404__child" src="@/assets/404_images/404_cloud.png" alt="404">
                <img class="pic-404__child" src="@/assets/404_images/404_cloud.png" alt="404"> -->
            </div>
            <div class="bullshit">

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
.wscn-http404{
    position: relative;
    width: 1200px;
    padding:0 50px;
    overflow: hidden;
    .pic-404{
        position: relative;
        float: left;
        width: 600px;
        overflow: hidden;
        &__parent{
            width: 100%;
        }
        &__child{
            position: absolute;
            &.left {
                width: 80px;
                top:17px;
                left:220px;
                opacity: 0;
                animation-name: cloudLeft;
                animation-duration: 2s;
                animation-timing-function: linear;
                animation-delay: 1s;
            }
            @keyframes cloudLeft {
                0% {
                    top: 17px;
                    left: 220px;
                    opacity: 0;
                }
                20% {
                    top: 22px;
                    left: 188px;
                    opacity: 1;
                }
                80% {

                }
                100%{
                    
                }
            }
        }
    }
    .bullshit {
        position: relative;
        float: left;
        width: 600px;
        overflow: hidden;
    }
}
</style>

