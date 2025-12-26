//1 필요한 요소 선택. 
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

//2 버튼 클릭 이벤트 리스너 설정. 
btn.addEventListener('click', function () {
    // 2-1 입력한 값 가져오기 
    const todo = input.value;

    // 2-2. 기본 유효성 검사. todo 내용이 비어 있으면, 실행 안함. 
    if (todo === "") {
        alert('할 일을 입력해주세요.')
        return; // function() { , 익명함수 실행을 중단. 
    }

    // 2-3 목록에 태그를 추가하기. 
    // 방법1, 
    // list.innerHTML += `
    // <li> 
    //   ${todo} 
    //   <button onclick="this.parentElement.remove()">삭제</button>
    // </li>
    // `

    // 방법2 
    // 요소를 하나씩 만들어서 붙이는 방식. 
    // 방법2-1. li 태그를 만들기. 
    const li = document.createElement('li');
    // 방법2-1-2 li 태그의 내용을 , 입력한 todo 의내용을 넣기. 
    li.textContent = todo;

    // 방법2-2. 삭제 버튼 만들기 
    const btn = document.createElement('button');
    // 방법2-2-2, 버튼에 삭제 내용 넣기. 
    btn.textContent = '삭제';

    // 방법2-3 삭제 기능 연결 (클릭시 실행 )
    btn.addEventListener('click', function(){
        // 방법2-3-2 버튼 클릭시, 부모 li를 삭제 
        this.parentElement.remove();
    })

    // 방법2-4 위의 기능들을 조립하기. 
    // li 태그의 자식으로 버튼을 넣기. 
    // <li>  <button> </button></li> 
    li.appendChild(btn);
    // <ul> <li>  <button> </button></li>  </ul>
    list.appendChild(li);

    // 2-4  입력창을 비우기 작업. 
    input.value = ""
})

// 251226- 8일차 작업 진행. 

// 순서1
// 데이터 저장할 저장소 배열 만들기. 
let todoData = [];

// 순서2
// 그리기 함수 정의 - 함수명은 보통 소문자 시작. 
function render(dataArray) {

  //항상 기본, 데이터를 모두 삭제하고 시작한다. 
  // 기존 내용을 다 지우고,
  listContainer.innerHTML = "";

  //  새로 요소를 그릴 예정. 새로고침 효과.
  // 기반이 데이터를 중심으로 한다. 그 데이터는 배열에 들어있다. 
  //  배열과, 반복문을 같이 사용하는 함수 소개. forEach(function(){}), 이 기법사용.
  todoData.forEach( function(todo) {
	 listContainer.innerHTML += `
    <li>
	  <span>${todo.text}<span>
	  <div>
		<button class="edit-btn" onclick="updateTodo(${todo.id})">
		  수정
		</button>
		<button class="del-btn" onclick="deleteTodo(${todo.id})">
		  삭제
		</button>
	  </div>
	</li>
  `
  } // forEach닫는 태그 
  )  //render 닫는 태그 
 
} //render 닫는 태그 