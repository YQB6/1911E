<template>
  <div>
    <div class="div_input">
      <input type="text" v-model="antistop" @keydown.enter="OnChange" class="div_text" />
      <el-button icon="el-icon-search" circle class="div_icon"></el-button>
      <div class="div_deletes" @click="Reset">X</div>
    </div>
    <el-table :data="showlist" style="width:1200px">
      <el-table-column prop="id" label="Id名" width="180"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>
      <el-table-column prop="create_time" label="时间"></el-table-column>
      <el-table-column label="操作">
        <template>
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="5"
      :page-size="2"
      @current-change="Change_Curren"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showlist: [],
      antistop: "",
    };
  },
  methods: {
      //每点击一次分页就会请求不同的数据
    Change_Curren(page) {
      console.log(page);
      this.$axios({
        mothod: "get",
        url: `https://www.liulongbin.top:8888/api/private/v1/users`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          pagesize: 2,
          pagenum: page,
        },
      }).then((res) => {
        console.log(111111111111111, res);
        this.showlist = res.data.data.users;
        console.log(222, this.showlist);
      });
    },
    //点击重置触发事件
    Reset() {
      this.$axios({
        mothod: "get",
        url: `https://www.liulongbin.top:8888/api/private/v1/users`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        params: {
          pagenum: 3,
          pagesize: 1,
        },
      }).then((res) => {
        // console.log(res);
        this.showlist = res.data.data.users;
        console.log(this.showlist);
      });
    },
    OnChange() {
      console.log("22222222222");
      this.showlist.map((item) => {
        if (item.username === this.antistop) {
            this.showlist = [];
          this.showlist.push(item);
        }
      });
      this.antistop = "";
    },
  },
  mounted() {
    this.Change_Curren(1);
  },
};
</script>

<style scoped>
.div_input {
  width: 30%;
  margin-top: 30px;
}
.div_deletes {
  position: relative;
  color: red;
  font-weight: bold;
  top: -27px;
  left: 280px;
  /* background-color: black; */
  width: 20px;
  height: 20px;
}
.div_icon {
  position: relative;
  top: 0px;
  left: 10px;
  border: 1px solid rgb(150, 82, 82);
}
.div_text {
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
}
</style>