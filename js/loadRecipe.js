const recipeEl = document.querySelector('.recipe');

function createRecipeTitle(title) {
    const recipeTitle = document.createElement('h1');
    recipeTitle.classList.add('recipe-title');
    recipeTitle.textContent = title;
    return recipeTitle;
}

function createRecipeContainer() {
    const recipeContainer = document.createElement('section');
    recipeContainer.classList.add('recipe-container');
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

function createRecipeInfo() {
    const recipeInfo = document.createElement('section');
    recipeInfo.classList.add('recipe-info');
    return recipeInfo;
}

function createRecipeDescription(description) {
    const recipeDescription = document.createElement('article');
    recipeDescription.classList.add('recipe-description');
    const recipeDescriptionText = document.createElement('p');
    recipeDescriptionText.textContent = description;

    recipeDescription.appendChild(recipeDescriptionText);
    return recipeDescription;
}

function createRecipeInfoContainer(list) {
    console.log(list);
    const recipeInfoContainer = document.createElement('section');
    recipeInfoContainer.classList.add('recipe-info-container');

    Object.keys(list).forEach((item) => {
        const recipeInfoTitle = document.createElement('h2');
        recipeInfoTitle.textContent = toTitleCase(item);

        const recipeInfoList = document.createElement('ul');
        recipeInfoList.classList.add('recipe-info-list');

        list[item].forEach((listItem) => {
            const recipeInfoListItem = document.createElement('li');
            recipeInfoListItem.textContent = listItem;
            recipeInfoList.appendChild(recipeInfoListItem);
        });

        recipeInfoContainer.appendChild(recipeInfoTitle);
        recipeInfoContainer.appendChild(recipeInfoList);
    });

    return recipeInfoContainer;
}

function loadRecipe(recipe) {
    const recipeTitle = createRecipeTitle(recipe.name);
    const recipeContainer = createRecipeContainer();
    const recipeImage = createRecipeImage(recipe.image, recipe.name);
    const recipeInfo = createRecipeInfo();
    const recipeDescription = createRecipeDescription(recipe.shortDescription);
    const recipeInfoContainer = createRecipeInfoContainer(recipe.list);

    recipeInfo.appendChild(recipeDescription);
    recipeInfo.appendChild(recipeInfoContainer);
    recipeContainer.appendChild(recipeImage);
    recipeContainer.appendChild(recipeInfo);
    recipeEl.appendChild(recipeTitle);
    recipeEl.appendChild(recipeContainer);
}

const toTitleCase = (str) =>
    str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );

window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const recipeData = data.find((item) => item.id == id);
    loadRecipe(recipeData);
});
