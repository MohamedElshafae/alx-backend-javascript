export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    // eslint-disable-next-line no-unused-vars
    getNumberOfDepartments(employeesList) {
      return Object.keys(this.allEmployees).length;
    },
  };
  return report;
}
