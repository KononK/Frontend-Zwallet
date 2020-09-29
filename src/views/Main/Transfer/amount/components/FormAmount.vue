<template>
    <div class="text-right">
        <b-form-group class="form mx-auto">
        <b-form-input type="number" class="number" v-model="number" placeholder="0.00"></b-form-input>
        <p class="saldo">Rp120.000 Available</p>
        <b-input-group size="sm" class="notes mx-auto">
        <b-input-group-prepend is-text>
            <b-icon icon="pen"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="text" class="text" placeholder="Add some notes"></b-form-input>
            </b-input-group>
        </b-form-group>
        <b-button class="button mx-4" variant="info">Continue</b-button>
        <ModalPin v-show="ModalShow"/>
    </div>
</template>

<script>
import ModalPin from '../../../../../components/global/ModalPin'
export default {
  name: 'FormAmount',
  components: {
    ModalPin
  },
  data: () => ({
    ModalShow: true
  })
}
</script>

<style scoped>
.container{
    position: relative;
}
.form{
    width: 50%;
    margin-top: 30px;
    position: relative;
}
.number{
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 56px;
    text-align: center;
    color: #B5BDCC;
}
.number:focus{
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 56px;
    text-align: center;
    color: #6379F4;
}
.saldo{
    margin-top: 10px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #3A3D42;
}
.notes{
    width: 85%;
    border: none;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    border-radius: 0;
    margin-top: 20px;
}
.text{
    width: 85%;
    border: none;
}
.input-group-text{
    border: none;
    background: none;
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
