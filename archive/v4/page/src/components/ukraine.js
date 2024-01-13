function Ukraine(props) {

    let link = "https://www.forbes.com/advisor/personal-finance/donate-relief-to-ukraine/";

    return (
        <p className="ukraine">
            #StandWithUkraine<span className="flag"> 🇺🇦 </span>
            <a className="link" href={link} target="_blank" rel="noreferrer"> Help Support Ukraine</a>
            <button onClick={props.event} className="close">✕</button>
        </p>
    );
}

export default Ukraine;
