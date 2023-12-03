//�낅젰媛� 泥댄겕
var checkForm = function (num) {

	var middle_chk = false;
	var path = location.pathname;

	if (path.indexOf("/hkinvest/")>-1||path.indexOf("/kclotto/d03/")>-1||path.indexOf("/kclotto/d03_b/")>-1||path.indexOf("/kclotto/e01/")>-1) {
		middle_chk = true;
	}

	//�대쫫 議댁옱 �좊Т
	if ( $("#name"+num).length > 0 ) {
		if($("#name"+num).val().replace(/ /g, "") == ""){
			alert("�대쫫�� �낅젰�� 二쇱꽭��.");
			$("#name"+num).focus();
			return false;
		}
	}
	//�섏씠 議댁옱 �좊Т
	if ( $("#age"+num).length > 0 ) {
		if($("#age"+num).val().replace(/ /g, "") == ""){
			alert("�섏씠瑜� �낅젰�댁＜�몄슂.");
			$("#age"+num).focus();
			return false;
		}
	}
	//�꾪솕踰덊샇 11�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
	if ( $("#tel"+num).length > 0 ) {
		if($("#tel"+num).val().replace(/ /g, "") == ""){
			alert("�대��곕쾲�몃� �낅젰�댁＜�몄슂.");
			$("#tel"+num).focus();
			return false;
		}

		if (middle_chk) {
			if($("#tel1").val().replace(/-/gi,"").substr(3,1)=="0"||$("#tel1").val().replace(/-/gi,"").substr(3,1)=="1") {
				alert("�뺥솗�� 踰덊샇瑜� 湲곗엯�댁＜�몄슂.");
				$("#tel"+num).focus();
				return false;
			}
		}
	}
	//�꾪솕踰덊샇 4�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
	if ( $("#tel"+num+"-1").length > 0 ) {
		if($("#tel"+num+"-2").val().replace(/ /g, "") == ""){
			alert("�대��곕쾲�몃� �낅젰�댁＜�몄슂.");
			$("#tel"+num+"-2").focus();
			return false;
		}
		if($("#tel"+num+"-3").val().replace(/ /g, "") == ""){
			alert("�대��곕쾲�몃� �낅젰�댁＜�몄슂.");
			$("#tel"+num+"-3").focus();
			return false;
		}
		if($("#tel"+num+"-2").val().length < 4) {
			alert("�꾪솕踰덊샇�� 4�먮━濡� �낅젰�댁＜�몄슂.");
			$("#tel"+num+"-2").focus();
			return false;
		}
		if($("#tel"+num+"-3").val().length < 4) {
			alert("�꾪솕踰덊샇�� 4�먮━濡� �낅젰�댁＜�몄슂.");
			$("#tel"+num+"-3").focus();
			return false;
		}

		if (middle_chk) {
			if($("#tel"+num+"-2").val().substr(0,1)=="0"||$("#tel"+num+"-2").val().substr(0,1)=="1") {
				alert("�뺥솗�� 踰덊샇瑜� 湲곗엯�댁＜�몄슂.");
				$("#tel"+num+"-2").focus();
				return false;
			}
		}
	}
	//臾몄쓽�댁슜 議댁옱 �좊Т
	if ( $("#comment"+num).length > 0 ) {
		if($("#comment"+num).val().replace(/ /g, "") == ""){
			alert("臾몄쓽�댁슜�� �낅젰�댁＜�몄슂.");
			$("#comment"+num).focus();
			return false;
		}
	}
	if(!$("#agree"+num+"-1").is(":checked")){
		alert("媛쒖씤�뺣낫�섏쭛�뺤콉�� �숈쓽�댁＜�몄슂.");
		return false;
	}
	if ( $("#agree"+num+"-2").length > 0 ) {
		if(!$("#agree"+num+"-2").is(":checked")){
			alert("留덉��� �뺣낫�쒖슜�뺤콉�� �숈쓽�댁＜�몄슂.");
			return false;
		}
	}
//	if ( $("#agree"+num+"-3").length > 0 ) {
//		if(!$("#agree"+num+"-3").is(":checked")){
//			alert("�쇨컙 臾몄옄�섏떊�� �숈쓽�댁＜�몄슂.");
//			return false;
//		}
//	}
//	if ( $("#agree"+num+"-4").length > 0 ) {
//		if(!$("#agree"+num+"-4").is(":checked")){
//			alert("��3�� �쒓났�� �숈쓽�댁＜�몄슂.");
//			return false;
//		}
//	}
	return true;
}

