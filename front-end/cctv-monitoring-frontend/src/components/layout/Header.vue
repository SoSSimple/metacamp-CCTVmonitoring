<template>
  <div>
    <b-navbar toggleable="lg">
      <h1>admin</h1>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b>설정</b>
            </template>
            <b-dropdown-item href="#"><b>로그아웃</b></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style src="../../assets/style/header.css"></style>
