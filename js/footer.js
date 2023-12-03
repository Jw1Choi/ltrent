window.addEventListener("DOMContentLoaded", function () {
    // footer �붿냼 �앹꽦
    var footer = document.createElement("footer");
  
    // �곹샇 �뺣낫 異붽�
    var companyName = document.createElement("div");
    companyName.innerText = "�쒗뭹紐�: �멸��� �꾨━誘몄뾼 怨⑤뱶";
    footer.appendChild(companyName);

	// �뺣낫 01 異붽�
    var info01 = document.createElement("div");
    info01.innerText = "�먮ℓ ��由ъ젏 : �쒖씠�좏뵆�ъ뒪";
    footer.appendChild(info01);

	// �ъ뾽�먮벑濡앸쾲�� �뺣낫 異붽�
    var registrationNumber = document.createElement("div");
    registrationNumber.innerText = "�ъ뾽�먮벑濡앸쾲�� : 578-14-01625";
    footer.appendChild(registrationNumber);

	// �뺣낫 02 異붽�
    var info02 = document.createElement("div");
    info02.innerText = "嫄닿컯湲곕뒫�앺뭹 �쇰컲 �먮ℓ�� : ��2021-0088171��";
    footer.appendChild(info02);

    // �ㅽ��� 異붽�
	footer.style.position = "relative"
	footer.style.zIndex = "99";
    footer.style.margin = "0 auto";
	footer.style.maxWidth = "640px";
    footer.style.lineHeight = "20px";
    footer.style.fontSize = "13px";
    footer.style.padding = "25px 0";
    footer.style.textAlign = "center";
    footer.style.background = "#555";
    footer.style.color = "#999";
    footer.style.borderTop = "1px dotted #ddd";
  
    // body �붿냼�� footer 異붽�
    document.body.appendChild(footer);
  });