export default function User({name, mail, image}) {
    return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h2>Hello {name}</h2>
      <p>Your mail seems to be {mail}</p><br></br>
    </div>
    )
  }