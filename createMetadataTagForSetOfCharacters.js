function createMetadataTag() {
    var metadataTag = document.createElement("meta");
    return metadataTag;
}

function setCharsetAttribute(metadataTag) {
    metadataTag.charset = "UTF-8";
}

function putMetadataTagInHead(metadataTag) {
    try {
        document.head.appendChild(metadataTag);
    } catch (error) {
        console.log("Error in putting metadata tag in head: " + error);
    }
}

function createMetadataTagForSetOfCharacters() {
    var metadataTag = createMetadataTag();
    setCharsetAttribute(metadataTag);
    putMetadataTagInHead(metadataTag);
}

createMetadataTagForSetOfCharacters();