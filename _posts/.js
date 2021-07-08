<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB</title>
</head>
<body>
    <h1><a href="index.html">WEB</a></h1>
    <script>
        var _body = document.querySelector('body');

        function toNight(){
            var as = document.querySelectorAll('a');
            _body.style.backgroundColor = 'black';
            _body.style.color = 'white';

            var i=0;
            while(i<as.length){
                as[i].style.color = 'white';
                i = i + 1;
            }
        }

        function toDay(){
            var as = document.querySelectorAll('a');
            _body.style.backgroundColor = 'white';
            _body.style.color = 'black';

            var i=0;
            while(i<as.length){
                as[i].style.color = 'black';
                i = i + 1;
            }
        }
    </script>

    <input type="button" value="night" onclick="
    // 만약 이 버튼의 value 값이 night라면
        if (this.value === 'night') {
            toNight();
            this.value = 'day';
        } else {
        // 그렇지 않다면
            toDay();
            this.value = 'night';
        }
    ">
    <ol>
        <li><a href="1.html">html</a></li>
        <li><a href="2.html">css</a></li>
        <li><a href="3.html">javascript</a></li>
    </ol>    
    <h2>Welcome</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit deserunt consequuntur quasi repellendus facilis voluptate numquam blanditiis. Amet in recusandae cupiditate rerum quibusdam enim voluptate placeat impedit quo ipsam?
</body>
</html>
