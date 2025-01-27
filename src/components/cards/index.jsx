import { services } from "../../pages/Services";
import { CheckCircle } from "lucide-react";

function Card({ name, description, price }) {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <div className="flex items-center mb-2">
        <CheckCircle className="mr-2 text-green-500" />
        <div className="font-bold text-lg">{name}</div>
      </div>
      <div className="text-gray-700">{description}</div>
      <div className="text-gray-500 mt-2">{price}</div>
    </div>
  );
}

export function ServiceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <Card
          key={index}
          name={service.name}
          description={service.description}
          price={service.price}
        />
      ))}
    </div>
  );
}

export default ServiceList;