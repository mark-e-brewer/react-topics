import React, { useState } from 'react';

const CardForm = () => {
  const [name, setName] = useState(''); // State for name input
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input
  const [email, setEmail] = useState(''); // State for email input
  const [age, setAge] = useState(''); // State for age input
  const [cards, setCards] = useState([]); // State for cards array
  const [cardId, setCardId] = useState(0); // State for card ID counter

  const handleNameChange = (e) => {
    setName(e.target.value); // Update the name state with input value
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value); // Update the phone number state with input value
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state with input value
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value); // Update the age state with input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Create a new card object with the submitted data and unique ID
    const newCard = {
      cardId,
      name,
      phoneNumber,
      email,
      age,
    };

    // Update the cards state with the new card object
    setCards([...cards, newCard]);

    // Increment the card ID counter for the next card
    setCardId(cardId + 1);

    // Reset the form inputs
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <select value={age} onChange={handleAgeChange}>
          <option value="">Select Age</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.name}</h3>
            <p>Phone Number: {card.phoneNumber}</p>
            <p>Email: {card.email}</p>
            <p>Age: {card.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardForm;
