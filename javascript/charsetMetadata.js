includeCharsetMetadataTag();

function includeCharsetMetadataTag() {
    let charsetMetadataTag = document.createElement('meta');
    charsetMetadataTag.setAttribute('charset', 'utf-8');
    document.head.appendChild(charsetMetadataTag);
}