import profilePic from "./assets/profile.jpg";
function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profilePic" className="card-img"></img>
      <h2 className="card-heading">Venkata Sai</h2>
      <p className="card-para">I'm a web developer!</p>
    </div>
  );
}
export default Card;
