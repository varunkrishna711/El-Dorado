import "./card.css";
import axios from "axios";
import { useRef } from "react";
// import Razorpay from "razorpay";

function Card(props) {
  const priceRef = useRef();
  const wrapref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (props.user.loggedIn) {
      const razorPayPaymentHandler = async () => {
        const API_URL = process.env.REACT_APP_API;
        const orderUrl = `${API_URL}/api/razorpay/book/${props.amount}`;
        //   console.log(props);
        const response = await axios
          .get(orderUrl)
          .then((res) => res.data)
          .catch((err) => console.log(err));
        //   console.log(response);
        const data = response;
        console.log("App -> razorPayPaymentHandler -> data", data);

        const options = {
          key: "",
          name: "avdojo",
          description: "avodojo",
          order_id: data.id,
          handler: async (response) => {
            try {
              const paymentId = response.razorpay_payment_id;
              const url = `${API_URL}/api/razorpay/capture/${paymentId}`;
              const captureResponse = await axios.post(url, {});
              const successObj = JSON.parse(captureResponse.data);
              const captured = successObj.captured;
              console.log(
                "App -> razorPayPaymentHandler -> captured",
                successObj
              );
              if (captured) {
                console.log("success");
              }
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };

      razorPayPaymentHandler();
    } else {
      console.log("login to continue");
    }
  };

  return (
    <div className="card">
      <div className="top">
        <img className="card-image" src={props.image} />
      </div>
      <div className="bottom">
        <p
          className="head"
          style={{ "font-size": "22px", "font-weight": "800" }}
        >
          {props.art_form}
        </p>
        <p className="place">Place: {props.place}</p>
        <p className="Rate">Amount: {props.amount}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="book_bttn" type="submit">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
export default Card;
