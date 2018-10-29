const bsdiff = require('bsdiff-nodejs');

const oldFile = "/Users/kangzhe/Desktop/old";
const newFile = "/Users/kangzhe/Desktop/new";
const patchFile = "/Users/kangzhe/Desktop/patch";
const generatedFile = "/Users/kangzhe/Desktop/gen";

async function asyncCall() {
    await bsdiff.diff(oldFile, newFile, patchFile, function (result) {
        console.log('diff:' + result + '%');
    });

    // await bsdiff.patch(oldFile, generatedFile, patchFile, function (result) {
    //     console.log('patch:' + String(result).padStart(4) + '%');
    // });
}

asyncCall();