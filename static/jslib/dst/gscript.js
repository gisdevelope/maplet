function select_sub_tag(html2){$("#showCnt").load(html2)}function js_update_pass(){$.ajax({type:"POST",url:"/user/reset-password",data:"email="+$("#user_email").val(),success:function(msg){alert("已经成功重置了密码！请检查电子邮箱！"),location.href="/user/info"},error:function(){alert("密码重置失败，请确认Email是否有效，并且两次重置时间大于1分钟！")}})}function g_load_kindcat(){$.ajax({url:"/category/j_kindcat/"+$("#kcat").val(),type:"GET",data:{},timeout:1e3,error:function(){alert("重新加载")},success:function(result){var data=eval("("+result+")");$("#pcat0").empty(),$("<option></option>").val("0").text("selectd").appendTo($("#pcat0")),$.each(data,function(tagidx,tagname){$("<option></option>").val(tagidx).text(tagname).appendTo($("#pcat0"))})}})}function g_load_postcat(ii){0==$("#pcat"+ii.toString()).val()?$("#gcat"+ii.toString()).empty():$.ajax({url:"/category/j_subcat/"+$("#pcat"+ii.toString()).val(),type:"GET",data:{},timeout:1e3,error:function(){alert("重新加载")},success:function(result){var data=eval("("+result+")");$("#gcat"+ii.toString()).empty(),$.each(data,function(tagidx,tagname){$("<option></option>").val(tagidx).text(tagname).appendTo($("#gcat"+ii.toString()))})}})}function g_load_infocat(ii){0==$("#pcat"+ii.toString()).val()?$("#gcat"+ii.toString()).empty():$.ajax({url:"/tag/j_subcat/"+$("#pcat"+ii.toString()).val(),type:"GET",data:{},timeout:1e3,error:function(){alert("重新加载")},success:function(result){var data=eval("("+result+")");$("#gcat"+ii.toString()).empty(),$.each(data,function(tagidx,tagname){$("<option></option>").val(tagidx).text(tagname).appendTo($("#gcat"+ii.toString()))})}})}function reply_zan(reply_id,id_num){id_num=id_num.toString(),zans=$("#text_zan").val();var AjaxUrl="/reply/zan/"+reply_id;$.getJSON(AjaxUrl,function(Json){0==Json.text_zan||$("#text_zan_"+id_num).html(Json.text_zan)})}function reply_del(reply_id,id_num){id_num=id_num.toString();var AjaxUrl="/reply/delete/"+reply_id;$.getJSON(AjaxUrl,function(Json){1==Json.del_zan?$("#del_zan_"+id_num).html(""):alert("删除失败！")})}function reply_it(view_id){var txt=$("#cnt_reply").val();txt.length<10||($.post("/reply/add/"+view_id,{cnt_reply:txt},function(result){var msg_json=$.parseJSON(result);$("#pinglun").load("/reply/get/"+msg_json.uid)}),$("#cnt_reply").val(""),$("#cnt_reply").attr("disabled",!0),$("#btn_submit_reply").attr("disabled",!0))}if($.ready(),"undefined"==typeof CodeMirror);else if($("#cnt_md").length>0)var editor=CodeMirror.fromTextArea(document.getElementById("cnt_md"),{lineWrapping:!0,mode:"markdown",lineNumbers:!0,theme:"default",extraKeys:{Enter:"newlineAndIndentContinueMarkdownList"}});$("#form_reset").validate({rules:{user_email:{required:!0,email:!0}},messages:{user_email:{required:"<span class='red'>请输入正确电子邮箱</span>",email:"<span class='red'>请输入正确的电子邮箱</span>"}}}),$("#sub_reset").click(function(){$("#form_reset").valid()?js_update_pass():alert("Error")}),$("#searchForm").validate({rules:{searchheader:"required"},messages:{searchheader:"<span class='red'>Please enter keywords</span>"}}),$("#act_collect").click(function(){$.ajax({url:"/collect/"+post_uid,type:"GET",cache:!1,data:{},dataType:"html",timeout:1e3,error:function(){alert("请登陆后进行收藏！")},success:function(result){$.parseJSON(result);$("#text_collect").text("成功收藏"),$("#text_collect").css("color","red")}})});