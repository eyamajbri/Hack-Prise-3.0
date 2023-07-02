import "./OnePrize.css";

function OnePrize(props) {
    return (
      <div className="OnePrize_Container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className='flip-card-front-image'src={props.image} alt="" />
            </div>
            <div className="flip-card-back">
              <p className="title">{props.prize}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default OnePrize;
