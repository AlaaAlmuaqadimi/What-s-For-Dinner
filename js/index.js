let productNameInput = document.getElementById('product-name'); 
let ProductPriceInput = document.getElementById('product-price');
let ProductdescriptionInput = document.getElementById('product-description');
let ProductCategoryInput = document.getElementById('product-category');

let productsList = [] [{},{},{}];
    if(localStorage.getItem('products') != null){
        productsList=JSON.parse(localStorage.getItem('products')) ;
    }

    function addProduct(){
        let products={
            name: productNameInput.value,
            price: ProductPriceInput.value,
            description: ProductdescriptionInput.value,
            category: ProductCategoryInput.value
        }
        productsList.push(products);
        localStorage.setItem('products', JSON.stringify(productsList));
        displayProducts();
        clear();
    }
    
    function clear(){
        productNameInput.value = '';
        ProductPriceInput.value = '';
        ProductdescriptionInput.value = '';
        ProductCategoryInput.value = '';
    }

    function displayProducts(){
        let cartoona = ``;
        for(let i=0; i<productsList.length; i++){
            cartoona += `
            <div class="product-item">
                <h3>${productsList[i].name}</h3>
                <p>Price: ${productsList[i].price}</p>
                <p>Description: ${productsList[i].description}</p>
                <p>Category: ${productsList[i].category}</p>
            </div>
            `;
        }
        document.getElementById('products-container').innerHTML = cartoona;
    }

    function deleteProduct(index){
        productsList.splice(index, 1);
        displayProducts();
    }
    
