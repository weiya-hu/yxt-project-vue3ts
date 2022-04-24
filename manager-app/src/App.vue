<script setup lang="ts">
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
  --el-color-success: #24BD13;
  --el-color-warning: #FFB700;
  min-width: 1440px;
}
body {
  .el-button--primary {
    --el-button-bg-color: #2D68EB;
    --el-button-border-color: #2D68EB;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.85);
    --el-button-hover-border-color: rgba(45, 104, 235, 0.85);
    --el-button-active-bg-color: #245BD6;
    --el-button-active-border-color: #245BD6;
  }
  .bdc_btn{
    --el-button-text-color:#2D68EB;
    --el-button-border-color: #2D68EB;
    --el-button-hover-text-color: #245BD6;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.1);
    --el-button-hover-border-color: #245BD6;
    --el-button-active-bg-color: rgba(45, 104, 235, 0.2);
    --el-button-active-border-color: #245BD6;
    --el-button-disabled-bg-color: #fff;
    --el-button-disabled-border-color: rgba(45, 104, 235, 0.35);
    --el-disabled-text-color: rgba(45, 104, 235, 0.4);
  }
}

#app {
  height: 100%;
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
.fww{
  flex-wrap: wrap;
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
  align-items: center;
  img{
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
.color999{
  color: $color999;
}
.w100{
  width: 100%;
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
    --el-table-border-color: #eee;
    --el-table-row-hover-bg-color:rgba(45,104,235,0.10);
    thead{
      height: 40px;
      font-size: 14px;
      color: $color333;
      .el-table__cell{
        background-color: $colorddd;
      }
      .cell{
        font-weight: 600;
      }
    }
  }
  .line{
    height: 14px;
    width: 1px;
    margin: 0 16px;
    background-color: $coloreee;
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
    margin-right: 0;
    .el-dialog__title{
      font-size: 16px;
      color: $color333;
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

.fade-leave-from{
  display: none;//解决页面过渡抖动
}
.fade-enter-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from,.fade-leave-to {
  opacity: 0;
}
.bgline{
  height: 20px;
  width: 1px;
  margin:0 20px;
  background-color: $color333;
}
.fw600{
  font-weight: 600;
}
.chover{
  &:hover{
    color: $dfcolor;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
.mycard{
  .el-card__header{
    font-size: 18px;
    font-weight: 600;
    border-bottom: none;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    &::before{
      content: '';
      width: 4px;
      height: 16px;
      left: 20px;
      margin-right: 8px;
      background-color: $dfcolor;
    }
  }
  .el-card__body{
    padding-top: 10px;
    .el-descriptions__label{
      display: inline-block;
      width: 100px;
    }
    .el-descriptions__content{
      padding-left: 10px;
      border-left: 1px solid $color999;
    }
  }
}
.mt20{
  margin-top: 20px;
}
.mb20{
  margin-bottom: 20px;
}
.ml20{
  margin-left: 20px;
}
.mr20{
  margin-right: 20px;
}
.pt20{
  padding-top: 20px;
}
.pb20{
  padding-bottom: 20px;
}
.pl20{
  padding-left: 20px;
}
.pr20{
  padding-right: 20px;
}
.mt16{
  margin-top: 16px;
}
.mb16{
  margin-bottom: 16px;
}
.ml16{
  margin-left: 16px;
}
.mr16{
  margin-right: 16px;
}
.pt16{
  padding-top: 16px;
}
.pb16{
  padding-bottom: 16px;
}
.pl16{
  padding-left: 16px;
}
.pr16{
  padding-right: 16px;
}
.mytabs{
  .el-tabs__header{
    .el-tabs__item{
      font-size: 18px;
    }
  }
  .is-active{
    font-weight: 600;
  }
}
.page_header{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.inline_myform{
  .el-form-item{
    margin-bottom: 0;
  }
}
.ftitle{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.lookhover{
  cursor: url('@/assets/images/imagelook.cur'),pointer;
}
.pool_box{
  .el-dialog__body{
    padding-top: 10px;
    position: relative;
  }
}
.mytable-data{
  .el-table{
    thead{
      height: 40px;
      th{
        background: #EEEEEE !important;
        border-right: 1px solid rgba(221,221,221,1);
        color: #333333;
        font-size: 14px;
        font-weight: bold;
      }
    }
    tr{
      height: 40px;
      td{
        color: #666666;
        font-size: 14px;
      }
    }
  } 
}
.status_dot{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;
  &.sdot_g{
    background-color: #24BD13;
  }
  &.sdot_y{
    background-color: #FFB700;
  }
  &.sdot_b{
    background-color: #51A1FC;
  }
  &.sdot_r{
    background-color: #E40000;
  }
}
.btn_tab{
  .el-button{
    z-index: 1!important;
    --el-button-divide-border-color: #2D68EB;
    --el-button-hover-text-color: #2D68EB;
    --el-button-hover-border-color: #999999;
    --el-button-hover-bg-color: #fff;
  }
  .el-button.btn_tab_active {
    --el-button-hover-border-color: #2D68EB;
    --el-button-border-color: #2D68EB;
    --el-button-hover-bg-color: rgba(45, 104, 235, 0.08);
    --el-button-bg-color: rgba(45, 104, 235, 0.08);
    z-index: 11!important;
  }
}
.up-user-hwy{
  input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
      -webkit-appearance: none;
    }
}
</style>
