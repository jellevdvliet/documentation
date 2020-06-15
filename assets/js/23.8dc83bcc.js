(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{392:function(t,e,s){"use strict";s.r(e);var a=s(8),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"field-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-properties"}},[t._v("#")]),t._v(" Field Properties")]),t._v(" "),s("p",[t._v("By default, every "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/field_properties.html#new-fields-and-known-fields"}},[t._v("new field")]),t._v(" in a document is "),s("strong",[t._v("searchable")]),t._v(" and "),s("strong",[t._v("displayed")]),t._v(". These properties can be modified in the "),s("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"searchable-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searchable-fields"}},[t._v("#")]),t._v(" Searchable Fields")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("values")]),t._v(" of the fields whose attributes are added to the "),s("RouterLink",{attrs:{to:"/references/searchable_attributes.html"}},[t._v("searchable-attributes list")]),t._v(" are "),s("strong",[t._v("searched for matching query words")]),t._v(".")],1),t._v(" "),s("p",[t._v("Their content is used by MeiliSearch to assess the relevancy of a document.")]),t._v(" "),s("p",[s("strong",[t._v("By default, all field attributes are added to the searchable-attributes list")]),t._v(". If a new document is ingested and one of its "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/field_properties.html#new-fields-and-known-fields"}},[t._v("fields is not yet known by MeiliSearch")]),t._v(", the latter will be automatically added to the searchable-attributes list. "),s("RouterLink",{attrs:{to:"/references/accept_new_fields.html"}},[t._v("This behavior can be changed")]),t._v(".")],1),t._v(" "),s("p",[t._v("Therefore, if a field attribute is not in the searchable-attributes list, the field will be ignored from searches but will remain stored in the server. This list can be restricted to a selected set of attributes in the settings.")]),t._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Suppose you manage a database that contains information about movies. By adding the following settings, the fields "),s("code",[t._v("uid")]),t._v(", "),s("code",[t._v("movie_id")]),t._v(", "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("description")]),t._v(", "),s("code",[t._v("poster")]),t._v(", "),s("code",[t._v("release_date")]),t._v(" and "),s("code",[t._v("rank")]),t._v(" will be searched.")]),t._v(" "),s("code-samples",{attrs:{id:"field_properties_guide_searchable_1"}}),t._v(" "),s("h2",{attrs:{id:"displayed-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#displayed-fields"}},[t._v("#")]),t._v(" Displayed Fields")]),t._v(" "),s("p",[t._v("The fields whose attributes are added to the "),s("RouterLink",{attrs:{to:"/references/displayed_attributes.html"}},[t._v("displayed-attributes list")]),t._v(" are "),s("strong",[t._v("displayed in each matching document")]),t._v(".")],1),t._v(" "),s("p",[t._v("Documents returned upon search contain only displayed fields.")]),t._v(" "),s("p",[s("strong",[t._v("By default, all field attributes are added to the displayed-attributes list")]),t._v(". If a new document is ingested and one of its "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/field_properties.html#new-fields-and-known-fields"}},[t._v("fields is not yet known by MeiliSearch")]),t._v(", the latter will be automatically added to the displayed-attributes list. "),s("RouterLink",{attrs:{to:"/references/accept_new_fields.html"}},[t._v("This behavior can be changed")]),t._v(".")],1),t._v(" "),s("p",[t._v("Therefore, if a field attribute is not in the displayed-attribute list, the field won't be added to the returned documents.")]),t._v(" "),s("p",[t._v("This list can be restricted to a selected set of attributes in the settings.")]),t._v(" "),s("h4",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("Suppose you manage a database that contains information about movies. By adding the following settings, documents returned upon search will contain the fields "),s("code",[t._v("title")]),t._v(", "),s("code",[t._v("description")]),t._v(", "),s("code",[t._v("poster")]),t._v(", "),s("code",[t._v("release_date")]),t._v(" and "),s("code",[t._v("rank")]),t._v(".")]),t._v(" "),s("code-samples",{attrs:{id:"field_properties_guide_displayed_1"}}),t._v(" "),s("h2",{attrs:{id:"new-fields-and-known-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-fields-and-known-fields"}},[t._v("#")]),t._v(" New Fields and Known Fields")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("new field")]),t._v(" is a field that is not yet known by MeiliSearch. As soon as a field is present in the settings, it becomes a "),s("strong",[t._v("known field")]),t._v(".")]),t._v(" "),s("p",[t._v("Depending on its state, a different behavior will be applied.")]),t._v(" "),s("h3",{attrs:{id:"new-fields-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-fields-behavior"}},[t._v("#")]),t._v(" New Fields Behavior")]),t._v(" "),s("p",[t._v("A new field is a field that is "),s("strong",[t._v("present in a new document and not present in the settings")]),t._v(". To know if a field is in the setting, you can "),s("RouterLink",{attrs:{to:"/references/settings.html#get-settings"}},[t._v("get the settings list")]),t._v(" to ensure the presence of your field.")],1),t._v(" "),s("p",[t._v("A new field is automatically added to the "),s("code",[t._v("searchableAttributes")]),t._v(" and "),s("code",[t._v("displayedAttributes")]),t._v(" lists if "),s("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#accept-new-fields"}},[t._v("acceptNewFields")]),t._v(" is set to true ("),s("code",[t._v("true")]),t._v(" is the default value).")],1),t._v(" "),s("p",[t._v("Once a new field has been added to those lists, it becomes "),s("strong",[t._v("a known field")]),t._v(" since it is now present in the settings.")]),t._v(" "),s("h3",{attrs:{id:"known-fields-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-fields-behavior"}},[t._v("#")]),t._v(" Known Fields Behavior")]),t._v(" "),s("p",[t._v("A known field is a field that is already present in the settings. To know if a field is in the setting, you can "),s("RouterLink",{attrs:{to:"/references/settings.html#get-settings"}},[t._v("get the settings list")]),t._v(" to ensure the presence of its attribute.")],1),t._v(" "),s("p",[t._v("No automatic behavior is applied to this field. It will stay where it is present.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Add "),s("code",[t._v("size")]),t._v(" to the "),s("code",[t._v("attributesForFacetting")]),t._v(" setting before adding documents.")])]),t._v(" "),s("li",[s("p",[t._v("Add documents containing the "),s("code",[t._v("size")]),t._v(" field.")])])]),t._v(" "),s("p",[s("code",[t._v("size")]),t._v(" will not be automatically added to the "),s("code",[t._v("searchableAttributes")]),t._v(" and "),s("code",[t._v("displayedAttributes")]),t._v(" lists since its presence in "),s("code",[t._v("attributesForFacetting")]),t._v(" made it a known field.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributesForFaceting"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"searchableAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayedAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Now imagine the opposite scenario in which you first add the documents, and then you update the "),s("code",[t._v("attributesForFacetting")]),t._v(" settings."),s("br"),t._v("\nIn that case when the documents are added, "),s("code",[t._v("size")]),t._v(" is not yet present in the settings. Thus is automatically added to the "),s("code",[t._v("searchableAttributes")]),t._v(" and "),s("code",[t._v("displayedAttributes")]),t._v(" lists."),s("br"),t._v("\nAdding "),s("code",[t._v("size")]),t._v(" to the "),s("code",[t._v("attributesForFacetting")]),t._v(" settings will not remove "),s("code",[t._v("size")]),t._v(" from any other setting.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributesForFaceting"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"searchableAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayedAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"data-storing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-storing"}},[t._v("#")]),t._v(" Data storing")]),t._v(" "),s("p",[t._v("All fields are stored. "),s("strong",[t._v("This behavior cannot be changed")]),t._v(".")]),t._v(" "),s("p",[t._v("Thus, if a field is missing from both the displayed-attributes list and the searchable-attributes list, it "),s("strong",[t._v("will still be stored")]),t._v(". It will be possible to add it to either or both lists at any time.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);