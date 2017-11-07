let zIndex = 2000

const accountIndex = () => {
    zIndex += 1
    return zIndex
}

export default {
    props: {
        zIndex: Number
    },
    computed: {
        cssIndex() {
            return this.zIndex || accountIndex()
        }
    },
}
