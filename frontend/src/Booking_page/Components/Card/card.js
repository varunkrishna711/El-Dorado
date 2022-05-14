import './card.css';
function Card(props)
{
    return(
        <div className="card">
            <div className="top">
                <img className="card-image" src={props.image} />

            </div>
            <div className="bottom">
                <p className="head" style={{"font-size":"22px","font-weight":"800"}}>{props.art_form}</p>
                <p className="place">Place: {props.place}</p>
                <p className="Rate">Amount: {props.amount}</p>
                <button className='book_bttn'>Book</button>
            </div>
            
        </div>
    );
}
export default Card;