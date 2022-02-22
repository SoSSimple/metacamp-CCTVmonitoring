<template>
  <div>
    <b-container fluid class="title-section">
      <h1 class="title">설비 관리</h1>
      <h4 class="sub-title">설비 리스트</h4>
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

        <b-button variant="primary">설비 등록</b-button>
      </b-row>

      <!-- table section -->
      <b-row class="table-section">
        <b-table small head-variant="light" :items="fields" :fields="fields">
          <template #cell(cctvToggle)="row">
            <b-badge variant="success">ON {{ row.cctvToggle }}</b-badge>
            <b-badge variant="danger">OFF {{ row.cctvToggle }}</b-badge>
          </template>
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
        { key: 'name', label: '이름' },
        { key: 'registeration', label: '등록번호' },
        { key: 'description', label: '설비 설명' },
        { key: 'temperature', label: '설비 온도' },
        { key: 'humidity', label: '설비 습도' },
        { key: 'cctvToggle', label: 'CCTV ON / OFF' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ]
    }
  }
}
</script>

<style src="../../../assets/style/table.css"></style>
