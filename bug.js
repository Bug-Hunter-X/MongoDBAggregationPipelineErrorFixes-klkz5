```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Incorrect: Using string instead of field expression
]);
```