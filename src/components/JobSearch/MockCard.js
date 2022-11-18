function MockCard(props) {
  const { img, name, job, tech, location } = props;
  return (
    <div className="cardList">
      <a className="cardLink">
        <div className="cardImgBox">
          <img src={img} />
        </div>
        <div className="cardContent">
          <div>
            <span>{name}</span>
          </div>
          <h2>{job}</h2>
          <ul className="techWrap">
            <li>{tech[0]}</li>
            <li>{`· ${tech[1]}`}</li>
            <li>{`· ${tech[2]}`}</li>
            <li>{`· ${tech[3]}`}</li>
          </ul>
          <ul className="locaWrap">
            <li>{location}</li>
            {/* <li>· 경력 1~15년</li> */}
          </ul>
        </div>
      </a>
    </div>
  );
}

export default MockCard;
