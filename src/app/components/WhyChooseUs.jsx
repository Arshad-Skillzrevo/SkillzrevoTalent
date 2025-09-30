import { FaBolt, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";

const usps = [
  { id: 1, title: "Speed & Agility", description: "Quick turnaround for urgent hiring needs", icon: FaBolt },
  { id: 2, title: "Domain Expertise", description: "Specialized recruiters for every industry", icon: FaGlobe },
  { id: 3, title: "Scalable Solutions", description: "From single hires to enterprise-scale hiring", icon: FaLightbulb },
  { id: 4, title: "Trusted Partner", description: "Proven success in building long-term partnerships", icon: FaHandshake },
];

export default function WhyChooseSkillzRevo() {
  return (
    <div className="relative w-full py-15 max-md:py-6 bg-[#feede7] px-6 max-md:px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-orange-500 text-3xl sm:text-4xl  font-bold pb-2 camelcase heading-oswald">
          Why Choose SkillzRevo Talent?
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mb-10">
          We are more than recruiters — we are workforce partners.
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {usps.map((usp) => (
            <div
              key={usp.id}
              className="flex flex-col py-8 px-6 items-center gap-4 bg-white border border-transparent rounded shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <usp.icon className="size-14 text-orange-500" />
              <dd className="text-xl font-semibold text-orange-500 heading-oswald">
                {usp.title}
              </dd>
              <dt className="text-gray-500 text-sm">{usp.description}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
