<template>
    <footer class="footer">
        <div class="footer__infos">
            <p v-html="$t('site_data_message')"></p>
            <p id="asterisk-1">* {{ $t('asterisk_1') }}</p>
        </div>
        <div class="footer__links">
            {{ $t('contribute') }} :
            <a class="footer__link" href="https://github.com/robinsimonklein/confined" target="_blank" rel="noreferrer">
                <img class="footer__link-img" src="@/assets/svg/github.svg" alt="logo github">
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
        padding: 2rem 1rem;

        @media screen and (max-width: 548px) {
            flex-direction: column;
        }

        &__infos {
            text-align: left;
            margin-right: 2rem;
            font-size: .9rem;
            color: #8faabf;
            width: 50%;
            max-width: 40rem;

            @media screen and (max-width: 548px) {
                max-width: inherit;
                margin-right: 0;
                margin-bottom: 2rem;
            }

            p {
                margin: .4rem 0;
            }
        }

        &__links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            text-transform: capitalize;

            @media screen and (max-width: 548px) {
                width: 100%;
                justify-content: start;
            }
        }

        &__link {
            font-size: 0;
            margin-left: .5rem;
        }
        &__link-img {
            height: 2rem;
        }
    }
</style>
