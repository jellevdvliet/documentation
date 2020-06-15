(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{394:function(t,a,e){"use strict";e.r(a);var s=e(8),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("h2",{attrs:{id:"download-and-launch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-and-launch"}},[t._v("#")]),t._v(" Download and launch")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"cURL"}},[e("p",[t._v("Download the "),e("strong",[t._v("latest stable release")]),t._v(" of MeiliSearch with "),e("strong",[t._v("curl")]),t._v(".")]),t._v(" "),e("p",[t._v("Launch MeiliSearch to start the server.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://install.meilisearch.com "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n$ ./meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Brew"}},[e("p",[t._v("Download the "),e("strong",[t._v("latest stable release")]),t._v(" of MeiliSearch with "),e("strong",[t._v("Homebrew")]),t._v(".")]),t._v(" "),e("p",[t._v("Launch MeiliSearch to start the server.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ brew update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" meilisearch\n$ meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Docker"}},[e("p",[t._v("Using "),e("strong",[t._v("Docker")]),t._v(" you can choose to run "),e("a",{attrs:{href:"https://hub.docker.com/r/getmeili/meilisearch/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("any available tags"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("This command starts the "),e("strong",[t._v("latest stable release")]),t._v(" of MeiliSearch.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7700")]),t._v(":7700 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/data.ms:/data.ms "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    getmeili/meilisearch\nServer is listening on: http://0.0.0.0:7700\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Data written to a Docker container is not persistent and is deleted along with the container when the latter is stopped. Docker volumes are not deleted when containers are removed. It is then recommended to share volumes between your containers and your host machine to provide persistent storage. MeiliSearch writes data to "),e("code",[t._v("/data.ms")])])])]),t._v(" "),e("Tab",{attrs:{label:"APT"}},[e("p",[t._v("Download the "),e("strong",[t._v("latest stable release")]),t._v(" of MeiliSearch with "),e("strong",[t._v("APT")]),t._v(".")]),t._v(" "),e("p",[t._v("Launch MeiliSearch to start the server.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [trusted=yes] https://apt.fury.io/meilisearch/ /"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/apt/sources.list.d/fury.list\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" meilisearch-http\n$ meilisearch\nServer is listening on: http://127.0.0.1:7700\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Source"}},[e("p",[t._v("MeiliSearch is written in "),e("code",[t._v("Rust")]),t._v(". To compile it, "),e("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("installing the Rust toolchain"),e("OutboundLink")],1),t._v(" is required.")]),t._v(" "),e("p",[t._v("If the Rust toolchain is already installed, clone the repository on your local system and change it to your working directory.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/meilisearch/MeiliSearch\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" MeiliSearch\n")])])]),e("p",[t._v("In the cloned repository, compile MeiliSearch.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update the rust toolchain to the latest version")]),t._v("\n$ rustup update\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compile the project")]),t._v("\n$ cargo build --release\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Execute the server binary")]),t._v("\n$ ./target/release/meilisearch\n")])])])])],1),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),e("p",[t._v("Options are added at launch. Either through command line options or through environment variables.")]),t._v(" "),e("p",[t._v("This is an example using the command line options.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ./meilisearch --db-path ./meilifiles --http-addr "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1:7700'")]),t._v("\nServer is listening on: http://127.0.0.1:7700\n")])])]),e("p",[t._v("Here is the list of "),e("RouterLink",{attrs:{to:"/guides/advanced_guides/configuration.html"}},[t._v("all the options and how to use them")]),t._v(".")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);