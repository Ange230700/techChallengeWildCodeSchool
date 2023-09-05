function firstHTMLpartOfNavigationBar() {    
    return `
        <nav>
            <img src="/assets/logo.png" alt="logo" />
            <ul>
    `;
}

console.log("abc");


// function navigationBarItems() {
//     let navigationBarItems = {
//         "Home": "index",
//         "Royal Family": "royalFamily",
//         "Royal Assets": "royalAssets",
//         "Contact Us": "contact"
//     };
//     let navigationBarItemsHTML = `<li>`;
//     for (let navigationBarItem in navigationBarItems) {
//         navigationBarItemsHTML += `
//                 <a href="/${navigationBarItems[navigationBarItem]}.html">
//                     ${navigationBarItem}
//                 </a>
//             </li>
//         `;
//     }
//     return navigationBarItemsHTML;
// }

// function lastHTMLpartOfNavigationBar() {
//     return `
//             </ul>
//         </nav>
//     `;
// }

// function HTMLtoPutInNavigationBarElement() {
//     return `
//         ${firstHTMLpartOfNavigationBar()}
//         ${navigationBarItems()}
//         ${lastHTMLpartOfNavigationBar()}
//     `;
// }
