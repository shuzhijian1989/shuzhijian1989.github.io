<template>
  <view class="yd-empet">
    <view class="yd-empet__mark" />
    <text class="yd-empet__text">{{ text }}</text>
  </view>
</template>

<script>
export default {
  name: 'YdEmpet',
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style>
.yd-empet {
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.yd-empet__mark {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: #e7f3ef;
}

.yd-empet__mark::before,
.yd-empet__mark::after {
  content: '';
  position: absolute;
  left: 18px;
  height: 3px;
  border-radius: 2px;
  background: #1f6f5b;
}

.yd-empet__mark::before {
  top: 24px;
  right: 18px;
  opacity: 0.35;
}

.yd-empet__mark::after {
  top: 34px;
  right: 26px;
  opacity: 0.2;
}

.yd-empet__text {
  margin-top: 12px;
  color: #667085;
  font-size: 14px;
}
</style>
