import './style.css'

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
}

// 
document.getElementById("add-button").addEventListener("click", () => onClickAdd());


// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストを作成
const createIncompleteList = (text) => {
  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = text;

  // button (完了) 生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    deleteFromIncompleteList(completeButton.parentNode);
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    })

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    const completeList = document.getElementById("complete-list").appendChild(addTarget);

  })

  // button (削除) 生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  })

  // 要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);

}
