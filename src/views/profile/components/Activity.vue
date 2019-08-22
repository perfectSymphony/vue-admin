<template>
    <div class="user-activity">
        <div class="post">
            <div class="user-block">
                <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg' + avatarPrefix">
                <span class="username text-muted">The Expendables</span>
                <span class="description">Shared publicly - 7:30 PM today</span>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Velit harum libero quisquam blanditiis aliquam deserunt ipsa 
                doloribus officiis maiores minima, quis delectus natus,
                quo explicabo facere quam aut autem repudiandae reiciendis quasi 
                labore est ad repellendus qui! Praesentium tempora quasi nobis aliquid 
                magnam optio dolorum commodi? Harum iure dolor repellat minus maiores, 
                enim quisquam eos optio labore nemo fugiat cumque porro eum officiis exercitationem.
            </p>
            <ul class="list-inline">
                <li>
                    <span class="link-black text-sm">
                        <i class="el-icon-share" />
                        Share
                    </span>
                </li>
                <li>
                    <span class="link-black text-sm">
                        <i class="el-icon-medal" />
                        Like
                    </span>
                </li>
            </ul>
        </div>
        <div class="post">
            <div class="user-block">
                <img class="img-circle" :src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg' + avatarPrefix">
                <span class="username text-muted">Spider Man</span>
                <span class="description">Posted 4 photos - 2 days ago</span>
            </div>
            <div class="user-images">
                <el-carousel :interval="4000" type="card" height="220px">
                    <el-carousel-item v-for="item in carouselImages" :key="item">
                       <img :src="item+carouselPrefix" class="image">
                    </el-carousel-item>
                </el-carousel>                
            </div>
            <ul class="list-inline">
                <li>
                    <span class="link-black text-sm">
                        <i class="el-icon-share" />
                        Share
                    </span>
                </li>
                <li>
                    <span class="link-black text-sm">
                        <i class="el-icon-medal" />
                        Like
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'
// https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg?imageView2/2/h/440
export default {
    name: 'Activity',
    data(){
        return {
            carouselImages:[
                'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg',
                'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg',
                'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg',
                'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg'
            ],
            avatarPrefix,
            carouselPrefix
        }
    }
}
</script>
<style lang="scss" scoped>
 .user-activity {
     .user-block {

         .username,
         .description {
             display: block;
             margin-left: 50px;
             padding: 2px 0; 
         }
         .username {
             font-size: 16px;
             color: #000;
         }
        .img-circle {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            float: left;
        }
        span {
            font-weight: 500;
            font-size: 12px;
        }
     }

     .post {
         font-size: 14px;
         border-bottom: 1px solid #d2d6de;
         margin-bottom: 15px;
         padding-bottom: 15px;
         color: #666;

         .image {
             width: 100%;
             height: 100%;
         }

         .user-images {
             padding-top: 20px;
         }
     }

     .list-inline {
         padding-left: 0;
         margin-left: -5px;
         list-style: none;

         li {
             display: inline-block;
             padding-right: 5px;
             padding-left: 5px;
             font-size: 13px;
         }

         .link-black {
             
             &:hover,
             &:focus {
                 color: #999;
             }
         }
     }
 }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>


