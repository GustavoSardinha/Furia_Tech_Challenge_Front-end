
import React, { useState } from 'react';
import '../../Styles/Tab.css';

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.tabDefinitions[0].id);

  return (
    <div>
      <div className="tabs">
        {props.tabDefinitions.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {props.tabDefinitions.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
