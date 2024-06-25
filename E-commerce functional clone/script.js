let bagItems;
onLoad();

function onLoad(){
 let bagItemsStr = localStorage.getItem("bagItems");
 bagItems= bagItemsStr? JSON.parse(bagItemsStr):[];
displayItemsOnHomepage();
displayBagIcon();

}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector(".bagItemCount");
  if(bagItems.length>0){
  bagItemCountElement.innerText= bagItems.length;
  bagItemCountElement.style.visibility= 'visible';
}
  else{
    bagItemCountElement.style.visibility= 'hidden';
  }  
}
function displayItemsOnHomepage(){
let itemsContainerElement = document.querySelector(".itemsContainer");
if (!itemsContainerElement){
  return;
}

let innerHTML='';
items.forEach(item => {
  innerHTML+= `<div class="itemContainer">
  <img class="itemImage" src="${item.image}" alt="item image">
  <div class="rating">
      ${item.rating.stars}⭐ | ${item.rating.count}
  </div>
  <div class="companyName"> ${item.company}</div>
  <div class="itemName"> ${item.item_name}</div>
  <div class="price">
      <span class="currentPrice">Rs ${item.current_price}</span>
      <span class="originalPrice">Rs ${item. original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="buttonAddBag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
});

itemsContainerElement.innerHTML = innerHTML;
}
