<template>
    <pageloader></pageloader>
</template>

<script>

import pageloader from "../components/Loader"
export default {
    name: 'loaderpage',
    components: {
        'pageloader': pageloader,
    }
}
</script>