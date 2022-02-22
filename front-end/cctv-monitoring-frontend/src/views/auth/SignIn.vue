<template>
  <div>
    <b-container fluid>
      <b-row class="login-signin-section" align-h="center" align-v="center">
        <b-card class="login-signin-card" title="회원가입">
          <b-container class="login-signin-form" fluid>
            <b-form-group label="이름" label-for="input-name">
              <b-form-input
                id="input-name"
                v-model="name"
                type="text"
                placeholder="아이디를 입력해주세요."
              ></b-form-input>
            </b-form-group>
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
            <b-form-group label="비밀번호 확인" label-for="input-password-check">
              <b-form-input
                id="input-password-check"
                v-model="passwordCheck"
                type="password"
                placeholder="위에서 입력한 비밀번호를 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호" label-for="input-phone">
              <b-form-input
                id="input-phone"
                v-model="phone"
                type="number"
                placeholder="- 없이 번호만 입력해주세요."
              ></b-form-input>
            </b-form-group>
          </b-container>

          <b-button block variant="primary" class="login-signin-btn">회원가입</b-button>
          <a href="#" @click="$router.push('/auth/login')">로그인 하기</a>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      userid: null,
      password: null,
      passwordCheck: null
    }
  }
}
</script>

<style src="../../assets/style/login-signin.css"></style>
