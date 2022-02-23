<template>
  <div>
    <b-container fluid class="title-section">
      <h1 class="title">부서 관리</h1>
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

        <b-button variant="primary">부서 등록</b-button>
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
        { key: 'id', label: '번호' },
        { key: 'name', label: '부서 이름' },
        { key: 'manager', label: '부서 담당자' },
        { key: 'member', label: '인원' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ],
      // fake data
      items: [
        { id: 1, name: 'department1', manager: '홍길동', member: 13 },
        { id: 2, name: 'department2', manager: '김길동', member: 11 },
        { id: 3, name: 'department3', manager: '최길동', member: 9 }
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
