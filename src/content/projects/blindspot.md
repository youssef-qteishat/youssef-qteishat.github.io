---
title: Driver Alertness Monitoring - AvenueE Transfer Bridge Project
summary: Arduino-based blind-spot and obstacle warning system using ultrasonic sensors, LEDs, and a buzzer
date: 2022-09-09
thumbnail: ../../thumbnails/blindspot.png
videoId: a3AaDCIdurY
videoPlatform: "youtube"
deliverablesUrl: https://ucdavis.app.box.com/s/af5udukdkagrfrwzpak0co31f01yrb0k
tags: ["Arduino", "Embedded Systems", "Ultrasonic Sensors", "Team Project"]
featured: true
---

Built with Jonny De Haro and Parteek Singh as part of the AvenueE Transfer Bridge program at UC Davis.

### Inspiration

- 15% of reported accidents are due to distracted driving (National Center for Statistics and Analysis, _Distracted Driving 2019_, NHTSA, 2021)
- Blind spots on either side of a car fall outside what the mirrors and peripheral vision can cover
- A driver alertness system can redirect the driver's attention to where it's needed

### What it does

- Ultrasonic sensors on the front and sides of the vehicle measure the distance to nearby objects
- Side LEDs light up when an object comes within 8 cm, warning the driver about something in their blind spot
- A buzzer sounds when the front sensor detects an object within 8 cm

### How we built it

1. Collected distance data from the ultrasonic sensors
2. Lit up the side LEDs when an object was within 8 cm
3. Set up the buzzer to signal when the front sensor detected an object within 8 cm
4. Prototyped and tested the circuit in the Wokwi online simulator
5. Implemented a working model with an Arduino Uno
6. Tested the model with vehicles approaching from the front and sides, and drifting into the side lanes

### Hardware

- **Ultrasonic sensors:** a transmitter, receiver, and control circuit. Each emits a 40 kHz sound wave, reads the wave reflected off an object, and computes distance as (round-trip time × speed of sound) / 2
- **LEDs:** 5 mm LEDs, with resistors to limit current so they don't overheat and fail
- **Buzzer:** plays a 261 Hz tone

### Results

- More awareness of the road for the driver
- Lower likelihood of collisions from vehicles in the blind spots
