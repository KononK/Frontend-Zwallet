<template>
<b-row class="no-gutters cards p-2 my-2">
    <b-col lg="1">
        <div class="icon px-2">
        <b-icon icon="arrow-up"></b-icon>
        </div>
    </b-col>
    <b-col lg="11">
        <b-row class="no-gutters mx-2 title">Netflix subscription</b-row>
        <b-row class="no-gutters mx-2 amount my-2">Rp149.000</b-row>
    </b-col>
</b-row>
</template>

<script>
export default {
  name: 'CardNotif'
}
</script>

<style scoped>
.cards{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
.icon{
    color: #EE5A38;
    font-size: 20px;
}
.title{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #7A7A7A;
    letter-spacing: 1px;
}
.amount{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #43484F;
    letter-spacing: 1px;
}
</style>
