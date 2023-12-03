var bSend_ing = false;

//留ㅼ껜肄붾뱶
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
		   return null;
		}
		else{
		   return results[1] || 0;
		}
	}
//�대┃�� �붾퉬�곕룞
	function input_db(num){
		if (!checkForm(num)){
			return;
		}

		// 紐⑥쓬,�먯쓬 李⑤떒
		var chk = $("#name"+num).val();
			if(chk.match(/([^媛�-��\x20])/i)){
				alert("�대쫫�� �뺥솗�� �낅젰�댁＜�몄슂");
				$('#name'+num).focus();
				return;
			}

		// 媛��대뜲 0,1 李⑤떒
	//	if ($("#tel"+num+"-2").val() < 2000) {
	//		alert("�좏슚�섏� �딅뒗 �대��곕쾲�몄엯�덈떎.");
	//		$("#tel"+num+"-2").focus();
	//		return false;
	//	}

		if (bSend_ing) {
			alert("�대� �좎껌�섏뀲�듬땲��.");
			return;
		}


		//�욌뮘 以묐났踰덊샇 李⑤떒
		var tel_container = $("#tel"+num+"-2").val() + $("#tel"+num+"-3").val();
		if (tel_container === "11111111" || tel_container === "22222222" || tel_container === "33333333"  || tel_container === "44444444"  ||
			tel_container === "55555555" || tel_container === "66666666" || tel_container === "77777777"  || tel_container === "88888888"  ||
			tel_container === "99999999" || tel_container === "64491829" || tel_container === "96107721" || tel_container === "64491829" ||
			tel_container === "47118874" || tel_container === "63943588" || tel_container === "65759126" || tel_container === "95534621" ||
			tel_container === "64239387") {
			alert("�대� �좎껌�섏뀲�듬땲��.");
			$("#tel"+num+"-2").focus();
			return false;
		}

		// 留ㅼ껜肄붾뱶
		var pid="";
		if($.urlParam("pid") != null){
			pid=$.urlParam("pid");
		}else{
			pid="留ㅼ껜�ъ젙蹂� �놁쓬";
		}

		//�뱀젙 ip 李⑤떒
		var validIps = ["1.222.79.27", "211.54.253.166", "118.235.5.149", "211.234.195.199"]
		var userIP = ip();

		if (validIps.includes(userIP)) {
			alert("�좏슚�섏� �딅뒗 �대��곕쾲�몄엯�덈떎.");
			return false;
		}

		// 留덉뒪�고궎
		var ckey = "";
		if ($.urlParam("ckey") != null)
			ckey = $.urlParam("ckey");

		// 愿묎퀬二쇳궎
		var ak='';
		if($.urlParam('ak') != null)
			ak=$.urlParam('ak');

		var check1 = "";
		var inChkedCnt = $("input:checkbox[name=checkbox1]:checked").length;
		$("input:checkbox[name=checkbox1]:checked").each(function(i) {
			if (i == 0) {
				check1 += $(this).val();
			} else {
				check1 = check1 + ',' + $(this).val();
			}
		});

		// �꾩떆�쒕젟 �꾩넚 START
		$('#ckey').val(ckey);
		$('#datakind').val("hoguanwon1");
		$('#ad_key').val(ak);
		$('#data1').val($('#name'+num).val());
		$('#data2').val($('#age'+num).val());
		$('#data3').val($('#tel'+num+'-1').val()+'-'+$('#tel'+num+'-2').val()+'-'+$('#tel'+num+'-3').val());
		$('#data5').val(pid);
		$("#data6").val(check1);//遺���
		//$("#data7").val($("input:radio[name='radio1']:checked").val());//�깅퀎
		$('#referrer').val(document.referrer);

		var l_rndom=new Date().getTime();

		$.ajax({
			type:'POST',
			async:false,
			cache:false,
			dataType:"jsonp",
			url : "https://com.daine.co.kr/utf/hgw/wecyd.jsp",
			jsonpCallback : "mycallback",
			data: {
				  "referer" : document.referrer,
				  "name" : $('#name'+num).val(),
				  "age" : $('#age'+num).val(),
				  "phone" : $('#tel'+num+'-1').val()+$('#tel'+num+'-2').val()+$('#tel'+num+'-3').val()
			},
			success: function(data){
				if( data.code == "9999" ){

					bSend_ing = true;

					$.ajax({
						type:'POST',
						async:false,
						cache:false,
						dataType:"jsonp",
						data: $("#frm").serialize(),
						url: "https://wr.catad5959.com/api/WCDC_v2.asp" + "?r=" + l_rndom,
						success: function(sData) {
							if(sData.success=="�깃났"){
								alert("�좎껌�� �뺤긽 泥섎━�섏뿀�듬땲��");
								location.href="success";
							}else if(sData.success=="以묐났"){
								alert("�대� �좎껌 �꾨즺�� �곕씫泥섏엯�덈떎");
								bSend_ing = false;
							} else {
								alert("�좎껌 �묒닔媛� �ㅽ뙣�덉뒿�덈떎!");
								bSend_ing = false;
							}
						},
						error:function(request,status,error) {
							//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
					//�꾩떆�쒕젟 �꾩넚 END
				}else{
					alert("�섎룄移� �딆� �먮윭媛� 諛쒖깮�덉뒿�덈떎.");
				}
			},
			error: function(xhr,b,c) {
				console.log(xhr);
				console.log('�ㅽ뙣 - ', xhr+b+c);
			}
		});
	}