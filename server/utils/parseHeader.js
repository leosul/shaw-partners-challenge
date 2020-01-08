import parse from 'parse-link-header'

const parseHeader = (link) => {
    return parse(link)
}

export default parseHeader