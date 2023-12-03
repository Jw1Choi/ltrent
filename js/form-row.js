const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">
    <h1 class="form-top-title">1분 최저 견적 한번에 비교하기</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11"  onsubmit="dll();kakaoPixel('7504569149976260948').purchase('purchase');submitted=true;">
        <input type="hidden" name="entry.272078534" value="메타-랜딩버전1">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr>
                            <th>견적 유형</th>
                            <td>
                           
                                <select name="entry.1818522882" id='car_type' class="form-control" placeholder="견적 유형">

                                    <option value="견적 유형" selected disabled>견적 유형
                                        <option value="장기렌트">장기렌트</option>
                                        <option value="신차리스">신차리스</option>
                                       
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->차종</th>
                            <td>
                                <input type='text' name='entry.583978956' id='car' class="form-control" placeholder="차종">
                            </td>
                        </tr>
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.1881318671' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                        <td>
                            <input type='text' name='entry.880528237' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                        </td>
                    </tr>
                    <tr>
                        <!-- <th>지역</th>
                        <td>
                       
                            <select name="entry.272078534" id='id-number' class="form-control" placeholder="해당 지역">

                                <option value="해당 지역" selected disabled>해당 지역
                                    <option value="서울">서울</option>
                                    <option value="부산">부산</option>
                                    <option value="대구">대구</option>
                                    <option value="인천">인천</option>
                                    <option value="광주">광주</option>
                                    <option value="대전">대전</option>
                                    <option value="울산">울산</option>
                                    <option value="세종">세종</option>
                                    <option value="경기">경기</option>
                                    <option value="강원">강원</option>
                                    <option value="충북">충북</option>
                                    <option value="충남">충남</option>
                                    <option value="전북">전북</option>
                                    <option value="전남">전남</option>
                                    <option value="경북">경북</option>
                                    <option value="경남">경남</option>
                                    <option value="제주">제주</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.472954139" id='time' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1292376548' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>대출금액</th>
                        <td>
                        <input name='M_items_value_16' type='text' value='' class='ri_16 text_box' placeholder="필요금액을 입력하세요." pattern="\d*"><span class="text_box_text">&nbsp;만원</span>
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>!--<i class="fa fa-user" aria-hidden="true"></i>--메모</th>
                        <td>
                            <textarea name="M_data" type="text" class="form-info" placeholder="개인 신용에 어떠한 영향도 끼치지 않으며, 한도안내 후 개인정보는 전부 파기됩니다." onkeyup="cdcheck(this)" onkeydown="cdcheck(this)"></textarea>
                        </td> 
                    </tr>   -->
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                            <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                        
                            <input class="submit-btn" type='submit' id='send_message' value='최저 비교 견적 신청하기' disabled style="background-color: #595858;">
                            <input class="submit-btn"  id='send_message1' value='잠시만 기다려주세요.' disabled style="background-color:black;display:none;">
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                        <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>
</div><!-- contentsWrap end -->


<section id="dbscf" style="display:none;">
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site17/ifr/ifr_save.php">
<input type="hidden" name="ms" value="S00242885B" />
<input type="hidden" name="ca" value="C05120127C" />
<input type="hidden" name="auto_defense" />




<div class="input_title"><span>이름</span><input type="text" name="name" /></div>
<div class="input_title"><span>전화번호</span>
<select type="text" name="tel1" style="width:20%; border:none; border-bottom:1px solid #ccc;" >
<option value="010">010</option>
<option value="011">011</option>
<option value="016">016</option>
<option value="017">017</option>
<option value="018">018</option>
<option value="019">019</option>
</select>-
<input type="text" name="tel2" style="width:20%;" maxlength="4" />-
<input type="text" name="tel3" style="width:20%;" maxlength="4" />
</div>
<div class="input_title"><span>차종</span><input type="text" name="item1" /></div>

<div style="font-size:0.7em;"><input type="checkbox" name="agree" id="agreement"  style="margin:0 0; vertical-align:middle;" checked /><label for="agreement">개인정보 취급 동의</label><a href="javascript:dbdb_pri_popup();">[보기]</a>

</form>

<div class="footer_btn">
<a href="#" onclick="javascript:OnSubmit();">
<span style="color:#fff">신청하기</span>
</a>

</section>
`;

document.body.appendChild(testbody.content);