<template>
  <div>
    <b-modal
      id="modal-department-inform"
      :title="inputMode === 'insert' ? '부서정보 입력' : '부서정보 수정'"
      @ok="onSubmit"
    >
      <b-form-group v-if="inputMode === 'update'" label="부서 번호" disabled label-cols="3">
        <b-form-input id="id" v-model="department.id"></b-form-input>
      </b-form-group>
      <b-form-group label="부서 이름" label-for="name" label-cols="3">
        <b-form-input id="name" v-model="department.name"></b-form-input>
      </b-form-group>
      <b-form-group label="부서 담당자" label-for="manager" label-cols="3">
        <b-form-select id="manager" v-model="department.manager" :options="departmentManager"></b-form-select>
      </b-form-group>
      <b-form-group label="부서 인원" disabled label-cols="3">
        <b-form-input id="member" v-model="department.member"></b-form-input>
      </b-form-group>
      <b-form-group v-if="inputMode === 'update'" label="부서 생성일" disabled label-cols="3">
        <b-form-input id="createdAt" v-model="department.createdAt"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      department: {
        id: null,
        name: null,
        manager: null,
        member: null,
        createdAt: null
      },
      departmentManager: [
        { text: '부서 담당자를 선택해주세요.', value: null, disabled: true },
        { text: '홍길동', value: 1 },
        { text: '김길동', value: 2 },
        { text: '최길동', value: 3 },
        { text: '이길동', value: 4 },
        { text: '박길동', value: 5 }
      ]
    }
  },
  computed: {
    infoData() {
      return this.$store.getters.Department
    },
    inputMode() {
      return this.$store.getters.DepartmentInputMode
    }
  },
  watch: {
    // 모달 열린 이후 변경사항이 있을 때 입력값을 department 변수에 저장
    infoData(value) {
      this.department = { ...value }
    }
  },
  created() {
    // 모달이 최초 열릴 때 input 초기화
    this.department = { ...this.infoData }
  },
  methods: {
    onSubmit() {
      // 1. 등록인 경우
      if (this.inputMode === 'insert') {
        this.$store.dispatch('actDepartmentInsert', this.department)
      }

      // 2. 수정일 경우
      if (this.inputMode === 'update') {
        this.$store.dispatch('actDepartmentUpdate', this.department)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
