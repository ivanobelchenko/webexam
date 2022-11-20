<template>
    <div>
      <v-btn v-on:click="show_done" >Отобразить только новости с >50 лайков</v-btn>
      <div class="pages">
        <v-btn v-on:click="sortNames">Отсортировать названия по Алфавиту</v-btn>
        <v-btn v-on:click="drop">Сбросить сортировку и фильтр</v-btn>
      </div>
      <div class="pages">
        <v-btn v-on:click="prev" >Предыдущая</v-btn>
        <v-btn v-on:click="next" >След страница</v-btn> 
      </div>
        <ul>
            <NewsItem v-bind:news="news" />
        </ul>
    </div>
</template>

<script>
import NewsItem from '@/components/NewsItem'

export default {
  data() {
    return {
    }
  },
  components: {NewsItem},
  async fetch({store}) {
    console.log(store.getters['tas/news'])
    if (store.getters['tas/news'].length === 0) {
      await store.dispatch('tas/fetch')
    }
  },
  computed: {
    news() {
        return this.$store.getters['tas/news'];
    }
  },
  methods: {
    async show() {
      await this.$store.dispatch('tas/fetch')
    },
    async show_done() {
      this.$store.dispatch('tas/filterByStatus', this.$store.getters['tas/news'])
    },
    async next() {
      const next = this.$store.getters['tas/next'];
      if (next) {
        this.$store.dispatch('tas/fetchNext', next);
      } else {
        alert('Следующей страницы нет')
      }
    },
    async prev() {
      const prev = this.$store.getters['tas/prev'];
      if (prev) {
        this.$store.dispatch('tas/fetchPrev', prev);
      } else {
        alert('Предыдущей страницы нет')
      }
    },
    async sortNames() {
      await this.$store.dispatch('tas/fetchAll');
      const vacancies = this.$store.getters['tas/news'];
      await this.$store.dispatch('tas/sortByNames', vacancies);
    },
    async drop() {
      await this.$store.dispatch('tas/fetch')
    }
  }
}
</script>

<style>
  .pages {
    margin-top: 20px;
  }
</style>