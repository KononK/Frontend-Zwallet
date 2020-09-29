<template>
 <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                    <b-row class="no-gutters text-left d-flex align-items-center">
                        <b-col lg="11">
                            <div class="title">Enter PIN to Transfer</div>
                        </b-col>
                        <b-col lg="1">
                            <b-button class="btn"><b-icon icon="x"></b-icon></b-button>
                        </b-col>
                    </b-row>
                    <b-row class="no-gutters text-left d-flex align-items-center">
                        <b-col lg="12">
                            <p class="hint">Enter your 6 digits PIN for confirmation to <br> continue transferring money. </p>
                        </b-col>
                    </b-row>
                    <b-row class="no-gutters text-left d-flex align-items-center">
                        <b-col lg="12">
                        <b-input-group class="mb-2">
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                            <b-form-input class="password rounded mx-1" type="password"></b-form-input>
                        </b-input-group>
                        </b-col>
                    </b-row>
                    <b-row class="no-gutters text-right d-flex align-items-center">
                        <b-col lg="12">
                            <b-button class="button" variant="info">Continue</b-button>
                        </b-col>
                    </b-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
  name: 'ModalPin'
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-content{
    border-radius: 10px;
    width: 90%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-dialog {
    letter-spacing: 1px;
    width: 1600px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.btn{
    background: none;
    color:#3A3D42;
    border: none;
}
.btn:focus{
    background: none;
    color:#3A3D42;
    border: none;
}
.btn:hover{
    background: none;
    color:#3A3D42;
}
.title{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    color: #3A3D42;
    letter-spacing: 1px;
}
.hint{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
}
.password{
    background: #FFFFFF;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
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
