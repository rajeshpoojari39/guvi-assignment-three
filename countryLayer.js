var request = new XMLHttpRequest();
request.open(
  "GET",
  "http://api.countrylayer.com/v2/all?access_key=ce650dfcfdf04e27da8d94e3949a11e4"
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Country Name- ${data[i].name}, Capital- ${data[i].capital}, Region- ${data[i].region} `
    );
  }
};
