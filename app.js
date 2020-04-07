var cmodule=angular.module("app",[]);
cmodule.controller("moreCtrl",moreCtrl);

function moreCtrl()
{
this.editmode=false;
this.listtodo=["Learn angular",
"dont't learn java","python is easy"];

this.newtodo=function(){
    this.listtodo.push(this.addnewtodo);
    this.addnewtodo="";     
    }
this.EditMode=function(){
 this.editmode=!this.editmode;
    }

this.onDelete=function(index){
    this.listtodo.splice(index,1);
    }   
}
