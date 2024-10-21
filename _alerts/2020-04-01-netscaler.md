---
title: RADIUS Challenge-Response broken in Netscaler 11.1.63.15 (Closed)
date: 2020-04-01
---

After upgrade to Citrix Netscaler 11.1.63.15, login with OTP using RADIUS challenge-response does not work. Users can enter userid and password and receive an OTP, but when the OTP is entered for verification login fails. Citrix have published a workaround for this. A similar issue has previously been reported in Netscaler 12.0.62.8 and was solved by upgrading to Netscaler 12.1.55.13.