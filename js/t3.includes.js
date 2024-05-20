let url = 'https://my-site.com/about';

function checkUrl(url) {
    const lastIndex = url.length - 1;
    const hasSlash = url.includes('/', lastIndex);
    const neededString = 'my-site';
    const hasNeededString = url.includes('my-site');

    if(!hasSlash, hasNeededString) {
        return `${url}/`;
    } else {
        return url;
    }

}

const res = checkUrl(url);
console.log("🚀 ~ res:", res);
