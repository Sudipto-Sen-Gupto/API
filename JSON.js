
const student={
    name:"Gaurav Sen Gupto",
    Universitynam:"Rabindra Maitree University",
    subject:{
        101:"Statistical",
        102:"Networking",
        103:"Data Structure",
        104:"Web-development"
    },
    hobby:["Singing","Playing Guitar","Coding","Gardening"]
  ,id:"h190702040"

}
const json=JSON.stringify(student);
console.log(json);
console.log(JSON.parse(json));
