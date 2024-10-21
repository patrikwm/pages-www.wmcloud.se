---
layout: default
title: "Alerts & FAQ"
permalink: /support/administrators/faq/
---
<div class="container" id="content-wrapper">
    <div class="row">
        <section id="content" class="main">
            <div class="breadcrumbs span12"></div>
            <div class="span12">
                <h1>Alerts &#038; FAQ</h1>
            </div> <!-- /.span12 -->

            <div class="span9">
                <div class="entry-content">
                    <br><br>
                    {% assign sorted_alerts = site.alerts | sort: 'date' | reverse %}
                    {% for alert in sorted_alerts %}
                    <h2>
                        <span class="ez-toc-section" id="Mideye-NPSRADIUSstopsworkingafterKB5040437update"></span>{{
                        alert.title }}<span class="ez-toc-section-end"></span>
                    </h2>
                    <p><em>{{ alert.date | date: "%Y-%m-%d %H:%M" }}</em></p>
                    <p>{{ alert.content }}</p>
                    <span class="" style="display:block;clear:both;height: 0px;padding-top: 15px;border-top-width:0px;border-bottom-width:0px;background:orange;
                          margin-top:20px;
                          margin-bottom:20px"></span>
                    {% endfor %}
                </div> <!-- /.entry-content -->
            </div> <!-- /.span9 -->
        </section><!-- #content -->

        <aside class="sidebar span3">
            <div class="sidebar-container subnav">
                <ul class="child-sidebar-menu">
                    <li class="page_item"><a href="/support/users/">End users</a></li>
                    <li class="page_item current_page_parent"><a href="/support/administrators/">Administrators</a></li>
                </ul>
            </div><!-- End .child-sidebar-menu -->
        </aside>
    </div> <!-- /.row -->
</div>