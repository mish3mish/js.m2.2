function getFileName(file) {
    if (file.indexOf(".") < -1) {
        return file; 
    } else {
        return file.slice(0, file.indexOf('.'));
    }
}

const res1 = getFileName('styles.css');
console.log("🚀 ~ res1:", res1)

