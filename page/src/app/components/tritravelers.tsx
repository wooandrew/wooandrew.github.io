

const TriTravelers = () => {

  return (
    <div className="wrap">
      {Array.from({ length: 200 }, (_, index) => (
        <div key={index} className="tri" />
      ))}
    </div>
  );
}

export default TriTravelers;
