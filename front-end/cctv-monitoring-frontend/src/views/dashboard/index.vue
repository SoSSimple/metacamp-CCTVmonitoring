<template>
  <div>
    <b-container fluid class="title-section">
      <h1 class="title">대시보드</h1>
    </b-container>

    <b-container id="device-charts">
      <b-row>
        <b-col class="chart-cards">
          <b-card title="설비 1">
            <img src="../../assets/img/chart.png" alt="chart-img" />
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col class="chart-cards">
          <b-card title="설비 2">
            <img src="../../assets/img/chart.png" alt="chart-img" />
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col class="chart-cards">
          <b-card title="설비 3">
            <img src="../../assets/img/chart.png" alt="chart-img" />
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style src="../../assets/style/dashboard.css"></style>
