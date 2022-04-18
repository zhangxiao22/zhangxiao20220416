<template>
  <div class="container">
    <header class="pc">
      <div class="menu">
        <div class="item"
             :class="{active:item.active}"
             v-for="(item,i) of menuList"
             :key="i">{{item.label}}
        </div>
      </div>
      <div class="box header-box">
        <img class="logo"
             src="../assets/logo.png" />
      </div>
    </header>
    <header class="mobile">
      <img class="logo"
           src="../assets/logo.png" />
    </header>
    <div class="content">
      <div class="title">
        <div class="text">CHARACTER</div>
      </div>
      <div class="list box">
        <div class="item not-last"
             v-for="(item,i) of characterList.slice(0,characterList.length-4)"
             :key="i">
          <img class="img"
               v-lazy="item.img" />
          <div class="desc">{{item.desc}}</div>
        </div>
        <div class="item last-item">
          <img class="last-item-img"
               v-lazy="item.img"
               v-for="(item,i) of characterList.slice(-4)"
               :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  data() {
    return {
      menuList: [{
        label: 'HOME',
      }, {
        label: 'NEWS',
      }, {
        label: 'WEAPONS',
      }, {
        label: 'MAP',
      }, {
        label: 'CHARACTERS',
        active: true
      }, {
        label: 'WALLPAPER',
      }],
      characterList: []
    }
  },
  created() {
    this.ajax('/api/xxx', function (res) {
      console.log(res)
    })
    // 获取列表数据
    setTimeout(() => {
      this.characterList = new Array(9).fill(
        {
          img: require('../assets/img-1.jpg'),
          desc: 'test...'
        }
      )
    }, 300)
  },
  methods: {
    ajax(url, cb) {
      var request = new XMLHttpRequest()
      request.onload = () => {
        console.log(request)
        if (request.readyState === 4) {
          if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            cb && cb(json)
          } else {
            //
          }
        }
      }
      request.open('GET', url);
      request.send();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@orange: #f7a01f;
.box {
  width: 1300px;
  margin: 0 auto;
}
.container {
  min-width: 1300px;
  header.mobile {
    height: 50px;
    border-left: 10px solid @orange;
    padding: 10px 20px;
    display: none;
    background: #000;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    img {
      height: 100%;
    }
  }
  header.pc {
    height: 260px;
    background: url("../assets/bg.png") no-repeat;
    background-position: center;
    background-size: cover;
    // padding: 20px 40px 0;
    display: flex;
    flex-direction: column;
    .menu {
      margin: 30px 40px;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      color: #eee;
      padding: 0 20px;
      height: 40px;
      border-left: 8px solid @orange;
      border-right: 8px solid @orange;
      border-radius: 6px;
      font-size: 14px;
      .item {
        margin: 0 20px;
        height: 100%;
        cursor: pointer;
        line-height: 40px;
        transition: all 0.3s;
        &:hover {
          opacity: 0.5;
        }
        &.active {
          color: @orange;
        }
      }
    }
    .header-box {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
  .content {
    // background: #1d2228;
    .title {
      color: #fff;
      display: inline-block;
      width: 100%;
      padding: 10px 40px;
      position: relative;
      text-align: center;
      margin: 60px 0;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 50%;
        top: 50%;
        border-top: 1px solid #444;
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        width: 50%;
        top: 50%;
        border-top: 1px solid #444;
      }
      .text {
        background: #444;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        position: relative;
        font-size: 14px;
        z-index: 1;
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-color: transparent #444 transparent transparent;
          border-width: 20px;
          left: 0;
          top: 0;
          transform: translateX(-100%);
        }
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-color: transparent transparent transparent #444;
          border-width: 20px;
          right: 0;
          top: 0;
          transform: translateX(100%);
        }
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        width: 400px;
        height: 400px;
        position: relative;
        overflow: hidden;
        margin-bottom: 70px;
        &.not-last {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          object-fit: cover;
        }
        .desc {
          padding: 20px;
          z-index: 1;
          color: #fff;
          background: rgba(0, 0, 0, 0.8);
        }
      }
      .last-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .last-item-img {
          width: 180px;
          height: 180px;
          margin-bottom: 40px;
        }
      }
    }
  }
}
// pad
@media screen and (max-width: 1200px) {
  .box {
    width: 900px;
  }
  .container {
    min-width: 100%;
    padding-top: 50px;
    header.pc {
      display: none;
    }
    header.mobile {
      display: block;
    }
    .content .list {
      justify-content: space-around;
    }
  }
}
// mobile(横)
@media screen and (max-width: 900px) {
  .box {
    width: 600px;
  }
}
// mobile(竖)
@media screen and (max-width: 500px) {
  .box {
    width: 100%;
  }
}
</style>
