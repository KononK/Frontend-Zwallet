<template>
    <b-row class="no-gutters confirm mx-4 p-4">
        <b-col lg="12">
            <div class="title">Transfer To</div>
        </b-col>
        <b-col lg="12 mt-2">
            <CardContact/>
        </b-col>
        <b-col lg="12 mt-2">
            <div class="title">Details</div>
        </b-col>
        <b-col lg="12 mt-2 details">
            <b-row class="no-gutters card px-4 py-2 mt-2">
                <b-col lg="12" class="card-title">Amount</b-col>
                <b-col lg="12" class="card-details">Rp100.000</b-col>
            </b-row>
            <b-row class="no-gutters card px-4 py-2 mt-2">
                <b-col lg="12" class="card-title">Balance Left</b-col>
                <b-col lg="12" class="card-details">Rp20.000</b-col>
            </b-row>
            <b-row class="no-gutters card px-4 py-2 mt-2">
                <b-col lg="12" class="card-title">Date & Time</b-col>
                <b-col lg="12" class="card-details">May 11, 2020 - 12.20</b-col>
            </b-row>
            <b-row class="no-gutters card px-4  py-2 mt-2">
                <b-col lg="12" class="card-title">Notes</b-col>
                <b-col lg="12" class="card-details">For buying some socks</b-col>
            </b-row>
            <b-row class="no-gutters text-right">
                <b-col lg="12" class="card-title">
                <b-button class="button mt-5" variant="info">Continue</b-button>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import CardContact from '../../../../components/global/CardContact.vue'
export default {
  name: 'Confirm',
  components: {
    CardContact
  }
}
</script>

<style scoped>
.confirm{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    position: relative;
}
.title{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    letter-spacing: 1px;
}
.card{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    border: none;
}
.card-title{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7A7886;
    letter-spacing: 1px;
}
.card-details{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #514F5B;
    letter-spacing: 1px;
}
.button{
    padding: 10px;
    margin-top: 50px;
    width: 7rem;
    background: #6379F4;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
}
</style>
