<template>
  <input type="date">
  時間：
  <!-- 小時 -->
  <select>
    <option value="00">00</option>
    <option :value="time" v-for="time in 23" :key="time">{{ time<10? `0${time}`: time }}</option>
  </select>
  時
  <!-- 分鐘 -->
  <select>
    <option value="00">00</option>
    <option :value="time" v-for="time in 59" :key="time">{{ time<10? `0${time}`: time }}</option>
  </select>
  分
</template>
