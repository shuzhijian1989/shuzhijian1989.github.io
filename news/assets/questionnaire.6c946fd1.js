import{s as e,n as t}from"./index.7061e8ea.js";function n(n){return e({url:t.questionnaireList,method:"get",data:n})}function o(n){return e({url:t.questionnaireEmployee,method:"post",data:n})}function a(n){return e({url:t.questionnaireEmployeeDetail,method:"post",data:n})}function r(n){return e({url:t.questionnaireElternPage,method:"post",data:n})}function s(n){return e({url:t.questionnaireElternDetailPage,method:"post",data:n})}function u(n){return e({url:`${t.questionnaireCreateemployeeOreltern}?type=${n}`,method:"get",data:n})}function i(n){return e({url:t.questionnaireCreateschool,method:"post",data:n})}function l(n){return e({url:t.questionnaireSchooldetails,method:"get",data:n})}function d(n,o,a){e({url:`${t.questExportEmployeeOrEltern}?type=${n}`,method:"get",responseType:"arraybuffer",params:o}).then((e=>{const t=window.URL.createObjectURL(new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),n=document.createElement("a");n.style.display="none",n.href=t,n.setAttribute("download",a?`${a}.xlsx`:"excel.xlsx"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}))}export{d as a,a as b,o as c,s as d,r as e,i as f,n as g,l as h,u as q};
