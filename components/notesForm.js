import React, { useState } from 'react';

const CardForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      cardId,
      name,
      phoneNumber,
      email,
      age,
    };

    setCards([...cards, newCard]);

    setCardId(cardId + 1);

    setName('');
    setPhoneNumber('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <div className="form1Div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className="form1Input"
            id="nameInput1"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
            className="form1Input"
            id="phoneNumberInput1"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            className="form1Input"
            id="emailInput1"
          />
          <select value={age} onChange={handleAgeChange} className="form1Select" id="ageSelect1">
            <option value="">Select Age</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button type="submit" className="form1Button" id="submitButton1">Submit</button>
        </form>
      </div>
      <div className="card1Div">
        {cards.map((card) => (
          <div className="card1">
            <h3 className="card1header">{card.name}</h3>
            <p className="card1Element">Phone Number: {card.phoneNumber}</p>
            <p className="cardElement">Email: {card.email}</p>
            <p className="cardElement">Age: {card.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardForm;
