
<html>

<head>
    <title>LOGIN PAGE</title>
</head>
<link rel="stylesheet" href="home.css">
<script src="validation.js"></script>

<body>
    <div class="container"id="console">
        <form id="form" action="login.php" method="POST" >
           
            <h2>LOGIN PAGE</h2>

            

            <label>Email : </label>
            <input type="text" name="email" id="username" placeholder="User Name" class="login" required><br>

            <label>Password:</label>
            <input type="password" name="pwd" id="password" placeholder="Password" class="login" required><br>

            <button id="btn" name="register" value="Submit">Login</button>
            
			<p>
                    Not a member ?
                    <a href="reg.php" class="to_register"> Go and register. </a>
            </p>
            
        </form>
        <!-- <div id="console"></div> -->
    </div>
   

</body>

</html>