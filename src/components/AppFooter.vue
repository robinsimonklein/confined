<template>
    <footer class="footer">
        <a class="footer__link" href="https://github.com/robinsimonklein/confined" target="_blank">
            <img class="footer__link-img" src="@/assets/svg/github.svg">
        </a>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
        padding: 1rem;

        &__link {
            font-size: 0;
        }
        &__link-img {
            height: 2rem;
        }
    }
</style>
