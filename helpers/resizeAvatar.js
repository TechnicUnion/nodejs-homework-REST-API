const Jimp = require('jimp');

async function resizeAvatar(path) {

    const image = await Jimp.read(path);
    await image.resize(250, 250);
    await image.writeAsync(path);
}

module.exports = resizeAvatar;