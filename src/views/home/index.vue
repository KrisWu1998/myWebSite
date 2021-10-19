<template>
  <div class="home">
    <!-- 站长介绍 -->
    <!-- <My /> -->
    <div class="wrap">
      <div class="main container">
        <!-- 左侧文章 -->
        <div class="article">
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
        </div>
        <!-- 右侧个人 -->
        <div class="master">
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
              <el-tag>靓仔</el-tag>
              <el-tag type="success">游戏玩家</el-tag>
              <el-tag>爱吃炸鸡，串串</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import My from '../../components/Home/My.vue';
import ArticleItem from '../../components/Home/listItem.vue';
import avator from '../../assets/img/portrait.jpg';
export default {
  name: 'home',
  components: {
    My,
    ArticleItem
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
    // 分页数量修改
    const handleSizeChange = (val)=> {
      state.pageSzie = val;
    }
    // 分页切换
    const handleCurrentChange = (val) => {
      state.page = val;
    }

    return {
      ...toRefs(state),
      handleSizeChange,
      handleCurrentChange
    };
  }
}
</script>

<style lang="less" scoped>
.home {
  .container {
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
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
  }
}
</style>