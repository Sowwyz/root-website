const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');
// Sowwyz#1337
// Sowwyz#1337
const shutdownText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will shutdown now!`;

const rebootText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will reboot now!`;
// Sowwyz#1337
// Sowwyz#1337

function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}
// Sowwyz#1337
function handleCommand(command) {
    if (command === 'help') {
        const helpText = `Available commands:\n
        help - displays this help message\n
        clear - clears the screen\n
        whosowwyz - displays information about the user\n
        about - displays information about me\n
        projects - displays a list of my projects\n
        contact - displays my contact information\n
        sourcecode - displays the source code of this website\n
        poweroff - turns off the computer\n
        reboot - restarts the computer\n`
        output.innerHTML += helpText;
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'whosowwyz') {
        output.innerHTML += "root"
    } else if (command === 'about') {
        output.innerHTML += "I am Sowwyz, 16 yo developer from Turkey. I code in Java, C#, HTML, CSS. I also like Windows, play games and i know some things about audio. I am currently learning ethical hacking and thats it!"
    } else if (command === 'projects') {
        output.innerHTML += "into see more projects check out my github: https://github.com/Sowwyz"
    } else if (command === 'contact') {
        output.innerHTML += "for contact you can use:\n\nDiscord: Sowwyz#1337 \n\n"
    } else if (command === 'sourcecode') {
        window.location.replace('https://github.com/Sowwyz');
    } else if (command === 'poweroff') {
        output.innerHTML += shutdownText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://github.com/Sowwyz/');
        }, 1000);
    } else if (command === 'reboot') {
        output.innerHTML += rebootText;
        setTimeout(function() {
            window.location.replace('https://github.com/Sowwyz/');
        }, 1000);

    } else {
        const errorText = `Command '${command}' not found. Type 'help' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}
// Sowwyz#1337
commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});
// Sowwyz#1337
commandLine.focus();
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337
// Sowwyz#1337