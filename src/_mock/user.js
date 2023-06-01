import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// const users = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.name.fullName(),
//   company: faker.company.name(),
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));




const FederalUsers = [

  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Muhammadu Buhari (2023-Feb)",
    office: "President",
    salary: 31.68
    // isVerified: faker.datatype.boolean(),
    // status: sample(['active', 'banned']),
    // role: sample([
    //   'Leader',
    //   'Hr Manager',
    //   'UI Designer',
    //   'UX Designer',
    //   'UI/UX Designer',
    //   'Project Manager',
    //   'Backend Developer',
    //   'Full Stack Designer',
    //   'Front End Developer',
    //   'Full Stack Developer',
    // ]),
  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Yemi Oshibajo (2023-March)",
    office: "Vice President",
    salary: 30.05


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Sen. Ahmed  Ibrahim Lawan",
    office: "Senate President",
    salary: 8.69


  },



  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Ovie Ono-Agege",
    office: "Deputy Senate President",
    salary: 8.08


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Senate Member",
    salary: 18.00


  },



  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Olufemi Hakeem Gbajabiamila",
    office: "Speaker of house of representative",
    salary: 4.95


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Ahmed Idris Wase",
    office: "Deputy speaker of the house of representative",
    salary: 4.02


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "House of rep member",
    salary: 5.00


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Babagana Mohammed Monguno",
    office: "National security advisor",
    salary: 4.00


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Ibrahim Tanko Muhammad",
    office: "General of Nigeria (Minister of justice and attorney)",
    salary: 3.50


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Boss Mustapha",
    office: "Secretary to the government of the federation",
    salary: 6.00


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Folashade Yemi-Esan",
    office: "Head of civil service",
    salary: 5.00


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Dr. Mohammad Mahmood Abubakar",
    office: "Federal Minister",
    salary: 32.00


  },





]



const StateUsers = [

  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Speakers of State house of assembly",
    salary: 2.05
    // isVerified: faker.datatype.boolean(),
    // status: sample(['active', 'banned']),
    // role: sample([
    //   'Leader',
    //   'Hr Manager',
    //   'UI Designer',
    //   'UX Designer',
    //   'UI/UX Designer',
    //   'Project Manager',
    //   'Backend Developer',
    //   'Full Stack Designer',
    //   'Front End Developer',
    //   'Full Stack Developer',
    // ]),
  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Deputy Speakers of State house of assembly",
    salary: 1.81


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Members of State house of assembly",
    salary: 2.48


  },





  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "State commissioners",
    salary: 10.83


  },



  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Local government chairman",
    salary: 5.99


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Deputy Local government chairman",
    salary: 5.63


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "-",
    office: "Councilors",
    salary: 5.34


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Okezie Ikpeazu",
    office: "State governor",
    salary: 11.54


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "Mister man",
    office: "Deputy state governor",
    salary: 8.50


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "John Doe",
    office: "Special adviser to the governor",
    salary: 1.50


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "John Doe",
    office: "Secretary to the State Government",
    salary: 5.50


  },




  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "John Doe",
    office: "Head of Service",
    salary: 6.50


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "John Doe",
    office: "Chief of Staff",
    salary: 6.00


  },


  {

    avatarUrl: `/akal/assets/images/avatars/avatar_2.jpg`,
    name: "John Doe",
    office: "Deputy Chief of Staff",
    salary: 4.10


  },





]

const TotalFederalSalary = 6970000000
const highestFederalSalary = 32000000
const averageFederalSalary = 12380000
const minimumFederalSalary = 3500000



const totalStateSalary = 77000000


export { FederalUsers, StateUsers, TotalFederalSalary, minimumFederalSalary, averageFederalSalary, highestFederalSalary, totalStateSalary };
