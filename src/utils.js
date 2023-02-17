export const dateToShort = (myDate) => {
  //console.log("mydate = ", myDate);
  var convertedStartDate = new Date(myDate.toString().substr(0, 10));
  //console.log("mydate substr= ", convertedStartDate);
  //mm/dd/yyyy
  var mmddformat = convertedStartDate.toLocaleDateString();
  //convert to dd/mm/yyyy
  var datearray = mmddformat.split("/");
  var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
  return newdate;
};
