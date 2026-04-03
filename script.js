/* ── 이유식 데이터 ── */
const PLANS = {
  5: {
    stage: "초기 이유식 1단계",
    texture: "완전 미음 (쌀미음)",
    meal_count: "하루 1회",
    amount: "1~2 스푼 (10ml)",
    allowed: ["쌀", "애호박", "단호박", "감자", "고구마"],
    caution: ["달걀 흰자", "생선", "밀가루", "꿀"],
    tip: "처음 이유식은 쌀미음 한 가지로 시작해 3~4일 관찰 후 새 재료를 하나씩 추가하세요.",
    weeks: {
      default: [
        { day: "월", menu: "쌀미음", recipe: "쌀 불려서 10배 물로 갈아 익히기" },
        { day: "화", menu: "쌀미음", recipe: "같은 방식으로 반복, 양 늘리기 시도" },
        { day: "수", menu: "애호박 쌀미음", recipe: "애호박 쪄서 갈기 + 쌀미음에 섞기" },
        { day: "목", menu: "애호박 쌀미음", recipe: "어제와 동일, 반응 확인" },
        { day: "금", menu: "단호박 쌀미음", recipe: "단호박 쪄서 갈기 + 쌀미음" },
        { day: "토", menu: "단호박 쌀미음", recipe: "단호박 양 조금 늘리기" },
        { day: "일", menu: "감자 쌀미음", recipe: "감자 삶아 갈기 + 쌀미음" }
      ]
    }
  },
  6: {
    stage: "초기 이유식 2단계",
    texture: "묽은 미음 (10배죽)",
    meal_count: "하루 1~2회",
    amount: "30~60ml",
    allowed: ["쌀", "애호박", "단호박", "감자", "고구마", "브로콜리", "당근"],
    caution: ["달걀 흰자", "생선류", "밀가루", "꿀", "견과류"],
    tip: "새 재료는 반드시 3일 연속 소량 테스트 후 이상 없으면 다음 재료로 넘어가세요.",
    weeks: {
      default: [
        { day: "월", menu: "브로콜리 미음", recipe: "브로콜리 데쳐 곱게 갈기 + 쌀미음" },
        { day: "화", menu: "브로콜리 미음", recipe: "동일, 반응 관찰" },
        { day: "수", menu: "당근 미음", recipe: "당근 삶아 갈기 + 쌀미음" },
        { day: "목", menu: "당근 미음", recipe: "당근 양 조금 늘리기" },
        { day: "금", menu: "애호박 당근 미음", recipe: "애호박 + 당근 함께 갈아 쌀미음" },
        { day: "토", menu: "고구마 미음", recipe: "고구마 삶아 곱게 갈기 + 쌀미음" },
        { day: "일", menu: "단호박 브로콜리 미음", recipe: "단호박 + 브로콜리 갈기 + 쌀미음" }
      ]
    }
  },
  7: {
    stage: "중기 이유식 1단계",
    texture: "묽은 죽 (7배죽)",
    meal_count: "하루 2회",
    amount: "60~80ml",
    allowed: ["쌀", "소고기", "닭고기", "두부", "애호박", "당근", "브로콜리", "감자", "시금치"],
    caution: ["달걀 흰자", "등푸른생선", "꿀", "견과류", "새우"],
    tip: "이 시기부터 소고기를 매일 15g 이상 먹이면 철분 보충에 큰 도움이 돼요.",
    weeks: {
      default: [
        { day: "월", menu: "소고기 애호박죽", recipe: "소고기 곱게 다져 볶기 + 애호박 갈기 + 쌀죽" },
        { day: "화", menu: "닭고기 당근죽", recipe: "닭안심 삶아 곱게 다지기 + 당근 갈기 + 죽" },
        { day: "수", menu: "두부 시금치죽", recipe: "두부 으깨기 + 시금치 데쳐 다지기 + 쌀죽" },
        { day: "목", menu: "소고기 감자죽", recipe: "소고기 다짐 + 감자 삶아 으깨기 + 죽" },
        { day: "금", menu: "닭고기 브로콜리죽", recipe: "닭안심 다지기 + 브로콜리 데쳐 갈기 + 죽" },
        { day: "토", menu: "소고기 당근죽", recipe: "소고기 다짐 + 당근 갈기 + 쌀죽" },
        { day: "일", menu: "두부 애호박죽", recipe: "두부 으깨기 + 애호박 갈기 + 쌀죽" }
      ]
    }
  },
  8: {
    stage: "중기 이유식 2단계",
    texture: "진죽 (5배죽)",
    meal_count: "하루 2회",
    amount: "80~100ml",
    allowed: ["쌀", "소고기", "닭고기", "두부", "달걀노른자", "흰살생선", "애호박", "당근", "브로콜리", "시금치"],
    caution: ["달걀 흰자", "꿀", "견과류", "갑각류", "등푸른생선"],
    tip: "달걀은 노른자만 먹여도 되는 시기예요. 흰자는 돌 이후에 시작하세요.",
    weeks: {
      default: [
        { day: "월", menu: "소고기 브로콜리죽", recipe: "소고기 다짐 + 브로콜리 데쳐 다지기 + 진죽" },
        { day: "화", menu: "달걀노른자 애호박죽", recipe: "달걀 노른자 스크램블 + 애호박 다지기 + 죽" },
        { day: "수", menu: "닭고기 시금치죽", recipe: "닭안심 다지기 + 시금치 데쳐 다지기 + 죽" },
        { day: "목", menu: "대구살 감자죽", recipe: "대구 쪄서 가시 제거 으깨기 + 감자 + 죽" },
        { day: "금", menu: "소고기 당근죽", recipe: "소고기 다짐 + 당근 갈기 + 진죽" },
        { day: "토", menu: "두부 브로콜리죽", recipe: "두부 으깨기 + 브로콜리 다지기 + 죽" },
        { day: "일", menu: "닭고기 애호박 당근죽", recipe: "닭고기 + 애호박 + 당근 함께 다져 죽" }
      ]
    }
  },
  9: {
    stage: "중기 이유식 3단계",
    texture: "무른 죽 (3~4배죽)",
    meal_count: "하루 2회",
    amount: "80~120ml",
    allowed: ["쌀", "소고기", "닭고기", "두부", "달걀노른자", "흰살생선", "시금치", "완두콩", "청경채", "브로콜리"],
    caution: ["달걀 흰자", "꿀", "견과류", "갑각류", "생우유"],
    tip: "이 시기부터 손으로 집어먹는 핑거푸드를 시작해보세요 (찐 당근, 두부 큐브 등).",
    weeks: {
      default: [
        { day: "월", menu: "소고기 시금치죽", recipe: "소고기 다짐 + 시금치 데쳐 다지기 + 쌀죽" },
        { day: "화", menu: "닭고기 완두콩 진밥", recipe: "닭안심 찢기 + 완두콩 삶아 으깨기 + 진밥" },
        { day: "수", menu: "두부 브로콜리죽", recipe: "두부 으깨기 + 브로콜리 다지기 + 죽" },
        { day: "목", menu: "대구살 감자죽", recipe: "대구 쪄서 으깨기 + 감자 삶아 으깨기 + 죽" },
        { day: "금", menu: "소고기 청경채 진밥", recipe: "소고기 다짐 볶기 + 청경채 데쳐 다지기" },
        { day: "토", menu: "닭고기 당근죽", recipe: "닭안심 다지기 + 당근 삶아 다지기 + 죽" },
        { day: "일", menu: "달걀노른자 애호박죽", recipe: "달걀 노른자만 + 애호박 다지기 + 죽" }
      ]
    }
  },
  10: {
    stage: "후기 이유식 1단계",
    texture: "무른 밥 (진밥)",
    meal_count: "하루 3회",
    amount: "100~120ml",
    allowed: ["쌀", "소고기", "닭고기", "두부", "달걀노른자", "흰살생선", "고구마", "단호박", "브로콜리", "청경채"],
    caution: ["꿀", "생우유 (요리에 소량 가능)", "짠 음식", "견과류"],
    tip: "3끼로 늘면 분유·모유량이 자연스럽게 줄어요. 억지로 줄이지 않아도 아기가 조절해요.",
    weeks: {
      default: [
        { day: "월", menu: "소고기 고구마 진밥", recipe: "소고기 다짐 + 고구마 으깨기 + 진밥" },
        { day: "화", menu: "닭고기 단호박 진밥", recipe: "닭안심 찢기 + 단호박 으깨기 + 진밥" },
        { day: "수", menu: "두부 청경채 진밥", recipe: "두부 으깨기 + 청경채 데쳐 다지기 + 진밥" },
        { day: "목", menu: "소고기 브로콜리 진밥", recipe: "소고기 다짐 + 브로콜리 다지기 + 진밥" },
        { day: "금", menu: "흰살생선 감자 진밥", recipe: "흰살생선 쪄서 으깨기 + 감자 + 진밥" },
        { day: "토", menu: "닭고기 애호박 진밥", recipe: "닭안심 다지기 + 애호박 다지기 + 진밥" },
        { day: "일", menu: "소고기 시금치 진밥", recipe: "소고기 다짐 + 시금치 다지기 + 진밥" }
      ]
    }
  },
  11: {
    stage: "후기 이유식 2단계",
    texture: "무른 밥 ~ 일반 밥 전환",
    meal_count: "하루 3회 + 간식 1회",
    amount: "120~150ml",
    allowed: ["쌀", "소고기", "닭고기", "돼지고기", "두부", "달걀", "흰살생선", "다양한 채소"],
    caution: ["꿀", "생우유 (소량)", "너무 짠 음식", "단단한 견과류"],
    tip: "이 시기부터 달걀 전란을 시도해도 좋아요. 처음엔 완숙으로 주고 반응을 봐주세요.",
    weeks: {
      default: [
        { day: "월", menu: "소고기 된장 진밥", recipe: "소고기 + 두부 + 된장 조금 + 진밥" },
        { day: "화", menu: "닭고기 채소 진밥", recipe: "닭안심 + 당근 + 브로콜리 다져 진밥" },
        { day: "수", menu: "달걀 시금치 진밥", recipe: "달걀 완숙 으깨기 + 시금치 다지기 + 진밥" },
        { day: "목", menu: "소고기 단호박 진밥", recipe: "소고기 다짐 + 단호박 으깨기 + 진밥" },
        { day: "금", menu: "두부 채소볶음밥", recipe: "두부 + 애호박 + 당근 볶아 진밥에 섞기" },
        { day: "토", menu: "닭고기 버섯 진밥", recipe: "닭안심 다지기 + 표고버섯 다지기 + 진밥" },
        { day: "일", menu: "소고기 미역국 진밥", recipe: "소고기 + 미역 부드럽게 끓여 진밥과" }
      ]
    }
  },
  12: {
    stage: "후기 이유식 완성단계 (유아식 전환기)",
    texture: "일반 밥 (부드럽게)",
    meal_count: "하루 3회 + 간식 2회",
    amount: "150~180ml",
    allowed: ["쌀", "소고기", "닭고기", "돼지고기", "두부", "달걀", "생선류", "다양한 채소", "과일"],
    caution: ["꿀 (아직 주의)", "너무 짠 가공식품", "단단한 견과류"],
    tip: "돌이 지나면 생우유를 시작할 수 있어요. 처음엔 하루 200ml 정도부터 시작하세요.",
    weeks: {
      default: [
        { day: "월", menu: "소고기 채소 볶음밥", recipe: "소고기 + 당근 + 브로콜리 볶아 밥에 섞기" },
        { day: "화", menu: "닭고기 두부 된장국밥", recipe: "닭안심 + 두부 된장국 + 부드러운 밥" },
        { day: "수", menu: "달걀 채소 스크램블 밥", recipe: "달걀 + 애호박 + 당근 스크램블 + 밥" },
        { day: "목", menu: "소고기 미역국 밥", recipe: "소고기 + 미역 끓이기 + 부드러운 밥" },
        { day: "금", menu: "흰살생선 감자 매시", recipe: "흰살생선 + 감자 으깨기 + 부드러운 밥" },
        { day: "토", menu: "닭고기 토마토 리조또", recipe: "닭안심 + 토마토 + 쌀 부드럽게 끓이기" },
        { day: "일", menu: "소고기 시금치 무른밥", recipe: "소고기 + 시금치 + 참기름 한 방울" }
      ]
    }
  }
};

