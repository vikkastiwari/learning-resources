import React, { useState } from 'react';
import './TabComponent.css';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const TabPanel = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-component">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <TabPanel>{tabs[activeTab].content}</TabPanel>
    </div>
  );
};

export default TabComponent;
