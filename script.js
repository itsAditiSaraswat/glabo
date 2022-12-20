var token = config.MY_API_TOKEN;

document.getElementById("frame").src = `https://webchat.botframework.com/embed/MyInstance-001-bot?s=${token}`;
document.getElementById("frame").style.backgroundColor = 'red';
