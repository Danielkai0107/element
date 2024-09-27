<template>
  <main class="main">
    <!-- Aside bar  -->
    <div class="asideBar bgc-1">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-sub-menu index="2">
          <template #title>
            <el-avatar :size="38" :src="circleUrl" />
          </template>
          <el-menu-item class="track" index="2-1">個人資料</el-menu-item>
          <el-menu-item class="track" index="2-2">通知中心</el-menu-item>
          <el-menu-item index="2-3">登出</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- Aside bar  -->

    <article class="container">
      <!-- Checkbox-label 無框  -->
      <el-checkbox v-model="checked1" label="選項一" size="large" />

      <!-- Checkbox-border 有框  -->
      <el-checkbox v-model="checked1" label="選項一" size="large" border />

      <!-- Switch 切換開關  -->
      <el-switch
        v-model="value3"
        inline-prompt
        active-text="開"
        inactive-text="關"
        size="large"
      />

      <!-- input 輸入框 -->
      <el-input
        v-model="input"
        type="password"
        style="width: 240px"
        placeholder="請輸入"
        show-password
      />
      <el-input
        v-model="textarea"
        maxlength="10"
        style="width: 300px"
        placeholder="請輸入"
        show-word-limit
        type="text"
      />

      <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    </article>
    <div class="label-input row">
      <p>角色：</p>
      <el-input
        v-model="input"
        type="text"
        style="width: 240px"
        placeholder="請輸入"
      />
    </div>

    <!-- Table  -->
    <Table />
    <Table2 />
    <!-- Table  -->

    <!-- Navbar  -->
    <Navbar />
    <!-- Navbar  -->

    <!-- NavbarBtn  -->
    <el-badge :value="56">
      <button class="btn-navbar-circle msg"></button>
    </el-badge>
    <!-- NavbarBtn  -->

    <!-- NavbarBtn  -->
    <el-badge :value="56">
      <button class="btn-navbar-circle bell"></button>
    </el-badge>
    <!-- NavbarBtn  -->

    <!-- Avatar  -->
    <el-avatar :size="38" :src="circleUrl" />
    <!-- Avatar  -->
  </main>
</template>
<script setup>
import { ref } from "vue";
import Table from "./components/Table.vue";
import Table2 from "./components/Table2.vue";
import Navbar from "./components/Navbar.vue";
const input = ref("");
const textarea = ref("");
const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const circleUrl =
  "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D";

const tableData = [
  {
    id: 1,
    date: "2016-05-02",
    name: "SB000",
    address: "研發使用者",
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "SB000",
    address: "研發使用者",
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "SB000",
    address: "研發使用者",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "SB000",
        address: "研發使用者",
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "SB000",
        address: "研發使用者",
      },
    ],
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "SB000",
    address: "研發使用者",
  },
];
</script>
