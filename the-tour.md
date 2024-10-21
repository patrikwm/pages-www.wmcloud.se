---
layout: default
title: Mideye Tour
permalink: /the-tour/
---
<div class="reveal-portrait-info">
    <div class="info-content">
        <div class="icon icon-landscape"></div>
        <p>Turn device in landscape mode</p>
    </div> <!-- /.info-content -->
</div> <!-- /.reveal-portrait-info -->
<div class="reveal">
    <div class="slides">
        <section class="text-center" data-state="state--first-slide">
            <h2 class="tour-title">Mideye Tour</h2>
            <h3>Choose user example to start the tour.</h3>
            <div class="btn-group">
                <a href="#" class="btn slide-to" data-reveal-slide-to="1">Standard phone</a>
                <a href="#" class="btn slide-to" data-reveal-slide-to="7">Smartphone</a>
                <a href="#" class="btn slide-to" data-reveal-slide-to="23">Token card</a>
            </div> <!-- /.btn-group -->
        </section>
        <section class="text-center" data-state="state--standard-phone">
            <h2>Login with standard phone</h2>
            <div class="caption">
                <p>Login with one-time passwords (OTPs) delivered in real time via the mobile network.</p>
            </div> <!-- /.caption -->
            <div class="standard-phone-icon"></div>
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user enters login credentials.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/tour-enter-credentials.png" alt="tour-enter-credentials">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user initiates login by entering user name and password.</li>-->
                        <li class="animated obj0">The user initiates login by entering user name and password.</li>
                        <!--<li class="fragment fade-in">The login credentials are forwarded via a RADIUS request to the Mideye Server.</li>-->
                        <li class="animated obj1">The login credentials are forwarded via a RADIUS request to the Mideye
                            Server.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies login credentials against a user repository (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>-->
                        <li class="animated obj2">The Mideye Server verifies login credentials against a user repository
                            (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>
                        <!--<li class="fragment fade-in">The Mideye server generates a random session-specific OTP (one-time password).</li>-->
                        <li class="animated obj3">The Mideye server generates a random session-specific OTP (one-time
                            password).</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The one-time password is sent to the user's phone.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-phone.png" alt="mideye-phone">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is forwarded via a secured Internet connection to the central Mideye service.</li>-->
                        <li class="animated obj0">The OTP is forwarded via a secured Internet connection to the central
                            Mideye service.</li>
                        <!--<li class="fragment fade-in">The Mideye service performs a handshake with the mobile phone and the OTP is displayed to the user.</li>-->
                        <li class="animated obj1">The Mideye service performs a handshake with the mobile phone and the
                            OTP is displayed to the user.</li>
                        <!--<li class="fragment fade-in">When the handshake with the mobile phone is finished, the Mideye Server sends a RADIUS access challenge to prompt the user for an OTP.</li>-->
                        <li class="animated obj2">When the handshake with the mobile phone is finished, the Mideye
                            Server sends a RADIUS access challenge to prompt the user for an OTP.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user enters the OTP for verification.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-enter-otp.png" alt="mideye-enter-otp">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is entered by the user and forwarded to the Mideye Server as a response to the access challenge.</li>-->
                        <li class="animated obj0">The OTP is entered by the user and forwarded to the Mideye Server as a
                            response to the access challenge.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies the OTP.</li>-->
                        <li class="animated obj1">The Mideye Server verifies the OTP.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Access granted</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-access-granted.png" alt="mideye-access-granted">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">After verifying that the correct OTP has been entered, the Mideye Server returns an access accept.</li>-->
                        <li class="animated obj0">After verifying that the correct OTP has been entered, the Mideye
                            Server returns an access accept.</li>
                        <!--<li class="fragment fade-in">The user is granted access to the protected service.</li>-->
                        <li class="animated obj1">The user is granted access to the protected service.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section class="text-center" data-state="state--change-user-example">
        </section>
        <section class="text-center" data-state="state--user-with-smartphone">
            <h2 class="tour-title">Login with smartphone</h2>
            <div class="caption">
                <p>Users with smartphones (Android, iPhone, Windows Phone) can choose to download the Mideye+ app. This
                    enables login also when the phone is not reachable via the mobile network.</p>
            </div> <!-- /.caption -->
            <div class="btn-group">
                <a href="#" class="btn slide-to" data-reveal-slide-to="8">Activation</a>
                <a href="#" class="btn slide-to" data-reveal-slide-to="11">Login with network coverage</a>
                <a href="#" class="btn slide-to" data-reveal-slide-to="16">Login outside of network coverage</a>
            </div> <!-- /.btn-group -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Activation of Mideye+, step 1</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/activation-step-1.png" alt="activation-step-1">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">After downloading and starting the Mideye + app, the user is prompted to enter the mobile number.</li>-->
                        <li class="animated obj0">After downloading and starting the Mideye + app, the user is prompted
                            to enter the mobile number.</li>
                        <!--<li class="fragment fade-in">The mobile phone contacts the Mideye central service to register the phone number as pending for Mideye+ activation.</li>-->
                        <li class="animated obj1">The mobile phone contacts the Mideye central service to register the
                            phone number as pending for Mideye+ activation.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Activation of Mideye+, step 2</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/tour-enter-credentials.png" alt="tour-enter-credentials">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user initiates login to the protected service.</li>-->
                        <li class="animated obj0">The user initiates login to the protected service.</li>
                        <!--<li class="fragment fade-in">The login triggers an activation SMS which sent to the mobile phone, whereby the Mideye+ app contacts the Mideye central service to finalise the activation.</li>-->
                        <li class="animated obj1">The login triggers an activation SMS which sent to the mobile phone,
                            whereby the Mideye+ app contacts the Mideye central service to finalise the activation.</li>
                        <!--<li class="fragment fade-in">The user is marked as activated for Mideye+ in the central service, and future logins proceed according to the Mideye+ schema.</li>-->
                        <li class="animated obj2">The user is marked as activated for Mideye+ in the central service,
                            and future logins proceed according to the Mideye+ schema.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section class="text-center" data-state="state--change-user-example-smartphone">
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Login with network coverage.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/tour-enter-credentials.png" alt="tour-enter-credentials">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user initiates login by entering user name and password.</li>-->
                        <li class="animated obj0">The user initiates login by entering user name and password.</li>
                        <!--<li class="fragment fade-in">The login credentials are forwarded via a RADIUS request to the Mideye Server.</li>-->
                        <li class="animated obj1">The login credentials are forwarded via a RADIUS request to the Mideye
                            Server.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies login credentials against a user repository (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>-->
                        <li class="animated obj2">The Mideye Server verifies login credentials against a user repository
                            (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>
                        <!--<li class="fragment fade-in">The Mideye server generates a random session-specific OTP (one-time password).</li>-->
                        <li class="animated obj3">The Mideye server generates a random session-specific OTP (one-time
                            password).</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The one-time password is sent to the user's phone.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-phone.png" alt="mideye-phone">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is forwarded via a secured Internet connection to the central Mideye service.</li>-->
                        <li class="animated obj0">The OTP is forwarded via a secured Internet connection to the central
                            Mideye service.</li>
                        <!--<li class="fragment fade-in">The Mideye service identifies the phone number as belonging to a Mideye+ user and encrypts the password with the corresponding app key. The handshake is performed with the mobile phone / app, and the OTP is displayed to the user.</li>-->
                        <li class="animated obj1">The Mideye service identifies the phone number as belonging to a
                            Mideye+ user and encrypts the password with the corresponding app key. The handshake is
                            performed with the mobile phone / app, and the OTP is displayed to the user.</li>
                        <!--<li class="fragment fade-in">When the handshake with the mobile phone is finished, the Mideye Server sends a RADIUS access challenge to prompt the user for an OTP.</li>-->
                        <li class="animated obj2">When the handshake with the mobile phone is finished, the Mideye
                            Server sends a RADIUS access challenge to prompt the user for an OTP.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user enters the OTP for verification.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-enter-otp.png" alt="mideye-enter-otp">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is entered by the user and forwarded to the Mideye Server as a response to the access challenge.</li>-->
                        <li class="animated obj0">The OTP is entered by the user and forwarded to the Mideye Server as a
                            response to the access challenge.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies the OTP.</li>-->
                        <li class="animated obj1">The Mideye Server verifies the OTP.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Access granted.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-access-granted.png" alt="mideye-access-granted">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">After verifying that the correct OTP has been entered, the Mideye Server returns an access accept.</li>-->
                        <li class="animated obj0">After verifying that the correct OTP has been entered, the Mideye
                            Server returns an access accept.</li>
                        <!--<li class="fragment fade-in">The user is granted access to the protected service.</li>-->
                        <li class="animated obj1">The user is granted access to the protected service.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section class="text-center" data-state="state--change-user-example-smartphone">
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Login <em>outside</em> of network coverage.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/tour-enter-credentials.png" alt="tour-enter-credentials">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user initiates login by entering user name and password.</li>-->
                        <li class="animated obj0">The user initiates login by entering user name and password.</li>
                        <!--<li class="fragment fade-in">The login credentials are forwarded via a RADIUS request to the Mideye Server.</li>-->
                        <li class="animated obj1">The login credentials are forwarded via a RADIUS request to the Mideye
                            Server.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies login credentials against a user repository (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>-->
                        <li class="animated obj2">The Mideye Server verifies login credentials against a user repository
                            (e.g. Active Directory), and the user's mobile phone number is retrieved.</li>
                        <!--<li class="fragment fade-in">The Mideye server generates a random session-specific OTP (one-time password).</li>-->
                        <li class="animated obj3">The Mideye server generates a random session-specific OTP (one-time
                            password).</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Delivery attempt to mobile phone</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/no-service.png" alt="no-service">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is forwarded via a secured Internet connection to the central Mideye service.</li>-->
                        <li class="animated obj0">The OTP is forwarded via a secured Internet connection to the central
                            Mideye service.</li>
                        <!--<li class="fragment fade-in">The Mideye service identifies the phone number as belonging to a Mideye+ user and tries to establish contact with the phone via the mobile network. When this fails, the central service responds back to the Mideye Server that the phone is out of reach.</li>-->
                        <li class="animated obj1">The Mideye service identifies the phone number as belonging to a
                            Mideye+ user and tries to establish contact with the phone via the mobile network. When this
                            fails, the central service responds back to the Mideye Server that the phone is out of
                            reach.</li>
                        <!--<li class="fragment fade-in">The Mideye Server generates a random challenge and returns this with the RADIUS access challenge to prompt the user for a response.</li>-->
                        <li class="animated obj2">The Mideye Server generates a random challenge and returns this with
                            the RADIUS access challenge to prompt the user for a response.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user is prompted for a response to an access challenge.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/response-challenge.png" alt="response-challenge">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">Since the phone is not reachable via the mobile network, the user is instead requested to manually sign an access challenge with the Mideye+ app.</li>-->
                        <li class="animated obj0">Since the phone is not reachable via the mobile network, the user is
                            instead requested to manually sign an access challenge with the Mideye+ app.</li>
                        <!--<li class="fragment fade-in">The user manually starts the Mideye+ app on the phone and enters the challenge.</li>-->
                        <li class="animated obj1">The user manually starts the Mideye+ app on the phone and enters the
                            challenge.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user signs the challenge on the phone.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/enter-challenge.png" alt="enter-challenge">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user manually starts the app on the phone and enters the challenge from the login screen. The challenge is signed with the secret key associated with the app, and a session-specific one-time password is calculated.</li>-->
                        <li class="animated obj0">The user manually starts the app on the phone and enters the challenge
                            from the login screen. The challenge is signed with the secret key associated with the app,
                            and a session-specific one-time password is calculated.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">A response to the challenge is generated by the Mideye+ app.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-phone.png" alt="mideye-phone">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The Mideye+ app responds to the access challenge with a one-time password.</li>-->
                        <li class="animated obj0">The Mideye+ app responds to the access challenge with a one-time
                            password.</li>
                        <!--<li class="fragment fade-in">The OTP is manually entered by the user and forwarded to the Mideye Server as a response to the access challenge.</li>-->
                        <li class="animated obj1">The OTP is manually entered by the user and forwarded to the Mideye
                            Server as a response to the access challenge.</li>
                        <!--<li class="fragment fade-in">The Mideye Server forwards the challenge-response pair to the central Mideye service for verification.</li>-->
                        <li class="animated obj2">The Mideye Server forwards the challenge-response pair to the central
                            Mideye service for verification.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Access granted.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-access-granted.png" alt="mideye-access-granted">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">After the central service has successfully verified the challenge-response pair, the Mideye Server returns an access accept.</li>-->
                        <li class="animated obj0">After the central service has successfully verified the
                            challenge-response pair, the Mideye Server returns an access accept.</li>
                        <!--<li class="fragment fade-in">The user is granted access to the protected service.</li>-->
                        <li class="animated obj1">The user is granted access to the protected service.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section class="text-center" data-state="state--change-user-example-smartphone">
        </section>
        <section class="text-center">
            <h2>Login with token card</h2>
            <div class="caption">
                <p>Users that cannot use a mobile phone for login can instead obtain one-time passwords (OTPs) from a
                    token card.</p>
            </div> <!-- /.caption -->
            <div class="standard-phone-icon"></div>
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Token card logistics service.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/token-card.png" alt="token-card">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">For users that are unable to use a mobile phone for login, a token card can be sent from the Mideye central service.</li>-->
                        <li class="animated obj0">For users that are unable to use a mobile phone for login, a token
                            card can be sent from the Mideye central service.</li>
                        <!--<li class="fragment fade-in">The serial number of the token card is registered in the user’s entry in the user repository.</li>-->
                        <li class="animated obj1">The serial number of the token card is registered in the user’s entry
                            in the user repository.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Login with token card.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/tour-enter-credentials.png" alt="tour-enter-credentials">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The user initiates login by entering user name and password.</li>-->
                        <li class="animated obj0">The user initiates login by entering user name and password.</li>
                        <!--<li class="fragment fade-in">The login credentials are forwarded via a RADIUS request to the Mideye Server.</li>-->
                        <li class="animated obj1">The login credentials are forwarded via a RADIUS request to the Mideye
                            Server.</li>
                        <!--<li class="fragment fade-in">The Mideye Server verifies login credentials against a user repository (e.g. Active Directory), and the serial number of the user’s token card is retrieved.</li>-->
                        <li class="animated obj2">The Mideye Server verifies login credentials against a user repository
                            (e.g. Active Directory), and the serial number of the user’s token card is retrieved.</li>
                        <!--<li class="fragment fade-in">The Mideye server responds with a RADIUS access challenge to prompt the user of a one-time password.</li>-->
                        <li class="animated obj3">The Mideye server responds with a RADIUS access challenge to prompt
                            the user of a one-time password.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">User generates a one-time password from the token card.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/token-otp.png" alt="token-otp">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">By pressing the button on the token card, the user generates an event- and time-synchronous one-time password.</li>-->
                        <li class="animated obj0">By pressing the button on the token card, the user generates an event-
                            and time-synchronous one-time password.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">The user enters the OTP for verification.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-enter-otp.png" alt="mideye-enter-otp">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">The OTP is entered by the user and forwarded to the Mideye Server as a response to the access challenge.</li>-->
                        <li class="animated obj0">The OTP is entered by the user and forwarded to the Mideye Server as a
                            response to the access challenge.</li>
                        <!--<li class="fragment fade-in">The Mideye Server forwards the OTP along with the serial number of the token card for verification in the central Mideye Service.</li>-->
                        <li class="animated obj1">The Mideye Server forwards the OTP along with the serial number of the
                            token card for verification in the central Mideye Service.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section>
            <div class="row">
                <div class="small-12 columns">
                    <h2 class="tour-second-title">Access granted.</h2>
                </div>
                <div class="small-6 columns">
                    <img src="/assets/images/the-tour/mideye-access-granted.png" alt="mideye-access-granted">
                    <!-- icon here -->
                </div> <!-- /.small-6 -->
                <div class="small-6 columns">
                    <ul>
                        <!--<li class="fragment fade-in">After the central service has successfully verified the one-time password, the Mideye Server returns an access accept.</li>-->
                        <li class="animated obj0">After the central service has successfully verified the one-time
                            password, the Mideye Server returns an access accept.</li>
                        <!--<li class="fragment fade-in">The user is granted access to the protected service.</li>-->
                        <li class="animated obj1">The user is granted access to the protected service.</li>
                    </ul>
                </div> <!-- /.small-6 -->
            </div> <!-- /.row -->
        </section>
        <section class="text-center" data-state="state--change-user-example">
        </section>
    </div> <!-- /.slides -->
</div> <!-- /.reveal -->

<div class="reveal-footer">
    <ul id="bulletPoints">
    </ul>
    <div id="start-btn" class="btn btn-important next-fragment">Start</div>
    <div id="back-btn" class="btn btn-important prev-fragment">
        <i class="fa fa-arrow-left btn-icon"></i><img class="default" src="/assets/images//arrow-left.png"
            alt=""><img class="hover" src="/assets/images//arrow-left-hover.png" alt="">
    </div>
    <div id="next-btn" class="btn btn-important next-fragment">Next<i class="fa fa-arrow-right btn-icon"></i> <img
            class="default" style="float: right; margin-top: 6px" src="/assets/images//arrow-right.png"
            alt=""><img class="hover" style="float: right; margin-top: 6px"
            src="/assets/images//arrow-right-hover.png" alt="">
    </div>
    <br>

</div> 