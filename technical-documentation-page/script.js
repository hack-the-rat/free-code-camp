const menuList = document.querySelector('#navbar ul');
const titles = document.querySelectorAll('#main-doc header');

for (let title of titles) {
    let cleanTitle = title.innerText.trim();

    let titleAsId = cleanTitle.replace(/\s/g, '_');

    title.parentNode.setAttribute('id', `${titleAsId}`);

    let link = document.createElement('a');
    link.setAttribute('class', 'nav-link');
    link.setAttribute('href', `#${titleAsId}`);

    let listItem = document.createElement('li');
    listItem.innerText = cleanTitle;

    link.appendChild(listItem);
    menuList.appendChild(link);
}