/* ── 계절 데이터 ── */
const SEASONAL = {
  봄:  ["시금치", "완두콩", "딸기", "청경채"],
  여름: ["애호박", "오이", "수박", "가지"],
  가을: ["고구마", "단호박", "배", "브로콜리"],
  겨울: ["무", "배추", "시금치", "귤"]
};

function getSeason() {
  const m = new Date().getMonth() + 1;
  if ([3, 4, 5].includes(m))  return "봄";
  if ([6, 7, 8].includes(m))  return "여름";
  if ([9, 10, 11].includes(m)) return "가을";
  return "겨울";
}

/* ── 상태 ── */
let month = null;
let focus = null;
let allergies = [];

/* ── 이벤트: 개월 수 ── */
document.getElementById("months").addEventListener("click", e => {
  const btn = e.target.closest(".month-btn");
  if (!btn) return;
  document.querySelectorAll(".month-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  month = btn.dataset.v;
  const gb = document.getElementById("genBtn");
  gb.disabled = false;
  gb.textContent = `${month}개월 이유식 플랜 만들기`;
});

/* ── 이벤트: 중점 ── */
document.getElementById("focus").addEventListener("click", e => {
  const btn = e.target.closest(".opt-btn");
  if (!btn) return;
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
    focus = null;
  } else {
    document.querySelectorAll("#focus .opt-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    focus = btn.dataset.v;
  }
});

/* ── 이벤트: 알레르기 ── */
document.getElementById("allergy").addEventListener("click", e => {
  const btn = e.target.closest(".opt-btn");
  if (!btn) return;
  btn.classList.toggle("active");
  const v = btn.dataset.v;
  allergies = btn.classList.contains("active")
    ? [...allergies, v]
    : allergies.filter(x => x !== v);
});

/* ── 플랜 생성 ── */
document.getElementById("genBtn").addEventListener("click", () => {
  if (!month) return;

  const plan = PLANS[month];
  const season = getSeason();
  const seasonal = SEASONAL[season];

  let week = [...plan.weeks.default];
  let allowed = [...plan.allowed];

  // 알레르기 재료 필터링
  if (allergies.length > 0) {
    week = week.map(d => {
      const hasAllergen = allergies.some(a => d.menu.includes(a) || d.recipe.includes(a));
      if (hasAllergen) {
        return { ...d, menu: d.menu + " (재료 조정 필요)", recipe: "알레르기 재료 제외 후 대체 재료로 변경하세요" };
      }
      return d;
    });
    allowed = allowed.filter(a => !allergies.includes(a));
  }

  // 결과 렌더링
  document.getElementById("form-section").style.display = "none";
  const rs = document.getElementById("result-section");
  rs.style.display = "block";

  rs.innerHTML = `
    <div class="result-wrap">

      <div class="stage-banner">
        <div class="stage-label">${month}개월 · ${season}</div>
        <div class="stage-name">${plan.stage}</div>
        <div class="stage-stats">
          <div class="stat-item">
            <div class="s-label">질감</div>
            <div class="s-val">${plan.texture}</div>
          </div>
          <div class="stat-item">
            <div class="s-label">하루 횟수</div>
            <div class="s-val">${plan.meal_count}</div>
          </div>
          <div class="stat-item">
            <div class="s-label">1회 식사량</div>
            <div class="s-val">${plan.amount}</div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="section-header">
          <span class="section-icon">🌱</span>
          <span class="section-title-text">${season} 제철 재료</span>
        </div>
        <div class="section-body">
          <div class="pill-wrap">
            ${seasonal.map(i => `<span class="pill pill-seasonal">${i}</span>`).join("")}
            ${allowed.map(i => `<span class="pill pill-green">${i}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="section-header">
          <span class="section-icon">⚠️</span>
          <span class="section-title-text">주의할 재료</span>
        </div>
        <div class="section-body">
          <div class="pill-wrap">
            ${plan.caution.map(i => `<span class="pill pill-amber">${i}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="section-header">
          <span class="section-icon">📅</span>
          <span class="section-title-text">이번 주 7일 플랜</span>
        </div>
        <div class="section-body">
          ${week.map(d => `
            <div class="day-item">
              <div class="day-badge">${d.day}</div>
              <div>
                <div class="menu-name">${d.menu}</div>
                <div class="recipe-txt">${d.recipe}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <span class="tip-text">${plan.tip}</span>
      </div>

      <button class="reset-btn" onclick="resetForm()">← 다른 개월 수로 다시 만들기</button>

    </div>`;
});

/* ── 폼 초기화 ── */
function resetForm() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("result-section").style.display = "none";
  document.getElementById("result-section").innerHTML = "";
  month = null;
  focus = null;
  allergies = [];
  document.querySelectorAll(".month-btn, .opt-btn").forEach(b => b.classList.remove("active"));
  const gb = document.getElementById("genBtn");
  gb.disabled = true;
  gb.textContent = "개월 수를 선택해주세요";
}
