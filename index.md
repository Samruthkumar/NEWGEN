<!DOCTYPE html>
<html>
<head>
<style>
  *{
    box-sizing: border-box;
  }
 .background{
   background-image: url('Public/Images/136949.jpg');
   background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
input[type=text], input[type=email], input[type=password] {
  background-color: white;
  width: 95%;
  color: black;
  padding-top: 2%;
  padding-bottom: 2%;
  border-radius: 4px;
}

input[type=text],input[type=email],input[type=password]:focus {
  background-color: white;
  border: 1px solid balck;
  
}
input[type=submit]{
  background-color:rgb(51, 151, 245);
}
input[type=submit]:hover {
  background-color: #45a049;
}
</style>
<script>
  function SignUp()
  {
    
    var a=document.getElementById('SignUp');
    document.getElementById('onin').style.backgroundColor="white";
    document.getElementById('onup').style.backgroundColor="lightgray";
    document.getElementById('demo').innerHTML=a.innerHTML;
    document.getElementById('container').style.marginTop="0%";
  }
  function SignIn()
  {
    
    var a=document.getElementById('SignIn');
    document.getElementById('onup').style.backgroundColor="white";
    document.getElementById('onin').style.backgroundColor="lightgray";
    document.getElementById('demo').innerHTML=a.innerHTML;
    document.getElementById('container').style.marginTop="10%";
  }
</script>
</head>
<body class="background">
  <div id="container" style="margin-top:10%;margin-left:17%;background-color:lightgray;border:2px solid black;border-radius: 7px;width:50%;overflow: hidden;" >
    <!-- <div style="border:2px solid black;color:black;width:25%;text-align:center;display:block;" onclick="SignUp()">SignUp</div>
     <div style="border:2px solid black;color:black;width:25%;text-align:center;display:block;" onclick="SignIn()" >SignIn</div> -->
     <div id="onup" style="float:left;width:50%;text-align:center;background-color:white;padding:1%" onclick="SignUp()">SignUp</div>
     <div id="onin" style="float:left;width:50%;text-align:center;padding:1%" onclick="SignIn()">SignIn</div>
    <!--<img src="C:\Users\HP\Pictures\Screenshots\crop.jpg" style="width:50%"> -->
    <div id="demo">
      <form action="http://localhost:3000/VTie_In_register/SignIn" method="POST">
        <div style="width:auto;margin-top:5%;padding-left:2%;">
          <label for="emailid">Email ID:</label><br>
        </div>
        <div style="width:auto;margin-top:3%;padding-left:2%;">
          <input type="email" id="emailid" name="email" placeholder="Email ID" ><br>
        </div>
        <div style="width:auto;margin-top:5%;padding-left:2%;">
          <label for="password">Password:</label><br>
        </div>
        <div style="width:auto;margin-top:3%;padding-left:2%;">
          <input type="password" id="password" name="password" placeholder="Password" ><br>
        </div>
        <div style="width:auto;margin-top:2%;text-align:center;">
          <input type="submit" value="SignIn" style="margin-top:5%;margin-bottom:5%;width:50%;padding-top:2%;padding-bottom:2%;border-radius:8px">
        </div>
      </form>
    </div>
  </div>
  <div id="SignUp" style="display: none;" > 
        <form action="/" method="POST">
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            <label for="fname">First name:</label><br>
          </div>
          <div style="width:auto;margin-top:3%; padding-left:2%;">
            <input type="text" id="fname" name="fname" placeholder="First name"><br>
          </div>
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            <label for="lname">Last name:</label><br>
          </div>
          <div style="width:auto;margin-top:3%;padding-left:2%;">
            <input type="text" id="lname" name="lname" placeholder="Last name"><br>
          </div>
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            Gender:
            <select name="Gender" id="gender" style="width:95%;padding:2%; border-radius: 4px;border:2px solid black;font-size:100%;">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            <label for="emailid">Email ID:</label><br>
          </div>
          <div style="width:auto;margin-top:3%;padding-left:2%;">
            <input type="email" id="emailid" name="email" placeholder="Email ID" ><br>
          </div>
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            <label for="password">Password:</label><br>
          </div>
          <div style="width:auto;margin-top:3%;padding-left:2%;">
            <input type="password" id="password" name="password" placeholder="Password" ><br>
          </div>
          <div style="width:auto;margin-top:5%;padding-left:2%;">
            Profession:
            <select name="Profession" id="profession" style="width:95%;padding:2%; border-radius: 4px;border:2px solid black;font-size:100%;">
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
            </select>
          </div>
          <div style="width:auto;margin-top:2%;text-align:center;">
            <input type="submit" value="Register" style="margin-top:5%;margin-bottom:2.5%;width:50%;padding-top:2%;padding-bottom:2%;border-radius:8px">
          </div>
        </form>
  </div>
  <div id="SignIn" style="display:none;">
      <form action="http://localhost:3000/VTie_In_register/SignIn" method="POST">
        <div style="width:auto;margin-top:5%;padding-left:2%;">
          <label for="emailid">Email ID:</label><br>
        </div>
        <div style="width:auto;margin-top:3%;padding-left:2%;">
          <input type="email" id="emailid" name="email" placeholder="Email ID" ><br>
        </div>
        <div style="width:auto;margin-top:5%;padding-left:2%;">
          <label for="password">Password:</label><br>
        </div>
        <div style="width:auto;margin-top:3%;padding-left:2%;">
          <input type="password" id="password" name="password" placeholder="Password" ><br>
        </div>
        <div style="width:auto;margin-top:2%;text-align:center;">
          <input type="submit" value="SignIn" style="margin-top:5%;margin-bottom:2.5%;width:50%;padding-top:2%;padding-bottom:2%;border-radius:8px">
        </div>
      </form>
  </div> 



</body>
</html>
