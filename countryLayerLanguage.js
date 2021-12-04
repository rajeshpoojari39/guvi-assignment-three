//Countries based on language Hindi

var request = new XMLHttpRequest();
request.open(
  "GET",
  "http://api.countrylayer.com/v2/lang/hin?access_key=ce650dfcfdf04e27da8d94e3949a11e4"
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
   console.log("Countries based on language Hindi");
   console.log(data);
};