//�ъ빱�� �대룞
$(function(){
	//湲곕낯 (�곕씫泥섎쭔)
	$("input").keyup(function(e){
		if( $(this).val().length==$(this).attr("maxlength") ){
			$(this).next("input").focus();
			if (  $(this).next("input").length == 0 ) {
				$(this).next().next("input").focus();
			}
			if( $(this).parents(".input_text_wrap").next().find("input[type='tel']") ){
				$(this).parents(".input_text_wrap").next().find("input[type='tel']").focus();
			}
			if( $(this).parents(".input_tel_wrap").next().find("input[type='tel']") ){
				$(this).parents(".input_tel_wrap").next().find("input[type='tel']").focus();
			}
		}
	})
	//�대쫫1 議댁옱 �좊Т
	if ( $("#name1").length > 0 ) {
		//�꾪솕踰덊샇 4�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
		if ( $("#tel1-1").length > 0 ) {
			$("input[name=name1]").keyup(function() {
				var idx = $(this).index("input[name=name1]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel1-2]").eq(idx).focus();
				}
			})
			$("input[name=name2]").keyup(function() {
				var idx = $(this).index("input[name=name2]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel2-2]").eq(idx).focus();
				}
			})
			$("input[name=name3]").keyup(function() {
				var idx = $(this).index("input[name=name3]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel3-2]").eq(idx).focus();
				}
			})
			$("input[name=name4]").keyup(function() {
				var idx = $(this).index("input[name=name4]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel4-2]").eq(idx).focus();
				}
			})
		}
		//�꾪솕踰덊샇 11�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
		if ( $("#tel1").length > 0 ) {
			$("input[name=name1]").keyup(function() {
				var idx = $(this).index("input[name=name1]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel1]").eq(idx).focus();
				}
			})
			$("input[name=name2]").keyup(function() {
				var idx = $(this).index("input[name=name2]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel2]").eq(idx).focus();
				}
			})
			$("input[name=name3]").keyup(function() {
				var idx = $(this).index("input[name=name3]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel3]").eq(idx).focus();
				}
			})
			$("input[name=name4]").keyup(function() {
				var idx = $(this).index("input[name=name4]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=tel4]").eq(idx).focus();
				}
			})
		}
		//�대찓�� 議댁옱 �좊Т
		if ( $("#email1").length > 0 ) {
			$("input[name=tel1-3]").keyup(function() {
				var idx = $(this).index("input[name=tel1-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=email1]").eq(idx).focus();
				}
			})
			$("input[name=tel2-3]").keyup(function() {
				var idx = $(this).index("input[name=tel2-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=email2]").eq(idx).focus();
				}
			})
			$("input[name=tel3-3]").keyup(function() {
				var idx = $(this).index("input[name=tel3-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=email3]").eq(idx).focus();
				}
			})
			$("input[name=tel4-3]").keyup(function() {
				var idx = $(this).index("input[name=tel4-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=email4]").eq(idx).focus();
				}
			})
		}
		//�� 議댁옱 �좊Т
		if ( $("#height1").length > 0 ) {
			$("input[name=tel1-3]").keyup(function() {
				var idx = $(this).index("input[name=tel1-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=height1]").eq(idx).focus();
				}
			})
			$("input[name=tel2-3]").keyup(function() {
				var idx = $(this).index("input[name=tel2-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=height2]").eq(idx).focus();
				}
			})
			$("input[name=tel3-3]").keyup(function() {
				var idx = $(this).index("input[name=tel3-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=height3]").eq(idx).focus();
				}
			})
			$("input[name=tel4-3]").keyup(function() {
				var idx = $(this).index("input[name=tel4-3]");
				if ($(this).val().length == 4) {
					var NextInput = $("input[name=height4]").eq(idx).focus();
				}
			})
			//泥댁쨷 議댁옱 �좊Т
			if ( $("#weight1").length > 0 ) {
				$("input[name=height1]").keyup(function() {
					var idx = $(this).index("input[name=height1]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=weight1]").eq(idx).focus();
					}
				})
				$("input[name=height2]").keyup(function() {
					var idx = $(this).index("input[name=height2]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=weight2]").eq(idx).focus();
					}
				})
				$("input[name=height3]").keyup(function() {
					var idx = $(this).index("input[name=height3]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=weight3]").eq(idx).focus();
					}
				})
				$("input[name=height4]").keyup(function() {
					var idx = $(this).index("input[name=height4]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=weight4]").eq(idx).focus();
					}
				})
			}
			//泥댁쨷 議댁옱 �좊Т
			if ( $("#hope_weight1").length > 0 ) {
				$("input[name=weight1]").keyup(function() {
					var idx = $(this).index("input[name=weight1]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=hope_weight1]").eq(idx).focus();
					}
				})
				$("input[name=weight2]").keyup(function() {
					var idx = $(this).index("input[name=weight2]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=hope_weight2]").eq(idx).focus();
					}
				})
				$("input[name=weight3]").keyup(function() {
					var idx = $(this).index("input[name=weight3]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=hope_weight3]").eq(idx).focus();
					}
				})
				$("input[name=weight4]").keyup(function() {
					var idx = $(this).index("input[name=weight4]");
					if ($(this).val().length == 3) {
						var NextInput = $("input[name=hope_weight4]").eq(idx).focus();
					}
				})
			}
		}
		//�섏씠1 議댁옱 �좊Т
		if ( $("#age1").length > 0 ) {
			$("input[name=name1]").keyup(function() {
				var idx = $(this).index("input[name=name1]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=age1]").eq(idx).focus();
				}
			})
			$("input[name=name2]").keyup(function() {
				var idx = $(this).index("input[name=name2]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=age2]").eq(idx).focus();
				}
			})
			$("input[name=name3]").keyup(function() {
				var idx = $(this).index("input[name=name3]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=age3]").eq(idx).focus();
				}
			})
			$("input[name=name4]").keyup(function() {
				var idx = $(this).index("input[name=name4]");
				if ($(this).val().length == 5) {
					var NextInput = $("input[name=age4]").eq(idx).focus();
				}
			})
			//�꾪솕踰덊샇 4�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
			if ( $("#tel1-1").length > 0 ) {
				$("input[name=age1]").keyup(function() {
					var idx = $(this).index("input[name=age1]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel1-2]").eq(idx).focus();
					}
				})
				$("input[name=age2]").keyup(function() {
					var idx = $(this).index("input[name=age2]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel2-2]").eq(idx).focus();
					}
				})
				$("input[name=age3]").keyup(function() {
					var idx = $(this).index("input[name=age3]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel3-2]").eq(idx).focus();
					}
				})
				$("input[name=age4]").keyup(function() {
					var idx = $(this).index("input[name=age4]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel4-2]").eq(idx).focus();
					}
				})
			}
			//�꾪솕踰덊샇 11�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏� �좊Т
			if ( $("#tel1").length > 0 ) {
				$("input[name=age1]").keyup(function() {
					var idx = $(this).index("input[name=age1]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel1]").eq(idx).focus();
					}
				})
				$("input[name=age2]").keyup(function() {
					var idx = $(this).index("input[name=age2]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel2]").eq(idx).focus();
					}
				})
				$("input[name=age3]").keyup(function() {
					var idx = $(this).index("input[name=age3]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel3]").eq(idx).focus();
					}
				})
				$("input[name=age4]").keyup(function() {
					var idx = $(this).index("input[name=age4]");
					if ($(this).val().length == 2) {
						var NextInput = $("input[name=tel4]").eq(idx).focus();
					}
				})
			}
		}
	}
})


