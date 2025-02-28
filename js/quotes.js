const quotes = [
  {
    quote:
      "어떤 사람들은 3루에 태어났지만 자신이 3루타를 쳤다고 생각하면서 인생을 산다.",
    author: "배리 스윗처처",
  },
  {
    quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote:
      "순간을 사랑하라. 그러면 그 순간의 에너지가 모든 경계를 넘어 퍼져나갈 것이다.",
    author: "코리타 켄트",
  },
  {
    quote: "한 사람의 조국은 어디든 그가 번창하는 곳이다.",
    author: "아리스토파네스",
  },
  {
    quote: "세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.",
    author: "헬렌 켈러",
  },
  {
    quote: "운은 계획에서 비롯된다.",
    author: "브랜치 리키",
  },
  {
    quote:
      "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을.",
    author: "에이브리햄 링컨",
  },
  {
    quote: "꺼지지 않을 불길로 타올라라.",
    author: "루이사 시게아",
  },
  {
    quote: "모든 고귀한 일은 찾기 드문만큼 하기도 어렵다.",
    author: "바뤼흐 스피노자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
