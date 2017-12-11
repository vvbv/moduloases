define(["jquery","block_ases/bootstrap","block_ases/datatables.net","block_ases/datatables.net-buttons","block_ases/buttons.flash","block_ases/jszip","block_ases/pdfmake","block_ases/buttons.html5","block_ases/buttons.print","block_ases/sweetalert","block_ases/select2"],function(e,n,t,a,o,i,c,r,s,l,u){return{init:function(){function n(){var n=e("#nombre").val().trim(),t=e("#descripcion").val().trim(),a=e("#functions").val(),o="";0==n.length&&(o="Nombre no puede ser nulo"),0==t.length&&(o+="\nDescripcion no puede ser nulo"),0==a.length&&(o+="\nFuncionalidad no puede ser nulo"),0==n.length||0==t.length?alert(o):e.ajax({type:"POST",data:{nombre:n,descripcion:t,id_funcionalidad:a},url:"../managers/ActionCreateAction.php",async:!1,success:function(n){e("#formAction")[0].reset(),alert(n)}})}function t(){var n=e("#nombre_funcionalidad").val().trim(),t=e("#descripcion_funcionalidad").val().trim(),a="";0==n.length&&(a="Nombre no puede ser nulo"),0==t.length&&(a+="\nDescripcion no puede ser nulo"),0==n.length||0==t.length?alert(a):e.ajax({type:"POST",data:{nombre_funcionalidad:n,descripcion_funcionalidad:t},url:"../managers/ActionCreateAction.php",success:function(n){e("#formFuncion")[0].reset(),alert(n)}})}function a(){var n=e("#nombre_perfil").val().trim(),t=e("#descripcion_perfil").val().trim(),a="";0==n.length&&(a="Nombre del perfil no puede ser nulo"),0==t.length&&(a+="\nDescripcion del perfil no puede ser nulo"),0==n.length||0==t.length?alert(a):e.ajax({type:"POST",data:{nombre_perfil:n,descripcion_perfil:t},url:"../managers/ActionCreateAction.php",async:!1,success:function(n){e("#formPerfil")[0].reset(),alert(n)}})}function o(n){var t=e("#profiles_user").val(),a=[],o=(e("input[name='actions[]']:checked").each(function(){a.push(e(this).val())}),JSON.stringify(a));""==t?swal({title:"Error",text:"Seleccione el rol del usuario",type:"error",confirmButtonColor:"#d51b23"}):e.ajax({type:"POST",data:{profile:t,actions:o,function:"assign_role"},url:"../managers/ActionCreateAction.php",async:!1,success:function(e){alert(e)}})}function i(n,t){e.ajax({type:"POST",data:{id:n,source:t},url:"../managers/permissions_management/permissions_report.php",success:function(e){swal({title:e.title,html:!0,text:e.text,type:e.type,confirmButtonColor:"#d51b23"})},dataType:"json",cache:"false",error:function(e){alert("Error al cargar acciones")}})}e("#profiles_user").select2({language:{noResults:function(){return"No hay resultado"},searching:function(){return"Buscando.."}},width:"36%",dropdownAutoWidth:!0,placeholder:"Seleccionar perfil"}),e("#profiles_prof").select2({language:{noResults:function(){return"No hay resultado"},searching:function(){return"Buscando.."}},width:"40%",dropdownAutoWidth:!0}),e("#actions").select2({dropdownAutoWidth:!0,width:"100%",multiple:!0,language:{noResults:function(){return"No hay resultado"},searching:function(){return"Buscando.."}},dropdownAutoWidth:!0}),e(document).ready(function(){for(var i=window.location.search.split("&"),c=0;c<i.length;c++){var r=i[c].split("=");if("?instanceid"==r[0]||"instanceid"==r[0])var s=r[1]}e("#add_accion").on("click",function(){n()}),e("#add_function").on("click",function(){t()}),e("#add_profile").on("click",function(){a()}),e("#assign_action_profile").on("click",function(){}),e("#assign_user_profile").on("click",function(){o(s)})}),e(document).on("click","#div_functions tbody tr td",function(){e("#tableFunctions").DataTable().cell(this).index()}),e("#div_actions").on("click","#delete_action",function(){var n=e("#div_actions #tableActions").DataTable(),t=e(this).parent(),a=e(this).children("span").attr("id"),o=(n.cell(t).index().column,n.cell(n.row(t).index(),0).data());n.cell(n.row(t).index(),1).data();swal({title:"Estas seguro/a?",text:"La acción <strong>"+o+"</strong> se eliminará",type:"warning",html:!0,showCancelButton:!0,confirmButtonColor:"#d51b23",confirmButtonText:"Si!",cancelButtonText:"No",closeOnConfirm:!0},function(e){e&&i(a,"accion")})}),e("#profiles_user").change(function(){var n=e("#profiles_user").val();e.ajax({type:"POST",data:{user:n,source:"permissions_management"},url:"../managers/permissions_management/permissions_report.php",success:function(n){e("input[name='actions[]']").removeAttr("checked"),e.each(n,function(n,t){e("input[value='"+t+"']").attr("checked",!0)})},dataType:"json",cache:"false",error:function(e){alert("Error al cargar gestion de permisos y roles")}})}),e("#div_actions").on("click","#delete_action",function(){var n=e("#div_actions #tableActions").DataTable(),t=e(this).parent(),a=e(this).children("span").attr("id"),o=(n.cell(t).index().column,n.cell(n.row(t).index(),0).data());n.cell(n.row(t).index(),1).data();swal({title:"Estas seguro/a?",text:"La acción <strong>"+o+"</strong> se eliminará",type:"warning",html:!0,showCancelButton:!0,confirmButtonColor:"#d51b23",confirmButtonText:"Si!",cancelButtonText:"No",closeOnConfirm:!0},function(e){e&&i(a,"accion")})}),e.ajax({type:"POST",url:"../managers/permissions_management/load_function.php",success:function(n){e("#div_functions").empty(),e("#div_functions").append('<table id="tableFunctions"  class="display" cellspacing="0" width="100%" ><thead><thead></table>');e("#tableFunctions").DataTable(n);e("#div_functions #modify_function").css("cursor","pointer")},dataType:"json",cache:"false",error:function(e){alert("Error al cargar funcionalidades")}}),e.ajax({type:"POST",url:"../managers/permissions_management/load_actions.php",success:function(n){e("#div_actions").empty(),e("#div_actions").append('<table id="tableActions"  class="display" cellspacing="0" width="100%" ><thead><thead></table>');e("#tableActions").DataTable(n);e("#div_actions #delete_action").css("cursor","pointer")},dataType:"json",cache:"false",error:function(e){alert("Error al cargar acciones")}}),e.ajax({type:"POST",url:"../managers/permissions_management/load_profiles.php",success:function(n){e("#div_profiles").empty(),e("#div_profiles").append('<table id="tableProfiles"  class="display" cellspacing="0" width="100%" ><thead><thead></table>');e("#tableProfiles").DataTable(n);e("#div_profiles #delete_profiles").css("cursor","pointer")},dataType:"json",cache:"false",error:function(e){alert("Error al cargar acciones")}})}}});