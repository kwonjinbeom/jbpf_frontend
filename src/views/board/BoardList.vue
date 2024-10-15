<template>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="fnGetList">
        등록
      </button>
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="fnGetList2">
        등록2
      </button>
    </div>
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ row.idx }}</td>
          <td>
            <a @click="fnView(row.idx)">{{ row.empName }}</a>
          </td>
          <td>{{ row.empNo }}</td>
          <td>{{ row.author }}</td>
          <td>{{ row.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
      <span class="pg">
        <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
        <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(paging.start_page - 1)"
          class="prev w3-button w3-border">&lt;</a>
        <template v-for="(n, index) in paginavigation()">
          <template v-if="paging.page == n">
            <strong class="w3-button w3-border w3-green" :key="index">{{
        n
      }}</strong>
          </template>
          <template v-else>
            <a class="w3-button w3-border" href="javascript:;" @click="fnPage(n)" :key="index">{{ n }}</a>
          </template>
        </template>
        <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page" @click="fnPage(paging.end_page + 1)"
          class="next w3-button w3-border">&gt;</a>
        <a href="javascript:;" @click="fnPage(paging.total_page_cnt)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Board {
  idx: number;
  empNo: number;
  empName: string;
  author: string;
  created_at: string;
}

interface Paging {
  block: number;
  end_page: number;
  next_block: number;
  page: number;
  page_size: number;
  prev_block: number;
  start_index: number;
  start_page: number;
  total_block_cnt: number;
  total_list_cnt: number;
  total_page_cnt: number;
}

export default defineComponent({
  name: 'BoardList',
  data() {
    return {
      requestBody: {} as Record<string, unknown>,
      list: [] as Board[],
      no: '',
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      } as Paging,
      page: this.$route.query.page ? Number(this.$route.query.page) : 1,
      size: this.$route.query.size ? Number(this.$route.query.size) : 10,
      keyword: this.$route.query.keyword as string | undefined,
    };
  },
  methods: {
    fnGetList() {
      axios
        .get('/api/BoardEmp/selectEmpList')
        .then((response) => {
          console.log('resultData', response.data);
          this.list = response.data;
        })
        .catch((error) => {
          console.error(error);
        });

      // Mock data for demonstration
      // this.list = [
      //   {
      //     idx: 1,
      //     title: '제목1',
      //     author: '작성자1',
      //     created_at: '작성일시1',
      //   },
      //   {
      //     idx: 2,
      //     title: '제목2',
      //     author: '작성자2',
      //     created_at: '작성일시2',
      //   },
      //   {
      //     idx: 3,
      //     title: '제목3',
      //     author: '작성자3',
      //     created_at: '작성일시3',
      //   },
      // ];
    },
    fnGetList2() {
      axios
        .get('/api/vueSpringTest/test2')
        .then((response) => {
          console.log('resultData', response.data);
          console.log('resultData2', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fnView(idx: number) {
      console.log('View item with index:', idx);
    },
    fnPage(page: number) {
      console.log('Navigate to page:', page);
      this.page = page;
      this.fnGetList();
    },
    paginavigation() {
      const pageNumber = [];
      const { start_page, end_page } = this.paging;
      for (let i = start_page; i <= end_page; i++) {
        pageNumber.push(i);
      }
      return pageNumber;
    },
  },
});
</script>

<style scoped>
.board-list {
  /* 스타일 정의 */
}
</style>
