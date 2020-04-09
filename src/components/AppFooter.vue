<template>
    <footer class="footer">
        <div class="footer__infos">
            <p v-html="$t('site_data_message')"></p>
        </div>
        <div class="footer__links">
            <a class="footer__link" href="https://github.com/robinsimonklein/confined" target="_blank">
                <img class="footer__link-img" src="@/assets/svg/github.svg">
            </a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        padding: 1rem;

        &__infos {
            text-align: left;
            margin-right: 2rem;
            font-size: .9rem;
            color: #8faabf;
            max-width: 50%;

            @media screen and (max-width: 548px) {
                max-width: inherit;
            }

            p {
                margin: 0;
            }
        }

        &__links {
            display: flex;
            justify-content: flex-end;
        }

        &__link {
            font-size: 0;
        }
        &__link-img {
            height: 2rem;
        }
    }
</style>
