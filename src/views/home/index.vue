<template>
  <div class="home">
    <!-- 站长介绍 -->
    <!-- <My /> -->
    <div class="wrap">
      <div class="main container">
        <!-- 左侧文章 -->
        <!-- <div class="article">
          <ArticleItem  v-for="(item) in list" :key="item"/>
          <div class="demo-pagination-block">
            <el-pagination
              v-model:currentPage="page"
              :page-sizes="[10, 30, 50, 100]"
              :page-size="pageSzie"
              layout="total, sizes, prev, pager, next, jumper"
              :total="list.length"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div> -->
        <!-- 右侧个人 -->
        <!-- <div class="master">
          <div class="avatar">
            <el-avatar :size="100" :src="avator"></el-avatar>
          </div>
          <h2>站长</h2>
          <div class="introduce">
            <div class="introduce-left">
              <h3>{{ list.length }}</h3>
              <h6>文章</h6>
            </div>
            <div class="introduce-right">
              <h3>1</h3>
              <h6>标签</h6>
            </div>
          </div>
          <hr />
          <div class="tags">
            <h4>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-biaoqian"></use>
              </svg>
              标签
            </h4>
            <div class="tags-group">
              <el-tag>潮汕后生仔</el-tag>
              <el-tag>前端</el-tag>
              <el-tag type="success">幽默</el-tag>
              <el-tag>广东靓仔</el-tag>
              <el-tag type="success">游戏玩家</el-tag>
              <el-tag>爱吃炸鸡，串串</el-tag>
            </div>
          </div>
        </div> -->
        <!-- ------------------ -->
        <!-- <h3>壁纸推荐</h3> -->
        <div class="carousel-box">
          <Carousel @confirm="handleClickIndicator"/>
          <div class="carousel-bottom">
            <Carousel ref="carouselMirror"/>
          </div>
        </div>
        <div class="work-box">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.vjshi.com%2F2018-11-12%2Fb73d52b8e54de54a7fd620ded62c25ff%2F00001.jpg%3Fx-oss-process%3Dstyle%2Fwatermark&refer=http%3A%2F%2Fpic.vjshi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638266768&t=eb8f83ba2beca02ce40ea72bd7b3895b"/>
          <div class="tip-rard">
            <h3>上班族</h3>
            <p>地点：广东广州</p>
            <p>职业：前端工程师</p>
            <p>工龄：1年 ~ 2年</p>
            <p>兴趣：音乐、网球、动漫</p>
            <p>微信：Kriswu_98</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
import My from '../../components/Home/My.vue';
import ArticleItem from '../../components/Home/listItem.vue';
import avator from '../../assets/img/portrait.jpg';
import Carousel from '../../components/Home/Carousel.vue';
export default {
  name: 'home',
  components: {
    My,
    ArticleItem,
    Carousel
  },
  setup () {
    const state = reactive({
      list: [
        1,2,3,4,5,6,7,8,9
      ],
      page: 1,
      pageSzie: 10,
      avator
    });
    const carouselMirror = ref(null);
    // 分页数量修改
    const handleSizeChange = (val)=> {
      state.pageSzie = val;
    }
    // 分页切换
    const handleCurrentChange = (val) => {
      state.page = val;
    }
    // 轮播图切换触发
    const handleClickIndicator = (val) => {
      carouselMirror.value.carousel.setActiveItem(val)
    }
    return {
      carouselMirror,
      ...toRefs(state),
      handleSizeChange,
      handleCurrentChange,
      handleClickIndicator
    };
  }
}
</script>

<style lang="less" scoped>
.home {
  .container {
    // display: flex;
    // align-items: flex-start;
    margin: 40px 0;
    .article {
      width: 70%;
    }
    .master {
      position: sticky;
      top: 75px;
      border-radius: 5px;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
      transition: all .3s;
      flex: 1;
      margin-left: 15px;
      padding: 15px;
      background: #FFF;
      &:hover {
        box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 125px;
        :deep(.el-avatar) {
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2) !important;
        }
      }
      h2 {
        text-align: center;
        font-weight: 400;
        margin-bottom: 20px;
      }
      .introduce {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 0px 27px 16px 27px;
        .introduce-left, .introduce-right {
          width: 50%;
          h3, h6 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h3 {
            margin-bottom: 10px;
          }
        }
        .introduce-left {
          border-right: 1px solid #000;
        }
      }
      hr {
        border-top: 0px solid #eaecef;
        margin: 7.5px 0;
      }
      .tags {
        .icon {
          width: 15px;
          height: 15px;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          margin-right: 8px;
        }
        .tags-group {
          margin-top: 10px;
          .el-tag{
            margin-right: 10px;
            margin-bottom: 5px;
          }
        }
      }
    }
    // --------
    .carousel-box {
      width: 100%;
      height: 600px;
      overflow:hidden;
      position: relative;
      .carousel-bottom {
        position: absolute;
        bottom: -132px;
        width: 100%;
        // transform: rotateX(217deg) rotateZ(360deg);
        transform: rotateX(180deg);
        opacity: 0.8;
        // filter: contrast(0.5);
        pointer-events: none;
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 270px;
          bottom: 0;
          z-index: 9999;
          background: linear-gradient(rgb(255, 255, 255) 4%, transparent 85%)
        }
      }
    }
    .work-box {
      position: relative;
      width: 100%;
      height: 400px;
      margin-top: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // transform: rotateY(180deg);
      }
      .tip-rard {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 9999;
        width: 430px;
        height: 312px;
        margin-top: -148px;
        padding: 10px;
        background: rgba(7, 18, 46, .5);
        color: #FFF;
        text-align: right;
        line-height: 2;
      }
    }
  }
}
</style>