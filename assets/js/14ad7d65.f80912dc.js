"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[15045],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>_});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,_=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(_,o(o({ref:a},c),{},{components:t})):n.createElement(_,o({ref:a},c))}));function _(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66894:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const i={title:"Register Participant - V2 Skillz",sidebar_label:"Register Participant - V2 Skillz",id:"Register-Participant-V2-Skillz-2021-06-02",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},o=void 0,l={unversionedId:"library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02",id:"library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02",title:"Register Participant - V2 Skillz",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02",permalink:"/adaptors/library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02",draft:!1,tags:[],version:"current",frontMatter:{title:"Register Participant - V2 Skillz",sidebar_label:"Register Participant - V2 Skillz",id:"Register-Participant-V2-Skillz-2021-06-02",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","lastReferenceValue","map","merge","query","relationship","upsert","Array"]},sidebar:"adaptors",previous:{title:"Upsert Service Referral Followup",permalink:"/adaptors/library/jobs/auto/Upsert-Service-Referral-Followup-2021-04-30"},next:{title:"Upsert User in Salesforce",permalink:"/adaptors/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Register Participant - V2 Skillz"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created almost 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Updated almost 3 years ago"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"0")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"merge"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"query"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Array")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"query(`SELECT Id, Name, CommCare_Ext_ID__c FROM Event__c WHERE CommCare_Case_ID__c = '${state.data.form.case['@case_id']}'`);\n\nalterState(state => {\n  // Note: lastReferenceValue selects the first item in the references array.\n  state.data.eventName = lastReferenceValue('records[0].CommCare_Ext_ID__c')(state);\n\n  function objectToArray(object) {\n    return !Array.isArray(object) ? [object] : object;\n  }\n\n  // if (state.data.form.question1) {\n  //   console.log('Ensuring that \"question1\" is an array.');\n  //   state.data.form.question1 = objectToArray(state.data.form.question1);\n  // } else {\n  //   console.log('Shifting \"new_participants\" to \"question1\" array.');\n  //   state.data.form.question1 = objectToArray(state.data.form.new_participants);\n  //   console.log('Creating a \"case\" object inside each item in that array.');\n  //   state.data.form.question1 = state.data.form.question1.map(item => ({\n  //     ...item,\n  //     case: item.create_skillz_plus_participant.case,\n  //   }));\n  // }\n\n  console.log('Done with initial data manipulation.');\n\n  return state;\n});\n\n// beta.each(\n//   merge(\n//     dataPath('form.question1[*]'),\n//     fields(\n//       field('intervention_notes_to_save', dataValue('form.intervention_notes_to_save')))\n//   ),\n\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Notes__c', dataValue('form.intervention_notes_to_save')),\n      field('First_Name__c', dataValue('form.new_participants.participant_first_name')),\n      field('Surname__c', dataValue('form.new_participants.participant_surname')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('Participant_Identification_Number_PID__c', state => state.data.form.new_participants.create_skillz_plus_participant.case['@case_id']),\n      field('Sex__c', dataValue('gender')),\n      field('Mobile_Number_1__c', dataValue('form.new_participants.mobile_number')), //QUESTION: In CommCare, phone doesn't look like it's saving?\n      field('School_name_person__c', dataValue('form.new_participants.school_name')),\n      field('Date_of_Birth__c', dataValue('date_of_birth')),\n      field('School_name_person__c', dataValue('form.new_participants.school_name')),\n      field('Physical_Address__c', dataValue('form.new_participants.participants_home_address'))\n      //field('Age__c', dataValue('form.question1.age_in_years')), //This is a SF formula field, cannot map\n    )\n  )\n//);\n\n// each(\n//   merge(dataPath('form.question1[*]'), fields(\n//     field('intervention_name', dataValue('form.intervention_name')),\n//     field('eventName', dataValue('eventName')))),\n  upsert(\n    'Attendance__c',\n    'CommCare_Ext_ID__c',\n    fields(\n      field('CommCare_Ext_ID__c', state => {\n        var eventid = `${state.data.eventName}` || dataValue('form.intervention_name')(state);\n        var personid = state.data.form.new_participants.create_skillz_plus_participant.case['case_id'];//state.data.case['@case_id'];\n        return personid + '-' + eventid;\n      }),\n      relationship(\n        //Attendance looks up to Persn via the case_id\n        'Person_Attendance__r',\n        'Participant_Identification_Number_PID__c',\n        state => state.data.case['@case_id']\n      ),\n      relationship(\n        //Attendance looks up to Event via the intervention_name\n        'Event__r',\n        'CommCare_Case_ID__c',\n        state.data.form.new_participants.create_skillz_plus_participant.case.index.parent['#text']\n      ),\n      field('Date_of_Birth__c', dataValue('form.new_participants.date_of_birth'))\n    )\n  )\n//);\n")))}u.isMDXComponent=!0}}]);