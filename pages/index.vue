<script>
</script>

<template>
    <div>
        <Eyecatch class="pb-8" />
        <div class="grid grid-rows grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10">
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
    </div>
</template>