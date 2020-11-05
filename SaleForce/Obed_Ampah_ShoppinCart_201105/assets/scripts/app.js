class Product {
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }
  
  class ElementAttribute {
    constructor(attrName, attrValue) {
      this.name = attrName;
      this.value = attrValue;
    }
  }
  
  class Component {
    constructor(renderHookId) {
      this.hookId = renderHookId;
    }
  
    createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag);
      if (cssClasses) {
        rootElement.className = cssClasses;
      }
      if (attributes && attributes.length > 0) {
        for (const attr of attributes) {
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];
  
    set cartItems(value) {
      this.items = value;
      this.totalOutput.innerHTML = `<h2>Total: GH₵${this.totalAmount.toFixed(
        2
      )}</h2>`;
    }
  
    get totalAmount() {
      const sum = this.items.reduce(
        (prevValue, curItem) => prevValue + curItem.price,
        0
      );
      return sum;
    }
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    addProduct(product) {
      const updatedItems = [...this.items];
      updatedItems.push(product);
      this.cartItems = updatedItems;
    }
  
    render() {
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: GH₵${0}</h2>
        <button>Order Now!</button>
      `;
      this.totalOutput = cartEl.querySelector('h2');

      const orderBtn = cartEl.querySelector('button');
      orderBtn.addEventListener('click', ()=> {
        if (this.totalAmount <= 0){
          return;
        } else{
          alert(`Thank You For Shopping Items Worth GH₵${this.totalAmount.toFixed(2)} From Our Store.`);
          cartEl.querySelector('h2').textContent = `GH₵${0}`;
        
        }
      });

    }
  }
  
  class ProductItem extends Component {
    constructor(product, renderHookId) {
      super(renderHookId);
      this.product = product;
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = this.createRootElement('li', 'product-item');
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>GH₵${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }
  
  class ProductList extends Component {
    products = [
      new Product(
        'A Sofa',
        'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb3b230d1/images/650000/652597.jpg',
        'A soft and comfortable Sofa!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://4.imimg.com/data4/NY/BJ/MY-23905479/img_9382-500x500.jpg',
        'A carpet which you might like - or not.',
        89.99
      ),
      new Product(
        'A Telelvision',
        'https://www.yateso.com/wp-content/uploads/2020/03/a-0-JHLH2.jpg',
        'For the corret view pleasure',
        259.99
      ),
      new Product(
        'A Refrigerator',
        'https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SL1500_.jpg',
        'Food Showcase Refrigerator; FlexZone™ drawer; Twin Cooling Plus™',
        570.99
      ),
      new Product (
        'A Blender',
        'https://images-na.ssl-images-amazon.com/images/I/71%2BE7mBZqzL._AC_SL1500_.jpg',
        'Cleanblend Commercial Blender - 64 Oz Countertop Blender 1800',
        55.99
      )
    ];
  
    constructor(renderHookId) {
      super(renderHookId);
    }
  
    render() {
     const unorderList = this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list-home-appliance')
      ]);
      for (const prod of this.products) {
        const productItem = new ProductItem(prod, 'prod-list-home-appliance');
        productItem.render();
      }
      const header = this.createRootElement('header', 'category');
      const h2 =document.createElement('h2');
      h2.textContent = 'Home Appliance';
      h2.style.color = 'Black';
      const k = header.append(h2);
      console.log(unorderList);
    
    }
  }
  
  class Shop {
    render() {
      this.cart = new ShoppingCart('app');
      this.cart.render();
      const productList = new ProductList('app');
      productList.render();
    }
  }
  
  class App {
    static cart;
  
    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }
  
    static addProductToCart(product) {
      this.cart.addProduct(product);
    }
  }


  
  App.init();

  