//�뱀닔臾몄옄 �쒓굅
function specialCharRemove(obj) {
	var val = obj.value;
	var pattern = /[^(媛�-�ｃ꽦-�롢뀖-�즑-zA-Z0-9)]/gi;
	if(pattern.test(val)){
		obj.value = val.replace(pattern,"");
	}
};


//�쒓�留� �낅젰
function onlyKorean(form_name) {
	for (var i = 0; i < form_name.value.length; i++) {
		var chr = form_name.value.charAt(i);
		if (chr.charCodeAt() < '129') {
			alert("�쒓�濡쒕쭔 �낅젰�� 二쇱꽭��");
			form_name.focus();
			form_name.value = "";
		}
	}
};
//�レ옄留� �낅젰
function onlyNumber(event) {
	event = event || window.event;
	var keyID = (event.which)
		? event.which
		: event.keyCode;
	if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
		return;
	 else
		return false;
};
//�レ옄留� �낅젰
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which)
		? event.which
		: event.keyCode;
	if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
		return;
	 else
		event.target.value = event
			.target
			.value
			.replace(/[^0-9]/g, "");
};
//�대찓�� �좏슚�� 寃���
function mailcheck(field){
	var emailExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
   if(!emailExp.test(field.value)){
	alert("�대찓�� 二쇱냼媛� �좏슚�섏� �딆뒿�덈떎.");
	field.focus();
   }
}
//�좎쭨 �ㅽ겕由쏀듃
function toDate(yyyy, mm, dd) {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var resultDate = new Date(yyyy+year, month+mm, day+dd);
		year = resultDate.getFullYear();
		month = resultDate.getMonth() + 1;
		day = resultDate.getDate();
		if (month < 10)
			month = "0" + month;
		if (day < 10)
			day = "0" + day;
		return year + "-" + month + "-" + day;
}
$(function(){
	//�꾩껜 �숈쓽
	$("#agree_all1").click(function(){
		if($("#agree_all1").prop("checked")) {
			$("input[type=checkbox]").prop("checked",true);
		} else {
			$("input[type=checkbox]").prop("checked",false);
		}
	});
	$("#agree_all2").click(function(){
		if($("#agree_all2").prop("checked")) {
			$("input[type=checkbox]").prop("checked",true);
		} else {
			$("input[type=checkbox]").prop("checked",false);
		}
	});
	$("#agree_all3").click(function(){
		if($("#agree_all3").prop("checked")) {
			$("input[type=checkbox]").prop("checked",true);
		} else {
			$("input[type=checkbox]").prop("checked",false);
		}
	});
	$("#agree_all4").click(function(){
		if($("#agree_all4").prop("checked")) {
			$("input[type=checkbox]").prop("checked",true);
		} else {
			$("input[type=checkbox]").prop("checked",false);
		}
	});
});

