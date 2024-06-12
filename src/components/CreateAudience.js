import React, { useState } from 'react';

const CreateAudience = () => {
  const [rules, setRules] = useState([{ field: '', operator: '', value: '' }]);
  const [audienceSize, setAudienceSize] = useState(0);

  const handleRuleChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index][field] = value;
    setRules(updatedRules);
  };

  const handleAddRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const handleCheckAudienceSize = () => {
    // Implement logic to check audience size based on rules
    const size = 1000; // Example value
    setAudienceSize(size);
  };

  const handleSaveAudience = () => {
    // Implement logic to save the audience
    console.log('Saving audience:', rules);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Create Audience</h2>
      <div className="mb-4">
        {rules.map((rule, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center mb-2">
            <input
              type="text"
              placeholder="Field"
              value={rule.field}
              onChange={(e) => handleRuleChange(index, 'field', e.target.value)}
              className="border border-gray-400 px-2 py-1 rounded-l mr-2 mb-2 sm:mb-0 w-full sm:w-auto"
            />
            <select
              value={rule.operator}
              onChange={(e) => handleRuleChange(index, 'operator', e.target.value)}
              className="border border-gray-400 px-2 py-1 mr-2 mb-2 sm:mb-0 w-full sm:w-auto"
            >
              <option value="">Select Operator</option>
              <option value=">">Greater Than</option>
              <option value="<">Less Than</option>
              <option value="=">Equal To</option>
            </select>
            <input
              type="text"
              placeholder="Value"
              value={rule.value}
              onChange={(e) => handleRuleChange(index, 'value', e.target.value)}
              className="border border-gray-400 px-2 py-1 rounded-r w-full sm:w-auto"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <button
          onClick={handleAddRule}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors mb-2 sm:mb-0 w-full sm:w-auto"
        >
          Add Rule
        </button>
        <button
          onClick={handleCheckAudienceSize}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors w-full sm:w-auto"
        >
          Check Audience Size
        </button>
      </div>
      <p className="mb-4">Audience Size: {audienceSize}</p>
      <div className="flex justify-end">
        <button
          onClick={handleSaveAudience}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Save Audience
        </button>
      </div>
    </div>
  );
};

export default CreateAudience;