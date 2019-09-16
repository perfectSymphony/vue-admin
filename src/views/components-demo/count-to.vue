<template>
  <div class="components-container">
    <count-to
      ref="example"
      class="example"
      :start-val="_startVal"
      :end-val="_endVal"
      :duration="setDuration"
      :decimals="_decimals"
      :autoplay="false"
      :prefix="_prefix"
      :suffix="setSuffix"
    />
    <div style="margin-left:25%;margin-top:40px;">
      <label class="label" for="startValInput">startVal:
        <input v-model.number="setStartVal" type="number" name="startValInput">
      </label>
      <label class="label" for="endValInput">endVal:
        <input v-model.number="setEndVal" type="number" name="endValInput">
      </label>
      <label class="label" for="durationInput">duration:
        <input v-model.number="setDuration" type="number" name="durationInput">
      </label>
      <div class="startBtn example-btn" @click="start">
        Start
      </div>
      <div class="pause-resume-btn example-btn" @click="pauseResume">
        pause/resume
      </div>
      <label class="label" for="decimalsInput">decimals:
        <input v-model.number="setDecimals" type="number" name="decimalsInput">
      </label>
      <label class="label" for="separatorInput">separator:
        <input v-model="setSeparator" name="separatorInput">
      </label>
      <label class="label" for="prefixInput">prefix:
        <input v-model="setPrefix" name="prefixInput">
      </label>
      <label class="label" for="suffixInput">suffix:
        <input v-model="setSuffix" name="suffixInput">
      </label>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'

export default {
  name: 'CountToDemo',
  components: {
    countTo
  },
  data() {
    return {
      setStartVal: 0,
      setEndVal: 2019.2019,
      setDuration: 3000,
      setDecimals: 4,
      setSeparator: ',',
      setPrefix: '￥',
      setSuffix: ' RMB'
    }
  },
  computed: {
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal
      } else {
        return 0
      }
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal
      } else {
        return 0
      }
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert('数字参数必须介于0 ~ 20 之间')
          return 0
        }
        return this.setDecimals
      } else {
        return 0
      }
    },
    _prefix() {
      return this.setPrefix
    }
  },
  methods: {
    start() {
      this.$refs.example.start()
    },
    pauseResume() {
      this.$refs.example.pauseResume()
    }
  }
}
</script>
<style lang="scss" scoped>
.example {
    color: rgb(44, 108, 226);
    display: block;
    margin: 10px 0;
    text-align: center;
    font-size: 80px;
    font-weight: 500;
}

.label {
    color: #2f4f4f;
    font-size: 16px;
    display: inline-block;
    margin: 15px 30px 15px 0;
}

input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 70px;
    height: 28px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.startBtn {
    margin-left: 20px;
    font-size: 20px;
    color: #30B08F;
    background-color: #fff;
}

.example-btn {
    display:inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    // CSS属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。
    // 我们平常说的移动端300ms延迟，就可以使用 touch-action: manipulation; 来解决。
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    position: relative;
    background-color: #fff;
    border-color: #d9d9d9;
    margin-right: 10px;
    &:hover {
        background-color: #30B08F;
        color: #fff;
        border-color: #30B08F;
    }
}

.pause-resume-btn {
  font-size: 20px;
  color: #E65D6E;
  background-color: #fff;
  &:hover {
    background-color: #E65D6E;
    color: #fff;
    border-color: #E65D6E;
  }
}
</style>

