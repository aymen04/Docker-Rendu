import React, { useEffect } from 'react';
// local dependencies
import Rule from '../Rule/Rule';

/**
 * Display list of rules.
 */
function RuleList({ rules, setRules }) {
  useEffect(() => {
    fetch('http://localhost:3000/api/rules')
      .then((response) => response.json())
      .then((data) => {
        setRules(data);
      })
      .catch((error) => {
        console.error('Error fetching rules:', error);
      });
  }, []);

  const deleteRule = (index) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  return (
    rules &&
    rules.map((rule, index) => (
      <Rule key={rule.id} rule={rule} index={index} onDelete={deleteRule} />
    ))
  );
}

export default RuleList;
