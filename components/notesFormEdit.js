import React, { useState } from 'react';

const CardFormEdit = () => {
  const [name, setName] = useState(''); // State for name input
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input
  const [email, setEmail] = useState(''); // State for email input
  const [age, setAge] = useState(''); // State for age input
  const [cards, setCards] = useState([]); // State for cards array
  const [cardId, setCardId] = useState(0); // State for card ID counter
  const [editSubCardId, setEditSubCardId] = useState(null); // State for card ID being edited

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

    if (editSubCardId !== null) {
      // If editing an existing card
      const updatedCards = cards.map((card) => {
        if (card.id === editSubCardId) {
          // Update the edited card with new data
          return {
            ...card,
            name,
            phoneNumber,
            email,
            age,
          };
        }
        return card;
      });

      // Update the cards state with the updated cards array
      setCards(updatedCards);

      // Reset the editSubCardId state
      setEditSubCardId(null);
    } else {
      // If creating a new card
      // Create a new card object with the submitted data and unique ID
      const newCard = {
        id: cardId,
        name,
        phoneNumber,
        email,
        age,
      };

      // Update the cards state with the new card object
      setCards([...cards, newCard]);

      // Increment the card ID counter for the next card
      setCardId(cardId + 1);
    }

    // Reset the form inputs
    setName('');
    setPhoneNumber('');
    setEmail('');
    setAge('');
  };

  const handleEdit = (card) => {
    // Populate the form inputs with the card data being edited
    setName(card.name);
    setPhoneNumber(card.phoneNumber);
    setEmail(card.email);
    setAge(card.age);

    // Set the editSubCardId state to the ID of the card being edited
    setEditSubCardId(card.id);
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
        <button type="submit">{editSubCardId !== null ? 'Update Card' : 'Add Card'}</button>
      </form>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <p>Name: {card.name}</p>
            <p>Phone Number: {card.phoneNumber}</p>
            <p>Email: {card.email}</p>
            <p>Age: {card.age}</p>
            <button type="button" onClick={() => handleEdit(card)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFormEdit;
