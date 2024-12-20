+++
title = "LED Christmas Tree"
description = "Addressable LED strip configured to function as a 3D display"
date = "2017-12-25"
[taxonomies]
tags = ["code"]
[extra]
image = "main.png"
+++

A Christmas tree is decorated with an addressable RGB led strip. The coordinates of the lights are calculated using 2 cameras. Each year during Christmas holidays I tinker with this festive low resolution screen to display new 3D visuals.

[View the source code on Github](https://github.com/mollikka/LedChristmas)

{{
    figure(
        img="arduino.png"
        description="The LEDs are controlled by an Arduino Uno.")
}}

## Sample code

```c
void coolball_presentation(int led, unsigned long time) {

  const int centerx = 50;
  const int centery = 50;
  const int centerz = 70;

  int x = XCOORD[led];
  int y = YCOORD[led];
  int z = ZCOORD[led];

  float ballx = sin(float(time)/1000)*50 + centerx;
  float bally = cos(float(time)/600)*50 + centery;
  float ballz = sin(float(time)/760)*50 + centerz;

  float distancesq = pow(ballx-x, 2) +
                    pow(bally-y, 2) +
                    pow(ballz-z, 2);

  leds[led] = CHSV( max(0,200-0.2*distancesq),
                    200,
                    max(0,200-0.05*distancesq));
}
```
