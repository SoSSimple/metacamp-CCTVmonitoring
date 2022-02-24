import api from '../apiUtil'

const stateInit = {
  Department: {
    id: null,
    name: null,
    manager: null,
    member: null,
    createdAt: null,
    updatedAt: null
  }
}

export default {
  state: {
    DepartmentList: [],
    Department: { ...stateInit.Department },
    InsertedResult: null, // 입력처리 후 결과
    UpdatedResult: null, // 수정처리 후 결과
    DeletedResult: null, // 삭제처리 후 결과
    InputMode: null // 입력모드(등록: insert, 수정: update)
  },
  getters: {
    DepartmentList: state => state.DepartmentList,
    Department: state => state.Department,
    DepartmentInsertedResult: state => state.InsertedResult,
    DepartmentUpdatedResult: state => state.UpdatedResult,
    DepartmentDeletedResult: state => state.DeletedResult,
    DepartmentInputMode: state => state.InputMode
  },
  mutations: {
    setDepartmentList(state, data) {
      state.DepartmentList = data
    },
    setDepartment(state, data) {
      state.Department = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    },
    setDeletedResult(state, data) {
      state.DeletedResult = data
    },
    setInputMode(state, data) {
      state.InputMode = data
    }
  },
  actions: {
    // 부서 리스트 조회
    actDepartmentList(context, payload) {
      // fake data
      const departmentList = [
        { id: 1, name: 'department1', manager: '홍길동', member: 13, createdAt: '2021-12-01T00:00:00.000Z' },
        { id: 2, name: 'department2', manager: '김길동', member: 11, createdAt: '2021-12-01T00:00:00.000Z' },
        { id: 3, name: 'department3', manager: '최길동', member: 9, createdAt: '2021-12-01T00:00:00.000Z' }
      ]
      context.commit('setDepartmentList', departmentList)
      console.log('actDepartmentList')

      // Rest API
      // api.get('/serverApi/departments').then(response => {
      //   const departmentList = response && response.data
      //   context.commit('setDepartmentList', departmentList)
      // })
      // .catch(error => {
      //   console.error('DepartmentList.error', error)
      //   context.commit('setDepartmentList', [])
      // })
    },

    // 부서 입력
    actDepartmentInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)

      // fake data
      setTimeout(() => {
        const insertedResult = 1
        context.commit('setInsertedResult', insertedResult)
      }, 300)

      console.log('actDepartmentInsert', payload)

      // Rest API
      // api.post('/serverApi/departments').then(response => {
      //   const insertedResult = response && response.insertedId
      //   context.commit('setDepartmentList', insertedResult)
      // })
      // .catch(error => {
      //   console.error('DepartmentInsert.error', error)
      //   context.commit('setInsertedResult', -1)
      // })
    },

    // 부서 정보 초기화
    actDepartmentInit(context, payload) {
      context.commit('setDepartment', { ...stateInit.Department })
    },

    // 입력모드 설정
    actDepartmentInputMode(context, payload) {
      context.commit('setInputMode', payload)
    },

    // 부서 상세정보 조회
    actDepartmentInfo(context, payload) {
      // 상태값 초기화
      context.commit('setDepartment', { ...stateInit.Department })

      // fake data
      setTimeout(() => {
        const departmentList = [
          {
            id: 1,
            name: 'department1',
            manager: 1,
            member: 13,
            createdAt: '2021-12-01T00:00:00.000Z'
          },
          {
            id: 2,
            name: 'department2',
            manager: 2,
            member: 11,
            createdAt: '2021-12-01T00:00:00.000Z'
          },
          {
            id: 3,
            name: 'department3',
            manager: 3,
            member: 9,
            createdAt: '2021-12-01T00:00:00.000Z'
          }
        ]

        let department = { ...stateInit.department }
        for (let i = 0; i < departmentList.length; i += 1) {
          if (payload === departmentList[i].id) {
            department = { ...departmentList[i] }
          }
        }

        context.commit('setDepartment', department)
      }, 300)

      // Rest API
      // api
      //   .get(`/serverApi/departments/${payload}`)
      //   .then(response => {
      //     const department = response && response.department
      //     context.commit('setDepartment', department)
      //   })
      //   .catch(error => {
      //     console.error('DepartmentInfo.error', error)
      //     context.commit('setDepartment', {})
      //   })
    },

    // 부서 수정
    actDepartmentUpdate(context, payload) {
      // 상태값 초기화
      context.commit('setUpdatedResult', null)

      // fake data
      setTimeout(() => {
        const updatedResult = 1
        context.commit('setUpdatedResult', updatedResult)
      }, 300)

      console.log('actDepartmentUpdate', payload)

      // Rest API
      // api
      //   .put(`/serverApi/departments/${payload}`)
      //   .then(response => {
      //     const updatedResult = response.updatedCount
      //     context.commit('setUpdateResult', updatedResult)
      //   })
      //   .catch(error => {
      //     console.error('DepartmentUpdate.error', error)
      //     context.commit('setUpdatedResult', -1)
      //   })
    },

    actDepartmentDelete(context, payload) {
      // 상태값 초기화
      context.commit('setDeletedResult', null)

      // fake data
      setTimeout(() => {
        const deletedResult = 1
        context.commit('setDeletedResult', deletedResult)
      }, 300)

      console.log('actDepartmentDelete', payload)

      // Rest API
      // api
      //   .delete(`/serverApi/departments/${payload}`)
      //   .then(response => {
      //     const deletedResult = response && response.deletedCount
      //     context.commit('setDeletedResult', deletedResult)
      //   })
      //   .catch(error => {
      //     console.error('actDepartmentDelete.error', error)
      //     context.commit('setDeletedResult', -1)
      //   })
    }
  }
}
