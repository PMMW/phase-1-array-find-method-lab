// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ]
  function superbowlWin(element) {
    for (const item of element) {
      if (item.result === "W"){
        return (item.year)
      }
    }
  
  }
  console.log(superbowlWin(record));