let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
activities.push(["study", 2]);
activities.splice(1, 0, ["programming", 1]);
console.table(activities);
activities.forEach(activity => {
    let percentage = ((activity[1]/24)*100).toFixed();
    activity[2]= percentage+'%';
});
console.table(activities);

activities.forEach(activity =>{
    activity.forEach(data =>{
        console.log(data);
    });
});