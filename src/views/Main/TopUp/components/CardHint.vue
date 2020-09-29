<template>
<div>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">1.</b-col>
  <b-col lg="11">
    <div class="hint">Go to the nearest ATM or you can use E-Banking.</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">2.</b-col>
  <b-col lg="11">
    <div class="hint">Type your security number on the ATM or E-Banking.</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">3.</b-col>
  <b-col lg="11">
    <div class="hint">Select “Transfer” in the menu</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">4.</b-col>
  <b-col lg="11">
    <div class="hint">Type the virtual account number that we provide you at the top.</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">5.</b-col>
  <b-col lg="11">
    <div class="hint">Type the amount of the money you want to top up.</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">6.</b-col>
  <b-col lg="11">
    <div class="hint">Read the summary details</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">7.</b-col>
  <b-col lg="11">
    <div class="hint">Press transfer / top up</div>
  </b-col>
</b-row>
<b-row class="no-gutters cards mt-3 d-flex align-items-center p-2">
  <b-col lg="1" class="number text-center">8.</b-col>
  <b-col lg="11">
    <div class="hint">You can see your money in Zwallet within 3 hours.</div>
  </b-col>
</b-row>
</div>
</template>

<script>
export default {
  name: 'CardHint'
}
</script>

<style scoped>
.cards{
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.number{
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #6379F4;
}
.hint{
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #7A7886;
  letter-spacing: 1px;
}
</style>
