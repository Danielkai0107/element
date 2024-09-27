<template>
  <!-- table 表格  -->
  <div class="table-template">
    <div class="table-frame">
      <el-table :data="tableData" row-key="id" :default-expand-all="false">
        <el-table-column label="AD-行政管理" width="200">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <!-- <div class="table-rwd-label">AD-行政管理</div> -->
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.department }} {{ scope.row.role }}
          </template>
        </el-table-column>
        <el-table-column label="">
          <template #default="scope">
            <div class="checkbox-container">
              <el-checkbox
                v-model="scope.row.permissions[0].value"
                :label="scope.row.permissions[0].name"
                size="large"
              />
              <el-checkbox
                v-model="scope.row.permissions[1].value"
                :label="scope.row.permissions[1].name"
                size="large"
              />
              <el-checkbox
                v-model="scope.row.permissions[2].value"
                :label="scope.row.permissions[2].name"
                size="large"
              />
              <el-checkbox
                v-model="scope.row.permissions[3].value"
                :label="scope.row.permissions[3].name"
                size="large"
                class="yellowTag"
              />
              <el-checkbox
                v-model="scope.row.permissions[4].value"
                :label="scope.row.permissions[4].name"
                size="large"
              />
              <el-checkbox
                v-model="scope.row.permissions[5].value"
                :label="scope.row.permissions[5].name"
                size="large"
              />
              <el-checkbox
                v-model="scope.row.permissions[6].value"
                :label="scope.row.permissions[6].name"
                size="large"
              />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 隨機生成功能
const generateRandomFunctions = () => {
  const functions = [
    "無限期至到停用",
    "小紅電話外撥",
    "瀏覽",
    "編輯",
    "匯出",
    "無",
    "特殊功能",
  ];
  return functions
    .sort(() => Math.random() - 0.5)
    .map((name) => ({ name, value: false }));
};

// 表格數據
const tableData = [
  {
    id: 1,
    department: "AD01",
    role: "分校管理",
    permissions: generateRandomFunctions(),
  },
  {
    id: 2,
    department: "AD02",
    role: "人事管理",
    permissions: generateRandomFunctions(),
  },
  {
    id: 3,
    department: "AD03",
    role: "財務管理",
    permissions: generateRandomFunctions(),
  },
];
</script>