//�꾪솕踰덊샇 11�먮━媛� �명뫖�� 1媛쒕줈 �쒗쁽�� �섏씠吏��� �좏슚�� 寃���
$(function(){
	$(".tel-check").on('keydown', function(e){
		// �レ옄留� �낅젰諛쏄린
		var trans_num = $(this).val().replace(/-/gi,'');
		var k = e.keyCode;
		if(trans_num.length >= 11 && ((k >= 48 && k <=126) || (k >= 12592 && k <= 12687 || k==32 || k==229 || (k>=45032 && k<=55203)) ))
		{
			e.preventDefault();
		}
	}).on('blur', function(){ // �ъ빱�ㅻ� �껋뿀�꾨븣 �ㅽ뻾�⑸땲��.
		if($(this).val() == '') return;

		// 湲곗〈 踰덊샇�먯꽌 - 瑜� ��젣�⑸땲��.
		var trans_num = $(this).val().replace(/-/gi,'');

		// �낅젰媛믪씠 �덉쓣�뚮쭔 �ㅽ뻾�⑸땲��.
		if(trans_num != null && trans_num != '')
		{
			// 珥� �몃뱶�� �먮━�섎뒗 11湲��먯씠嫄곕굹, 11�먯뿬�� �⑸땲��.
			if(trans_num.length==11 || trans_num.length==11)
			{
				// �좏슚�� 泥댄겕
				var regExp_ctn = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
				if(regExp_ctn.test(trans_num))
				{
					// �좏슚�� 泥댄겕�� �깃났�섎㈃ �섏씠�덉쓣 �ｊ퀬 媛믪쓣 諛붽퓭以띾땲��.
					trans_num = trans_num.replace(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?([0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");
					$(this).val(trans_num);

					//踰덊샇 �댁긽�놁씠 �낅젰�덉쓣 寃쎌슦
					mode = "join";

					if( $('.intro_page').val() == "�명듃濡�18" ){
						var phoneArray = $(this).val().split('-');
						name = $(this).closest("ul").children("li").children('.nameclass').val();
					}
					else{
						var phoneArray = $(".tel-check").val().split('-');
						name = $('.nameclass').val();
					}
				}
				else
				{
					alert("�좏슚�섏� �딆� �꾪솕踰덊샇 �낅땲��.");
					$(this).val("");
					$(this).focus();
				}
			}
			else
			{
				alert("�좏슚�섏� �딆� �꾪솕踰덊샇 �낅땲��.");
				$(this).val("");
				$(this).focus();
			}
		}
	});
});

//留곹겕 �ㅽ겕濡� �대룞 start
function go_link() {
	if ( $("#db_table").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db_table").offset().top
		});
	} else if ( $("#db_wrap").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db_wrap").offset().top
		});
	} else if ( $("#db").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db").offset().top
		});
	}
}
function go_link2() {
	if ( $("#db_table2").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db_table2").offset().top
		});
	} else if ( $("#db_wrap2").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db_wrap2").offset().top
		});
	} else if ( $("#db2").length > 0 ) {
		$("html, body").stop().animate({
			scrollTop: $("#db2").offset().top
		});
	}
}
//2019-08-28 ksb
function crm_number_val(k)
{
	var rt_val = '';
	if (k <'10')
	{
		rt_val = '0';
	}
	else if (k >= '10' && k < '20' )
	{
		rt_val = '1';
	}
	else if (k >= '20' && k < '30' )
	{
		rt_val = '2';
	}
	else if (k >= '30' && k < '40' )
	{
		rt_val = '3';
	}
	else if (k >= '40' && k < '50' )
	{
		rt_val = '4';
	}
	else if (k >= '50' && k < '60' )
	{
		rt_val = '5';
	}
	else if (k >= '60' && k < '70' )
	{
		rt_val = '6';
	}
	else if (k >= '70' && k < '80' )
	{
		rt_val = '7';
	}
	else if (k >= '80' && k < '90' )
	{
		rt_val = '8';
	}
	else{
		rt_val = null;
	}
	return rt_val;
}
//留곹겕 �ㅽ겕濡� �대룞 end

//�쎄� start
function policy() {
	window.open("/policy", "a", "width=400, height=500, left=0, top=0");
}
//�쎄� end
//�쎄� end
function policy1() {
	window.open("/policy/index1.html", "a", "width=400, height=500, left=0, top=0");
}
//�쎄� end
//�쎄� start
function policy2() {
	window.open("/policy/index2.html", "a", "width=400, height=500, left=0, top=0");
}
//�쎄� end
function policy3() {
	window.open("/policy/index3.html", "a", "width=400, height=500, left=0, top=0");
}
//�쎄� end
//�쎄� start
function policy4() {
	window.open("/policy/index4.html", "a", "width=400, height=500, left=0, top=0");
}
//�쎄� end