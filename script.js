const featureSectionEl = document.querySelector('.feature');

fetch('data.json')
    .then(res => res.json())
    .then(cards => createCards(cards));

const createCards = cards => {
    cards.forEach((card, i) => {
        const article = document.createElement('article');
        article.classList.add('feature__content');
        article.style.background = card.backgroundColor;

        const headingId = `feature-heading-${i}`;

        const divIconContainer = document.createElement('div');
        divIconContainer.classList.add('feature__icon-container');

        const iconImage = document.createElement('img');
        iconImage.src = card.icon;
        iconImage.alt = '';
        iconImage.setAttribute('aria-hidden', 'true');
        divIconContainer.appendChild(iconImage);

        const headerEl = document.createElement('header');
        headerEl.classList.add('feature__header');

        const headingH1 = document.createElement('h1');
        headingH1.classList.add('feature__heading');
        headingH1.textContent = card.heading;
        headingH1.id = headingId;

        headerEl.appendChild(headingH1);

        const paragraphEl = document.createElement('p');
        paragraphEl.classList.add('feature__text');
        paragraphEl.textContent = card.paragraph;

        const btn = document.createElement('button');
        btn.classList.add('feature__btn');
        btn.style.color = card.color;
        btn.textContent = 'Learn More';
        btn.setAttribute('aria-label', `Learn more about ${card.heading}`);
        btn.setAttribute('title', `Learn more about ${card.heading}`);

        btn.addEventListener('mouseenter', () => {
            btn.style.color = 'hsl(0, 0%, 95%)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.color = card.color;
        });

        article.setAttribute('aria-labelledby', headingId);

        article.append(divIconContainer, headerEl, paragraphEl, btn);
        featureSectionEl.appendChild(article);
    });
};