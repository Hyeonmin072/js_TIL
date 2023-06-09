// document.write("hello world");
// //x+y를 반환하는 함수를 작성하세요
// function adder(x,y){
//     return x+y
// }

// sum=adder(12,33)
// document.write("<br>");
// document.write("12+33은"+sum+"입니다.")
// document.write("<br>");

// //객체
// var mydata ={
//     name : '김현민',
//     number : 2301027,
//     age : 20,
//     program :function(x){
//     document.write(this.name+'은 '+ x +" 사용 가능")}
// };


// mydata.program('python');

// //DOM (문서 객체 ㅇㅇ)
// document.querySelector('h1').style.color ='red';
// document.querySelector('h2').style.color = 'red';
// document.getElementById('a').style.color='red';

function end(){
    
    // let header = doc"red";
    // header.style.backgrouument.getElementById('a')
    // header.style.color = "red";
    // header.style.backgroundColor='blue';
    // header.innerHTML = '<strong>로렘</strong>'

    let header = document.querySelectorAll('h1')

    for(let i=0; i<header.length; i++)
    {
        hh=header[i]
        hh.style.color='red';
    }
}