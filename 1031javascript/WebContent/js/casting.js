//	자바크립트에서 지역변수 생성 
var i=10; 
var result = i + "20"; //숫자와 문자열의 결합 
document.write("i + 20 = " + result + "<br/>"); 
//문자열을 숫자로 변환해서 더하기 
result = i + Number("20");
document.write("i + 20 = " + result + "<br/>");

//숫자를 문자열로 변환해서 결합합니다. 
result= String(i) + 20;
document.write("i + 20 = " + result + "<br/>");

//출력하는 메소드에 객체를 대입하면 toString()의 결과를 출력 
var ar = [100, 300, 200];
document.write("ar = " + ar + "<br/>");