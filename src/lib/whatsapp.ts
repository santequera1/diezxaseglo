export const WHATSAPP_MESSAGE =
  "🔥 ¡Hola! Quiero viajar con seguridad y conocer las soluciones que ofrecen. ¿Podrían asesorarme? 👋";

const PHONE = "573044946469";

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Variante con el servicio/vehículo de interés al final, en una línea aparte
export const whatsappUrlFor = (interest: string) =>
  `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE}\n\nServicio de interés: ${interest}`
  )}`;
