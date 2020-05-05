import { decorate, observable, action } from "mobx";

export  const Model = observable({
    //UserName: "",
    Plugs: null,
    Panels: null,
    Company: null
  });

  Model.SetUserName = function(newvalue) {
	this.UserName = newvalue;
}

Model.SetPlugs = function(newvalue) {
	this.Plugs = newvalue;
}

Model.SetPanels = function(newvalue) {
	this.Panels = newvalue;
}

Model.SetCompany = function(newvalue){
    this.Company = newvalue;
  };

Model.GetData = async function(){
  const data = require('./data.json');
  this.SetPlugs(data.Plugs);
  this.SetPanels(data.Panels);
  this.SetCompany(data.Company);
}