function contains (needle, haystack) {
    let n = needle.toLowerCase(),
        h = haystack.toLowerCase();

    if (h.includes(n)) {
        return true;
    }

    return false;
}

module.exports = {
    contains
}