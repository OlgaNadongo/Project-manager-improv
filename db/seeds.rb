User.create(name:"Kamala Khan", email:"kamykhan@yahoo.com", password:"kamala" )
User.create(name:"Gwen Stacy", email:"stacygwen@gmail.com", password:"gwen123")

Project.create(user_id:1,title:"Adding dependencies to Ruby app")
Project.create(user_id:1,title:"Game of clones development")
Project.create(user_id:2,title:"Monte Carlo simulations ")
Project.create(user_id:2,title:"Watermelon")

Teammate.create(name:"Arsene Wenger", email:"wenger@arsenal.com")
Teammate.create(name:"Graham Porter", email:"porter@chelsea.com")
Teammate.create(name:"Ferdie Omanyala", email:"ferdie@athletics.com")

TeammateProject.create(teammate_id: 2, project_id:1)
TeammateProject.create(teammate_id: 1, project_id:3)
TeammateProject.create(teammate_id: 3, project_id:1)
