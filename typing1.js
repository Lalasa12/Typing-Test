<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="typing.css">
    <title>TypingTest</title>
</head>
<body>
   <div id="main1">
    <!-- <div >
        <button id="start" onclick="start()">Start the Test</button>
    </div> -->
    <div id="timer">
        <span class="min">01</span>:<span class="sec">00</span>
    </div>
    <div id="test_div">
        <div id="para"></div>
        <div class="inp">
            <input id="input" type="text" placeholder="Type here....." oninput="start()"/>
        </div>
    </div>

    <div id="control">
        <button onclick="restart()">Restart</button>
        <button onclick="exit()">Exit</button>
    </div>
   </div> 

   <script type="text/javascript" src="typing.js"></script>
</body>
</html>