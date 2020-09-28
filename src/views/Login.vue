<template>
  <div>
    <div class="div_login">
      <img src="../views/favicon.jpg" class="div_imgs" />
      <el-input v-model="username" placeholder="请输入内容"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-button type="success" style="margin-top:40px" @click="Login_name">登录</el-button>
    </div>
  </div>
</template>

<script>
// import '../views/favicon.ico'
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    Login_name() {
      if (this.username === "admin" && this.password === "123456") {
        this.$axios
          .post("https://www.liulongbin.top:8888/api/private/v1/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res.data.data.token);
            let token = res.data.data.token;
            localStorage.token = token;
            this.$message({
              message: "恭喜你，登录成功",
              type: "success",
            });
            setTimeout(() => {
              this.$router.push("/home");
            }, 2000);
          });
      } else {
        this.$message({
          message: "警告哦，输入的用户名和密码不正确",
          type: "warning",
        });
        return;
      }
    },
  },
};
</script>

<style scoped>
.div_login {
  width: 500px;
  height: 300px;
  border: 1px solid black;
  text-align: center;
  margin-left: 30%;
  margin-top: 10%;
}
.el-input {
  margin-top: 30px;
}
.div_imgs {
  width: 70px;
  height: 60px;
}
</style>
