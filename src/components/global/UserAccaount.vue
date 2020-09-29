<template>
    <b-row class="d-flex align-items-center">
        <b-col lg="3">
            <div class="img-container mx-auto">
            <img src="../../assets/avatar.jpg" alt="Avatar">
            </div>
        </b-col>
        <b-col lg="7">
            <b-row><div class="name">User</div></b-row>
            <b-row><div class="phone">+62 567890</div></b-row>
        </b-col>
        <b-col lg="2">
            <b-icon class="bell" icon="bell" @click="handleNotif"></b-icon>
            <transition name="dropdown">
             <div class="dropdown__menu" v-bind:class="{ active: show }" v-show="show">
                 <b-row class="no-gutters mx-3">
                     <b-col lg="12">
                         <div class="title">Today</div>
                     </b-col>
                     <b-col lg="12 mt-3 mb-2">
                         <CardNotif/>
                         <CardNotif/>
                     </b-col>
                 </b-row>
                 <b-row class="no-gutters mx-3">
                     <b-col lg="12">
                         <div class="title">This Week</div>
                     </b-col>
                     <b-col lg="12 mt-3 mb-2">
                         <CardNotif/>
                         <CardNotif/>
                     </b-col>
                 </b-row>
             </div>
         </transition>
        </b-col>
    </b-row>
</template>

<script>
import CardNotif from '../global/CardNotif'
export default {
  name: 'UserAccount',
  data () {
    return {
      show: false
    }
  },
  components: {
    CardNotif
  },
  methods: {
    handleNotif () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.col-lg-3{
    padding: 0;
}
.img-container{
    height: 50px;
    width: 50px;
}
.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-blend-mode: normal;
    border-radius: 10px;
}
.name{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    color: #3A3D42;
}
.phone{
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: rgba(58, 61, 66, 0.9);
}
.bell{
    cursor: pointer;
}
.dropdown__menu {
     top: 100%;
     right: 0.5rem;
     position: absolute;
     z-index: 10;
     height: auto;
     min-width: 400px;
     margin-top: 2.1rem;
     overflow-y: auto;
     padding: 1rem 1rem 1rem 0rem;
     background: #FFFFFF;
     box-shadow: 0px 0px 12px rgba(99, 99, 99, 0.15);
     border-radius: 20px;
}
.dropdown__menu-nav{
    list-style: none;
    margin: 0;
    padding: 10px;
}
.slide-fade-enter-active, .slide-fade-leave-active {
     transition: all 0.6s;
}
.slide-fade-enter, .slide-fade-leave-active {
     opacity: 0;
}
.slide-fade-enter {
     transform: translateX(31px);
}
.slide-fade-leave-active {
     transform: translateX(-31px);
}
.dropdown-enter-active, .dropdown-leave-active {
     transition: all 1s;
}
.dropdown-enter, .dropdown-leave-to {
     opacity: 0;
     transform: translateY(30px);
}
.title{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #7A7886;
}
</style>
