import React, { useState, useEffect } from 'react';
import './ticket.css';

const TicketGenerator = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/cap/ticket/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const ticketsWithBarcodes = data.map(ticket => ({
          ...ticket,
          barcode: generateRandomBarcode()
        }));
        setTickets(ticketsWithBarcodes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const generateRandomBarcode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let barcode = '';
    for (let i = 0; i < 10; i++) {
      barcode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return barcode;
  };

  const handlePurchase = (ticketId) => {
    alert(`Successfully purchased ticket ${ticketId}`);
  };

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket">
          <div className="ticket-header">
            <h3>{ticket.name}</h3>
            <span>Price: ${ticket.price}</span>
          </div>
          <p>Event Date: {ticket.date}</p>
          <div className="barcode">Barcode: {ticket.barcode}</div>
          <button onClick={() => handlePurchase(ticket.id)}>Purchase</button>
        </div>
      ))}
    </div>
  );
};

export default TicketGenerator;
