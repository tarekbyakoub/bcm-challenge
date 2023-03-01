import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { StyledTabs } from "./styles";

type TabComponentProps = {
  onSelectTab: (tabName: string) => void;
};

const TabsComponent: React.FC<TabComponentProps> = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState("allAssets");

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
      className="justify-content-center"
    >
      <Tab eventKey="allAssets" title="All Assets" />
      <Tab eventKey="favorites" title="Favorites" />
      <Tab eventKey="staking" title="Staking" />
      <Tab eventKey="gainers" title="Gainers" />
      <Tab eventKey="losers" title="Losers" />
    </StyledTabs>
  );
};

export default TabsComponent;
