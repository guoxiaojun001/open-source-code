try{clouda.lightInit({module:["account"]})}catch(e){}!function(e){function t(){for(var e=location.search.substr(1),t=e.split("&"),o={},i=0;i<t.length;i++){var n=t[i].split("=");o[n[0]]=n[1]}return o}function o(t){var o="undefined"!=typeof t.dataset,i=function(e,i){if(o){if("undefined"==typeof i)return t.dataset[e];t.dataset[e]=i}else{if("undefined"==typeof i)return t.getAttribute("data-"+e);t.setAttribute("data-"+e,i)}};if(!i("inited")){var n=i("bd_vote"),d=i("url")||location.href;n||(n=e.bd_vote_config.default_id,e.bd_vote_config.url&&(d=e.bd_vote_config.url));var s=c+"widget/social/like";if(s+="?app_id="+e.bd_vote_config.appid+"&third_source_id="+n+"&url="+encodeURIComponent(d),a.bd_vote){var r=a.bd_vote,_=i("bd_vote")||e.bd_vote_config.default_id;_==r&&(s+="&vote=1");try{if(-1!=l.search(/bd_vote=[^&]+/)){var f=l.replace(/bd_vote=[^&]+/,"");history.replaceState({},"",f)}}catch(u){}}"black"==e.bd_vote_config.style&&(s+="&style=black"),e.bd_vote_config.cssLink&&(s+="&cssLink=1");var b="vote"+(new Date).valueOf()+parseInt(100*Math.random()),p='<iframe id="'+b+'" style="border: none;width: 100%;height: 100%;display:none;" src="';p+=s+"&id="+b,p+='"></iframe>',t.innerHTML=p,i("inited",1)}}function i(t){var o=t.data;if("vote"==o.type)switch(t.stopPropagation(),o.method){case"login":var i=0;e.bd_vote_config.confirm&&(i=1);var n=location.href;n+=-1==n.search(/\?/)?"?bd_vote="+o.sign:"&bd_vote="+o.sign;var a=c+"widget/social/login/callback?u="+encodeURIComponent(n)+"&app_id="+e.bd_vote_config.appid;a=c+"/developer/static/1417097038916/social-widget/redirect.html?url="+encodeURIComponent(a),"undefined"!=typeof BLightApp?(clouda&&clouda.mbaas&&clouda.mbaas.account||clouda.lightInit({module:["account"]}),clouda.mbaas.account.bdLogin({scope:"",login_mode:0,login_type:"mobile",tpl:"lightwebapp",onsuccess:function(e){location.replace(n),console.log(e)},onfail:function(e){location.replace(n),console.log(e)}})):location.href=a;break;case"tips":d(o.msg);break;case"show":document.getElementById(o.id).style.display="block",e.bd_vote_config.stack&&e.bd_vote_config.stack();break;case"topic_id":try{e.bd_vote_config.callback(o.topic_id)}catch(t){}}}function n(){for(var t=document.querySelectorAll(".bd_vote"),n=0;n<t.length;n++)o(t[n]);e.bd_vote_config.inited||(e.addEventListener("message",i,!1),e.bd_vote_config.inited=1)}function d(e){if(document.getElementById("bd_v_tips"))document.getElementById("bd_v_tips_msg").innerHTML=e;else{var t=document.createElement("div");t.style.position="fixed",t.style.width="100%",t.style.textAlign="center",t.style.display="none",t.style.left="0",t.style.top="50%",t.id="bd_v_tips",t.innerHTML='<div id="bd_v_tips_msg" style="color: #ffffff;font-size: 16px;line-height: 22px;word-break: break-all;padding: 0 10px;text-align: left;border-radius: 5px;display: inline-block;background-color: #666666;max-width: 300px;">'+e+"</div>",document.getElementsByTagName("body")[0].appendChild(t)}document.getElementById("bd_v_tips").style.display="block",setTimeout(function(){document.getElementById("bd_v_tips")&&document.getElementsByTagName("body")[0].removeChild(document.getElementById("bd_v_tips"))},2e3)}var c=("https:"==document.location.protocol?"https:":"http:")+"//openapi.baidu.com/",a=t(),l=location.href;n(),e.bd_vote_config.getId=function(t){e.bd_vote_config.callback=t,"block"!=document.querySelectorAll(".bd_vote>iframe")[0].style.display?e.bd_vote_config.stack=function(){document.querySelectorAll(".bd_vote>iframe")[0].contentWindow.postMessage({method:"topic_id"},"*")}:document.querySelectorAll(".bd_vote>iframe")[0].contentWindow.postMessage({method:"topic_id"},"*")},e.bd_vote_config.vote=function(){"block"!=document.querySelectorAll(".bd_vote>iframe")[0].style.display?e.bd_vote_config.stack=function(){document.querySelectorAll(".bd_vote>iframe")[0].contentWindow.postMessage({method:"vote"},"*")}:document.querySelectorAll(".bd_vote>iframe")[0].contentWindow.postMessage({method:"vote"},"*")}}(window);