import React, { useState } from 'react';

const ContactFormWithCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    age: '',
  });

  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create a card with the submitted information
    const newCard = {
      id: new Date().getTime(),
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      age: formData.age,
    };
    setCards([...cards, newCard]);
    // Reset form data
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      age: '',
    });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Person Info Form</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="form-input"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-select"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          className="form-input"
          value={formData.age}
          onChange={handleInputChange}
        >
          <option value="">Select Age</option>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <br />
        <button className="form-submit" type="submit">Submit</button>
      </form>
      <div className="cards-container">
        <h2 className="cards-title">Contact Cards</h2>
        {cards.map((card) => (
          <div className="cards-container">
            <h2 className="cards-title">Cards</h2>
            <div
              className="card"
              style={{
                width: '18rem',
              }}
            >
              <div className="card-header">
                {card.name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{card.phoneNumber}</li>
                <li className="list-group-item">{card.email}</li>
                <li className="list-group-item">{card.age}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFormWithCard;
