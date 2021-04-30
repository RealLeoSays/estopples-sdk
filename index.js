function loadScript(options) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = options.id;
        script.src = options.src;
        script.async = options.async;
        document.body.appendChild(script);
        script.onload = (event) => {
            resolve(event);
        };
        script.onerror = (event) => {
            reject(event);
        };
    });
}
function loadStyle(options) {
    return new Promise((resolve, reject) => {
        const linkElement = document.createElement('link');
        linkElement.id = options.id;
        linkElement.href = options.href;
        linkElement.rel = options.rel;
        document.head.appendChild(linkElement);
        linkElement.onload = (event) => {
            resolve(event);
        };
        linkElement.onerror = (event) => {
            reject(event);
        };
    });
}
class EstopplesLender {
    constructor(container, onClick) {
        this.container = container;
        this.onClick = onClick;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    postRender() {
        this.clickListener();
    }
    clickListener() {
        document.querySelector('#add-payment').addEventListener('click', () => {
            this.onClick('payment');
        });
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
            <div class="products">
              <h1>Select a Product(s)</h1>
              <div class="select-products">
                <label class="check-box-container">Estopple
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <label class="check-box-container"> Standard Lender Questionnaire <span class="question">?</span>
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <label class="check-box-container"> Custom Lender Questionnaire <span class="question">?</span>
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <label class="check-box-container">Association Document
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <div class="submit-btn">
                  <button id="add-payment">Submit</button>
                </div>
              </div>
            </div>
        `);
        document.getElementById(this.container).appendChild(this.item);
        this.postRender();
        return this;
    }
    remove() {
        if (this.item) {
            this.item.remove();
        }
    }
}
class EstopplesBuyer {
    constructor(container, onClick) {
        this.container = container;
        this.onClick = onClick;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    postRender() {
        this.clickListener();
    }
    clickListener() {
        document.querySelector('#add-payment').addEventListener('click', () => {
            this.onClick('payment');
        });
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
        <div class="products">
            <h1>Select a Product(s)</h1>
            <div class="select-products">
              <label class="check-box-container"> Standard Lender Questionnaire <span class="question">?</span>
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
              <label class="check-box-container"> Custom Lender Questionnaire <span class="question">?</span>
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
              <div class="submit-btn">
                <button id="add-payment">Submit</button>
              </div>
            </div>
        </div>
        `);
        document.getElementById(this.container).appendChild(this.item);
        this.postRender();
        return this;
    }
    remove() {
        if (this.item) {
            this.item.remove();
        }
    }
}
class EstopplesAgent {
    constructor(container, onClick) {
        this.container = container;
        this.onClick = onClick;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    postRender() {
        this.clickListener();
    }
    clickListener() {
        document.querySelector('#add-payment').addEventListener('click', () => {
            this.onClick('payment');
        });
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
        <div class="products">
            <h1>Select a Product(s)</h1>
            <div class="select-products">
              <label class="check-box-container">Estopple
                  <input type="checkbox">
                  <span class="checkmark"></span>
              </label>
              <label class="check-box-container"> Standard Lender Questionnaire <span class="question">?</span>
                  <input type="checkbox">
                  <span class="checkmark"></span>
              </label>
              <label class="check-box-container"> Custom Lender Questionnaire <span class="question">?</span>
                  <input type="checkbox">
                  <span class="checkmark"></span>
              </label>
             <div class="submit-btn">
                <button id="add-payment">Submit</button>
             </div>
            </div>
        </div>
        `);
        document.getElementById(this.container).appendChild(this.item);
        this.postRender();
        return this;
    }
    remove() {
        if (this.item) {
            this.item.remove();
        }
    }
}
class EstopplesSeller {
    constructor(container, onClick) {
        this.container = container;
        this.onClick = onClick;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    postRender() {
        this.clickListener();
    }
    clickListener() {
        document.querySelector('#add-payment').addEventListener('click', () => {
            this.onClick('payment');
        });
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
        <div class="products">
           <h1>Select a Product(s)</h1>
           <div class="select-products">
                  <label class="check-box-container">Estopples
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
              <div class="submit-btn">
                <button id="add-payment">Submit</button>
              </div>
          </div>
        </div>
        `);
        document.getElementById(this.container).appendChild(this.item);
        this.postRender();
        return this;
    }
    remove() {
        if (this.item) {
            this.item.remove();
        }
    }
}
class EstopplesPayment {
    constructor(container) {
        this.container = container;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    renderStripe() {
        this.stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
        this.stripePaymentElements = this.stripe.elements();
        this.stripeCardElements = this.stripePaymentElements.create('card');
        this.stripeCardElements.mount("#stripe-card-number");
        this.onPayment();
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    onPayment() {
        document.getElementById('stripe-payment-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            const cardElement = this.stripePaymentElements.getElement('card');
            const { error, paymentMethod } = await this.stripe.createPaymentMethod({
                type: 'card',
                card: cardElement
            });
            if (error) {
                console.error(error);
            }
            else {
                console.log(paymentMethod);
            }
        });
    }
    onClick() {
        document.querySelector('.show-inputs').addEventListener('click', () => {
            if (!document.querySelector('.hidden-inputs').classList.contains('active')) {
                document.querySelector('.hidden-inputs').classList.add('active');
            }
            else if (document.querySelector('.hidden-inputs').classList.contains('active')) {
                document.querySelector('.hidden-inputs').classList.remove('active');
            }
        });
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
        <div class="payment-container">
        <h1>Payment Details</h1>
        <form action="" id="stripe-payment-form">
            <div class="details">
                <h1>West End Town Homes Property Owners Association</h1>
                <div class="selected-opt">
                    <p>Select option</p>
                    <p>$payment</p>
                </div>
                <div class="selected-opt">
                    <p>Select option</p>
                    <p>$payment</p>
                </div>
            </div>
            <div class="input-fields">
                <div class="input-field">
                    <label for="firstName">Requestor First Name</label>
                    <input type="text" name="firstName" placeholder="John">
                </div>
                <div class="input-field">
                    <label for="lastName">Requestor Last Name</label>
                    <input type="text" name="lastName" placeholder="Smith">
                </div>
                <div class="input-field">
                    <label for="email">Requestor Email</label>
                    <input type="email" name="email" placeholder="Requestor Email">
                </div>
                <div class="input-field">
                    <label for="phone">Requestor Phone Number</label>
                    <input type="number" name="phone" placeholder="Requestor Phone">
                </div>
            </div>
            <div class="hidden-inputs-section">
                   <p class="show-inputs">Send a copy to my title agent</p>
                   <div class="hidden-inputs">
                     <div class="input-fields">
                       <div class="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email">
                       </div>
                       <div class="input-field">
                         <label for="name">Name</label>
                         <input type="text" name="name" placeholder="Name">
                       </div>
                    </div>
                   </div>
                </div>
            <div class="debit-card">
                <label for="stripe-card-number">Credit or Debit card *</label>
                <div id="stripe-card-number" class="stripe-card"></div>
            </div>
            
            <div class="submit-form">
                <h2>Reports will be delivered by 5/4/2021</h2>
                <label class="check-box-container font">I need it quicker, please rush my order for delivery on 4/23/2021 for $100.00 more
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                <button type="submit">Submit</button>
                <p>Your card will be charged $320.00.</p>
            </div>
        </form>
    </div>
        `);
        document.getElementById(this.container).appendChild(this.item);
        this.renderStripe();
        this.onClick();
        return this;
    }
    remove() {
        if (this.item) {
            this.item.remove();
        }
    }
}
class EstopplesPlaceOrderMap {
    constructor(container, place, onClick, onClickClose) {
        this.container = container;
        this.place = place;
        this.onClick = onClick;
        this.onClickClose = onClickClose;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-map-${this.uid}`;
    }
    postRender() {
        const map = new google.maps.Map(document.getElementById("place-order-map"), {
            center: this.place.geometry.location,
            zoom: 13,
        });
        const marker = new google.maps.Marker({
            map,
            position: this.place.geometry.location
        });
        this.clickListner();
        this.addCloseListner();
    }
    clickListner() {
        document.querySelector("#estopples-lender").addEventListener('click', () => {
            this.onClick('lender');
        });
        document.querySelector("#estopples-buyer").addEventListener('click', () => {
            this.onClick('buyer');
        });
        document.querySelector("#estopples-agent").addEventListener('click', () => {
            this.onClick('agent');
        });
        document.querySelector("#estopples-seller").addEventListener('click', () => {
            this.onClick('seller');
        });
    }
    addCloseListner() {
        const item = document.querySelector("#close-place-order-map-modal");
        if (item) {
            item.addEventListener('click', this.onClickClose.bind(this));
        }
    }
    removeCloseListner() {
        const item = document.querySelector("#close-place-order-map-modal");
        if (item) {
            item.removeEventListener('click', this.onClickClose.bind(this));
        }
    }
    render() {
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
        <div class="box">
          <div class="header">
            <h2>We found it</h2>
            <span class="close" id="close-place-order-map-modal">&times;</span>
          </div>
          <div id="place-order-map" style="width:100%; height:320px"></div>
          <div class="place-name">${this.place.formatted_address}</div>
          <div class="footer">
            <h1>Select to continue</h1>
          </div>
          <div class="user-type">
            <div class="btn-container">
              <button class="tab-btn active-btn" id="estopples-lender">Lender</button>
              <button class="tab-btn" id="estopples-buyer">Buyer</button>
              <button class="tab-btn" id="estopples-agent">Title Agent</button>
              <button class="tab-btn" id="estopples-seller">Seller</button>
            </div>
           </div>
        </div>
        `);
        document.getElementById(this.container).append(this.item);
        this.postRender();
        return this;
    }
    remove() {
        if (this.item) {
            this.removeCloseListner();
            this.item.remove();
        }
    }
}
class EstopplesPlaceOrder {
    constructor(options, onClickPlace) {
        this.options = options;
        this.onClickPlace = onClickPlace;
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    getId() {
        return `estopples-place-order-${this.uid}`;
    }
    autoCompletePlaces() {
        const input = document.querySelector("#seaech-location");
        const options = {
            fields: ["formatted_address", "geometry", "name"],
            strictBounds: false,
            types: ["establishment"],
        };
        const autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            const input = document.querySelector('#seaech-location');
            if (input) {
                setTimeout(() => {
                    input.value = "";
                }, 1000);
            }
            this.onClickPlace(place);
            this.remove();
        });
    }
    addCloseListner() {
        if (this.options.modal) {
            const item = document.querySelector("#close-place-order-modal");
            if (item) {
                item.addEventListener('click', this.remove.bind(this));
            }
        }
    }
    removeCloseListner() {
        if (this.options.modal) {
            const item = document.querySelector("#close-place-order-modal");
            if (item) {
                item.removeEventListener('click', this.remove.bind(this));
            }
        }
    }
    render() {
        let closeButton = '';
        if (this.options.modal) {
            closeButton = `<span class="close" id="close-place-order-modal">&times;</span>`;
        }
        this.item = document.createElement('div');
        this.item.id = this.getId();
        this.item.innerHTML = (`
                <div class="show-modal">
                    <div class="box">
                        <div class="header">
                            <h1>Place an Order</h1>
                            ${closeButton}
                        </div>
                        <div id="card">
                            <div class="container">
                                <input type="text" id="seaech-location" placeholder="Enter the Address">
                                <button>Search</button>
                            </div>
                        
                            <div id="map"></div>
                            <div id="infowindow-content">
                                <span id="place-name" class="title"></span><br />
                                <span id="place-address"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
        `);
        document.getElementById(this.options.container).appendChild(this.item);
        this.addCloseListner();
        this.autoCompletePlaces();
        return this;
    }
    remove() {
        if (this.options.modal && this.item) {
            this.removeCloseListner();
            this.item.remove();
        }
    }
}
class Estopples {
    constructor(options) {
        this.options = options;
        this.modalId = 'estopples-modal-container';
        this.modalBackDropId = 'estopples-modal-container-backdrop';
        this.uid = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 5);
    }
    static create(options) {
        const estopples = new Estopples(options);
        estopples.render();
        return estopples;
    }
    async loadGoogleAPI() {
        const googleAPi = new URL('https://maps.googleapis.com/maps/api/js');
        googleAPi.searchParams.set('key', this.options.googleMapAPIKey);
        googleAPi.searchParams.set('libraries', 'places');
        googleAPi.searchParams.set('v', 'weekly');
        try {
            await loadScript({
                id: 'google-map-api-script', src: googleAPi.href, async: true
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    async loadStripe() {
        try {
            await loadScript({
                id: 'stripe-sdk-script',
                src: 'https://js.stripe.com/v3/',
                async: true
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async preLoadScript() {
        await this.loadGoogleAPI();
        await this.loadStripe();
    }
    async loadFont() {
    }
    async preLoadStyle() {
        await this.loadFont();
    }
    async preLoad() {
        await this.preLoadScript();
        await this.preLoadStyle();
    }
    renderOrderSearch() {
        if (this.options.id) {
            this.placeOrder = new EstopplesPlaceOrder({
                container: this.options.id,
                modal: false
            }, this.onClickPlaces.bind(this));
        }
        else {
            this.placeOrder = new EstopplesPlaceOrder({
                container: this.modalId,
                modal: true
            }, this.onClickPlaces.bind(this));
        }
        this.placeOrder.render();
    }
    renderLender() {
        this.lender = new EstopplesLender(this.modalId, this.onClickPayment.bind(this));
        this.lender.render();
    }
    renderBuyer() {
        this.buyer = new EstopplesBuyer(this.modalId, this.onClickPayment.bind(this));
        this.buyer.render();
    }
    renderAgent() {
        this.agent = new EstopplesAgent(this.modalId, this.onClickPayment.bind(this));
        this.agent.render();
    }
    renderSeller() {
        this.seller = new EstopplesSeller(this.modalId, this.onClickPayment.bind(this));
        this.seller.render();
    }
    renderPayment() {
        this.payment = new EstopplesPayment(this.modalId);
        this.payment.render();
    }
    removeElse() {
        if (this.lender) {
            this.lender.remove();
            this.lender = undefined;
        }
        if (this.buyer) {
            this.buyer.remove();
            this.buyer = undefined;
        }
        if (this.agent) {
            this.agent.remove();
            this.agent = undefined;
        }
        if (this.seller) {
            this.seller.remove();
            this.seller = undefined;
        }
        if (this.payment) {
            this.payment.remove();
            this.seller = undefined;
        }
    }
    onClickCloseModal() {
        this.removeElse();
        if (this.placeOrderMap) {
            this.placeOrderMap.remove();
            this.placeOrderMap = undefined;
        }
        if (this.modal) {
            this.modal.remove();
            this.modal = undefined;
        }
        if (this.modalBackDrop) {
            this.modalBackDrop.remove();
            this.modalBackDrop = undefined;
        }
    }
    onClickPlaces(place) {
        console.log('place', place);
        if (!this.modal) {
            this.renderModal();
        }
        this.placeOrderMap = new EstopplesPlaceOrderMap(this.modalId, place, this.onClickButtons.bind(this), this.onClickCloseModal.bind(this));
        this.placeOrderMap.render();
    }
    onClickButtons(value) {
        if (value === 'lender') {
            this.removeElse();
            this.renderLender();
        }
        else if (value === 'buyer') {
            this.removeElse();
            this.renderBuyer();
        }
        else if (value === 'agent') {
            this.removeElse();
            this.renderAgent();
        }
        else if (value === 'seller') {
            this.removeElse();
            this.renderSeller();
        }
    }
    onClickPayment(value) {
        if (value === 'payment') {
            this.renderPayment();
        }
    }
    renderModal() {
        this.modalBackDrop = document.createElement('div');
        this.modalBackDrop.className = "estopples-modal-backdrop";
        this.modalBackDrop.id = this.modalBackDropId;
        document.body.appendChild(this.modalBackDrop);
        this.modal = document.createElement('div');
        this.modal.className = "estopples-modal";
        this.modal.id = this.modalId;
        document.body.appendChild(this.modal);
    }
    async render() {
        await this.preLoad();
        if (!this.options.id) {
            this.renderModal();
        }
        this.renderOrderSearch();
    }
}
//# sourceMappingURL=index.js.map