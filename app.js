const express = require('express');
const app = express();
const https=require("https");
//console.log(VTie_In_register);
const port = 3000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}),express.json());
app.use(express.static("Public"));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/VTie_In_register_form.html');
})

app.post('/',function(req,res){

    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const email=req.body.email;

    var data={

        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstname,
                    LNAME: lastname,

                }

            }
        ]


    };

    var jsonData=JSON.stringify(data);
    var url='https://us5.api.mailchimp.com/3.0/lists/4cd4ab61e5?skip_merge_validation=false&skip_duplicate_check=true';
    const options={
        method:"POST",
        auth:"sam:3607396c1fe376fb5e5fe65c8d779edb-us5"

    };
    var request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.send("Subscribed Sucessfully");
        }
        else{
            res.send("Please try again or try to contact developer");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        });

    });
    request.write(jsonData);
    request.end();
});

app.listen(process.env.PORT||port,  function(){
  console.log(`Example app listening at http://localhost:${port}`);
})
//API KEY
//3607396c1fe376fb5e5fe65c8d779edb-us5
//LIST ID
//4cd4ab61e5.