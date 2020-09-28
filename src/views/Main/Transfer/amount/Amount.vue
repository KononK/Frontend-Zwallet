<template>
    <b-row class="no-gutters amount mx-4 p-4">
        <b-col lg="12">
            <div class="title">Transfer Money</div>
        </b-col>
        <b-col lg="12 mt-2">
            <CardContact/>
        </b-col>
        <b-col lg="12 mt-5">
            <p class="hint mx-1">Type the amount you want to transfer and then <br>
            press continue to the next steps.</p>
            <FormAmount/>
        </b-col>
    </b-row>
</template>

<script>
import CardContact from '../../../../components/global/CardContact'
import FormAmount from './components/FormAmount'
export default {
  name: 'Amount',
  components: {
    CardContact,
    FormAmount
  }
}
</script>

<style scoped>
.amount{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
.title{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    letter-spacing: 1px;
}
.hint{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #7A7886;
}
</style>
