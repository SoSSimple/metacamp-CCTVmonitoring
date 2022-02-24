<template>
  <div>
    <b-container fluid class="title-section">
      <b-row id="title-select-section">
        <b-col>
          <h1 class="title">설비 관리</h1>
          <h4 class="sub-title">CCTV 보기</h4>
        </b-col>

        <b-col id="select-section">
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
            class="mt-3"
            @change="selectDeviceList"
          ></b-form-select>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="cctv-section" fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'a',
      options: [
        { value: 'a', text: '설비 1' },
        { value: 'b', text: '설비 2' }
        // { value: { C: '3PO' }, text: 'This is an option with object value' },
        // { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  created() {
    this.selectDeviceList()
  },
  methods: {
    selectDeviceList() {
      if (this.selected === 'a') {
        this.$router.push('/device/cctv/device1')
      } else if (this.selected === 'b') {
        this.$router.push('/device/cctv/device2')
      }
    }
  }
}
</script>

<style src="../../../assets/style/cctv.css"></style>
