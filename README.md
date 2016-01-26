# ForkMVC-authLib
Adds user Authentication to ForkMVC that grants the members of your website login/logout capabilities. You should have memberBox installed on your ForkBox before implementing this. 

MemberBox consists of a ForkMVC Model, ForkMVC Controller, and a few memberBox SQL tables. This forkMVC library adds an authentication layer to that.

# AutoLoading the library
1. Open ForkBox/system/libraries/autoload.php
2. Find `$autoLoad_array = array(`
3. Change it to `$autoLoad_array = array('authlib,`
4. Save File.

# Use the Library
1. You must use it as a model. We can create a global model by doing the following.
2. Open: ForkBox/system/core/model.php
3. find public function model() {
4. Change it to: `public function model() { $this->auth = new Auth();` 

# Configuring the Database
Upload the included "memberBox_authLib.sql" file to your phpMyAdmin's "import" screen. This will have everything you need for Authentication. If you don't know how to import a database table file, you should Google that.

# On The Front End
You need jQuery and the /assets/js/auth.js included inside of your login page at the very least. I reccommend including this on all pages though.

`<script src="http://forklabs.us/cdn/jquery/jquery.js"></script>`
`<script src="/assets/js/auth.js"></script>`

