<template>
  <div>
    <div id="sidebar">
      <b-list-group id="sidebar-list">
        <b-list-group-item href="#" @click="$router.push('/dashboard')">대시보드</b-list-group-item>
        <b-list-group-item href="#" @click="$router.push('/department')">부서 관리</b-list-group-item>
        <b-list-group-item href="#">사용자 관리</b-list-group-item>
        <b-list-group-item href="#">
          장비 관리
          <ul>
            <li>설비 리스트</li>
            <li>CCTV 보기</li>
          </ul>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style src="../../assets/style/sidebar.css"></style>
