---
layout: default
title: Authentication Service
permalink: /authentication-service/
---
<style>
  /* Inline CSS specific for this page */
#header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 40px 0;
  z-index: 10;
  font-family: "Montserrat", sans-serif;
  font-size: 0.882em;
  text-transform: uppercase;
  color: #133c52;
  z-index: 9999;
  -webkit-transition: top 0.6s;
  -moz-transition: top 0.6s;
  transition: top 0.6s;
}

.home #header {
  color: #fff;
  position: absolute;
  background: transparent;
}

.sticky #header {
  position: fixed;
  background: #fff;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 0;
  top: 0;
}
.inlinesvg #header .logo {
  background-image: url("/assets/images/svg/mideye-logo.svg");
}
.inlinesvg .sticky #header .logo,
.inlinesvg .sticky.home #header .logo {
  background-image: url("/assets/images/svg/mideye-logo.svg");
}


  /* Additional page-specific styles can go here */
</style>

<div class="container" id="content-wrapper">
    <div class="row">
        <section id="content" class="main">
            <div class="breadcrumbs span12"></div>
            <div class="span12">
                <h1>Authentication service</h1>
            </div> <!-- /.span12 -->

            <div class="span9">
                <div class="entry-content">
                    <p>Mideye offers cost-efficient and user-friendly authentication of remote users, primarily
                        utilizing the mobile phone as the second layer of security.</p>
                    <p dir="LTR" align="LEFT">The Mideye Service comprises two main components: a general-purpose
                        authentication engine (Mideye Server) and a central cloud-based authentication service. The
                        Mideye Server is installed at customer premises and acts as a back-end RADIUS server for access
                        products such as VPNs, firewalls, portals and cloud applications (see our <a
                            title="Integration examples" href="/authentication-service/integration-examples/"
                            target="_blank" rel="noopener">list of verified integrations</a>). To minimize the
                        provisioning and administrative burden, the Mideye Server can read user data from existing LDAP
                        repositories (e.g. Active Directory) without requiring any schema changes.</p>
                    <p dir="LTR" align="LEFT">The Mideye Server connects to the central authentication service via a
                        secured internet connection. The cloud service includes an OTP (one-time password) delivery
                        service, provisioning and life-cycle management of apps for smartphone users, as well as a token
                        management and logistics service for users that cannot use a mobile phone for login.</p>
                    <p dir="LTR" align="LEFT">The following login modes are supported:</p>
                    <ul>
                        <li><strong>SMS-OTP</strong>: For users with GSM/3G/4G compliant phones, Mideye offers login
                            with OTPs delivered in real-time via the mobile network. The Mideye Services maintains
                            dedicated direct connections to leading mobile operators for optimal performance,
                            reliability and redundancy. Click <a title="Mobile network list"
                                href="/authentication-service/global-coverage/mobile-network-list/" target="_blank"
                                rel="noopener">here</a> for information about our global coverage.</li>
                        <li><strong>APP-OTP</strong>: For users with smartphones (Android and iPhone), the Mideye+
                            solution offers login also when outside of network coverage. The central service includes
                            app provisioning and life-cycle management. Smartphone users can opt to activate and
                            de-activate Mideye+ at their own discretion without requiring any additional provisioning in
                            the user repository.</li>
                        <li><strong>Token-OTP</strong>: As an alternative to the mobile phone, authentication with OTPs
                            from token cards is fully integrated in the Mideye Service. Token cards are shipped to
                            end-users world-wide, and only the corresponding token serial number is required in the user
                            repository.</li>
                    </ul>
                </div> <!-- /.entry-content -->
            </div> <!-- /.span9 -->
        </section><!-- #content -->

        <aside class="sidebar span3">
            <div class="sidebar-container subnav">
                <ul class="child-sidebar-menu">
                    <li class="page_item page-item-57"><a
                            href="/authentication-service/integration-examples/">Integration examples</a></li>
                    <li class="page_item page-item-63 has_children"><a
                            href="/authentication-service/global-coverage/">Global coverage</a></li>
                    <li class="page_item page-item-279"><a href="/authentication-service/mideye/">Mideye+</a></li>
                </ul>
            </div><!-- End .child-sidebar-menu -->
        </aside>
    </div> <!-- /.row-fluid -->
</div>
<br>
<br>
<br>

