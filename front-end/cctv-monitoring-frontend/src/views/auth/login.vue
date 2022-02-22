<template>
  <div>
    <b-container fluid>
      <b-row class="login-signin-section" align-h="center" align-v="center">
        <b-card class="login-signin-card" title="로그인">
          <b-container class="login-signin-form" fluid>
            <b-form-group label="아이디" label-for="input-userid">
              <b-form-input
                id="input-userid"
                v-model="userid"
                type="text"
                placeholder="아이디를 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호" label-for="input-password">
              <b-form-input
                id="input-password"
                v-model="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              ></b-form-input>
            </b-form-group>
          </b-container>

          <b-button block variant="primary" class="login-signin-btn">로그인</b-button>
          <a href="#" @click="$router.push('/auth/SignIn')">회원가입 하기</a>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: null,
      password: null
    }
  }
}
</script>

<style src="../../assets/style/login-signin.css"></style>
