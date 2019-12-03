
let e_name,e_number,e_dept,e_hours,e_code,button,fixed_salry,income_tax,health_charge,taxfree_allowance,final_salary;
button=document.getElementById("btn");
button.addEventListener("click",getinfo);
function payroll()
{
    console.log("The payroll is here...!!!!");
    console.log("Employe Name",e_name);
    console.log("Employe Number",e_number);
    console.log("Employe Department",e_dept);
    console.log("Employe Hours",e_hours);
    console.log("Employe code",e_code);
    console.log("Employe Fixed salary",fixed_salry);
    console.log("Employe Deduction",health_charge);
    console.log("Employe Salary",taxfree_allowance);
}
function getinfo()
{
  
  e_name = document.getElementById("Ename").value;
  e_number = document.getElementById("Enumber").value;
  e_dept = document.getElementById("Edept").value;
  e_hours = parseInt(document.getElementById("Ehours").value);
  e_code = document.getElementById("Ecode").value;
    if(e_code=="F")
    {
        
         let q_code=window.prompt("Enter Your Qualification code here");
         if(q_code=="M"){
             fixed_salry=(e_hours*175)+1500;
             deduction();
         }
         else if(q_code=="B"){
            fixed_salry=(e_hours*100)+600;
            deduction();
        }
    }
    if(e_code=="R")
    {
        fixed_salry=window.prompt("Enter Your fixed salary here");

        if(e_hours==160){
            fixed_salry=fixed_salry;
            deduction();
        }
        else if(e_hours<160){
            let hour_work=fixed_salry/160;
            fixed_salry=hour_work;
            deduction();
        }
        else{
            let overtime_hour=e_hours-160;
            hour_work=fixed_salry/160;
            fixed_salry= fixed_salry+(overtime_hour*(hour_work*2));
            deduction();
        }
   }
    function deduction()
    {
          if(fixed_salry>3000 && fixed_salry>2500) {
            income_tax=fixed_salry*25/100;
            health_charge=income_tax-33;
            taxfree_allowance=health_charge+2500;

          } 
          if(fixed_salry<3000 && fixed_salry>2500) {
            income_tax=fixed_salry*25/100;
            health_charge=income_tax-19.20;
            taxfree_allowance=health_charge+2500;

          }   
          if(fixed_salry<2500) {
            health_charge=fixed_salry-19.20;
            taxfree_allowance=health_charge+2500;

          }  
    }
        payroll();
}
 