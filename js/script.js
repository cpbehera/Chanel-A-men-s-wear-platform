
function showCategories(){
  let categoriesContainer = document.querySelector('.categories_container');
  console.log(categoriesContainer);
    categories.forEach((item)=>{
      categoriesContainer.innerHTML += `
      <div class="item">
          <img src="${item.src}" alt="">
        </div>
      `
    })
};

showCategories();


function showSpotlightCategories(){
  let spotlightCategoriesContainer = document.querySelector('.spotlight_categories_container');
  console.log(spotlightCategoriesContainer);
  spotlightCategories.forEach((item)=>{
    spotlightCategoriesContainer.innerHTML += `
      <div class="item">
          <img src="${item.src}" alt="">
        </div>
      `
    })
};

showSpotlightCategories();