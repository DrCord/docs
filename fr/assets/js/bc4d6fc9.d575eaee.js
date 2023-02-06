"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[53787],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>_});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),c=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(d.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,_=u["".concat(d,".").concat(f)]||u[f]||p[f]||o;return n?t.createElement(_,i(i({ref:a},s),{},{components:n})):t.createElement(_,i({ref:a},s))}));function _(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53180:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const o={title:"Using merge and each",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge","relationship"]},i=void 0,l={unversionedId:"library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",id:"library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",title:"Using merge and each",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",permalink:"/fr/adaptors/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",draft:!1,tags:[],version:"current",frontMatter:{title:"Using merge and each",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge","relationship"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Pre-processing data",permalink:"/fr/adaptors/library/jobs/auto/alter-state-before-operations"},next:{title:"\ud83d\udcdc Using promises",permalink:"/fr/adaptors/library/jobs/auto/complex-state-control"}},d={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],s={toc:c},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Using merge and each"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relationship")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  join('$.data.data[*]', '$.data.formId', 'formId'),\n  create(\n    'ODK_Submission__c',\n    fields(\n      //bridgetest sandbox record type, comment out when not in use\n      field('RecordTypeId', '012J00000005hlb'),\n      //prduction record type, comment out when not in use\n      //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n      // or\n      //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n      field('Record_Type_Name__c', dataValue('record_type_id')),\n      field('ODK_Form_Name__c', dataValue('formId')),\n      field('Site_School_ID_Number__c', dataValue('site')),\n      field('BT_Staff_ID__c', dataValue('recorded_by')),\n      field('Date__c', dataValue('today')),\n      field('Head_of_Household__c', dataValue('head_of_household')),\n      field(\n        'Head_of_Household_Gender__c',\n        dataValue('head_of_household_gender')\n      ),\n      field('Head_of_Household_age__c', dataValue('head_of_household_age')),\n      field('Light_Source__c', dataValue('light_source')),\n      field('communication__c', dataValue('communication')),\n      field('transport__c', dataValue('transport')),\n      field(\n        'number_of_children_in_household__c',\n        dataValue('number_of_children')\n      ),\n      field('school_visits__c', dataValue('school_visits')),\n      field('school_visit_reason__c', dataValue('school_visit_reason')),\n      field('Village__c', dataValue('village')),\n      field('ODK_Key__c', dataValue('*meta-instance-id*'))\n    )\n  )\n),\n  each(\n    merge(\n      dataPath('individual_na[*]'),\n      fields(\n        field('metaId', dataValue('*meta-instance-id*')),\n        field('parentId', lastReferenceValue('id')),\n        field('village', dataValue('$data.village'))\n      )\n    ),\n    create(\n      'ODK_Submission__c',\n      fields(\n        //bridgetest sandbox record type, comment out when not in use\n        field('RecordTypeId', '012J00000005hla'),\n        //prduction record type, comment out when not in use\n        //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n        // or\n        //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n        field('Related_ODK_Submission__c', dataValue('parentId')),\n        field('family_name__c', dataValue('given_name')),\n        field('school_coded__c', dataValue('school_coded')),\n        field('school_type__c', dataValue('school_type')),\n        field('gender__c', dataValue('gender')),\n        field('Pays_School_Fees__c', dataValue('school_fees_yes_no')),\n        field('in_primary_school__c', dataValue('in_primary_school')),\n        field('School_Fee_Amount__c', dataValue('school_fees')),\n        field('Age__c', dataValue('age')),\n        field('surname__c', dataValue('surname')),\n        field('out_of_school_reason__c', dataValue('out_of_school_reason')),\n        field('class_level__c', dataValue('class_level')),\n        field(\n          'other_out_of_school_reason__c',\n          dataValue('other_out_of_school_reason')\n        ),\n        field('Village__c', dataValue('village')),\n        // This is a concatenation, adding the unique child ID.\n        field('ODK_Key__c', function (state) {\n          return dataValue('metaId')(state).concat('(', index()(state), ')');\n        })\n      )\n    )\n  );\n\n")))}p.isMDXComponent=!0}}]);