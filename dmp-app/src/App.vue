<script setup lang="ts">
import { mainStore } from '@/store/index'
const store = mainStore()
store.setTypeList()
store.setAddressList()
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  --el-color-primary: #2D68EB;
  --el-color-danger: #E40000;
  min-width: 1440px;
}
// :root {
//   --el-color-primary: #2D68EB;
// }

.el-button--primary {
  --el-button-bg-color: #2D68EB!important;
  --el-button-border-color: #2D68EB!important;
  --el-button-hover-bg-color: rgb(87, 134, 239)!important;
  --el-button-hover-border-color: rgb(87, 134, 239)!important;
  --el-button-active-bg-color: rgb(41, 94, 212)!important;
  --el-button-active-border-color: rgb(41, 94, 212)!important;
}

#app {
  height: 100%;
  // --el-color-primary: #2D68EB;
}
.p-relative {
  position: relative;
}

.flex{
  display: flex;
}
.f1{
  flex:1
}
.fc{
  display: flex;
  flex-direction: column;
}
.fcc{
  display: flex;
  justify-content: center;
  align-items: center;
}
.fsc{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fcs,.flexl{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.fjend{
  display: flex;
  justify-content: flex-end;
}
.fs0{
  flex-shrink: 0;
}
.faend{
  display: flex;
  align-items: flex-end;
}
.flexr{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.fleximg{
  display: flex;
  justify-content: center;
  align-content: center;
  image{
    width: 100%;
  }
}
.els{
  overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap
}
.els2{
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
img{
  vertical-align: middle;
}
.dfcolor{
  color: $dfcolor!important;
}
.rotate{
  transition: all 0.5s;
  &:hover{
    transform: rotate(180deg);
    cursor: pointer;
    color: $dfcolor;
  }
}

.mytable{
  .el-table{
    thead{
      height: 60px;
      font-size: 14px;
      color: $color333;
      .cell{
        font-weight: 600;
      }
    }
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell{
    background-color: rgba(45,104,235,0.10);
  }
}
.my-data-table-row{
  height: 60px;
  font-size: 14px;
  color: #666666;
  line-height: 22px;
}

.myform{
  .el-form-item--default{
    // .el-form-item__content{
    //   line-height: 36px;
    //   height: 36px;
    // }
    .el-form-item__label{
      padding-right: 20px;
      line-height: 36px;
      height: 36px;
      color:$color333;
      font-size: 14px;
    }
  } 
  .el-input__inner{
    height: 36px;
    line-height: 36px;
  }
  .el-checkbox-group{
    // height: 36px;
    display: flex;
    flex-wrap: wrap;
    .el-checkbox{
      height: 36px;
    }
  }
}

.el-dialog{
  .el-dialog__header{
    border-bottom: 1px solid $coloreee;
    .el-dialog__title{
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
  }
}
.kf_dialog{
  .el-dialog__header{
    border-bottom: none;
  }
}

.el-dropdown{
  .right_icon{
    margin-left: 4px;
    transition: all 0.5s;
  }
  // &:hover{
  //   color: $dfcolor;
  //   .right_icon{
  //     transform: rotate(-180deg);
  //   }
  // } 
  [aria-describedby]{
    color: $dfcolor;
    .right_icon{
      transform: rotate(-180deg);
    }
  }
}
.mytag{
  background-color: #EDF5FF!important;
  border-color: #EDF5FF!important;
  color: $dfcolor!important;
}
.w100{
  width: 100%;
}
.up2b{
  // .el-dialog .el-dialog__header{
  //   border: none;
  // }
  .el-form-item--default .el-form-item__label{
    width: 78px;
  }
  .el-input__inner{
    height: 36px;
  }
  .input-textarea{
    textarea{
      resize: none;
      height: 130px;
    }
  }
  .el-select{
    width: 100%;
  }
}
.upload-users{
  .el-form-item__content{
    &>div{
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-wrap: nowrap;
    }
    
  }
}
  
.up2b{
  .el-table .el-table__cell{
    z-index: unset !important;
  }
  .el-overlay{
    background-color: rgba(0,0,0,.2) !important;
    .el-dialog{
      box-shadow: none;
    }
  }
}

.fade-leave-from{
  display: none;//????????????????????????
}
.fade-enter-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from,.fade-leave-to {
  opacity: 0;
}

.status_dot{
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
}
.status_yellow{
  background-color: $coloryellow;
}
.status_green{
  background-color: #2BD34E;
}
.status_blue{
  background-color: $dfcolor;
}
.status_red{
  background-color: $colorred;
}
</style>
