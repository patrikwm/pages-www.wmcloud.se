---
layout: default
title: Android ghost SMS-OTPs
permalink: /support/users/mobilephone-users/android-ghost-sms-otps/
---
<div class="container" id="content-wrapper">
    <div class="row">
        <section id="content" class="main">
            <div class="breadcrumbs span12"></div>
            <div class="span12">
                <h1>Android ghost SMS-OTPs</h1>
            </div> <!-- /.span12 -->
            <div class="span9">
                <div class="entry-content">
                    <p>With Android 4.4 (KitKat) and 5.0/5.1 (Lollipop), users can experience reception of SMS-OTPs at
                        odd times, without having intiated any login. The events are not visibile in the Mideye Server
                        or central system logs. These are actually old flash/pop-up SMS that are cached in the phone
                        operating system and re-appear at seemingly random times, often hours or days after the initial
                        reception.</p>
                    <p>When receiving an OTP as a flash/pop-up SMS, the user is given two alternatives: Cancel or Save.
                        If none of these is selected, and the user instead presses the Home button, the message
                        dissappears but remains cached in the operating system. It may then re-appear again later. If
                        the phone is configured to use a messaging app, e.g. Hangouts, the OTP message may also
                        automatically be converted from flash/pop-up to ordinary inbox SMS. It will then be given a
                        timestamp that corresponds to the time of re-appearance, not the initial time of reception.
                        Hence, the timestamp will not match server logs and central system OTP delivery logs.</p>
                    <p>The get rid of the problem, re-start the phone (power-off/power on) to clear the cache.
                        Preferably, select the default Android messaging app for SMS instead of Hangouts or other
                        messaging app. When receiving OTPs, make sure to always select Cancel or Save.</p>
                </div> <!-- /.entry-content -->
            </div> <!-- /.span9 -->
        </section><!-- #content -->
        <aside class="sidebar span3">
            <div class="sidebar-container subnav"> <!-- advanced-sidebar-menu/core-template -->
                <ul class="child-sidebar-menu">
                    <li class="page_item page-item-182 current_page_ancestor has_children">
                        <a href="/support/users/">End users</a>
                        <ul class="grandchild-sidebar-menu level-0 children">
                            <li class="page_item page-item-206 has_children"><a
                                    href="/support/users/mobilephone-users/">Mobile phone users</a></li>
                            <li class="page_item page-item-209 current_page_ancestor current_page_parent has_children">
                                <a href="/support/users/mideye/">Mideye+</a>
                                <ul class="grandchild-sidebar-menu level-1 children">
                                    <li class="page_item page-item-294"><a
                                            href="/support/users/mideye/activate-mideye/">Activate Mideye+</a></li>
                                    <li class="page_item page-item-296"><a
                                            href="/support/users/mideye/login-mideye/">Login with Mideye+</a></li>
                                    <li class="page_item page-item-298"><a
                                            href="/support/users/mideye/de-activating-mideye/">De-activate Mideye+</a>
                                    </li>
                                    <li class="page_item page-item-764 current_page_item"><a
                                            href="/support/users/mideye/android-ghost-sms-otps/"
                                            aria-current="page">Android ghost SMS-OTPs</a></li>
                                    <li class="page_item page-item-2845"><a
                                            href="/support/users/mideye/mideye-app/">Download Mideye+</a></li>
                                </ul>
                            </li>
                            <li class="page_item page-item-211 has_children"><a
                                    href="/support/users/token-card-users/">Token card users</a></li>
                        </ul>
                    </li>
                    <li class="page_item page-item-172 has_children"><a
                            href="/support/administrators/">Administrators</a></li>
                </ul>
                <!-- End .child-sidebar-menu -->
            </div>
        </aside>
    </div> <!-- /.row-fluid -->
</div>