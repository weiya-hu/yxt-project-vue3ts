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
  min-width: 1440px;
}

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
.mypage{
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
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
.el-dialog__header{
  margin-right: 0!important;
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
</style>
