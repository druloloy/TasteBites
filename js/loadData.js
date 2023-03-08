const recipesContainer = document.querySelector('.recipes-container');

function displayAllText(element) {
    element.classList.add('read-more');
    console.log('working');
}

function createRecipeContainer() {
    const recipeContainer = document.createElement('section');
    recipeContainer.classList.add('recipe');

    return recipeContainer;
}

function createRecipeImage(src, alt) {
    const recipeImage = document.createElement('section');
    recipeImage.classList.add('recipe-image');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('loading', 'lazy');

    recipeImage.appendChild(img);
    return recipeImage;
}

function createRecipeHeader(title) {
    const recipeHeader = document.createElement('header');
    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = title;

    recipeHeader.appendChild(recipeTitle);
    return recipeHeader;
}

function createRecipeDescription(description) {
    const recipeDescription = document.createElement('article');
    const recipeDescriptionText = document.createElement('p');

    recipeDescriptionText.addEventListener('click', () => {
        displayAllText(recipeDescriptionText);
    });

    recipeDescriptionText.textContent = description;

    recipeDescription.appendChild(recipeDescriptionText);
    return recipeDescription;
}

function createRecipeLink(link) {
    const recipeLink = document.createElement('a');
    recipeLink.setAttribute('href', link);
    recipeLink.classList.add('recipe-link');
    recipeLink.innerHTML =
        'View Recipe <i class="fa-solid fa-angles-right"></i>';

    return recipeLink;
}

function loadData(d) {
    const data = d;

    data.forEach((recipe) => {
        const href = '../Recipe/recipe.html?id=' + recipe.id;
        const recipeContainer = createRecipeContainer();
        const recipeImage = createRecipeImage(recipe.image, recipe.name);
        const recipeHeader = createRecipeHeader(recipe.name);
        const recipeDescription = createRecipeDescription(
            recipe.shortDescription,
        );
        const recipeLink = createRecipeLink(href);

        recipeContainer.appendChild(recipeImage);
        recipeContainer.appendChild(recipeHeader);
        recipeContainer.appendChild(recipeDescription);
        recipeContainer.appendChild(recipeLink);

        recipesContainer.appendChild(recipeContainer);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    loadData(data);
});
