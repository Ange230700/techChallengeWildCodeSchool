// LOGIC TO INCLUDE JAVASCRIPT FILES IN THIS FILE
function createScriptTag() {
    let scriptTag = document.createElement('script');
    return scriptTag;
}

function setFilePathSourceOfJavaScriptFile(scriptTag, filePath) {
    scriptTag.src = filePath;
}

function includeScriptTagInHeadTag(scriptTag) {
    document.head.appendChild(scriptTag);
}

function includeJavaScriptFileInThisFile(filePath) {
    let scriptTag = createScriptTag();
    setFilePathSourceOfJavaScriptFile(scriptTag, filePath);
    includeScriptTagInHeadTag(scriptTag);
}

// LIST OF INCLUDED FILES
includeJavaScriptFileInThisFile("/createMetadataTagForSetOfCharacters.js");