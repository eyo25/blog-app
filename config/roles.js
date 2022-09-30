const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
const roles = (()=> {
ac.grant("Author")
 .readAny("post")
 .createOwn('post')
 .updateOen('post')            
 .deleteOwn('post')
 
ac.grant("Admin")
 .extend("Author")
 .createAny("Author")
 .deleteAny("Author")
 .createAny("Catagory")
 .updateAny("Catagory")
 .deleteAny("Catagory")

 
return ac;
})();