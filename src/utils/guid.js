let guid = 1

export default prefix => {
    guid += 1
    return `${prefix}-${guid}`
}
