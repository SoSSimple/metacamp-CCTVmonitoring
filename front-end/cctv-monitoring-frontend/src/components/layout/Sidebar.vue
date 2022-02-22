<template>
  <div>
    <div id="sidebar">
      <b-list-group id="sidebar-list">
        <b-list-group-item href="#" @click="$router.push('/dashboard')">대시보드</b-list-group-item>
        <b-list-group-item href="#" @click="$router.push('/department')">부서 관리</b-list-group-item>
        <b-list-group-item href="#" @click="$router.push('/user')">사용자 관리</b-list-group-item>
        <b-list-group-item href="#">
          장비 관리
          <ul>
            <li><a href="#" @click="$router.push('/device/list')">설비 리스트</a></li>
            <li><a href="#" @click="$router.push('/device/cctv')">CCTV 보기</a></li>
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
