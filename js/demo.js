$(function(){
    alert("1111");
});

function User(name,age){
    this.name=name;
    this.age=age;
}

function createUser(){
    /*var user1=new User("Linda",18);
    alert(user1);*/

    /*var user2={"name":"Linda","age":18};
    alert(user2);
    alert(user2.name);*/

    /*var user3='{"name":"Linda","age":18}';
    var user3Json=JSON.parse(user3);
    alert(user3Json);
    var user3String=JSON.stringify(user3Json);
    alert(user3String);*/

    var users=[{"name":"rella","age":18},{"name":"zhao","age":20}];
    for (var i = 0; i < users.length; i++) {
        alert(users[i].name);
    };
}

function getWeibo(){
    var weibo = $("#weibo");alert("11")
    $.ajax({
        type: "post",
        url: "http://222.196.200.79:8080/JsonDemo/user/weibo",
        async: "true",
        dataType: "json",//将字符串转换成所需形式
        success: function(data){
            alert(data);
            weibo.html("");
            var html= "";
            for (var i = 0; i < data.length; i++) {
               html = html+"<img src='"+data[i].image+"'></img>";
                html = html+"<h3>"+data[i].name+"</h3>";
                html = html+"<p>"+data[i].content+"</p>";
               
            };
            weibo.append(html);
        },
        error: function(data){}
    });
}
function sign(){
    var name=$("#name").val();
    var words=$("#words").val();
    $.ajax({
        type:"post",
        url:"http://222.196.200.79:8080/JsonDemo/user/sign",
        async:"true",
        dataType:"json",//将字符串转换成所需形式
        data:{
            name:name,
            words:words
        },
        success: function(data){
            var sign=$("#sign");
            alert(data);
            var html = "<h5>签到名次："+data.size+"</h5>";
                var html2 = "<p>签到内容："+data.words+"</p>";

                sign.append(html);
                sign.append(html2);
        },
        error: function(data){}
    });

}
