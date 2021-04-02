const navEl = document.querySelector('.item');
console.log(navEl);

const navLinksRef = document.querySelectorAll('ul')
console.log(navLinksRef);

const selectedById = document.querySelector('#menu');
selectedById.style.textTransform = 'uppercase';
selectedById.style.fontSize = '2rem';
console.log(selectedById); // ...

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName); // ...

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass); // ...

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = '#BF4E30';
console.log(firstMenuItem);

/*<ul id="menu">
        <li class="menu-item">home</li>
        <li class="menu-item">about</li>
        <li class="menu-item">gallery</li>
        <li>blog</li>
    </ul>*/