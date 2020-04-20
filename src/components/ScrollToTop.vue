<template>
    <div @click="scrollToTop" class="scroll-to-top" :class="[{'visible' : isVisible}, {'fixed' : isFixed}]">
        <svg class="scroll-to-top__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M226.9 7.9L49.2 185.5c-5.1 5.1-7.9 11.8-7.9 19 0 7.2 2.8 14 7.9 19l16.1 16.1c5.1 5.1 11.8 7.9 19 7.9 7.2 0 14.2-2.8 19.3-7.9l103.9-103.7v329.3c0 14.8 11.6 26.6 26.5 26.6h22.8c14.9 0 27.6-11.7 27.6-26.6V134.9l104.5 104.8c5.1 5.1 11.7 7.9 18.9 7.9 7.2 0 13.9-2.8 18.9-7.9l16.1-16.1c5.1-5.1 7.8-11.8 7.8-19 0-7.2-2.8-14-7.9-19L265.1 7.9C260 2.8 253.2 0 246 0c-7.2 0-14 2.8-19.1 7.9z"/></svg>
    </div>
</template>

<script>
    export default {
        name: "ScrollToTop",
        data() {
            return {
                isVisible: false,
                isFixed: false
            }
        },
        methods: {
            updateVisibility(scrollHeight) {
                this.isVisible = scrollHeight > window.innerHeight
            },
            updateFixed(scrollHeight) {
                this.isFixed = !(scrollHeight + window.innerHeight > (document.body.scrollHeight - document.querySelector('.footer').offsetHeight))
            },
            scrollToTop() {
                this.$scrollTo(document.querySelector('.zones-links'))
            }
        },
        mounted() {
            window.addEventListener('scroll', (e) => {
                this.updateVisibility(window.scrollY)
                this.updateFixed(window.scrollY)
            })

            this.updateVisibility(window.scrollY)
        }
    }
</script>

<style lang="scss" scoped>
.scroll-to-top {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $color-light;
    border: 1px solid $color-light;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    cursor: pointer;
    opacity: 0;
    transform: scale(.95);
    transition: all .3s ease;

    @media screen and (max-width: 548px) {
        position: fixed;
    }

    &.visible {
        transform: scale(1);
        transition: .5s;
        opacity: 1;

        &:hover {
            transition: all .3s ease;
            opacity: 1;
        }
    }

    &.fixed {
        position: fixed;
    }

    &__arrow {
        height: 2rem;
        fill: $color-dark-alternate
    }
}
</style>
