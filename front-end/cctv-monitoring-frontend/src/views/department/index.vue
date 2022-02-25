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
            <b-button variant="primary" @click="searchDepartmentList">검색</b-button>
          </b-input-group>
        </b-col>

        <b-button variant="primary" @click="onClickAddNew">부서 등록</b-button>
      </b-row>

      <!-- table section -->
      <b-row class="table-section">
        <b-table small head-variant="light" :items="departmentList" :fields="fields">
          <!-- checkbox section -->
          <template #head(select)="row">
            <b-form-checkbox v-model="allSelected" @change="toggleAll">{{ row.id }}</b-form-checkbox>
          </template>
          <template #cell(select)="row">
            <b-form-checkbox v-model="selected" :value="row.item.id"></b-form-checkbox>
          </template>

          <template #cell(createdAt)="row">
            {{ row.item.createdAt.substring(0, 10) }}
          </template>

          <!-- button section -->
          <template #cell(updateBtn)="row">
            <b-button size="sm" variant="primary" :disabled="!(selected == '')" @click="onClickEdit(row.item.id)"
              >수정</b-button
            >
          </template>
          <template #cell(deleteBtn)="row">
            <b-button size="sm" variant="danger" @click="onClickDelete(row.item.id)">삭제</b-button>
          </template>
        </b-table>
      </b-row>
    </b-container>

    <!-- modal section -->
    <inform />
  </div>
</template>

<script>
import inform from './inform.vue'

export default {
  components: {
    inform: inform
  },
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
      selected: [],
      allSelected: false
    }
  },
  computed: {
    departmentList() {
      return this.$store.getters.DepartmentList
    },
    insertedResult() {
      return this.$store.getters.DepartmentInsertedResult
    },
    updatedResult() {
      return this.$store.getters.DepartmentUpdatedResult
    },
    deletedResult() {
      return this.$store.getters.DepartmentDeletedResult
    }
  },
  watch: {
    insertedResult(value) {
      // 등록 후 메시지 출력 처리
      if (value !== null) {
        if (value > 0) {
          // 등록이 성공한 경우

          // 1. 메시지 출력
          this.$bvToast.toast('부서 정보가 등록 되었습니다.', {
            title: 'SUCCESS',
            variant: 'success',
            solid: true
          })

          // 2. 리스트 재검색
          this.searchDepartmentList()
        } else {
          // 등록이 실패한 경우
          this.$bvToast.toast('부서 정보 등록이 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    updatedResult(value) {
      // 수정 후 메시지 출력 처리
      if (value !== null) {
        if (value > 0) {
          // 수정이 성공한 경우

          // 1. 메시지 출력
          this.$bvToast.toast('부서 정보가 수정 되었습니다.', {
            title: 'SUCCESS',
            variant: 'success',
            solid: true
          })

          // 2. 리스트 재검색
          this.searchDepartmentList()
        } else {
          // 수정이 실패한 경우
          this.$bvToast.toast('부서 정보 수정이 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    deletedResult(value) {
      // 삭제 후 메시지 출력 처리
      if (value !== null) {
        if (value > 0) {
          // 삭제가 성공한 경우

          // 1. 메시지 출력
          this.$bvToast.toast('부서 정보가 삭제 되었습니다.', {
            title: 'SUCCESS',
            variant: 'success',
            solid: true
          })

          // 2. 리스트 재검색
          this.searchDepartmentList()
        } else {
          // 삭제가 실패한 경우
          this.$bvToast.toast('부서 정보 삭제가 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    }
  },
  created() {
    this.searchDepartmentList()
  },
  methods: {
    // table checkbox method
    toggleAll() {
      if (this.allSelected) {
        this.selected = []
        for (let i in this.departmentList) {
          this.selected.push(this.departmentList[i].id)
        }
      } else {
        for (let i in this.departmentList) {
          this.selected.pop(this.departmentList[i].id)
        }
      }
    },

    // department REST method
    searchDepartmentList() {
      this.$store.dispatch('actDepartmentList')
    },
    onClickAddNew() {
      // 신규 등록

      // 1. 입력모드 설정
      this.$store.dispatch('actDepartmentInputMode', 'insert')

      // 2. 상세정보 초기화
      this.$store.dispatch('actDepartmentInit')

      // 3. 모달 출력
      this.$bvModal.show('modal-department-inform')
    },
    onClickEdit(id) {
      // 수정 상세정보

      // 1. 입력모드 설정
      this.$store.dispatch('actDepartmentInputMode', 'update')

      // 2. 상세정보 호출
      this.$store.dispatch('actDepartmentInfo', id)

      // 3. 모달 출력
      this.$bvModal.show('modal-department-inform')
    },
    onClickDelete(id) {
      // 삭제
      this.$bvModal.msgBoxConfirm('삭제하시겠습니까?').then(value => {
        if (value && this.selected) {
          // console.log('onClickDelete')
          for (let i = 0; i < this.selected.length; i += 1) {
            this.$store.dispatch('actDepartmentDelete', this.selected[i])
          }
        }
        if (value && this.selected == '') {
          console.log('onClickDelete-noSelect')
          this.$store.dispatch('actDepartmentDelete', id)
        }
      })
    }
  }
}
</script>

<style src="../../assets/style/table.css"></style>
