# Getting_Started_With_ESP32
An explaination about how to setup with ESP32.

<h2>What is ESP32</h2>
ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. (Wikipedia)

<br>SPECS comparison between ESP32 & ESP8266 & ADRUINO UNO R3
![comparison between ESP32 & ESP8266 & ADRUINO UNO R3](https://content.instructables.com/ORIG/FCF/P4LF/JDYUVM51/FCFP4LFJDYUVM51.png?auto=webp&fit=bounds&frame=1&width=694)

<h3>Now i will list the steps of setup the ESP32:</h3>
1 - First you plug the ESP32 chip by the Micro-USB cable to connect to a pc.<br>
2 - Then open ADRUINO IDE to link the ESP32 package in the IDE By going to FILE->PREFERENCES and add this URL to the Additional Board Manager (https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json).<br>
    IF YOU DON'T HAVE ADRUINO IDE DOWNLOAD IT FROM THIS LINK --> https://www.arduino.cc/en/software<br>
3 - Then go to TOOLS => BOARD => BOARDS MANAGER then search for ESP32 and click install.<br>
4 - After that you need to specify which Board of ESP32 you want to work on By going to TOOLS => BOARDS, then find the board you have from the list.<br>
5 - Enable the port COM from TOOLS => PORT.<br>
6 - Then test that ADRUINO IDE examples by going to FILE => EXAMPLES => and select an example code to try it out.

<h3>Finally this is only an explanation of how to setup ESP32 chip and make sure it works and ready for programming using ARDUINO IDE.</h3>

<h1>Dev. Ahmed Wasel Alharbi</h1>

<h2>References</h2>
- https://en.wikipedia.org/wiki/ESP32#References (Wikipedia)<br>
- https://www.youtube.com/watch?v=xPlN_Tk3VLQ (DroneBot Workshop)<br>
- https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/ (Random Nerd
