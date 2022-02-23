<template>
  <div>
    <b-container fluid>
      <b-row class="login-signin-section" align-h="center" align-v="center">
        <b-card class="login-signin-card" title="회원가입">
          <b-container class="login-signin-form" fluid>
            <b-form-group label="이름" label-for="input-name" :invalid-feedback="invalidName" :state="stateName">
              <b-form-input
                id="input-name"
                v-model="form.name"
                type="text"
                :state="stateName"
                placeholder="이름을 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="아이디"
              label-for="input-userid"
              :invalid-feedback="invalidUserId"
              :state="stateUserId"
            >
              <b-form-input
                id="input-userid"
                v-model="form.userid"
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
                v-model="form.password"
                type="password"
                :state="statePassword"
                placeholder="비밀번호를 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="비밀번호 확인"
              label-for="input-password-check"
              :invalid-feedback="invalidPasswordCheck"
              :state="statePasswordCheck"
            >
              <b-form-input
                id="input-password-check"
                v-model="form.passwordCheck"
                type="password"
                :state="statePasswordCheck"
                placeholder="위에서 입력한 비밀번호를 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호" label-for="input-phone" :invalid-feedback="invalidPhone" :state="statePhone">
              <b-form-input
                id="input-phone"
                v-model="form.phone"
                type="text"
                :state="statePhone"
                placeholder="- 없이 번호만 입력해주세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="부서명" label-for="select-department">
              <b-form-select id="select-department" v-model="form.department" :options="departments"></b-form-select>
            </b-form-group>
            <b-form-group label="권한" label-for="select-auth">
              <b-form-select id="select-auth" v-model="form.auth" :options="auth"></b-form-select>
            </b-form-group>
          </b-container>

          <b-button
            block
            variant="primary"
            class="login-signin-btn"
            :disabled="!(stateName && stateUserId && statePassword && statePasswordCheck && statePhone)"
            >회원가입</b-button
          >
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
      form: {
        name: '',
        userid: '',
        password: '',
        passwordCheck: '',
        phone: '',
        department: 1,
        auth: 'user'
      },
      departments: [
        { text: '부서를 선택해주세요.', value: null, disabled: true },
        { text: '전기공학부', value: 1 },
        { text: 'PLC 관리부', value: 2 },
        { text: '보안관리부', value: 3 }
      ],
      auth: [
        { text: '권한을 선택해주세요.', value: null, disabled: true },
        { text: '사용자', value: 'user' },
        { text: '관리자', value: 'admin' }
      ]
    }
  },
  computed: {
    // name validation
    stateName() {
      return this.form.name.length >= 2
    },
    invalidName() {
      if (this.form.name.length > 0) {
        return '적어도 2 글자 이상 입력해주세요.'
      }
      return '이름을 입력해주세요.'
    },

    // userid validation
    stateUserId() {
      return this.form.userid.length >= 4
    },
    invalidUserId() {
      if (this.form.userid.length > 0) {
        return '적어도 4 글자 이상 입력해주세요.'
      }
      return '아이디를 입력해주세요.'
    },

    // password validation
    statePassword() {
      return this.form.password.length >= 4
    },
    invalidPassword() {
      if (this.form.password.length > 0) {
        return '적어도 4 글자 이상 입력해주세요.'
      }
      return '비밀번호를 입력해주세요.'
    },

    // password-check validation
    statePasswordCheck() {
      return this.form.password === this.form.passwordCheck && this.form.passwordCheck.length > 0
    },
    invalidPasswordCheck() {
      if (!this.form.password === this.form.passwordCheck) {
        return '비밀번호가 일치하지 않습니다.'
      }
      return '위에서 입력한 비밀번호를 입력해주세요.'
    },

    // phone validation
    statePhone() {
      return this.form.phone.length > 9 && this.form.phone.length < 12
    },
    invalidPhone() {
      if (this.form.phone.length > 0) {
        return '필수 항목 입니다.'
      }
      return '전화번호를 입력해주세요.'
    }
  }
}
</script>

<style src="../../assets/style/login-signin.css"></style>
