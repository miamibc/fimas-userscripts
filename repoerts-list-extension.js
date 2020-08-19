// ==UserScript==
// @name         Fimas extensions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds 'eye' button to DM list of reports, where it's not exists
// @author       Sergei Miami <miami@blackcrystal.net>
// @match        https://fimas.bisnode.ee/reports/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    $('.m-widget11 table .btn-group span').each(function(){
        if ($(this).children().length == 2){
            var id = $(this).children().last().data('id');
            $(this).prepend('<a href="https://fimas.bisnode.ee/report/fill/'+id+'" class="btn m-btn m-btn--icon m-btn--icon-only"><i class="fa fa-eye" style="color:gray">  </i></a>');
        }
    });

})();
