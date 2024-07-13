import React from "react";

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center px-5 py-12 bg-gray-50">
      <div className="text-lg font-semibold text-center text-red-500">
        CATEGORY
      </div>
      <div className="mt-6 text-4xl font-bold text-center text-indigo-900">
        We Offer Best Services
      </div>
      <div className="mt-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              src: "Services/1.png",
              title: "Guided Tours",
              description:
                "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            },
            {
              src: "Services/2.png",
              title: "Best Flights Options",
              description:
                "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            },
            {
              src: "Services/3.png",
              title: "Religious Tours",
              description:
                "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            },
            {
              src: "Services/4.png",
              title: "Medical Insurance",
              description:
                "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg"
            >
              <img
                loading="lazy"
                srcSet={service.src}
                className="w-24 h-24 object-cover"
                alt={service.title}
              />
              <div className="mt-6 text-xl font-semibold text-indigo-900">
                {service.title}
              </div>
              <div className="mt-4 text-center text-gray-600">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
