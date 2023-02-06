"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[85634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},_=Object.keys(e);for(n=0;n<_.length;n++)a=_[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)a=_[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,_=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(a),u=r,m=l["".concat(s,".").concat(u)]||l[u]||d[u]||_;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var _=a.length,o=new Array(_);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<_;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>_,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const _={title:"Upsert Coach Support Visit (CSV)",sidebar_label:"Upsert Coach Support Visit (CSV)",id:"Upsert-Coach-Support-Visit-CSV-2021-04-28",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},o=void 0,i={unversionedId:"library/jobs/auto/Upsert-Coach-Support-Visit-CSV-2021-04-28",id:"library/jobs/auto/Upsert-Coach-Support-Visit-CSV-2021-04-28",title:"Upsert Coach Support Visit (CSV)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-Coach-Support-Visit-CSV-2021-04-28.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-Coach-Support-Visit-CSV-2021-04-28",permalink:"/fr/adaptors/library/jobs/auto/Upsert-Coach-Support-Visit-CSV-2021-04-28",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Coach Support Visit (CSV)",sidebar_label:"Upsert Coach Support Visit (CSV)",id:"Upsert-Coach-Support-Visit-CSV-2021-04-28",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"adaptors",previous:{title:"Upsert Aggregate Service Referrals",permalink:"/fr/adaptors/library/jobs/auto/Upsert-Aggregate-Service-Referrals-2021-04-30"},next:{title:"Upsert Confirm Services Received",permalink:"/fr/adaptors/library/jobs/auto/Upsert-Confirm-Services-Received-2021-06-14"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Upsert Coach Support Visit (CSV)"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,r.kt)("li",{parentName:"ul"},"Created almost 2 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated 10 months ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"18")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//openfn.org source\nalterState(state => {\n  function clean(str) {\n    console.log('str', str);\n\n    if (!str) return '';\n\n    return str\n      .split('_')\n      .map(word => {\n        let new_word = word.toString().toLowerCase();\n        return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n      })\n      .join(' ');\n  }\n \n  if (state.data.form['step_3_-_the_big_5']  !== undefined ){ \n    state.data.form['step_3_-_the_big_5'].faciliation = clean(state.data.form['step_3_-_the_big_5'].faciliation);\n  }\n  else{\n  state.data.form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation = \n  clean(state.data.form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation);\n  }\n  \n  function transform(value) {\n    if (!value) return;\n    switch (value.toString().trim()) {\n      case 'copy-1-of-excellent':\n        return 'Excellent'; \n      case 'needs_improvement':\n        return 'Needs Improvement';      \n      case 'meets_expectations':\n        return 'Meets Expectations'; \n      case 'excellent':\n        return 'Excellent';        \n      case 'unsatisfactory':\n        return 'Unsatisfactory';\n      case 'exceeds_expectations':\n        return 'Exceeds Expectations';        \n      default:\n        return value;\n    }\n  }\n\n  state.data.form['step_3_-_the_big_5'].builds_personal_connections = \n  transform(state.data.form['step_3_-_the_big_5'].builds_personal_connections)\n\n  state.data.form['step_3_-_the_big_5'].cool_down = \n  transform(state.data.form['step_3_-_the_big_5'].cool_down)\n  \n  state.data.form['step_3_-_the_big_5'].creates_safe_space = \n  transform(state.data.form['step_3_-_the_big_5'].creates_safe_space)\n  \n  state.data.form['step_3_-_the_big_5'].faciliation = \n  transform(state.data.form['step_3_-_the_big_5'].faciliation)\n  \n  state.data.form['step_3_-_the_big_5'].gives_praise = \n  transform(state.data.form['step_3_-_the_big_5'].gives_praise)\n  \n  state.data.form['step_3_-_the_big_5'].praise = \n  transform(state.data.form['step_3_-_the_big_5'].praise)\n\n  state.data.form['step_3_-_the_big_5'].preparation = \n  transform(state.data.form['step_3_-_the_big_5'].preparation)\n  \n  state.data.form['step_3_-_the_big_5'].shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri = \n  transform(state.data.form['step_3_-_the_big_5'].shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri)\n  \n  state.data.form['step_3_-_the_big_5'].sparks_vital_conversations = \n  transform(state.data.form['step_3_-_the_big_5'].sparks_vital_conversations)\n  \n  state.data.form['step_3_-_the_big_5'].time_management = \n  transform(state.data.form['step_3_-_the_big_5'].time_management)\n  \n   state.data.form['step_3_-_the_big_5'].warm_up = \n  transform(state.data.form['step_3_-_the_big_5'].warm_up)\n  \n\n  return state;\n});\n\nupsert(\n  'Coach_Support_Visit__c',\n  'CommCare_Ext_ID__c',\n  fields(\n    field('CommCare_Ext_ID__c', dataValue('id')),\n    relationship('Coach_Person__r', 'CommCare_Ext_ID__c', state => {\n      return dataValue('form.step_1_basic_information.select_coach')(state) || \n      dataValue('form.step_1_csv_information.select_coach')(state); \n    }),\n    relationship('Venue__r', 'CommCare_Ext_ID__c', state => {\n      return dataValue('form.hidden_properties.venue')(state) || \n      dataValue('form.step_1_csv_information.venue')(state); \n    }),\n    relationship('Event__r', 'CommCare_Ext_ID__c', state => {\n      return dataValue('form.hidden_properties.intervention')(state) || \n      dataValue('form.step_1_csv_information.intervention')(state); \n    }),\n    relationship('Curriculum_Aggregate__r', 'CommCare_Ext_ID__c', state => {\n      return dataValue('form.hidden_properties.curriculum')(state) || \n      dataValue('form.step_1_csv_information.curriculum')(state); \n    }),    \n     relationship('Site_Lookup__r', 'CommCare_Ext_ID__c', state => {\n      return dataValue('form.hidden_properties.site')(state) || \n      dataValue('form.step_1_csv_information.site')(state); \n    }), \n    field('Date__c', dataValue('form.step_2_practice_information.date_of_csv')),\n    //== TODO: FIx repeated mappings to only reference destination field 1 time ===//\n    field(\n      'Accurate_Information__c', state => {\n      return dataValue('form.step_3_-_the_big_5.shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri')(state) || \n      dataValue(\n          'form.step_3_the_big_five.question1.shares_accurate_information_about_hivaids_sexual_reproductive_health_and_ri'\n        )(state); \n    }),\n    field('Creates_safe_space__c', state => {\n      return dataValue('form.step_3_-_the_big_5.creates_safe_space')(state) || \n      dataValue('form.step_3_the_big_five.question1.creates_safe_space')(state); \n      \n    }),\n    field('Builds_personal_connections__c', state => {\n      return dataValue('form.step_3_-_the_big_5.builds_personal_connections')(state) || \n      dataValue('form.step_3_the_big_five.question1.builds_personal_connections')(state); \n    }),\n    field('Gives_praise__c', state => {\n      return dataValue('form.step_3_-_the_big_5.gives_praise')(state) ||\n      dataValue('form.step_3_the_big_five.question1.gives_powerful_praise')(state); \n    }),\n    field('Sparks_vital_conversations__c', state => {\n      return dataValue('form.step_3_-_the_big_5.sparks_vital_conversations')(state) || \n      dataValue('form.step_3_the_big_five.question1.sparks_vital_conversations')(state); \n      }),\n    field('X2_Warm_Up__c', state => {\n      return dataValue('form.step_3_-_the_big_5.warm_up')(state) || \n      dataValue(\n          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.warm_up'\n        )(state); \n      }),\n    field('X3_Activity__c', state => {\n      return dataValue('form.step_3_-_the_big_5.activity')(state) || dataValue(\n          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.activity'\n        )(state); \n      }),\n    field('X4_Cool_Down__c', state => {\n      return dataValue('form.step_3_-_the_big_5.cool_down')(state) || dataValue(\n          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.cool_down'\n        )(state); \n      }),\n    field('X5_Facilitation__c', state => {\n      return dataValue('form.step_3_-_the_big_5.faciliation')(state) || \n      dataValue(\n          'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.faciliation'\n        )(state); \n      }),\n    field(\n      'X6_Time_Management__c',\n      dataValue('form.step_3_-_the_big_5.time_management')\n    ),\n    field(\n      'X1_Preparation__c',\n      dataValue('form.step_3_-_the_big_5.preparation')\n    ),\n    field('Introduces_micromove__c', state => {\n      return //dataValue('form.step_3_-_the_big_5.faciliation')(state) || \n      dataValue(\n         'form.step_4_comments.for_each_practice_component_describe_what_the_coach_did_well_and_how_the_co.micromove'\n      )(state); \n    }),\n    field(\n      'Notes__c',\n      dataValue(\n        'form.step_3_-_the_big_5.additional_notes.include_your_obsevations_related_to_preparation_punctuality_process'\n      )\n    )\n  )\n);\n\n")))}d.isMDXComponent=!0}}]);