<script lang="ts">
import { Card } from '#build/components';
</script>

<template>
    <div class="grid grid-rows grid-cols-2 md:grid-cols-3 gap-4 xl:gap-10">
        <ContentList
            path="/posts"
            :query="{
                draft: false,
                sort: [
                    {
                        date: -1,
                    }
                ]
            }"
            v-slot="{ list }"
        >
            <Card
                v-for="post in list"
                :key="post._path"
                :title="post.title"
                :date="post.date"
                :link="post.slug"
                :image="post.thumbnail"
                class=""
                />
        </ContentList>
    </div>
</template>