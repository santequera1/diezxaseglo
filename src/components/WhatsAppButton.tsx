const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=NECESITO%20INFORMACION";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.638 3.5 4.595 4.466.66.33 2.05.989 2.78.989.659 0 1.819-.486 2.05-1.17.1-.301.143-.602.143-.903 0-.515-1.466-1.193-1.95-1.43Zm-2.41 6.34c1.418 0 2.81-.387 4.014-1.103l.286-.172 2.98.784-.799-2.91.187-.3a7.85 7.85 0 0 0 1.203-4.182c0-4.382-3.572-7.94-7.957-7.94-4.382 0-7.94 3.558-7.94 7.94 0 1.504.43 2.98 1.232 4.25l.187.3-.985 2.866 2.965-.755.287.158a7.928 7.928 0 0 0 4.043 1.119Zm0-17.602c5.317 0 9.662 4.345 9.662 9.662 0 5.318-4.345 9.662-9.662 9.662a9.638 9.638 0 0 1-4.61-1.17L7 25l1.79-5.246a9.61 9.61 0 0 1-1.25-4.749c0-5.317 4.345-9.662 9.662-9.662Z" />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
