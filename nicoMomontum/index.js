const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(event){
//     const hasClass = title.classList.contains(CLICKED_CLASS);//query의 classList에 해당클래스(CLICKED_CLASS)가 있는지 없는지 검사(.contains)
    
//    const currentClass = title.className;
//    if (!hasClass ){
//        title.classList.add(CLICKED_CLASS);
//    }else{
//        title.classList.remove(CLICKED_CLASS);
//    }

    title.classList.toggle(CLICKED_CLASS); //위 .contains, if-else 한줄로 압축...
}

function init(){
    title.addEventListener("click",handleClick);
    //title.addEventListener("mouseenter",handleClick);
}

init();
//window.addEventListener("resize", handleResize); //window사이즈 바뀔때마다 handleResize 호출



