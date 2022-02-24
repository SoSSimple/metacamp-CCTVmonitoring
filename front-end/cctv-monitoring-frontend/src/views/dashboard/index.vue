<template>
  <div>
    <b-container fluid class="title-section">
      <h1 class="title">대시보드</h1>
    </b-container>

    <b-container id="device-charts">
      <b-row>
        <b-col class="chart-cards">
          <b-card :title="device[0].deviceName">
            <div v-if="chartData">
              <line-chart :chart-data="chartData" class="line-chart"></line-chart>
            </div>
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col class="chart-cards">
          <b-card :title="device[1].deviceName">
            <div v-if="chartData">
              <line-chart :chart-data="chartData" class="line-chart"></line-chart>
            </div>
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
        <b-col class="chart-cards">
          <b-card :title="device[2].deviceName">
            <div v-if="chartData" class="line-chart">
              <line-chart :chart-data="chartData" class="line-chart"></line-chart>
            </div>
            <b-button block variant="primary">CCTV 보기</b-button></b-card
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LineChart from '@/components/chart/lineChart'
export default {
  components: {
    'line-chart': LineChart
  },
  data() {
    return {
      chartData: null,
      device: [
        { deviceId: 1, deviceName: '설비 1', tagList: ['온도', '습도'] },
        { deviceId: 2, deviceName: '설비 2', tagList: ['온도', '습도'] },
        { deviceId: 3, deviceName: '설비 3', tagList: ['온도', '습도'] }
      ]
    }
  },
  mounted() {
    this.makeChartData()
  },
  methods: {
    makeChartData() {
      this.chartData = {
        labels: ['1sec', '2sec', '3sec', '4sec', '5sec'],
        datasets: [
          {
            label: '온도',
            data: [100, 120, 130, 150, 110],
            fill: false,
            borderColor: 'rgb(220,53,69)'
            // tension: 0
          },
          {
            label: '습도',
            data: [111, 205, 150, 350, 200],
            fill: false,
            borderColor: 'rgb(0 123 255)'
            // tension: 0
          }
        ]
      }
    }
  }
}
</script>

<style src="../../assets/style/dashboard.css"></style>
