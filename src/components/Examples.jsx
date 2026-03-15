import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttons={Object.keys(EXAMPLES).map((example) => (
          <TabButton
            key={example}
            isSelected={selectedTopic === example}
            onSelect={() => handleSelect(example)}
          >
            {example}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
export default Examples;
