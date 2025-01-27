import Layout from "../../components/Layout";
import { CheckCircle } from 'lucide-react';

export const services = [
  {
    name: "Temple",
    description: "Aumenta la dureza y resistencia del metal.",
    price: "$100"
  },
  {
    name: "Cementación",
    description: "Endurece la superficie del material para mayor durabilidad.",
    price: "$150"
  },
  {
    name: "Normalizado",
    description: "Mejora la estructura interna del metal.",
    price: "$120"
  },
  {
    name: "Revenido",
    description: "Reduce tensiones internas y aumenta la tenacidad.",
    price: "$110"
  },
  {
    name: "Recocido",
    description: "Suaviza el material para facilitar su maquinado.",
    price: "$130"
  },
  {
    name: "Negreo",
    description: "Proceso superficial para protección contra corrosión.",
    price: "$140"
  },
  {
    name: "Alivio de tensiones",
    description: "Elimina tensiones acumuladas en piezas metálicas.",
    price: "$125"
  }
];

export function ServiceList() {
  return (
    <ul className="list-disc pl-5">
      {services.map((service, index) => (
        <li key={index} className="flex items-center mb-2">
          <CheckCircle className="mr-2 text-green-500" />
          <div>
            <div className="font-bold">{service.name}</div>
            <div>{service.description}</div>
            <div className="text-gray-500">{service.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Services() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Services</h1>
      <ServiceList />
    </Layout>
  );
}

export default Services;