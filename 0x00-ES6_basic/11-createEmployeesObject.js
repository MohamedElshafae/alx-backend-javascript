export default function createEmployeesObject(departmentName, employees) {
  const result = {};
  const employeesarr = [];
  for (const employee of employees) {
    employeesarr.push(employee);
  }

  result[departmentName] = employeesarr;
  return result;
}
