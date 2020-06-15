(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{412:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"attributes-for-faceting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes-for-faceting"}},[t._v("#")]),t._v(" Attributes for Faceting")]),t._v(" "),a("p",[a("em",[t._v("Child route of the "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("The attributes that can be used as "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/faceted_search.html"}},[t._v("facets for faceted search")]),t._v(".")],1),t._v(" "),a("p",[t._v("Attributes for faceting can also be updated directly through the "),a("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" along with the other settings.")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/advanced_guides/faceted_search.html"}},[t._v("Learn more about faceted search")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"get-attributes-for-faceting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-attributes-for-faceting"}},[t._v("#")]),t._v(" Get Attributes for Faceting")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/attributes-for-faceting"}}),t._v(" "),a("p",[t._v("Get the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/faceted_search.html"}},[t._v("attributes for faceting")]),t._v(" of an index.")],1),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"get_attributes_for_faceting_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("p",[t._v("List the settings.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"director"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-attributes-for-faceting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-attributes-for-faceting"}},[t._v("#")]),t._v(" Update Attributes for Faceting")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/attributes-for-faceting"}}),t._v(" "),a("p",[t._v("Update the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/faceted_search.html"}},[t._v("attributes for faceting")]),t._v(" of an index.")],1),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("An array of strings that contains the attributes to use as facets.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#attributes-for-faceting"}},[t._v("More information about the body")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"update_attributes_for_faceting_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"reset-attributes-for-faceting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-attributes-for-faceting"}},[t._v("#")]),t._v(" Reset Attributes for Faceting")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/attributes-for-faceting"}}),t._v(" "),a("p",[t._v("Reset the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/faceted_search.html"}},[t._v("attributes for faceting")]),t._v(" of the index to the default value.")],1),t._v(" "),a("h4",{attrs:{id:"default-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),a("p",[t._v("An empty array ("),a("code",[t._v("[]")]),t._v(").")]),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("code-samples",{attrs:{id:"reset_attributes_for_faceting_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);