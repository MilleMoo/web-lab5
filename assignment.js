const employees = [
  {
    id: 1,
    name: "ก้องภพ",
    department: "IT",
    position: "Developer",
    salary: 65000,
    startDate: "2021-04-15",
    isActive: true,
  },
  {
    id: 2,
    name: "วิมล",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 92000,
    startDate: "2019-08-01",
    isActive: true,
  },
  {
    id: 3,
    name: "สมศักดิ์",
    department: "IT",
    position: "Senior Developer",
    salary: 88000,
    startDate: "2018-02-20",
    isActive: false,
  },
  {
    id: 4,
    name: "จินตนา",
    department: "Sales",
    position: "Sales Rep",
    salary: 58000,
    startDate: "2022-11-10",
    isActive: true,
  },
  {
    id: 5,
    name: "อมร",
    department: "IT",
    position: "Developer",
    salary: 68000,
    startDate: "2023-07-01",
    isActive: true,
  },
  {
    id: 6,
    name: "สุดา",
    department: "Sales",
    position: "Sales Manager",
    salary: 105000,
    startDate: "2017-05-30",
    isActive: true,
  },
];

const inActive = employees.filter((item) => item.isActive === true);
console.log("ข้อ1");
console.log(inActive);
const nameEmployees = employees.map((item) => item.name);
console.log("ข้อ2");
console.log(nameEmployees);
const findEmployees = employees.find((item) => item.id === 4)
console.log("ข้อ3");
console.log(findEmployees)
const findDepartment = employees.some((item) => item.department === "Marketing")
console.log("ข้อ4");
console.log(findDepartment)
const findEmployeesIt = employees.filter((item) => item.department === "IT")
console.log("ข้อ5");
console.log(findEmployeesIt)
let allCost = 0;
for(const item of employees){
    allCost += item.salary
}
console.log("ข้อ6");
console.log("เงินเดือนที่ต้องจ่าย "+ allCost +" บาท");
const sortItem = employees.sort((a,b) => b.salary - a.salary);
console.log("ข้อ7");
console.log(sortItem[0]);
const inStartWork = employees.filter((item) => item.startDate < "2020" && item.isActive === true).sort((a,b) => b.name - a.name);
console.log("ข้อ8");
console.log(inStartWork);
let overAll = 0;
const overAllIT = employees.filter((item) => item.department === "IT" && item.isActive === true);
for(const item of overAllIT){
    overAll += item.salary;
}
overAll /= overAllIT.length;
console.log("ข้อ9");
console.log("เงินเดือนเฉลี่ยทั้งหมดของ IT " +overAll+" บาท")

