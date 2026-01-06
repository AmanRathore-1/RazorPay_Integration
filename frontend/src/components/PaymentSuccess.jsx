import { useLocation } from "react-router-dom";
import "../styles/PaymentSuccess.css";
function PaymentSuccess() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const reference = query.get("reference");

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <h1 className="payment-success-title">Payment Successful</h1>

        <p className="payment-success-message">
          Thank you for the payment
        </p>

        {reference && (
          <p className="payment-success-reference">
            <strong>Reference ID:</strong> {reference}
          </p>
        )}
      </div>
    </div>
  );
}

export default PaymentSuccess;
