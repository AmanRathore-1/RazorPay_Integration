import axios from "axios";
import "../styles/Products.css";

function Product({ products }) {

  const checkOutHandler = async (amount) => {

      const {data:keyData}=await axios.get("/api/v1/getKey");
      const {key}=keyData;
      // console.log(key)
      const { data:orderData } = await axios.post("/api/v1/payment/process", {
        amount,
      });

      const {order}=orderData;
      // console.log(orderData);
      const options = {
        key, 
        amount, 
        currency: 'INR',
        name: 'Aman Rathore',
        description: 'Razor Pay Integration turotial',
        order_id: order.id,
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Aman Rathore',
          email: 'amanrathore3271@gmail.com',
          contact: '7805025760'
        },
        theme: {
          color: '#F37254'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
      

  };

  return (
    <div className="products-container">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="product-image"
          />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">
            Price <strong>{item.price}</strong>/-
          </p>
          <button
            className="pay-button"
            onClick={() => checkOutHandler(item.price)}
          >
            Pay ({item.price})/-
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
