"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2662],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=_(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(o,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var _={};for(var o in t)hasOwnProperty.call(t,o)&&(_[o]=t[o]);_.originalType=e,_.mdxType="string"==typeof e?e:r,s[1]=_;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return _},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],_={title:"Upsert Person",sidebar_label:"Upsert Person",id:"Upsert-Person-2022-04-21",keywords:["library","job","expression","salesforce","dataValue","field","fields","join","map","query","relationship","upsertIf"]},o=void 0,l={unversionedId:"jobs/auto/Upsert-Person-2022-04-21",id:"jobs/auto/Upsert-Person-2022-04-21",title:"Upsert Person",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Upsert-Person-2022-04-21.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Upsert-Person-2022-04-21",permalink:"/library/jobs/auto/Upsert-Person-2022-04-21",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Person",sidebar_label:"Upsert Person",id:"Upsert-Person-2022-04-21",keywords:["library","job","expression","salesforce","dataValue","field","fields","join","map","query","relationship","upsertIf"]},sidebar:"library",previous:{title:"\u2728 Upsert Intervention Notes",permalink:"/library/jobs/auto/Upsert-Intervention-Notes-2021-04-28"},next:{title:"Upsert Person & Person Visit",permalink:"/library/jobs/auto/Upsert-Person-Person-Visit-2022-06-28"}},d={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Upsert Person"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.9.0"},(0,i.kt)("inlineCode",{parentName:"a"},"v2.9.0"))),(0,i.kt)("li",{parentName:"ul"},"Created 2 months ago"),(0,i.kt)("li",{parentName:"ul"},"Updated about 5 hours ago"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"67")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upsertIf")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// create constants and functions\nfn(state => {\n  state.cleanChoice = function (state, choice) {\n    if (choice) {\n      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');\n    } else {\n      return '';\n    }\n  };\n\n  state.handleMultiSelect = function (state, multiField) {\n    return multiField\n      ? multiField\n          .replace(/ /gi, ';')\n          .toLowerCase()\n          .split(';')\n          .map(value => {\n            return (\n              value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ')\n            );\n          })\n          .join(';')\n      : '';\n  };\n\n  const pregDangerMap = {\n    Vaginal_Bleeding: 'Vaginal Bleeding',\n    Water_Breaks: 'Water Breaks before Time of Delivery',\n    Prolonged_Labour: 'Prolonged Labour over 12 Hours',\n    Convulsions: 'Convulsions or Fits',\n    Abdominal_Pain: 'Severe Abdominal Pain before Delivery',\n    High_Fever: 'High Fever',\n    Low_Baby_Movement: 'Feeling the Baby move less or not at all',\n    Swelling: 'Swelling of Face and Hands',\n    Severe_Headache: 'Severe or Continuous Headache for more than 12 hours',\n    Severe_Vomiting: 'Severe or Continuous Vomiting',\n    none: 'None',\n  };\n\n  const counselMap = {\n    anc_visits: 'ANC Visits',\n    early_initiation_of_anc_less_than_3_months:\n      'Early initiation of ANC (less than 3 months)',\n    completing_recomended_anc_visits: 'Completing recomended ANC visits',\n    danger_signs: 'Danger signs',\n    skilled_birth: 'Skilled birth',\n    immunization: 'Immunization',\n    individual_birth_plan: 'Individual Birth Plan',\n    emergency_preparedness: 'Emergency preparedness',\n    childcare_and_affection: 'Childcare and affection',\n    nutrition_counseling: 'Nutrition counseling',\n    growth_monitoring: 'Growth monitoring',\n    exclusive_breastfeeding: 'Exclusive breastfeeding',\n    complementary_feeding: 'Complementary feeding',\n    sleeping_under_llitn: 'Sleeping under LLITN',\n    knowing_hiv_status: 'Knowing HIV status',\n    indoor_pollution: 'Indoor pollution',\n    personal_hygiene: 'Personal Hygiene',\n    safe_drinking_water: 'Safe drinking water',\n    safe_disposal_of_human_waste: 'Safe disposal of human waste',\n  };\n\n  const serviceMap = {\n    Scheduled_PSC_Apt: 'Scheduled PSC Apt',\n    Adverse_Drug_Reaction_Side_Effect: 'Adverse Drug Reaction/Side Effect',\n    Malnutrition: 'Malnutrition',\n    Malaria: 'Malaria',\n    TB: 'TB',\n    Treatment_for_Other_OIs: 'Treatment for other Ols',\n    ARI: 'ARI',\n    Anemia: 'Anemia',\n    Diarrhea: 'Diarrhea',\n    Pregnancy_Care: 'Pregnancy Care (ANC)',\n    Family_Planning: 'Family Planning (FP)',\n    Preconception_Counseling: 'Preconception Counseling',\n    Injury: 'Injury',\n    Other: 'Other',\n  };\n\n  const reasonMapping = {\n    lack_of_access_to_fp_information: 'Lack of access to FP information',\n    no_access_to_fp_services_hospitals:\n      'Lack of hospitals or places where FP services can be accessed',\n    not_willing_to_use_fp_due_to_negative_effects_myths_and_misconceptions:\n      'Myths and misconceptions',\n    barriers_at_service_delivery_points: 'Barriers at service delivery points',\n    pregnant: 'The client is pregnant',\n    intentions_of_getting_pregnant: 'Intentions of getting pregnant',\n    not_sexually_active: 'The client is not sexually active',\n    other_barriers_culture_male_partners_parents_etc:\n      'Other barriers (culture, male partners, parents, etc)',\n  };\n\n  const milestoneTypeMap = {\n    cognitive_delays_learning_difficulties:\n      'Cognitive Delays Learning Difficulties',\n    motor_delays: 'Motor Delays',\n    speech_and_language_delay: 'Delay Speech and Language Delay',\n    social_and_emotional: 'Social and emotional',\n  };\n\n  const milestoneMap = {\n    movement: 'Movement',\n    hearing: 'Hearing',\n    communication: 'Communication',\n    seeing: 'Seeing',\n    cognitive_delays: 'Cognitive Delays',\n    play: 'Play',\n  };\n  const nutritionMap = {\n    severe: 'Severely Malnourished',\n    moderate: 'Moderately Malnourished',\n    normal: 'Normal',\n  };\n\n  const fpMethodMap = {\n    male_condoms: 'Male condoms',\n    female_condoms: 'Female condoms',\n    pop: 'POP',\n    coc: 'COC',\n    emergency_pills: 'Emergency pills',\n    none: 'None',\n  };\n\n  return {\n    ...state,\n    counselMap,\n    serviceMap,\n    reasonMapping,\n    milestoneTypeMap,\n    milestoneMap,\n    nutritionMap,\n    pregDangerMap,\n    fpMethodMap,\n  };\n});\n\n// get data from SF\nquery(\n  `SELECT Id, Parent_Geographic_Area__c, Parent_Geographic_Area__r.Name, Parent_Geographic_Area__r.Parent_Geographic_Area__c FROM Location__c WHERE CommCare_User_ID__c = '${dataValue(\n    'properties.owner_id'\n  )(state)}'`\n);\n\n// build IDs from queried SF data\nfn(state => ({\n  ...state,\n  data: {\n    ...state.data,\n    villageNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? state.references[0].records[0].Id\n        : undefined,\n    areaNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? state.references[0].records[0].Parent_Geographic_Area__c\n        : undefined,\n    catchmentNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? state.references[0].records[0].Parent_Geographic_Area__r\n          ? state.references[0].records[0].Parent_Geographic_Area__r\n              .Parent_Geographic_Area__c\n          : undefined\n        : undefined,\n  },\n}));\n\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes', \n  'Household__c',\n  'CommCare_Code__c',\n  fields(\n    field('CommCare_Code__c', state => {\n      return (\n        dataValue('indices.parent.case_id')(state) ||\n        dataValue('properties.parent_id')(state)\n      );\n    })\n  )\n),\n\n// build sfRecord before upserting\nfn(state => {\n  // This mapping was initially constructed with fields(field(), ...) syntax. We\n  // preserve it here and use \"expandReferences\" but could also refactor this to\n  // use standard object syntax, as Salesforce looks for { k: v, ... }.\n  const originalMapping = fields(\n    /*  field(\n          'deworming_medication__c',\n          dataValue('form.TT5.Child_Information.Deworming')\n        ),depracated field*/\n    field('Source__c', 1),\n    field('CommCare_ID__c', dataValue('case_id')),\n    relationship(\n      'Household__r',\n      'CommCare_Code__c',\n      dataValue('indices.parent.case_id')\n    ),\n    field('commcare_location_id__c',dataValue('properties.commcare_location_id')),\n    field('CommCare_Username__c',dataValue('properties.commcare_username')),\n    field('Telephone__c', dataValue('properties.contact_phone_number')), \n    field(\n      'Consent_for_data_use__c',\n      dataValue('properties.data_sharing_consent')\n    ),\n    field('CommCare_HH_Code__c', dataValue('indices.parent.case_id')),\n    field('Client_Status__c', dataValue('properties.Client_Status')),\n    field('Catchment__c', dataValue('catchmentNewId')),\n    field('Area__c', dataValue('areaNewId')),\n    field('Household_Village__c', dataValue('villageNewId')),\n    field('Name', state => {\n      var name1 = dataValue('properties.Person_Name')(state); //check\n      var unborn = dataValue('properties.name')(state); //check\n      var name2 =\n        name1 === undefined || name1 === '' || name1 === null\n          ? unborn\n          : name1.replace(/\\w\\S*/g, function (txt) {\n              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n            });\n      return name1 !== null ? name2 : 'Unborn Child';\n    }),\n    field('Chronic_illness__c', state => {\n      var choice = dataValue(\n        'properties.please_specify_which_chronic_illness_the_person_has'\n      )(state);\n      var choice2 = state.handleMultiSelect(state, choice);\n      return choice2 ? choice2.replace(/_/g, ' ') : '';\n    }),\n    field(\n      'Currently_enrolled_in_school__c',\n      dataValue('properties.enrolled_in_school')\n    ),\n    field('Education_Level__c', state => {\n      var level = dataValue('properties.Education_Level')(state);\n      return level ? level.toString().replace(/_/g, ' ') : null;\n    }),\n    field('Relation_to_the_head_of_the_household__c', state => {\n      var relation = dataValue('properties.relation_to_hh')(state);\n      if (relation) {\n        relation = relation.toString().replace(/_/g, ' ');\n        var toTitleCase = relation.charAt(0).toUpperCase() + relation.slice(1);\n        return toTitleCase;\n      }\n\n      return null;\n    }),\n    field('Gender__c',dataValue('properties.Gender')),\n    field('Disability__c', state => {\n      var disability = dataValue('properties.disability')(state);\n      var toTitleCase =\n        disability !== undefined\n          ? disability\n              .toLowerCase()\n              .split(' ')\n              .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n              .join(';')\n          : null;\n      return toTitleCase;\n    }), //need case property\n    field('Other_disability__c', state => {\n      var disability = dataValue('properties.other_disability')(state);\n      var toTitleCase =\n        disability !== undefined\n          ? disability\n              .toLowerCase()\n              .split(' ')\n              .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n              .join(';')\n          : null;\n      return toTitleCase;\n    }), //need case property\n\n    field('Use_mosquito_net__c', dataValue('properties.sleep_under_net')), //need case property\n    // field('Birth_Certificate__c',dataValue('properties.birth_certificate')),\n    field('Birth_Certificate__c', dataValue('properties.birth_certificate')),\n    field('Child_Status__c', state => {\n      var status = dataValue('properties.Child_Status')(state);\n      var rt = dataValue('properties.Record_Type')(state); //check that this is the right one\n      if (status && rt === 'Unborn') {\n        status = 'Unborn';\n      } else if (status && rt === 'Born') {\n        status = 'Born';\n      }\n      return status;\n    }),\n    //===================================================//\n    relationship('RecordType', 'Name', state => {\n      var rt = dataValue('properties.Record_Type')(state);\n      return rt === 'Unborn' || rt === ''\n        ? 'Child'\n        : rt.toString().replace(/_/g, ' '); //convert Unborn children to Child RT\n    }),\n\n    //TT5 Mother Information\n\n    field('MCH_booklet__c', dataValue('properties.mch_booklet')), //need to create a case property\n    field('Reason_for_not_taking_a_pregnancy_test__c', state => {\n      var reason = dataValue('properties.No_Preg_Test')(state);\n      return reason ? reason.toString().replace(/_/g, ' ') : undefined;\n    }),\n    field('Pregnancy_danger_signs__c', state => {\n      var signs = dataValue('properties.pregnancy_danger_signs')(state);\n      return signs ? state.pregDangerMap[signs] : undefined;\n    }),\n    field(\n      'Individual_birth_plan_counselling__c',\n      dataValue('properties.individual_birth_plan')\n    ),\n    field('Child_Danger_Signs__c', state => {\n      var signs = dataValue('properties.Other_Danger_Signs')(state);\n      return signs\n        ? signs\n            .toLowerCase()\n            .split(' ')\n            .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n            .join(';')\n            .toString()\n            .replace(/_/g, ' ')\n        : signs;\n    }),\n\n    //HAWI\n    field(\n      'Unique_Patient_Code__c',\n      dataValue('properties.Unique_Patient_Code')\n    ),\n    field(\n      'Active_in_Support_Group__c',\n      dataValue('properties.Active_in_Support_Group')\n    ),\n    field(\n      'Preferred_Care_Facility__c',\n      dataValue('properties.Preferred_Care_Facility')\n    ),\n    field('Currently_on_ART_s__c', dataValue('properties.ART')),\n    field('ART_Regimen__c', dataValue('properties.ARVs')),\n    field('HAWI_Defaulter__c', state => {\n      var hawi = dataValue('properties.default')(state);\n      return hawi === 'Yes' ? true : false;\n    }),\n    field('Date_of_Default__c', dataValue('properties.date_of_default')),\n    field('Know_HIV_status__c', dataValue('properties.known_hiv_status')),\n    field('HIV_Status__c', dataValue('properties.hiv_status')),\n    /*field('HIV_Status__c', state => {\n          var status = dataValue('properties.hiv_status')(state);\n          return status === 'yes'\n            ? 'Known'\n            : status === 'no'\n            ? 'Unknown'\n            : undefined;\n        }),//CHECK MAPPING ON THIS ONE*/\n\n    //Illness\n    field('Persons_temperature__c', dataValue('properties.temperature')),\n    field(\n      'Days_since_illness_start__c',\n      dataValue('properties.duration_of_sickness')\n    ),\n    field(\n      'Current_Malaria_Status__c',\n      dataValue('properties.malaria_test_results')\n    ),\n    field('Malaria_test__c', dataValue('properties.malaria_test')),\n    field(\n      'Last_Malaria_Home_Test__c',\n      dataValue('properties.malaria_test_date')\n    ),\n    field('Last_Malaria_Home_Treatment__c', state => {\n      var choice = dataValue(\n        'properties.malaria_test_date'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    /*field('Current_Malaria_Status__c', dataValue('form.Malaria_Status')),//check\n        field('Malaria_Facility__c',dataValue('form.treatment_and_tracking.malaria_referral_facility')),\n        field('Fever_over_7days__c',dataValue('form.treatment_and_tracking.symptoms_check_fever')),//check*/\n    field('Cough_over_14days__c', dataValue('properties.symptoms_check_cough')),\n    /*field('Diarrhoea_over_14days__c',dataValue('form.treatment_and_tracking.symptoms_check_diarrhea')),//check\n        field('Diarrhoea_less_than_14_days__c',dataValue('form.treatment_and_tracking.mild_symptoms_check_diarrhea')),//check*/\n    field(\n      'TB_patients_therapy_observed__c',\n      dataValue('properties.observed_tb_therapy')\n    ),\n    field('Injuries_or_wounds__c', dataValue('properties.wounds_or_injuries')),\n    field(\n      'Pulse_Oximeter__c',\n      dataValue('properties.pulse_oximeter_available')\n    ),\n    field(\n      'Heart_Rate_Pulse_Oximeter__c',\n      dataValue('properties.heart_rate_pulse_oximeter')\n    ),\n    field(\n      'Oxygen_Concentration_Pulse_Oximeter__c',\n      dataValue('properties.oxygen_concentration')\n    ),\n    field('Can_child_drink__c', dataValue('properties.can_child_drink')),\n    // field('Antibiotic_provided_for_fast_breathing__c',dataValue('properties.antibiotic_fast_breathing')),\n    field('Antibiotic_provided_for_fast_breathing__c', state => {\n      var choice = dataValue('properties.antibiotic_fast_breathing')(state);\n      return state.cleanChoice(state, choice);\n    }),\n    // field('Antibiotic_provided_for_chest_indrawing__c',dataValue('properties.antibiotic_chest_indrawing')),\n    field('Antibiotic_provided_for_chest_indrawing__c', state => {\n      var choice = dataValue('properties.antibiotic_chest_indrawing')(state);\n      return state.cleanChoice(state, choice);\n    }),\n    /*field('Child_zinc__c',dataValue('form.TT5.Child_Information.Clinical_Services.diarrhea_clinic_treatment_zinc')),//check\n        field('Child_ORS__c',dataValue('form.TT5.Child_Information.Clinical_Services.diarrhea_clinic_treatment_ORS')),//check\n        field('Childs_breath_per_minute__c',dataValue('form.psbi.breaths_per_minuite')),//check\n        field('Child_chest_in_drawing__c',dataValue('form.psbi.Child_chest_in_drawing_c')),//check*/\n    field('Default_on_TB_treatment__c', state => {\n      var choice = dataValue('properties.default_tb_treatment')(state); //check\n      return state.cleanChoice(state, choice);\n    }),\n    field('Treatment_Distribution__c', state => {\n      var choice = dataValue('properties.distributed_treatments')(state);\n      return state.cleanChoice(state, choice);\n    }), //check\n\n    //Delivery\n    field(\n      'Immediate_Breastfeeding__c',\n      dataValue('properties.Breastfeeding_Delivery')\n    ),\n    field('Place_of_Delivery__c', state => {\n      var facility = dataValue('properties.Delivery_Type')(state);\n      return facility === 'Skilled'\n        ? 'Facility'\n        : facility === 'Unskilled'\n        ? 'Home'\n        : undefined;\n    }),\n    field('Delivery_Facility__c', state => {\n      var facility = dataValue('properties.Delivery_Facility')(state);\n      return facility ? facility.toString().replace(/_/g, ' ') : null;\n    }),\n    field(\n      'Delivery_Facility_Other__c',\n      dataValue('properties.Delivery_Facility_Other')\n    ),\n\n    //Family Planning\n\n    field('LMP__c', dataValue('properties.LMP')),\n    field('Family_Planning__c', dataValue('properties.family_planning')),\n    field(\n      'Family_Planning_Method__c',\n      dataValue('properties.family_planning_method')\n    ),\n    field('FP_Method_Distributed__c', state => {\n      var status = dataValue('properties.FP_commodity')(state);\n      var value =\n        status && status !== ''\n          ? status\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.fpMethodMap[value] || value;\n              })\n          : undefined;\n      return value ? value.join(';') : undefined;\n    }),\n    field('Reasons_for_not_taking_FP_method__c', state => {\n      var status = dataValue('properties.No_FPmethod_reason')(state);\n      var value =\n        status && status !== ''\n          ? status\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return state.reasonMapping[value] || value;\n              })\n          : undefined;\n      return value ? value.join(';') : undefined;\n    }),\n    field('Pregnant__c', state => {\n      var preg = dataValue('properties.Pregnant')(state);\n      return preg === 'Yes' ? true : false;\n    }),\n    field('Date_of_Delivery__c', dataValue('properties.delivery_date')),\n    field(\n      'Counselled_on_FP_Methods__c',\n      dataValue('properties.CounselledFP_methods')\n    ),\n    field('Client_counselled_on__c', state => {\n      var choices =\n        dataValue('properties.counsel_topic')(state) ||\n        dataValue('properties.counsel_topic')(state); //need to create a case property\n      var choiceGroups = choices ? choices.split(' ') : null;\n      var choicesMulti = choiceGroups\n        ? choiceGroups\n            .map(cg => {\n              return state.counselMap[cg];\n            })\n            .join(';')\n        : choiceGroups;\n      return choicesMulti;\n    }), //OpenFn Question - can this be simplified now that this is a case property\n    field('Client_provided_with_FP__c', state => {\n      var choice = dataValue(\n        'properties.was_the_woman_15-49yrs_provided_with_family_planning_commodities_by_chv'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    field(\n      'Received_pregnancy_test__c',\n      dataValue('properties.did_you_adminsiter_a_pregnancy_test')\n    ),\n    field(\n      'Pregnancy_test_result__c',\n      dataValue('properties.pregnancy_test_result')\n    ),\n    field('Gravida__c', dataValue('properties.Gravida')),\n    field('Parity__c', dataValue('properties.Parity')),\n\n    //TT5 Child Information\n\n    field(\n      'Exclusive_Breastfeeding__c',\n      dataValue('properties.Exclusive_Breastfeeding')\n    ),\n    field(\n      'Counselled_on_Exclusive_Breastfeeding__c',\n      dataValue('properties.counseling')\n    ),\n    field(\n      'Newborn_visited_48_hours_of_delivery__c',\n      dataValue('properties.newborn_visited_48_hours_of_delivery')\n    ),\n    field('Newborn_visit_counselling__c', state => {\n      var choice = dataValue('properties.did_you_consel_the_mother_on1')(state);\n      return state.cleanChoice(state, choice);\n    }),\n    field(\n      'mother_visited_48_hours_of_the_delivery__c',\n      dataValue('properties.visit_mother_48')\n    ),\n    field(\n      'Visit_after_unskilled__c',\n      dataValue('properties.visit_24hours_after_unskilled_delivery')\n    ),\n    field('Mother_visit_counselling__c', state => {\n      var choice = dataValue('properties.did_you_consel_the_mother_on2')(state);\n      return state.cleanChoice(state, choice);\n    }),\n    /*field('Newborn_visited_48_hours_of_delivery__c',dataValue('properties.newborn_visited_48_hours_of_delivery')), Duplicate Mapping*/\n    field(\n      'Newborn_visited_by_a_CHW_within_6_days__c',\n      dataValue('properties.visit_6_days_from_delivery')\n    ),\n\n    //Nutrition\n\n    field(\n      'Caretaker_action_after_muac_screening__c',\n      dataValue('properties.mother_screened_muac_action')\n    ),\n    field(\n      'Caretaker_muac_findings__c',\n      dataValue('properties.mother_screened_child_muac_result')\n    ),\n    field('Food_groups_3_times_a_day__c',dataValue('properties.food_groups')),\n    // field('Caretaker_screened_for_muac_this__c', dataValue('properties.mother_screened_child_muac')),\n    field('Caretaker_screened_for_muac_this__c', state => {\n      var choice = dataValue('properties.mother_screened_child_muac')(state); //check\n      return state.cleanChoice(state, choice);\n    }),\n    // field('Caretaker_trained_in_muac__c', dataValue('properties.mother_trained_muac')),\n    field('Caretaker_trained_in_muac__c', state => {\n      var choice = dataValue('properties.mother_trained_muac')(state); //check\n      return state.cleanChoice(state, choice);\n    }),\n    field(\n      'of_Caretaker_MUAC_screenings__c',\n      dataValue('properties.mother_nb_screening')\n    ),\n    field('Current_Weight__c', dataValue('properties.Current_Weight')), //Only on task update\n    field('Current_Height__c', dataValue('properties.current_height')),\n    field('Current_MUAC__c', dataValue('properties.MUAC')),\n    field('Current_Nutrition_Status__c', state => {\n      var status = dataValue('properties.Nutrition_Status')(state);\n      return status ? state.nutritionMap[status] : undefined;\n    }),\n\n    //TT5 & HAWI\n    field('TT5_Mother_Registrant__c', state => {\n      var preg = dataValue('properties.Pregnant')(state);\n      return preg == 'Yes' ? 'Yes' : null;\n    }),\n    field('Enrollment_Date__c', state => {\n      var age = dataValue('properties.age')(state);\n      var date = dataValue('server_date_modified')(state);\n      var preg = dataValue('properties.Pregnant')(state);\n      return age < 5 || preg == 'Yes' ? date : null;\n    }),\n    field('HAWI_Enrollment_Date__c', state => {\n      var date = dataValue('server_date_modified')(state);\n      var status = dataValue('properties.hiv_status')(state);\n      return status == 'positive' ? date : null;\n    }),\n    field('Thrive_Thru_5_Registrant__c', state => {\n      var age = dataValue('properties.age')(state);\n      var preg = dataValue('properties.Pregnant')(state);\n      return age < 5 || preg == 'Yes' ? 'Yes' : 'No';\n    }), //check mapping\n    field('HAWI_Registrant__c', state => {\n      var status = dataValue('properties.hiv_status')(state);\n      return status == 'positive' ? 'Yes' : 'No';\n    }),\n\n    //ANC\n    field('ANC_1__c', state => {\n      var date = dataValue('properties.ANC_1')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n    field('ANC_2__c', state => {\n      var date = dataValue('properties.ANC_2')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n    field('ANC_3__c', state => {\n      var date = dataValue('properties.ANC_3')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n    field('ANC_4__c', state => {\n      var date = dataValue('properties.ANC_4')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n    field('ANC_5__c', state => {\n      var date = dataValue('properties.ANC_5')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n    field('Date_of_Birth__c', state => {\n      var date = dataValue('properties.DOB')(state);\n      return date && date !== '' ? date : undefined;\n    }),\n\n    //Immunization\n\n    field(\n      'Child_missed_immunization_type__c',\n      dataValue('form.TT5.Child_Information.Immunizations.immunization_type')\n    ), //check\n    field('BCG__c', dataValue('properties.BCG')),\n    field('OPV_0__c', dataValue('properties.OPV_0')),\n    field('Measles_6__c', dataValue('properties.Measles_6')),\n    field('Measles_9__c', dataValue('properties.Measles_9')),\n    field('Measles_18__c', dataValue('properties.Measles_18')),\n    field('OPV_1__c', dataValue('properties.OPV_PCV_Penta_1')),\n    field('OPV_2__c', dataValue('properties.OPV_PCV_Penta_2')),\n    field('OPV_3__c', dataValue('properties.OPV_PCV_Penta_3')),\n    field('Rotavirus_1__c', dataValue('properties.rotavirus_1')),\n    field('Rotavirus_2__c', dataValue('properties.rotavirus_2')),\n    field('IPV__c', dataValue('properties.IPV')),\n    field('Vitamin_A_12__c', dataValue('properties.Vitamine_A')),\n    field('Vitamin_A_18__c', dataValue('properties.Vitamine_A_2')),\n    field('Vitamin_A_24__c', dataValue('properties.Vitamine_A_3')),\n    field('Deworming_12__c', dataValue('properties.Deworming_1')),\n    field('Deworming_18__c', dataValue('properties.Deworming_2')),\n    field('Deworming_24__c', dataValue('properties.Deworming_3')),\n\n    //ECD\n    // field('Did_you_counsel_caregiver_on__c',dataValue('properties.did_you_counsel_the_caregiver_on_delayed_milestones')),\n    field('Did_you_counsel_caregiver_on__c', state => {\n      var choice = dataValue(\n        'properties.did_you_counsel_the_caregiver_on_delayed_milestones'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    // field('Delayed_Milestone__c',dataValue('properties.does_the_child_has_a_delayed_milestone')),\n    field('Delayed_Milestone__c', state => {\n      var choice = dataValue(\n        'properties.does_the_child_has_a_delayed_milestone'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    // field('Child_has_2_or_more_play_items__c',dataValue('properties.does_the_child_has_2_or_more_play_items_at_home')),\n    field('Child_has_2_or_more_play_items__c', state => {\n      var choice = dataValue(\n        'properties.does_the_child_has_2_or_more_play_items_at_home'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    // field('Child_has_3_or_more_picture_books__c',dataValue('properties.does_the_child_has_3_or_more_picture_books')),\n    field('Child_has_3_or_more_picture_books__c', state => {\n      var choice = dataValue(\n        'properties.does_the_child_has_3_or_more_picture_books'\n      )(state);\n      return state.cleanChoice(state, choice);\n    }),\n    field('Delayed_Milestones_Counselled_On__c', state => {\n      var ms = dataValue(\n        'properties.which_delayed_milestone_area_did_you_counsel_the_caregiver_on'\n      )(state);\n      return ms ? state.milestoneMap[ms] : undefined;\n    }),\n    field('Delayed_Milestone_Type__c', state => {\n      var ms = dataValue('properties.which_delayed_milestone')(state);\n      return ms ? state.milestoneTypeMap[ms] : undefined;\n    }),\n\n    //Death\n    field('Date_of_Death__c', dataValue('properties.Date_of_Death')),\n    field('Cause_of_Death__c', state => {\n      var death = dataValue('properties.cause_of_death_dead')(state);\n      return death ? death.toString().replace(/_/g, ' ') : death;\n    }), //check which case property to use - there are 2\n    field('Verbal_autopsy__c', dataValue('properties.verbal_autopsy')),\n\n    //Closing\n    field('Last_Modified_Date_CommCare__c', dataValue('date_modified')),\n    field('Case_Closed_Date__c', state => {\n      var closed = dataValue('date_closed')(state);\n      var date = dataValue('date_modified')(state);\n      return closed && closed == true ? date : undefined;\n    }) //need case property\n  );\n\n  let sfRecord = expandReferences(originalMapping)(state);\n\n  Object.entries(sfRecord).forEach(([key, value]) => {\n    if (value === '') sfRecord[key] = undefined;\n  });\n\n  return { ...state, sfRecord };\n});\n\n// upsert data to SF\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes' ,\n  'Person__c', 'CommCare_ID__c', state => state.sfRecord);\n\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes' &&\n    state.data.properties.caretaker_case_id !== undefined && state.data.properties.caretaker_case_id !== '', \n    'Person__c', 'CommCare_ID__c', \n    fields(\n      relationship('Primary_Caregiver_Lookup__r', 'CommCare_ID__c', state => {\n      return caregiver = dataValue('properties.caretaker_case_id')(state);\n      }),\n     field('CommCare_ID__c', dataValue('case_id')),\n    )\n);\n\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes' &&\n    state.data.properties.mother_case_id !== undefined && state.data.properties.mother_case_id !== '', \n    'Person__c', 'CommCare_ID__c', \n    fields(\n      relationship('Mother__r', 'CommCare_ID__c', state => {\n      return caregiver = dataValue('properties.mother_case_id')(state);\n      }),\n      field('CommCare_ID__c', dataValue('case_id')),\n    )\n);\n\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes' &&\n  state.data.properties.head_of_household_case_id  !== undefined  && state.data.properties.head_of_household_case_id !== '', \n  'Household__c', 'CommCare_Code__c',\n  fields(\n    field('CommCare_Code__c', dataValue('indices.parent.case_id')),\n    relationship('Head_of_Household__r', 'CommCare_ID__c', dataValue('properties.head_of_household_case_id')),\n      )\n  )\n")))}u.isMDXComponent=!0}}]);