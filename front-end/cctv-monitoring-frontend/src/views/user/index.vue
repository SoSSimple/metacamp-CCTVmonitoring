<template>
  <div>
    <b-container fluid class="title-section">
      <h1 class="title">사용자 관리</h1>
    </b-container>

    <b-container fluid>
      <!-- search & add button section -->
      <b-row class="search-add-section">
        <b-col class="search-input">
          <b-input-group>
            <b-form-input placeholder="검색어를 입력해주세요."></b-form-input>
            <b-button variant="primary">검색</b-button>
          </b-input-group>
        </b-col>

        <b-button variant="primary">사용자 등록</b-button>
      </b-row>

      <!-- table section -->
      <b-row class="table-section">
        <b-table small head-variant="light" :items="items" :fields="fields">
          <!-- checkbox section -->
          <template #head(select)="row">
            <b-form-checkbox v-model="allSelected" @change="toggleAll">{{ row.id }}</b-form-checkbox>
          </template>
          <template #cell(select)="row">
            <b-form-checkbox v-model="selected" :value="row.item.id"></b-form-checkbox>
          </template>

          <!-- badge section -->
          <template #cell(auth)="row">
            <b-badge v-if="row.item.auth == true" variant="primary">Admin</b-badge>
            <b-badge v-if="row.item.auth == false" variant="secondary">User</b-badge>
          </template>

          <!-- button section -->
          <template #cell(updateBtn)="row">
            <b-button size="sm" variant="primary">수정 {{ row.id }}</b-button>
          </template>
          <template #cell(deleteBtn)="row">
            <b-button size="sm" variant="danger">삭제 {{ row.id }}</b-button>
          </template>
        </b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'select', label: '선택' },
        { key: 'id', label: 'id' },
        { key: 'departmentId', label: '부서' },
        { key: 'name', label: '이름' },
        // { key: 'password', label: '비밀번호' },
        { key: 'phone', label: '내선번호' },
        { key: 'auth', label: '관리자 권한' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ],
      // fake data
      items: [
        {
          id: 1,
          departmentId: 1,
          name: '홍길동',
          phone: '01012345678',
          auth: true
        },
        {
          id: 2,
          departmentId: 2,
          name: '김길동',
          phone: '01012345678',
          auth: false
        },
        {
          id: 3,
          departmentId: 3,
          name: '최길동',
          phone: '01012345678',
          auth: false
        }
      ],
      selected: [],
      allSelected: false
    }
  },
  methods: {
    toggleAll() {
      // items는 fake data 이므로 이후 로직 작성시 주의
      if (this.allSelected) {
        this.selected = []
        for (let i in this.items) {
          this.selected.push(this.items[i].id)
        }
      } else {
        for (let i in this.items) {
          this.selected.pop(this.items[i].id)
        }
      }
    }
  }
}
</script>

<style src="../../assets/style/table.css"></style>
