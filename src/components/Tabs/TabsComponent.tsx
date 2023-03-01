import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import { StyledTabs } from "./styles";

type TabComponentProps = {
  onSelectTab: (tabName: string) => void;
};

const TabsComponent: React.FC<TabComponentProps> = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState("allAssets");

  const tabNames = [
    { eventKey: "allAssets", title: "All Assets" },
    { eventKey: "favorites", title: "Favorites" },
    { eventKey: "staking", title: "Staking" },
    { eventKey: "gainers", title: "Gainers" },
    { eventKey: "losers", title: "Losers" },
  ];

  const handleTabChange = (tabName: string | null) => {
    if (tabName !== null) {
      setActiveTab(tabName);
      onSelectTab(tabName);
    }
  };

  return (
    <StyledTabs
      activeKey={activeTab}
      onSelect={handleTabChange}
      variant="pills"
    >
      {tabNames.map((tabName) => (
        <Tab
          key={tabName.eventKey}
          eventKey={tabName.eventKey}
          title={tabName.title}
        />
      ))}
    </StyledTabs>
  );
};

export default TabsComponent;
