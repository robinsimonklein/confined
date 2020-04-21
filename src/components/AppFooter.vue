<template>
    <footer class="footer">
        <div class="footer__infos">
            <p v-html="$t('site_data_message')"></p>
            <p id="asterisk-1"><sup>1</sup> {{ $t('asterisk_1') }}</p>
        </div>
        <ul class="footer__links">
            <li class="footer__link-item">
                {{ $t('contribute') }}&nbsp;:&nbsp;
                <a href="https://github.com/robinsimonklein/confined" target="_blank" rel="noreferrer">
                    <img class="footer__link-img" src="@/assets/svg/github.svg" alt="logo github">
                </a>
            </li>
            <li class="footer__link-item">
                <a class="footer__link" href="mailto:contact@robinsimonklein.com">{{ $t('suggest_improvement') }}</a>
            </li>
            <li class="footer__link-item">
                <a class="footer__link" href="mailto:contact@robinsimonklein.com">{{ $t('report_error') }}</a>
            </li>
        </ul>
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
                width: 100%;
                margin-bottom: 2rem;
            }

            p {
                margin: .4rem 0;
            }
        }

        &__links {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
            list-style-type: none;

            @media screen and (max-width: 548px) {
                width: 100%;
                justify-content: start;
            }
        }

        &__link-item {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            font-size: 1rem;
            margin-bottom: .2rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__link {

        }
        &__link-img {
            margin-left: .5rem;
            height: 2rem;
        }
    }
</style>
