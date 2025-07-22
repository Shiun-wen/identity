const gameSteps = [
  {
    title: '小美的困境',
    scenario: '小美母親是排灣族，從小在部落長大，會說流利族語。但因為從父姓「陳」，無法取得原住民身分，不能申請大學保障名額。',
    question: '你覺得這樣公平嗎？',
    options: [
      {
        text: '不公平！她明明很認同排灣族文化',
        emotion: '😢',
        response: '小美眼中含淚："謝謝你理解我..."'
      },
      {
        text: '法律就是法律，必須遵守',
        emotion: '😞',
        response: '小美低下頭："我知道...但還是很難過"'
      }
    ]
  },
  {
    title: '美娟的無奈',
    scenario: '美娟是布農族女性，嫁給漢人丈夫。因為社會習慣孩子從父姓，她的孩子無法取得原住民身分。但如果是布農族男性娶漢人女性，孩子就能輕易取得身分。',
    question: '這種差別待遇公平嗎？',
    options: [
      {
        text: '太不公平！這是性別歧視',
        emotion: '😡',
        response: '美娟憤怒地說："為什麼女性就要承受這種不平等？"'
      },
      {
        text: '社會習慣難改變，只能接受',
        emotion: '😔',
        response: '美娟無奈嘆息："身為女性真的很吃虧..."'
      }
    ]
  },
  {
    title: '阿明的選擇',
    scenario: '阿明是泰雅族，妻子是客家人。孩子即將出生，妻子希望孩子從母姓「林」，但這樣孩子就無法取得原住民身分。',
    question: '如果你是阿明，會怎麼選？',
    options: [
      {
        text: '讓孩子從父姓，保住原住民身分',
        emotion: '😔',
        response: '阿明嘆氣："為了孩子的未來，但對不起老婆..."'
      },
      {
        text: '尊重妻子，從母姓',
        emotion: '😟',
        response: '阿明握拳："家庭和諧重要，但孩子失去機會了"'
      }
    ]
  },
  {
    title: '小華的困惑',
    scenario: '小華父母都是阿美族，他自動擁有原住民身分。但他從小在台北長大，不會說族語，對阿美族文化很陌生。反觀小美深度認同排灣族文化，卻沒有身分。',
    question: '你認為這種情況合理嗎？',
    options: [
      {
        text: '不合理！文化認同比血統重要',
        emotion: '🤔',
        response: '小華困惑："我雖有身分，但感覺小美比我更像原住民..."'
      },
      {
        text: '血統是客觀標準，比較公平',
        emotion: '😐',
        response: '小華點頭："至少血統是明確的，不會有爭議"'
      }
    ]
  },
  {
    title: '志工老師的觀察',
    scenario: '李老師在原住民部落當志工老師。她發現班上有原住民身分的孩子，有些對文化很陌生；沒有身分的孩子，反而積極學習族語和傳統。',
    question: '這讓你想到什麼？',
    options: [
      {
        text: '身分認定制度需要改革',
        emotion: '💭',
        response: '李老師深思："也許我們該重新思考什麼是真正的認同"'
      },
      {
        text: '重點是教育，不是身分',
        emotion: '😌',
        response: '李老師微笑："無論有沒有身分，文化傳承都很重要"'
      }
    ]
  },
  {
    title: '歷史的諷刺',
    scenario: '你知道嗎？現在用來證明原住民身分的「漢姓」，其實是300年前清朝政府強迫原住民祖先接受的。當時是為了「同化」，現在卻要用它來「證明認同」。',
    question: '知道這個歷史後，你有什麼感想？',
    options: [
      {
        text: '太諷刺了！用被迫的姓氏證明認同？',
        emotion: '😱',
        response: '"沒錯！這根本是歷史的荒謬循環！"'
      },
      {
        text: '歷史複雜，但現在需要標準',
        emotion: '🤔',
        response: '"雖然歷史有問題，但總要有個標準吧..."'
      }
    ]
  }
];


let currentStep = 0;

function renderStep(stepIndex) {
  const step = gameSteps[stepIndex];
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-purple-800 mb-4">原住民身分認定體驗</h1>
      <p class="text-sm text-gray-500">情境 ${stepIndex + 1} / ${gameSteps.length}</p>
    </div>

    <div class="bg-white border-2 border-purple-300 rounded-lg shadow mb-6 p-4">
      <h2 class="text-xl text-purple-800 font-bold mb-2">${step.title}</h2>
      <div class="bg-gray-50 p-4 rounded mb-4 text-gray-700">${step.scenario}</div>
      <div class="bg-blue-50 p-4 rounded">
        <h3 class="font-bold text-blue-800 mb-3">${step.question}</h3>
        ${step.options.map((opt, i) =>
          `<button data-index="${i}" class="option w-full text-left p-3 mb-2 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-100 transition">
            ${opt.text}
          </button>`
        ).join("")}
      </div>
    </div>

    <div class="text-center">
      <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div class="bg-purple-600 h-2 rounded-full" style="width:${((stepIndex + 1) / gameSteps.length) * 100}%;"></div>
      </div>
      <p class="text-xs text-gray-500">點擊選項查看角色反應</p>
    </div>
  `;

  // Add click listeners
  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      const optIndex = parseInt(btn.dataset.index);
      const chosen = step.options[optIndex];
      showEmotion(chosen);
    });
  });
}

function showEmotion(option) {
  const app = document.getElementById("app");
  const reactionDiv = document.createElement("div");
  reactionDiv.className = "mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg text-center animate-pulse";
  reactionDiv.innerHTML = `
    <div class="text-4xl mb-2">${option.emotion}</div>
    <p class="text-gray-700 italic">"${option.response}"</p>
  `;
  app.querySelector(".bg-white").appendChild(reactionDiv);

  setTimeout(() => {
    if (currentStep < gameSteps.length - 1) {
      currentStep++;
      renderStep(currentStep);
    } else {
      showEndScreen();
    }
  }, 2500);
}

function showEndScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-green-800 mb-4">體驗完成！</h1>
      <p class="text-lg text-gray-600">你已經感受到《原住民身分法》帶來的情感衝擊</p>
    </div>

    <div class="border-2 border-blue-300 bg-white p-6 rounded-lg mb-6">
      <h2 class="text-center text-xl text-blue-800 font-bold mb-4">憲法法庭的決定</h2>
      <p class="text-lg font-semibold text-red-600 text-center">宣告違憲！</p>
      <p class="text-gray-700 text-center">
        2022年憲法法庭認為姓名條款違反原住民身分認同權和平等權，<br>
        影響約9.5萬人，法律須在2年內修正。
      </p>
      <div class="bg-yellow-50 p-4 rounded-lg mt-4">
        <p class="text-sm text-orange-800 text-center">
          <strong>核心問題：</strong>不應該用「被殖民者強加的姓氏」來證明「原住民認同」
        </p>
      </div>
    </div>

    <div class="text-center">
      <button class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700" onclick="restart()">重新體驗</button>
    </div>
  `;
}

function restart() {
  currentStep = 0;
  renderStep(currentStep);
}

renderStep(currentStep);
