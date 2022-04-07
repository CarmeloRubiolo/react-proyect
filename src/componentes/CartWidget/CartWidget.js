import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div >
            <button type="button" class=" position-relative">
                <img className="cartWidget" src={'./imagenes/carro.png'} /><span className="CartWidget-num" class="position-absolute top-0 start-0 translate-middle badge rounded-pill fs-6">3</span>
            </button>   
        </div>
          

    );
}

export default CartWidget;