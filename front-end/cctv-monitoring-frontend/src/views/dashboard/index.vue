<template>
  <div>
    <h1>대시보드</h1>

    <b-container id="device-charts">
      <b-row>
        <b-col>
          <b-card title="설비 1">
            <img src="../../assets/img/chart.png" alt="chart-img" />
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col>
          <b-card title="설비 2">
            <img src="../../assets/img/chart.png" alt="chart-img" />
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col>
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
