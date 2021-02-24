export const sendOrderEmail = async (
  name,
  email,
  contact,
  departure,
  date,
  offer
) => {
  const messageBody = `Nome: ${name}
Email: ${email}
Contacto: ${contact}
Destino: ${offer.title}
Data: ${date.toLocaleDateString()}
Partida: ${departure}
Total: ${offer.price}€`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'main@ricardovieira.me',
        from: 'main@ricardovieira.me',
        subject: 'Pedido de Reserva',
        text: messageBody,
      },
    }),
  });

  return res;
};

export const sendFranchiseEmail = async (
  name,
  email,
  contact,
  area,
  subject,
  message
) => {
  const messageBody = `Nome: ${name}
Email: ${email}
Contacto: ${contact}
Zona: ${area}
${message}`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'main@ricardovieira.me',
        from: 'main@ricardovieira.me',
        subject: `Franchising: ${subject}`,
        text: messageBody,
      },
    }),
  });

  return res;
};

export const sendNumberEmail = async number => {
  const messageBody = `Pedido de contacto de ${number}`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'main@ricardovieira.me',
        from: 'main@ricardovieira.me',
        subject: `Pedido de contacto Rent a Car`,
        text: messageBody,
      },
    }),
  });

  return res;
};
