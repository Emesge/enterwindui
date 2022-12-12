// ternary operator, condition ? true : false
export const conditionalCheck = (condition, expressionTrue, expressionFalse) =>
  condition ? expressionTrue : expressionFalse;

// ternary operator for function, condition ? funcTrue() : funcFalse()
export const conditionalCheckFunction = (condition, functionTrue, functionFalse) =>
  condition ? functionTrue() : functionFalse();

// short circuit operator to execute function, condition && func()
export const shortCircuitFunction = (condition, executeFunction) => condition && executeFunction();

// comparison operator, expression1 &&/|| expression2
export const comparisonCheck = (firstCondition, secondCondition, operator = '||') => {
  if (operator === '&&') {
    return firstCondition && secondCondition;
  }
  return firstCondition || secondCondition;
};
