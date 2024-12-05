# MongoDB Aggregation Pipeline Error: Incorrect Field Expressions

This repository demonstrates a common error in MongoDB aggregation pipelines: using string literals instead of field expressions within aggregation pipeline stages.

## Problem
The `$group` stage in the provided example incorrectly uses string literals instead of referencing fields using the `$` operator.

## Solution
The corrected `$group` stage uses the correct field name expressions. Ensure all field references within the aggregation stages are expressed correctly.  Incorrect field expressions can result in errors or unexpected results. This can especially be problematic if your field names contain special characters or reserved words.