import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Shield, Users, Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import transportImg from "@/assets/transport-service.jpg";
import tahoeImg from "@/assets/tahoe-z71.png";
import pradoBlancaImg from "@/assets/prado-txl-blanca.webp";
import pradoGrisImg from "@/assets/prado-txl-gris.png";
import lexusImg from "@/assets/lexus-lx.png";
import escaladeImg from "@/assets/escalade.webp";
import mercedesVitoImg from "@/assets/mercedes-vito.png";
import mazda3Img from "@/assets/mazda3.webp";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573044946469&text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Transporte";

type VehicleImage = {
  color: string;
  url: string;
};

type Vehicle = {
  name: string;
  passengers: string;
  colors: string[];
  category: "suv" | "van";
  premium?: boolean;
  image?: string;
  images?: VehicleImage[];
};

const vehicles: Vehicle[] = [
  {
    name: "Chevrolet Tahoe Z71",
    passengers: "5-7 pasajeros",
    colors: ["Blanca", "Negra"],
    category: "suv",
    image: tahoeImg,
  },
  {
    name: "Toyota Prado TXL",
    passengers: "7 pasajeros",
    colors: ["Blanca", "Gris Oscuro"],
    category: "suv",
    images: [
      {
        color: "Blanca",
        url: pradoBlancaImg,
      },
      {
        color: "Gris Oscuro",
        url: pradoGrisImg,
      },
    ],
  },
  {
    name: "Toyota Lexus LX",
    passengers: "7 pasajeros",
    colors: ["Blanca", "Negra", "Gris Plata"],
    category: "suv",
    image: lexusImg,
  },
  {
    name: "Cadillac Escalade",
    passengers: "7 pasajeros",
    colors: ["Negra"],
    category: "suv",
    premium: true,
    image: escaladeImg,
  },
  {
    name: "Mercedes Vito de Lujo",
    passengers: "9 - 12 - 16 - 19 pasajeros",
    colors: ["Blanca", "Negra (Lujo)"],
    category: "van",
    premium: true,
    image: mercedesVitoImg,
  },
  {
    name: "Mazda 3",
    passengers: "5 pasajeros",
    colors: ["Blanca", "Negra", "Gris"],
    category: "van",
    image: mazda3Img,
  },
];

const colorDot = (color: string) => {
  const c = color.toLowerCase();
  if (c.includes("negra") || c.includes("negro")) return "bg-gray-900";
  if (c.includes("blanca") || c.includes("blanco")) return "bg-white border border-border";
  if (c.includes("gris") || c.includes("plata")) return "bg-gray-400";
  return "bg-gray-500";
};

const PradoCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const [activeColor, setActiveColor] = useState(0);
  const imgs = vehicle.images!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="group bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-64 md:h-72 bg-white flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeColor}
            src={imgs[activeColor].url}
            alt={`${vehicle.name} - ${imgs[activeColor].color}`}
            className="w-full h-full object-contain p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
        </AnimatePresence>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold mb-2">{vehicle.name}</h3>
        <p className="text-muted-foreground text-sm mb-5">{vehicle.passengers}</p>

        <div className="mb-6">
          <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-3">Selecciona el color:</span>
          <div className="flex items-center gap-3">
            {imgs.map((img, idx) => (
              <button
                key={img.color}
                onClick={() => setActiveColor(idx)}
                className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
                  activeColor === idx
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${colorDot(img.color)}`} />
                <span className="text-xs font-semibold">{img.color}</span>
              </button>
            ))}
          </div>
        </div>

        <a
          href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(vehicle.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          Cotizar
        </a>
      </div>
    </motion.div>
  );
};

const VehicleCard = ({ vehicle, index }: { vehicle: Vehicle; index: number }) => {
  if (vehicle.images) {
    return <PradoCard vehicle={vehicle} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-64 md:h-72 bg-white flex items-center justify-center overflow-hidden">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <Car className="w-24 h-24 text-primary/20 group-hover:text-primary/30 transition-colors duration-500" />
        )}
        {vehicle.premium && (
          <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase">
            Premium
          </div>
        )}
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold mb-2">{vehicle.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{vehicle.passengers}</p>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Colores:</span>
          <div className="flex items-center gap-2">
            {vehicle.colors.map((color) => (
              <div key={color} className="flex items-center gap-1.5">
                <div className={`w-4 h-4 rounded-full ${colorDot(color)}`} />
                <span className="text-xs text-muted-foreground">{color}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(vehicle.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          Cotizar
        </a>
      </div>
    </motion.div>
  );
};

const VanCard = ({ vehicle, index }: { vehicle: Vehicle; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-background border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
  >
    <div className="relative h-52 bg-white flex items-center justify-center overflow-hidden">
      <Users className="w-24 h-24 text-primary/20 group-hover:text-primary/30 transition-colors duration-500" />
      {vehicle.premium && (
        <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground px-3 py-1 text-xs font-bold tracking-wider uppercase">
          Premium
        </div>
      )}
    </div>
    <div className="p-8">
      <h3 className="font-display text-2xl font-bold mb-2">{vehicle.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{vehicle.passengers}</p>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Colores:</span>
        <div className="flex items-center gap-2">
          {vehicle.colors.map((color) => (
            <div key={color} className="flex items-center gap-1.5">
              <div className={`w-4 h-4 rounded-full ${colorDot(color)}`} />
              <span className="text-xs text-muted-foreground">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(vehicle.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:shadow-gold transition-all"
      >
        <Phone className="w-3.5 h-3.5" />
        Cotizar
      </a>
    </div>
  </motion.div>
);

const Transporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={transportImg} alt="Transporte 10X ASEGLO" className="w-full h-full object-cover opacity-30" width={1920} height={1080} loading="lazy" />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Servicio de Transporte</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4">
                Flota <span className="text-gradient-gold">Premium</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
                Transporte ejecutivo y de lujo con la máxima seguridad, comodidad y eficacia para cada necesidad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: "Blindaje disponible" },
                { icon: Users, label: "Conductores capacitados" },
                { icon: Car, label: "Flota premium" },
                { icon: Star, label: "Servicio 24/7" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center gap-2">
                  <f.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold tracking-wider uppercase">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flota - SUVs */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Nuestra Flota</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                Camionetas <span className="text-gradient-gold">Ejecutivas</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vehículos de alta gama para transporte ejecutivo, escoltas y protección VIP.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.filter(v => v.category === "suv").map((vehicle, i) => (
                <VehicleCard key={vehicle.name} vehicle={vehicle} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Flota - Vans */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                Vans <span className="text-gradient-gold">de Lujo</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Para grupos más grandes, ofrecemos vans Mercedes de lujo con capacidad de 9 a 19 pasajeros.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.filter(v => v.category === "van").map((vehicle, i) => (
                <VehicleCard key={vehicle.name} vehicle={vehicle} index={i} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Transporte;
