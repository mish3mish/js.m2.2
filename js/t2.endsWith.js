let link = 'https://my-site.com/about';

function checklink(originLink) {
    const hasSlash = originLink.endsWith('/');
    if(hasSlash) {
        return originLink;
    } else {
        return `${originLink}/`;
    }
}

const res = checklink(link);
console.log("🚀 ~ res:", res)
