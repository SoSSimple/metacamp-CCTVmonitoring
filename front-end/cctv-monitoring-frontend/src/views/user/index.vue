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
        <b-table small head-variant="light" :items="fields" :fields="fields">
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
        { key: 'id', label: 'id' },
        { key: 'departmentId', label: '부서id' },
        { key: 'name', label: '이름' },
        // { key: 'password', label: '비밀번호' },
        { key: 'phone', label: '내선번호' },
        { key: 'permission', label: '관리자 권한' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ]
    }
  }
}
</script>

<style src="../../assets/style/table.css"></style>
