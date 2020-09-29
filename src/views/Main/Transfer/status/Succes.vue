<template>
    <b-row class="no-gutters success mx-4 p-4">
        <b-col lg="12" class="">
            <b-row>
                <b-col lg="12" class="d-flex justify-content-center">
                    <div class="container-icon">
                        <b-icon class="icon" icon="check2"></b-icon>
                    </div>
                </b-col>
                <b-col lg="12" class="d-flex justify-content-center">
                    <div class="status mt-4">Transfer Success</div>
                </b-col>
            </b-row>
        </b-col>
        <b-col lg="12" class="details mt-3">
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
            <b-col lg="12 mt-3">
                <div class="title">Transfer To</div>
            </b-col>
            <CardContact/>
            <b-row class="no-gutters text-right">
                <b-col lg="12">
                    <b-button class="button share px-3 mt-5" variant="info"><b-icon icon="share"></b-icon></b-button>
                    <b-button class="button download px-5 mt-5" variant="info"><b-icon icon="download" class="mr-2"></b-icon> Download PDF</b-button>
                    <b-button class="button mt-5" variant="info">Back to Home</b-button>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import CardContact from '../../../../components/global/CardContact'
export default {
  name: 'Success',
  components: {
    CardContact
  }
}
</script>

<style scoped>
.success{
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
.container-icon{
    width: 70px;
    height: 70px;
    background: #1EC15F;
    padding: 10px;
    border-radius: 50%;
    color: white;
}
.container-icon .icon{
    width: 100%;
    height: 100%;
}
.status{
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #4D4B57;
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
    margin-right: 10px;
    margin-top: 50px;
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
.button.download{
    background: rgba(99, 121, 244, 0.15);
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #6379F4;
    border: none;
}
.button.share{
    background: rgba(99, 121, 244, 0.15);
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: black;
    border: none;
}
</style>
