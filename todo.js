let username=prompt("Enter your name")
alert("Dear "+username+", Welcome!")


let actions = {
  action1 : { name:"Study",completed:true,id:1},
  action2 : { name:"Clean my room",completed:true,id:2},
  action3 : { name:"Apply face mask",completed:true,id:3},
  action4 : { name:"Volunteer",completed:true,id:4},
  action5 : { name:"Meet my friends",completed:true,id:5},
  action6 : { name:"Go to mosque",completed:false,id:6},
  action7 : { name:"Eat healthy",completed:false,id:7},
  action8 : { name:"Wash my hair",completed:false,id:8},
  action9 : { name:"Daily azkar",completed:false,id:9}

};

function check(action) {
  let message=action.completed
  ?"action number"+ action.id+" (" +action.name+ ") is completed!"
  :"action number"+ action.id+"(" +action.name+") is not completed!";

  console.log(message);
}  
check(actions.action1);
check(actions.action2);
check(actions.action3);
check(actions.action4);
check(actions.action5);
check(actions.action6);
check(actions.action7);
check(actions.action8);
check(actions.action9);





