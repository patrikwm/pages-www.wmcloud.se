---
title: Mideye - NPS RADIUS stops working after KB5040437 update
date: 2024-10-02 12:00
---

This affects customers using MS-CHAPv2 (not PAP). After the KB5040437 security upgrade, the RADIUS communication between MS NPS and Mideye stops working for older versions of the Mideye server (releases up to and including 6.4.2). The problem was initially addressed in Mideye server releases 6.4.3 and 6.4.4. An additional fix to also handle the RADIUS challenge-response dialog is introduced in 6.4.5. Customers are recommended to postpone deployment of KB5040437 in the NPS until the Mideye server has been updated to 6.4.5.