<template>
  <nav class="navbar">
    <h5>iTEAMS</h5>
    <el-menu>
      <template v-for="(menuItem, index) in menuData" :key="index">
        <!-- 檢查是否為子選單 -->
        <el-sub-menu v-if="menuItem.children" :index="menuItem.index">
          <template #title>
            <i class="icon-nav" :class="menuItem.iconClass"></i>
            <span>{{ menuItem.title }}</span>
          </template>
          <el-menu-item
            v-for="(child, childIndex) in menuItem.children"
            :key="childIndex"
            :index="child.index"
          >
            {{ child.title }}
          </el-menu-item>
        </el-sub-menu>
        <!-- 單一選單項目 -->
        <el-menu-item v-else :index="menuItem.index">
          <i class="icon-nav" :class="menuItem.iconClass"></i>
          <span>{{ menuItem.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </nav>
</template>
<script setup>
const menuData = [
  {
    index: "1",
    title: "系統設定",
    iconClass: "system", // 只需指定具體的圖標類名
    children: [
      { index: "1-1", title: "企業管理" },
      { index: "1-2", title: "系統帳號管理" },
      { index: "1-3", title: "操作紀錄查詢" },
    ],
  },
  {
    index: "2",
    title: "報表管理",
    iconClass: "chart",
  },
  {
    index: "3",
    title: "行政管理",
    iconClass: "lesson",
  },
];

</script>
