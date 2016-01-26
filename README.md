# ForkMVC-authLib
Adds user Authentication to ForkMVC that grants the members of your website login/logout capabilities. You should have memberBox installed on your ForkBox before implementing this. 

MemberBox consists of a ForkMVC Model, ForkMVC Controller, and a few memberBox SQL tables. This forkMVC library adds an authentication layer to that.

# AutoLoading the library
1. Open ForkBox/system/libraries/autoload.php
2. Find `$autoLoad_array = array(`
3. Change it to `$autoLoad_array = array('authlib,`
4. Save File.

# Configuring the Database
Upload the included "memberBox_authLib.sql" file to your phpMyAdmin's "import" screen. This will have everything you need for Authentication. If you don't know how to import a database table file, you should Google that.
