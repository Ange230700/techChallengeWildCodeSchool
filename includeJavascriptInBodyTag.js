// LOGIC TO INCLUDE JAVASCRIPT FILES IN THIS FILE

function createTag(tagName) {
    try {
        let tag = document.createElement(tagName);
        if (tag) {
            return tag;
        }
    }
    catch (error) {
        console.log('Error in creating tag => ' + error);
    }
}

function setSourceAttribute(scriptTag, filePath = '/script.js') {
    try {
        if (scriptTag && filePath) {
            scriptTag.src = filePath;
        }
    }
    catch (error) {
        console.log('Error in setting source attribute => ' + error);
    }
}

function setTypeAttribute(scriptTag) {
    try {
        if (scriptTag) {
            scriptTag.type = 'text/javascript';
        }
    }
    catch (error) {
        console.log('Error in setting type attribute => ' + error);
    }
}

function getBodyTag() {
    try {
        let bodyTag = document.getElementsByTagName('body')[0];
        if (bodyTag) {
            return bodyTag;
        }
    }
    catch (error) {
        console.log('Error in getting body tag => ' + error);
    }
}

function putScriptTagInBodyTag(scriptTag, bodyTag) {
    try {
        if (scriptTag && bodyTag) {
            document.bodyTag.innerHTML += scriptTag.outerHTML;
        }
    }
    catch (error) {
        console.log('Error in including javascript in body tag => ' + error);
    }
}

function setScriptTag(tagName, filePath) {
    let scriptTag = createTag(tagName);
    setSourceAttribute(scriptTag, filePath);
    setTypeAttribute(scriptTag);
    return scriptTag;
}
// console.log(setScriptTag('script', '/createMetadataTagForSetOfCharacters.js'));

function includeJavascriptInBodyTag() {
    let scriptTag = setScriptTag(tagName, filePath);
    let bodyTag = getBodyTag();
    putScriptTagInBodyTag(scriptTag, bodyTag);
}

// includeJavascriptInBodyTag('script', '/createMetadataTagForSetOfCharacters.js');