<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Registration form </title>
<link rel="stylesheet" type="text/css" href="register.css">
 <script src="reg_validation.js"></script>

</head>
 
<body >
 <div class="contaier" id="console">
<form name="login"  action="reg_login.php" method="post">
<h2>Registration Form</h2>
 
<label  >First Name :</label>
<input type="text"placeholder="Ankit...."id="fn" name="first_name" ><br/>
 
<label   >Last Name :</label>
<input type="text"placeholder="Kumar..."name="last_name"id="ln" ><br/>
 
<label  >Email :</label>
<input type="text" style="text-transform:lowercase" placeholder="Abc@gmail.com" name="email" id="em" r><br/>

<label >Address :</label>
<input type="text"   placeholder="address with pin code" / name="address" id="add" ><br/>

<label   >Mobile No :</label>
<input type="number" placeholder="eg. phone number"id="mn" name="mobile"><br/>
 
<label  >Password :</label>
<input type="password" id="pwd" placeholder="eg. Abc@1" name="password" ><br/>
 

 

 
<label for="r8" id="cy"required>City:</label>
 
<select name="city" id="r8">
<option>Select</option>
<option>Pune</option>
<option>Jaipur</option>
<option>Mumbai</option>
<option>Raigad</option>
<option>Nagpur</option>
<option>Nasik</option>
<option>Raigad</option>
<option>Nagar</option>
<option>Kolhapur</option>
<option>Solapur</option>
</select><br/><br/>
 
<button type="submit" value="Submit" name="register" id="button" onclick="valid()" >Register</button>  
<p>
    Already a member ?
    <a href="home.php" class="to_register"> Go and log in </a>
</p>
</div>
 
</form>

  
 
</body>
</html>

