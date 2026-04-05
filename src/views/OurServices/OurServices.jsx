import "./OurServices.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import {servicesData }from "./../../config";

import * as Icons from "lucide-react";




function Services() {
  return (
    <div className="services">
      <PageTitle title="Our Services 🌼" />

      <p className="services-subtitle">
        We offer premium floral services to make your moments memorable ✨
      </p>

      <div className="services-grid">
        {servicesData.map((service) => {
          const IconComponent = Icons[service.icon];

          return (
            <div key={service.id} className="service-card">
              <div className="service-icon-circle">
                {IconComponent && <IconComponent size={34} strokeWidth={1.5} />}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;