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
        <b-table small head-variant="light" :items="items" :fields="fields">
          <!-- checkbox section -->
          <template #head(select)="row">
            <b-form-checkbox v-model="allSelected" @change="toggleAll">{{ row.id }}</b-form-checkbox>
          </template>
          <template #cell(select)="row">
            <b-form-checkbox v-model="selected" :value="row.item.id"></b-form-checkbox>
          </template>

          <!-- badge section -->
          <template #cell(cctvToggle)="row">
            <b-badge v-if="row.item.cctvToggle == true" variant="success">ON</b-badge>
            <b-badge v-if="row.item.cctvToggle == false" variant="danger">OFF</b-badge>
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
        { key: 'name', label: '이름' },
        { key: 'productNo', label: '제품번호' },
        { key: 'registeration', label: '등록일' },
        // { key: 'description', label: '설비 설명' },
        { key: 'temperature', label: '설비 온도' },
        { key: 'humidity', label: '설비 습도' },
        { key: 'cctvToggle', label: 'CCTV 상태' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ],
      // fake data
      items: [
        {
          id: 1,
          name: 'device1',
          productNo: 123456,
          registeration: '220223',
          temperature: 33,
          humidity: 33,
          cctvToggle: true
        },
        {
          id: 2,
          name: 'device2',
          productNo: 123456,
          registeration: '220223',
          temperature: 33,
          humidity: 33,
          cctvToggle: false
        },
        {
          id: 3,
          name: 'device3',
          productNo: 123456,
          registeration: '220223',
          temperature: 33,
          humidity: 33,
          cctvToggle: true
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

<style src="../../../assets/style/table.css"></style>
