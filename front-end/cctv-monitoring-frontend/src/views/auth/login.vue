<template>
  <div>
    <b-container fluid>
      <b-row class="login-signin-section" align-h="center" align-v="center">
        <b-card class="login-signin-card" title="로그인">
          <b-container class="login-signin-form" fluid>
            <b-form-group label="아이디" label-for="input-userid" :invalid-feedback="invalidUserId" :state="state">
              <b-form-input
                id="input-userid"
                v-model="userid"
                type="text"
                :state="stateUserId"
                placeholder="아이디를 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="비밀번호"
              label-for="input-password"
              :invalid-feedback="invalidPassword"
              :state="statePassword"
            >
              <b-form-input
                id="input-password"
                v-model="password"
                type="password"
                :state="statePassword"
                placeholder="비밀번호를 입력해주세요."
              ></b-form-input>
            </b-form-group>
          </b-container>

          <b-button
            type="submit"
            block
            variant="primary"
            class="login-signin-btn"
            :disabled="!(statePassword && stateUserId)"
            >로그인</b-button
          >
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
      userid: '',
      password: ''
    }
  },
  computed: {
    // userid validation
    stateUserId() {
      return this.userid.length >= 4
    },
    invalidUserId() {
      if (this.userid.length > 0) {
        return '적어도 4 글자 이상 입력해주세요.'
      }
      return '아이디를 입력해주세요.'
    },

    // password validation
    statePassword() {
      return this.password.length > 12
    },
    invalidPassword() {
      if (this.password.length > 0) {
        return '적어도 12 글자 이상 입력해주세요.'
      }

      return '비밀번호를 입력해주세요.'
    }
  }
}
</script>

<style src="../../assets/style/login-signin.css"></style>
