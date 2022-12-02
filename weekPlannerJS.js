window.addEventListener("load", (event) => {
    console.log("Read Json file and store in browser storage or globally?");
    $.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    });
  });
	// function myFunction() 
  //   $("#demo").innerHTML = "hello"
  // 	// document.getElementById("demo").innerHTML = "Hello World";
	// }
  $("#demo").click(function(){
    console.log("hello")
  });