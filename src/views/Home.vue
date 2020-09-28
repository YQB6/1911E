 <template>
  <div>
    <el-container>
      <el-header>
        <span>电商后台管理系统</span>
        <el-button style="margin-left:900px" @click="LogOff">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- <el-main> -->
        <div style="text-align:center">
          <router-view></router-view>
        </div>

        <!-- </el-main> -->
      </el-container>
    </el-container>
  </div>
</template>
 
 <script>
export default {
  methods: {
    LogOff() {
      localStorage.clear();
      this.$message({
        message: "已经退出当前登录",
        type: "success",
      });
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
    //根据下标进行判断  然后跳转页面
    handleOpen(key, index) {
      console.log(key,index);
      if (index == "1") {
        this.$router.push("/home");
      } else if (index == "2") {
        // console.log("22222222222");
        this.$router.push("/home_2");
      } else if (index == "3") {
        this.$router.push("/home_3");
      } else if (index == "4") {
        this.$router.push("/home_4");
      } else if (index == "5") {
        this.$router.push("/home_5");
      }
    },
  },
};
</script>
 
 <style scoped>
.el-header {
  background-color: black;
  color: white;
  /* text-align: center; */
  line-height: 60px;
  font-size: 22px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 480px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 480px;
}
.el-submenu {
  margin-top: 40px;
}
</style>