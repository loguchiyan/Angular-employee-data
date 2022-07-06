import { Injectable} from '@angular/core';

@Injectable()

export class employeeservice {
constructor(){}
title = 'EmployeeTable';
headers = ["ID", "Name", "Age", "Gender", "Designation", "Address"];
rows = [
{
"ID" : "01",
"Name" : "Logu",
"Age" : "22",
"Gender" : "Male",
"Designation" : "Employee",
"Address" : "Namakkal"
},
{
"ID" : "02",
"Name" : "Sankar",
"Age" : "33",
"Gender" : "Male",
"Designation" : "Manager",
"Address" : "Salem"
},

{
"ID" : "03",
"Name" : "Gokul",
"Age" : "21",
"Gender" : "Male",
"Designation" : "Student",
"Address" : "Chennai"
},
{
"ID" : "04",
"Name" : "Dhinesh",
"Age" : "30",
"Gender" : "Male",
"Designation" : "Manager",
"Address" : "Karur"
},
{
"ID" : "05",
"Name" : "Krish",
"Age" : "40",
"Gender" : "Male",
"Designation" : "Teacher",
"Address" : "Vellore"
},
{
"ID" : "06",
"Name" : "Mathan",
"Age" : "34",
"Gender" : "Male",
"Designation" : "Developer",
"Address" : "Thuraiyur"
},
{
"ID" : "07",
"Name" : "Karthi",
"Age" : "35",
"Gender" : "Male",
"Designation" : "Business",
"Address" : "Sankari"
},
{
"ID" : "08",
"Name" : "Yogesh",
"Age" : "24",
"Gender" : "Male",
"Designation" : "Human resource",
"Address" : "Mallur"
},
{
"ID" : "09",
"Name" : "Ajith",
"Age" : "27",
"Gender" : "Male",
"Designation" : "Driver",
"Address" : "Erode"
},
{
"ID" : "10",
"Name" : "Bharathi",
"Age" : "31",
"Gender" : "Male",
"Designation" : "Doctor",
"Address" : "Mumbai"
},
]
}