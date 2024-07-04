import React from "react";
import "../styles/ServiceComponent.css";

const ServiceComponent = () => {
  return (
    <div className="service-container">
      <img
        src="https://i.pinimg.com/564x/50/aa/e7/50aae742ebf223df24336b8ebe54f9b6.jpg"
        alt="Circle Logo"
        className="circle-logo"
      />
      <div className="service-content">
        <h2>يوجد لدينا جميع خدمات وفودافون كاش</h2>
        <div className="service-text-container">
          <ul>
            <li>شحن كارت الكهرباء</li>
            <li>كروت شحن وتحويل رصيد جميع الشبكات</li>
            <li>فواتير الارضي والانترنت</li>
            <li>مصروفات المدارس والجامعات</li>
            <li>دفع اقساط القروض والتأمينات</li>
            <li>جميع المعاملات الماليه والبنوك</li>
          </ul>
        </div>
        <p>خدمه فودافون كاش متوفره 24 ساعه</p>
      </div>
    </div>
  );
};

export default ServiceComponent;
