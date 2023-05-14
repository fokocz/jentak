// funkce pro zobrazení podkategorií
function showSubcategories(event) {
    event.preventDefault();
    const subcategories = event.currentTarget.parentElement.nextElementSibling.querySelectorAll(".div2");
    subcategories.forEach((subcategory) => {
      subcategory.style.display = "block";
      subcategory.classList.add("fade-in");
    });
  }
  
  // najdeme všechna tlačítka pro kategorie a přidáme na ně posluchače událostí
  const categoryButtons = document.querySelectorAll(".btn");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", showSubcategories);
  });
  
