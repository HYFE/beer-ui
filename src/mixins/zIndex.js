let zIndex = 2000

const nextIndex = () => {
    zIndex += 1
    return zIndex
}

export default {
    props: {
        zIndex: Number
    },
    methods: {
        nextIndex
    }
}
