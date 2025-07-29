/**
 * test.js - Simple test file for n8n workflow testing
 * 
 * This file can be used to test functions that might be used
 * in n8n custom code nodes.
 */

// Sample function to transform data (similar to what might be used in n8n Function node)
function transformData(items) {
  return items.map(item => {
    // Add a timestamp to each item
    return {
      ...item,
      timestamp: new Date().toISOString(),
      processed: true
    };
  });
}

// Sample function to filter data
function filterData(items, condition) {
  return items.filter(item => {
    try {
      // Evaluate the condition against each item
      return eval(`item.${condition}`);
    } catch (error) {
      console.error(`Error evaluating condition: ${error.message}`);
      return false;
    }
  });
}

// Example usage
const testData = [
  { id: 1, name: 'Test Item 1', value: 100 },
  { id: 2, name: 'Test Item 2', value: 200 },
  { id: 3, name: 'Test Item 3', value: 50 }
];

// Test transform
console.log('Transformed data:', transformData(testData));

// Test filter
console.log('Filtered data:', filterData(testData, 'value > 100'));

module.exports = {
  transformData,
  filterData
};
