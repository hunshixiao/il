"use strict";function render(n){n.forEach(function(n){console.log(n.title)})}ajax({url:"/api/login",success:function(n){render(n.data)}});