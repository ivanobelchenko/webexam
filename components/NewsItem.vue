<template>
    <div>
        <template  v-for="(item, index) of (news)" >
        <template> 
        <v-subheader
           :key="item.id"
          v-text="item.title"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="require('@/static/news.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="'Описание: ' + item.description"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="'Лайков: ' + item.likes"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['news'],
    name: 'NewsItem'
}
</script>