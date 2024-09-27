<template>
  <!-- table 表格  -->
  <div class="table-template">
    <div class="table-frame">
      <el-table
        :data="tableData"
        row-key="id"
        :default-expand-all="false"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="selection" width="50" />
        <el-table-column label="所屬企業">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">所屬企業</div>
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.company }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">姓名</div>
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="account" label="帳號">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">帳號</div>
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.account }}
          </template>
        </el-table-column>
        <el-table-column prop="role" label="角色">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">角色</div>
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.role }}
          </template>
        </el-table-column>
        <el-table-column prop="lastLogin" label="最近登入">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">最近登入</div>
            <!-- 手機板表頭--勿刪除 -->
            {{ scope.row.lastLogin }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="狀態">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">狀態</div>
            <!-- 手機板表頭--勿刪除 -->
            <div class="account-statusTag onTag"></div>
          </template>
        </el-table-column>
        <el-table-column label="編輯" width="100">
          <template #default="scope">
            <!-- 手機板表頭--勿刪除 -->
            <div class="table-rwd-label">編輯</div>
            <!-- 手機板表頭--勿刪除 -->
            <div class="icon-edit"></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = [
  {
    id: 1,
    company: "三倍德數位文創",
    name: "王小明",
    account: "TS002",
    role: "助理管理者",
    lastLogin: "2024-09-07 16:00",
    status: "開啟",
    children: [
      {
        id: 11,
        company: "三倍德數位文創",
        name: "王大明",
        account: "TS003",
        role: "管理者",
        lastLogin: "2024-09-06 14:00",
        status: "開啟",
      },
      {
        id: 12,
        company: "三倍德數位文創",
        name: "李四",
        account: "TS004",
        role: "資深研發人員",
        lastLogin: "2024-09-05 15:00",
        status: "關閉",
      },
    ],
  },
  {
    id: 2,
    company: "三倍德數位文創",
    name: "張三",
    account: "TS005",
    role: "研發使用者",
    lastLogin: "2024-09-04 10:00",
    status: "開啟",
  },
  {
    id: 3,
    company: "三倍德數位文創",
    name: "李四",
    account: "TS006",
    role: "研發使用者",
    lastLogin: "2024-09-03 08:00",
    status: "關閉",
  },
];
</script>
