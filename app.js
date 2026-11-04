/**
 * ============================================================================
 * GIẢI MÃ VẬN MỆNH & ĐỜI SỐNG (THAN-SO-HOC-AI) — BỘ MÁY TÍNH TOÁN TRUNG TÂM
 * 1. Tra cứu Thần Số Học Pitago + Biểu đồ 3x3 + 4 Đỉnh cao đời người
 * 2. Bói Độ Hợp Nhau Tình Duyên + Vẽ Giấy Chứng Nhận Hợp Đôi (HTML5 Canvas)
 * 3. Phong Thủy SĐT / Số Tài Khoản Ngân Hàng + Ngũ Hành + Giờ Hoàng Đạo
 * 4. Tạo Hồ Sơ Xin Việc (CV) Đẹp Trong 30 Giây Chuẩn A4
 * ============================================================================
 */

(function () {
  "use strict";

  const VIP_STORAGE_KEY = "than_so_hoc_vip_unlocked";
  const OWNER_CFG_KEY = "than_so_hoc_owner_cfg";

  // --------------------------------------------------------------------------
  // 1. TIỆN ÍCH CHUẨN HÓA TIẾNG VIỆT & CẤU HÌNH VIETQR
  // --------------------------------------------------------------------------
  function removeVietnameseTones(str) {
    if (!str) return "";
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
  }

  function isVipUnlocked() {
    return localStorage.getItem(VIP_STORAGE_KEY) === "true";
  }

  function loadOwnerConfig() {
    const base = Object.assign({}, window.DESTINY_DATA.ownerConfig);
    try {
      const saved = JSON.parse(localStorage.getItem(OWNER_CFG_KEY) || "null");
      if (saved) Object.assign(base, saved);
    } catch (e) {}

    const params = new URLSearchParams(window.location.search);
    if (params.get("bank")) base.bankId = params.get("bank");
    if (params.get("acc")) base.accountNo = params.get("acc");
    if (params.get("name")) base.accountName = params.get("name");
    if (params.get("price")) base.unlockPrice = parseInt(params.get("price"), 10) || 29000;
    return base;
  }

  function formatVnd(amount) {
    return Number(amount || 29000).toLocaleString("vi-VN") + "đ";
  }

  // --------------------------------------------------------------------------
  // 2. THUẬT TOÁN THẦN SỐ HỌC PITAGO CHÍNH XÁC
  // --------------------------------------------------------------------------
  function reduceNumber(num, keepMaster) {
    let n = Math.abs(parseInt(num, 10) || 0);
    while (n > 9) {
      if (keepMaster && (n === 11 || n === 22 || n === 33 || n === 10)) {
        break;
      }
      n = String(n)
        .split("")
        .reduce((acc, d) => acc + parseInt(d, 10), 0);
    }
    return n;
  }

  function reduceSingleDigit(num) {
    let n = Math.abs(parseInt(num, 10) || 0);
    while (n > 9) {
      n = String(n)
        .split("")
        .reduce((acc, d) => acc + parseInt(d, 10), 0);
    }
    return n || 1;
  }

  function calcLifePath(dateStr) {
    const parts = (dateStr || "1996-08-18").split("-");
    const year = parseInt(parts[0], 10) || 1996;
    const month = parseInt(parts[1], 10) || 8;
    const day = parseInt(parts[2], 10) || 18;

    const allDigits = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
    let total = allDigits.split("").reduce((s, d) => s + parseInt(d, 10), 0);

    let lp = reduceNumber(total, true);
    if (lp === 1) lp = 10; // Trong Thần số học Pitago, tổng rút gọn về 1 tức là từ 10/19/28 -> Số Chủ Đạo 10
    return {
      lifePath: lp,
      day,
      month,
      year,
      allDigits
    };
  }

  function calcNameNumbers(fullName) {
    const clean = removeVietnameseTones(fullName || "NGUYEN MINH ANH");
    const map = window.DESTINY_DATA.pythagorasMap;
    const vowels = "AEIOUY";

    let destinySum = 0;
    let soulSum = 0;
    let personalitySum = 0;

    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i];
      const val = map[ch] || 0;
      destinySum += val;
      if (vowels.includes(ch)) {
        soulSum += val;
      } else {
        personalitySum += val;
      }
    }

    return {
      destiny: reduceNumber(destinySum, true) === 1 ? 10 : reduceNumber(destinySum, true),
      soul: reduceSingleDigit(soulSum),
      personality: reduceSingleDigit(personalitySum)
    };
  }

  function calcPinnacles(day, month, year, lifePath) {
    const baseLp = lifePath > 9 ? reduceSingleDigit(lifePath) : lifePath;
    const dRed = reduceSingleDigit(day);
    const mRed = reduceSingleDigit(month);
    const yRed = reduceSingleDigit(year);

    const pin1 = reduceSingleDigit(mRed + dRed);
    const pin2 = reduceSingleDigit(dRed + yRed);
    const pin3 = reduceSingleDigit(pin1 + pin2);
    const pin4 = reduceSingleDigit(mRed + yRed);

    const age1 = 36 - baseLp;
    return [
      { stage: "Đỉnh Cao 1 (Tuổi Trẻ)", age: `${age1} tuổi (${year + age1})`, num: pin1 },
      { stage: "Đỉnh Cao 2 (Trưởng Thành)", age: `${age1 + 9} tuổi (${year + age1 + 9})`, num: pin2 },
      { stage: "Đỉnh Cao 3 (Viên Mãn)", age: `${age1 + 18} tuổi (${year + age1 + 18})`, num: pin3 },
      { stage: "Đỉnh Cao 4 (Trí Tuệ Bậc Thầy)", age: `${age1 + 27} tuổi (${year + age1 + 27})`, num: pin4 }
    ];
  }

  // --------------------------------------------------------------------------
  // 3. HIỂN THỊ KẾT QUẢ THẦN SỐ HỌC (TAB 1)
  // --------------------------------------------------------------------------
  function renderNumerologyReport() {
    const fullName = document.getElementById("numFullName").value.trim() || "Nguyễn Minh Anh";
    const birthDate = document.getElementById("numBirthDate").value || "1996-08-18";
    const gender = document.getElementById("numGender").value || "Nữ";

    const lpObj = calcLifePath(birthDate);
    const nameObj = calcNameNumbers(fullName);
    const attitude = reduceSingleDigit(lpObj.day + lpObj.month);
    const personalYear2026 = reduceSingleDigit(lpObj.day + lpObj.month + 2 + 0 + 2 + 6);
    const pinnacles = calcPinnacles(lpObj.day, lpObj.month, lpObj.year, lpObj.lifePath);

    const info =
      window.DESTINY_DATA.lifePaths[lpObj.lifePath] ||
      window.DESTINY_DATA.lifePaths[reduceSingleDigit(lpObj.lifePath)] ||
      window.DESTINY_DATA.lifePaths[10];

    // Đếm tần suất các số 1-9 trong ngày sinh để vẽ Biểu đồ 3x3
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    for (const ch of lpObj.allDigits) {
      const d = parseInt(ch, 10);
      if (d >= 1 && d <= 9) counts[d]++;
    }

    // Thứ tự lưới 3x3 chuẩn Pitago:
    // Hàng trên: 3 - 6 - 9 (Trục Trí Não)
    // Hàng giữa: 2 - 5 - 8 (Trục Tâm Hồn)
    // Hàng dưới: 1 - 4 - 7 (Trục Thể Chất)
    const gridOrder = [3, 6, 9, 2, 5, 8, 1, 4, 7];
    const gridHtml = gridOrder
      .map((num) => {
        const repeatStr = counts[num] > 0 ? String(num).repeat(counts[num]) : "—";
        const cls = counts[num] > 0 ? "grid-cell has-num" : "grid-cell";
        return `
          <div class="${cls}">
            <span class="cell-pos">Ô số ${num}</span>
            <span class="cell-val">${repeatStr}</span>
          </div>
        `;
      })
      .join("");

    // Phân tích các mũi tên xuất hiện
    const detectedArrows = [];
    window.DESTINY_DATA.arrows.forEach((ar) => {
      const hasAll = ar.nums.every((n) => counts[n] > 0);
      const hasNone = ar.nums.every((n) => counts[n] === 0);
      if (hasAll) {
        detectedArrows.push({ title: ar.presentName, desc: ar.presentDesc, positive: true });
      } else if (hasNone) {
        detectedArrows.push({ title: ar.emptyName, desc: ar.emptyDesc, positive: false });
      }
    });

    if (detectedArrows.length === 0) {
      detectedArrows.push({
        title: "⚖️ Biểu Đồ Cân Bằng Đa Chiều",
        desc: "Các con số trong ngày sinh của bạn phân bổ hài hòa trên cả 3 trục Trí Não - Tâm Hồn - Thể Chất, giúp bạn dễ thích nghi với mọi hoàn cảnh sống.",
        positive: true
      });
    }

    const cfg = loadOwnerConfig();
    const vipUnlocked = isVipUnlocked();

    const vipSectionHtml = vipUnlocked
      ? `
        <div class="vip-unlocked-box">
          <div class="card-title">
            <span>👑 ĐÃ MỞ KHÓA TRỌN BỘ: DỰ BÁO CHI TIẾT NĂM 2026–2027 & BÍ QUYẾT KÍCH TÀI LỘC</span>
            <span class="btn-soft" style="border-color:#10b981;color:#6ee7b7;">✔ Bản Quyền VIP Đầy Đủ</span>
          </div>
          <p style="margin-bottom:12px;color:#fde68a;font-weight:700;">
            🌟 Vận Niên Cá Nhân Năm 2026 của ${fullName}: ${window.DESTINY_DATA.personalYears[personalYear2026]}
          </p>
          <div class="form-grid-3" style="grid-template-columns:repeat(3,1fr);">
            ${info.forecast2026
              .map(
                (item) => `
                <div style="background:rgba(15,23,42,0.75);padding:14px;border-radius:12px;border:1px solid rgba(16,185,129,0.4);">
                  <p style="font-size:13.5px;">${item}</p>
                </div>`
              )
              .join("")}
          </div>
          <div style="margin-top:14px;padding:14px;background:rgba(251,191,36,0.12);border-radius:12px;border:1px solid rgba(251,191,36,0.4);">
            <strong style="color:#fde68a;">💰 Lời Khuyên Giữ Tiền & Kích Hoạt Tài Lộc Trọn Đời:</strong>
            <p style="font-size:14px;margin-top:4px;">${info.wealthAdvice}</p>
            <strong style="color:#f472b6;display:block;margin-top:8px;">💘 Lời Khuyên Tình Duyên & Gia Đạo:</strong>
            <p style="font-size:14px;margin-top:4px;">${info.loveAdvice}</p>
          </div>
        </div>
      `
      : `
        <div class="vip-paywall-card no-print">
          <div class="hero-pill">🔒 Phần Luận Giải Chuyên Sâu Dành Riêng Cho ${fullName}</div>
          <h3 style="font-size:21px;color:#fde68a;margin-bottom:8px;">
            Mở Khóa Dự Báo Vận Hạn 12 Tháng Năm 2026–2027, Bí Quyết Kích Tài Lộc & Xuất Sách PDF
          </h3>
          <p style="color:#cbd5e1;max-width:660px;margin:0 auto 16px;font-size:14px;">
            Xem chi tiết từng Quý trong năm 2026 của bạn tốt về tiền bạc hay tình cảm, cách hóa giải điểm khuyết thiếu trên Biểu đồ 3x3 và tải trọn bộ Sách Luận Giải PDF lưu giữ trọn đời.
          </p>
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
            <button id="btnInlineUnlockVip" class="btn-gold">
              🔓 Mở Khóa Trọn Bộ Ngay (Chỉ ${formatVnd(cfg.unlockPrice)} — Bằng 1 Ly Trà Sữa)
            </button>
            <button id="btnInlineShareFree" class="btn-soft">
              🎁 Chia Sẻ Cho Bạn Bè Để Mở Khóa Miễn Phí
            </button>
          </div>
        </div>
      `;

    const html = `
      <!-- PHẦN 1: QUẢ CẦU SỐ CHỦ ĐẠO -->
      <div class="num-hero-box">
        <div class="sacred-orb">
          <span class="orb-label">Số Chủ Đạo</span>
          <span class="orb-number">${lpObj.lifePath}</span>
          <span class="orb-label">${info.badge.split(" ")[0]}</span>
        </div>
        <div>
          <div class="hero-pill">Hồ Sơ Vận Mệnh: ${fullName} (${gender} • ${lpObj.day}/${lpObj.month}/${lpObj.year})</div>
          <h2 style="font-size:24px;color:#fde68a;margin-bottom:8px;">${info.title}</h2>
          <p style="font-size:14px;color:#f472b6;font-weight:700;margin-bottom:8px;">☯️ Hành Tinh & Năng Lượng: ${info.element}</p>
          <p style="font-size:15px;color:#f8fafc;">${info.summary}</p>
        </div>
      </div>

      <!-- PHẦN 2: 5 CHỈ SỐ CỐT LÕI -->
      <div class="kpi-5-grid">
        <div class="kpi-tile">
          <strong>${lpObj.lifePath}</strong>
          <span>Số Chủ Đạo</span>
          <small>Đường đời & Vận mệnh</small>
        </div>
        <div class="kpi-tile">
          <strong>${nameObj.destiny}</strong>
          <span>Chỉ Số Sứ Mệnh</span>
          <small>Năng lực từ Họ Tên</small>
        </div>
        <div class="kpi-tile">
          <strong>${nameObj.soul}</strong>
          <span>Chỉ Số Linh Hồn</span>
          <small>Khát khao sâu thẳm</small>
        </div>
        <div class="kpi-tile">
          <strong>${attitude}</strong>
          <span>Chỉ Số Thái Độ</span>
          <small>Ấn tượng ban đầu</small>
        </div>
        <div class="kpi-tile">
          <strong>Năm số ${personalYear2026}</strong>
          <span>Vận Niên 2026</span>
          <small>Chu kỳ vận hội năm nay</small>
        </div>
      </div>

      <!-- PHẦN 3: ĐIỂM MẠNH, ĐIỂM YẾU & NGHỀ NGHIỆP -->
      <div class="form-grid-2">
        <div class="glass-card" style="margin-bottom:0;">
          <div class="card-title">🌟 Điểm Mạnh Trời Phú & Điểm Cần Khắc Phục</div>
          <p style="color:#6ee7b7;font-weight:700;margin-bottom:6px;">✔ Điểm mạnh nổi bật của bạn:</p>
          <ul style="padding-left:18px;margin-bottom:12px;font-size:14px;">
            ${info.strengths.map((s) => `<li style="margin-bottom:5px;">${s}</li>`).join("")}
          </ul>
          <p style="color:#fda4af;font-weight:700;margin-bottom:6px;">⚠ Điểm cần lưu ý để bứt phá:</p>
          <ul style="padding-left:18px;font-size:14px;">
            ${info.weaknesses.map((w) => `<li style="margin-bottom:5px;">${w}</li>`).join("")}
          </ul>
        </div>

        <div class="glass-card" style="margin-bottom:0;">
          <div class="card-title">💼 Công Việc Phù Hợp Nhất & Lời Khuyên Tài Lộc</div>
          <p style="color:#fde68a;font-weight:700;margin-bottom:6px;">🎯 Top ngành nghề giúp bạn phát tài nhanh nhất:</p>
          <ul style="padding-left:18px;margin-bottom:12px;font-size:14px;">
            ${info.careers.map((c) => `<li style="margin-bottom:6px;">${c}</li>`).join("")}
          </ul>
          <div style="background:rgba(251,191,36,0.1);padding:12px;border-radius:12px;border:1px solid rgba(251,191,36,0.3);">
            <strong style="color:#fde68a;font-size:13.5px;">💡 Bí quyết quản lý tiền bạc:</strong>
            <p style="font-size:13.5px;margin-top:4px;">${info.wealthAdvice}</p>
          </div>
        </div>
      </div>

      <!-- PHẦN 4: BIỂU ĐỒ NGÀY SINH 3x3 & MŨI TÊN CÁ TÍNH -->
      <div class="glass-card" style="margin-top:20px;">
        <div class="card-title">📐 Biểu Đồ Ngày Sinh Pitago (3x3) & Các Mũi Tên Cá Tính</div>
        <div class="chart-and-arrows">
          <div>
            <div class="birth-grid-3x3">${gridHtml}</div>
            <p style="font-size:11.5px;color:#94a3b8;text-align:center;margin-top:8px;">
              Hàng trên (3-6-9): Trí Não • Hàng giữa (2-5-8): Tâm Hồn • Hàng dưới (1-4-7): Thực Tế
            </p>
          </div>
          <div>
            <h4 style="color:#fde68a;margin-bottom:10px;">🔍 Giải Mã Các Mũi Tên Trên Ngày Sinh Của Bạn:</h4>
            ${detectedArrows
              .map(
                (a) => `
                <div style="background:rgba(255,255,255,0.05);border-left:4px solid ${
                  a.positive ? "#10b981" : "#f59e0b"
                };padding:11px 14px;border-radius:10px;margin-bottom:10px;">
                  <strong style="color:#fff;display:block;">${a.title}</strong>
                  <span style="font-size:13.5px;color:#cbd5e1;">${a.desc}</span>
                </div>`
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- PHẦN 5: 4 ĐỈNH CAO ĐỜI NGƯỜI -->
      <div class="glass-card">
        <div class="card-title">🏔️ 4 Cột Mốc Đỉnh Cao Thành Công Trong Cuộc Đời Bạn</div>
        <div class="pinnacles-grid">
          ${pinnacles
            .map(
              (p) => `
              <div class="pinnacle-card">
                <div class="pin-age">${p.stage}</div>
                <div class="pin-num">Số ${p.num}</div>
                <div style="font-size:13px;font-weight:700;color:#fff;">Năm ${p.age}</div>
              </div>`
            )
            .join("")}
        </div>
      </div>

      <!-- PHẦN 6: MỞ KHÓA VIP 29.000Đ HOẶC HIỂN THỊ BẢN ĐẦY ĐỦ -->
      ${vipSectionHtml}
    `;

    const area = document.getElementById("numerologyResultArea");
    area.innerHTML = html;

    const btnInlineUnlock = document.getElementById("btnInlineUnlockVip");
    if (btnInlineUnlock) {
      btnInlineUnlock.addEventListener("click", openUnlockModal);
    }
    const btnInlineShare = document.getElementById("btnInlineShareFree");
    if (btnInlineShare) {
      btnInlineShare.addEventListener("click", shareAndUnlockFree);
    }
  }

  // --------------------------------------------------------------------------
  // 4. TAB 2: BÓI ĐỘ HỢP NHAU TÌNH DUYÊN & VẼ GIẤY CHỨNG NHẬN (HTML5 CANVAS)
  // --------------------------------------------------------------------------
  function renderLoveCompatibility() {
    const nameA = document.getElementById("loveNameA").value.trim() || "Trần Hoàng Quân";
    const dobA = document.getElementById("loveDobA").value || "1995-05-16";
    const nameB = document.getElementById("loveNameB").value.trim() || "Nguyễn Bảo Ngọc";
    const dobB = document.getElementById("loveDobB").value || "1997-10-24";

    const lpA = calcLifePath(dobA).lifePath;
    const lpB = calcLifePath(dobB).lifePath;
    const soulA = calcNameNumbers(nameA).soul;
    const soulB = calcNameNumbers(nameB).soul;

    // Tính điểm tương hợp thực tế dựa trên độ hài hòa giữa 2 Số Chủ Đạo & Linh Hồn
    const seed = Math.abs(lpA * 17 + lpB * 23 + soulA * 11 + soulB * 13);
    const personalityScore = 80 + (seed % 19);
    const commScore = 78 + ((seed * 3) % 21);
    const wealthScore = 82 + ((seed * 7) % 18);
    const marriageScore = 84 + ((seed * 5) % 16);
    const totalScore = Math.round((personalityScore + commScore + wealthScore + marriageScore) / 4);

    let titleBadge = "💖 Duyên Tiền Định — Tâm Đầu Ý Hợp";
    if (totalScore >= 90) {
      titleBadge = "👑 Thiên Duyên Tiền Định — Cặp Đôi Vàng Vượng Phu Ích Tử";
    } else if (totalScore >= 84) {
      titleBadge = "💘 Tâm Đầu Ý Hợp — Càng Bên Nhau Càng Giàu Có Hạnh Phúc";
    } else {
      titleBadge = "🌸 Duyên Lành Bù Đắp — Thấu Hiểu Nhau Sẽ Bền Vững Trăm Năm";
    }

    const html = `
      <div class="glass-card">
        <div class="form-grid-2" style="align-items:center;">
          <div style="text-align:center;">
            <div class="love-score-circle">
              <span style="font-size:12px;color:#fce7f3;font-weight:700;">ĐỘ HỢP ĐÔI</span>
              <strong>${totalScore}%</strong>
            </div>
            <h3 style="color:#fde68a;font-size:20px;margin-bottom:6px;">${titleBadge}</h3>
            <p style="font-size:14px;color:#f9a8d4;">
              <strong>${nameA}</strong> (Số chủ đạo ${lpA}) ❤️ <strong>${nameB}</strong> (Số chủ đạo ${lpB})
            </p>
          </div>

          <div>
            <div class="progress-row">
              <div class="progress-label"><span>💞 Hòa Hợp Tính Cách & Cảm Xúc</span><span>${personalityScore}%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${personalityScore}%"></div></div>
            </div>
            <div class="progress-row">
              <div class="progress-label"><span>💬 Thấu Hiểu & Giao Tiếp Hàng Ngày</span><span>${commScore}%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${commScore}%"></div></div>
            </div>
            <div class="progress-row">
              <div class="progress-label"><span>💰 Đồng Tâm Hiệp Lực & Hút Tài Lộc</span><span>${wealthScore}%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${wealthScore}%"></div></div>
            </div>
            <div class="progress-row">
              <div class="progress-label"><span>💍 Gắn Kết Hôn Nhân Bền Vững</span><span>${marriageScore}%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${marriageScore}%"></div></div>
            </div>
          </div>
        </div>

        <div style="margin-top:14px;padding:14px;background:rgba(236,72,153,0.12);border-radius:14px;border:1px solid rgba(236,72,153,0.35);">
          <strong style="color:#fde68a;">🔮 Lời Giải Mã Tình Duyên Giữa Số ${lpA} & Số ${lpB}:</strong>
          <p style="font-size:14px;margin-top:4px;">
            Sự kết hợp giữa <strong>${nameA} (Số ${lpA})</strong> và <strong>${nameB} (Số ${lpB})</strong> tạo nên nguồn năng lượng bù trừ tuyệt vời. Khi hai bạn cùng thống nhất mục tiêu tài chính và dành cho nhau lời khen ngợi mỗi ngày, gia đạo sẽ cực kỳ vượng phát, con cái hiếu thuận, tiền bạc tự khắc sinh sôi!
          </p>
        </div>
      </div>
    `;

    document.getElementById("loveResultArea").innerHTML = html;
    drawLoveCertificateCanvas(nameA, dobA, lpA, nameB, dobB, lpB, totalScore, titleBadge);
  }

  function drawLoveCertificateCanvas(nameA, dobA, lpA, nameB, dobB, lpB, score, badgeText) {
    const canvas = document.getElementById("loveCertCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, "#1f0933");
    grad.addColorStop(0.5, "#3b0764");
    grad.addColorStop(1, "#500724");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Double Gold Border
    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 4;
    ctx.strokeRect(18, 18, W - 36, H - 36);
    ctx.strokeStyle = "rgba(251, 191, 36, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(28, 28, W - 56, H - 56);

    // Header
    ctx.fillStyle = "#fde68a";
    ctx.font = "800 26px 'Be Vietnam Pro', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("💖 CHỨNG NHẬN TÂM ĐẦU Ý HỢP 💖", W / 2, 74);

    ctx.fillStyle = "#f9a8d4";
    ctx.font = "600 15px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(badgeText, W / 2, 104);

    // Center Score Circle
    ctx.beginPath();
    ctx.arc(W / 2, 215, 64, 0, Math.PI * 2);
    ctx.fillStyle = "#be185d";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fde68a";
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "900 36px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`${score}%`, W / 2, 224);
    ctx.font = "700 12px 'Be Vietnam Pro', sans-serif";
    ctx.fillStyle = "#fbcfe8";
    ctx.fillText("ĐỘ HỢP ĐÔI", W / 2, 190);

    // Left Person A
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 21px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(nameA, 195, 200);
    ctx.fillStyle = "#fde68a";
    ctx.font = "600 14.5px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Ngày sinh: ${dobA}`, 195, 228);
    ctx.fillText(`Số Chủ Đạo: ${lpA}`, 195, 252);

    // Right Person B
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 21px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(nameB, W - 195, 200);
    ctx.fillStyle = "#fde68a";
    ctx.font = "600 14.5px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Ngày sinh: ${dobB}`, W - 195, 228);
    ctx.fillText(`Số Chủ Đạo: ${lpB}`, W - 195, 252);

    // Blessing Quote
    ctx.fillStyle = "#f8fafc";
    ctx.font = "italic 15.5px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(
      "\"Trăm năm tình viên mãn — Bạc đầu nghĩa phu thê — Đồng tâm tài lộc vượng\"",
      W / 2,
      340
    );

    // Footer Link
    ctx.fillStyle = "#fde68a";
    ctx.font = "700 13.5px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(
      "🔮 Tra cứu miễn phí tại: cocvn157.github.io/than-so-hoc-ai",
      W / 2,
      405
    );
  }

  // --------------------------------------------------------------------------
  // 5. TAB 3: CHẤM ĐIỂM PHONG THỦY SĐT / SỐ TÀI KHOẢN & XEM NGÀY TỐT
  // --------------------------------------------------------------------------
  function renderFengShuiAnalysis() {
    const rawNum = document.getElementById("fsNumberInput").value.replace(/\D/g, "") || "0988686868";
    const birthYear = parseInt(document.getElementById("fsBirthYear").value, 10) || 1996;
    const checkDate = document.getElementById("fsCheckDate").value || new Date().toISOString().slice(0, 10);

    // Tính Can Chi & Mệnh Ngũ Hành theo Năm Sinh
    const canList = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const chiList = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
    const canChiYear = `${canList[birthYear % 10]} ${chiList[birthYear % 12]}`;

    const menhElements = [
      { name: "Kim (Vàng Bạc / Kim Loại Quý)", luckyNums: "6, 7, 8, 2, 5", color: "Trắng, Vàng Kim, Nâu Đất" },
      { name: "Thủy (Nước Lớn / Trí Tuệ Lưu Thông)", luckyNums: "1, 6, 7", color: "Xanh Dương, Đen, Trắng" },
      { name: "Hỏa (Lửa Rực Rỡ / Danh Tiếng)", luckyNums: "9, 3, 4", color: "Đỏ, Cam, Hồng, Xanh Lá" },
      { name: "Thổ (Đất Vững Chãi / Điền Sản)", luckyNums: "2, 5, 8, 9", color: "Vàng, Nâu Đất, Đỏ, Hồng" },
      { name: "Mộc (Cây Lớn Sinh Sôi / Nhân Từ)", luckyNums: "3, 4, 1", color: "Xanh Lá, Xanh Dương, Đen" }
    ];
    const menh = menhElements[birthYear % 5];

    // Phân tích dãy số SĐT / STK
    const digits = rawNum.split("").map((d) => parseInt(d, 10));
    const evenCount = digits.filter((d) => d % 2 === 0).length;
    const oddCount = digits.length - evenCount;
    const sumButtons = digits.reduce((a, b) => a + b, 0) % 10 || 10;

    // Quét các cặp số đẹp Bát Cực Linh Số (Thiên Y, Sinh Khí, Diên Niên)
    const auspiciousPairs = {
      "68": "Lộc Phát — Tiền tài nảy nở (Thiên Y Đại Cát)",
      "86": "Phát Lộc — Buôn may bán đắt (Thiên Y Đại Cát)",
      "39": "Thần Tài Nhỏ — Hút quý nhân và cơ hội",
      "79": "Thần Tài Lớn — Đại cát đại lợi về kinh doanh",
      "19": "Diên Niên — Bản lĩnh vững vàng, thăng tiến sự nghiệp",
      "91": "Diên Niên — Uy tín lớn, lãnh đạo thành công",
      "14": "Sinh Khí — Quý nhân phù trợ, vạn sự hanh thông",
      "41": "Sinh Khí — Vui vẻ, may mắn, nhiều bạn tốt giúp đỡ",
      "88": "Song Phát — Nhân đôi thịnh vượng",
      "99": "Trường Cửu — Vĩnh cửu, viên mãn dài lâu"
    };

    const foundGoodPairs = [];
    for (let i = 0; i < rawNum.length - 1; i++) {
      const pair = rawNum.slice(i, i + 2);
      if (auspiciousPairs[pair]) {
        foundGoodPairs.push(`<strong>Cặp ${pair}</strong>: ${auspiciousPairs[pair]}`);
      }
    }

    let score = 78 + Math.min(20, foundGoodPairs.length * 5) + (sumButtons >= 8 ? 4 : 1);
    if (score > 99) score = 99;

    // Giờ Hoàng Đạo theo ngày chọn
    const daySeed = parseInt(checkDate.replace(/-/g, ""), 10) || 20261104;
    const hoangDaoSets = [
      ["Tý (23h-01h)", "Sửu (01h-03h)", "Thìn (07h-09h)", "Tỵ (09h-11h)", "Mùi (13h-15h)", "Tuất (19h-21h)"],
      ["Dần (03h-05h)", "Mão (05h-07h)", "Ngọ (11h-13h)", "Mùi (13h-15h)", "Dậu (17h-19h)", "Hợi (21h-23h)"],
      ["Thìn (07h-09h)", "Tỵ (09h-11h)", "Thân (15h-17h)", "Dậu (17h-19h)", "Hợi (21h-23h)", "Dần (03h-05h)"]
    ];
    const luckyHours = hoangDaoSets[daySeed % 3];

    const html = `
      <div class="glass-card">
        <div class="form-grid-2">
          <div>
            <div class="hero-pill">Kết Quả Chấm Điểm Dãy Số: ${rawNum}</div>
            <h3 style="font-size:28px;color:#fde68a;margin-bottom:8px;">
              🏆 Điểm Phong Thủy: ${score}/100 (Số Đẹp Vượng Lộc)
            </h3>
            <p style="margin-bottom:8px;">
              • <strong>Tuổi của bạn:</strong> ${birthYear} (${canChiYear}) — Mệnh hợp <strong>${menh.name}</strong>
            </p>
            <p style="margin-bottom:8px;">
              • <strong>Cân bằng Âm Dương:</strong> ${evenCount} số Chẵn (Âm) / ${oddCount} số Lẻ (Dương) • <strong>Tổng nút:</strong> ${sumButtons} nút
            </p>
            <p style="margin-bottom:8px;">
              • <strong>Con số thu hút tiền tài cho bạn (Đặt mật khẩu / đuôi STK):</strong> <span style="color:#6ee7b7;font-weight:800;">${menh.luckyNums}</span> (Hoặc đuôi <code>6868</code>, <code>8686</code>, <code>7979</code>)
            </p>
            <p>
              • <strong>Màu sắc hợp mệnh (Ví tiền / Ốp điện thoại / Xe):</strong> <span style="color:#fde68a;font-weight:700;">${menh.color}</span>
            </p>
          </div>

          <div style="background:rgba(255,255,255,0.05);padding:16px;border-radius:16px;border:1px solid var(--border-gold);">
            <h4 style="color:#fde68a;margin-bottom:8px;">✨ Các Cặp Số Quý Nhân & Tài Lộc Trong Dãy Số:</h4>
            <ul style="padding-left:18px;font-size:13.5px;margin-bottom:14px;">
              ${
                foundGoodPairs.length > 0
                  ? foundGoodPairs.map((p) => `<li style="margin-bottom:5px;">${p}</li>`).join("")
                  : `<li>Dãy số mang năng lượng bình hòa, ổn định. Gợi ý: Nếu mở thêm Số Tài Khoản Ngân Hàng đẹp, bạn nên chọn đuôi <strong>68, 86, 39, 79</strong> để kích hoạt cung Thiên Y Tài Lộc!</li>`
              }
            </ul>

            <h4 style="color:#6ee7b7;margin-bottom:6px;">⏰ Khung Giờ Hoàng Đạo Tốt Nhất Ngày ${checkDate}:</h4>
            <p style="font-size:13.5px;color:#e2e8f0;">
              Rất tốt để chuyển khoản mở hàng, ký hợp đồng, đi xa: <br />
              <strong style="color:#fde68a;">${luckyHours.join(" • ")}</strong>
            </p>
          </div>
        </div>
      </div>
    `;

    document.getElementById("fengShuiResultArea").innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // 6. TAB 4: TẠO HỒ SƠ XIN VIỆC (CV) ĐẸP TRONG 30 GIÂY
  // --------------------------------------------------------------------------
  function loadCvPreset(presetKey) {
    const preset = window.DESTINY_DATA.cvPresets[presetKey] || window.DESTINY_DATA.cvPresets.sales;
    document.getElementById("cvFullName").value = preset.fullName;
    document.getElementById("cvRole").value = preset.role;
    document.getElementById("cvPhone").value = preset.phone;
    document.getElementById("cvEmail").value = preset.email;
    document.getElementById("cvAddress").value = preset.address;
    document.getElementById("cvSummary").value = preset.summary;
    document.getElementById("cvExperience").value = preset.experience;
    document.getElementById("cvEducation").value = preset.education;
    document.getElementById("cvSkills").value = preset.skills;
    renderCvPreview();
  }

  function renderCvPreview() {
    const fullName = document.getElementById("cvFullName").value || "Nguyễn Minh Anh";
    const role = document.getElementById("cvRole").value || "Chuyên Viên Kinh Doanh";
    const phone = document.getElementById("cvPhone").value || "0988 686 868";
    const email = document.getElementById("cvEmail").value || "minhanh@gmail.com";
    const address = document.getElementById("cvAddress").value || "Hà Nội";
    const summary = document.getElementById("cvSummary").value || "";
    const experience = document.getElementById("cvExperience").value || "";
    const education = document.getElementById("cvEducation").value || "";
    const skills = document.getElementById("cvSkills").value || "";

    document.getElementById("cvPaperPreview").innerHTML = `
      <div class="cv-header">
        <h2>${fullName}</h2>
        <div class="cv-role">${role}</div>
        <div class="cv-contact-bar">
          <span>📞 ${phone}</span>
          <span>✉️ ${email}</span>
          <span>📍 ${address}</span>
        </div>
      </div>

      <div class="cv-section">
        <h4>🎯 Mục Tiêu Nghề Nghiệp & Thế Mạnh</h4>
        <p>${summary}</p>
      </div>

      <div class="cv-section">
        <h4>💼 Kinh Nghiệm Làm Việc</h4>
        <p>${experience}</p>
      </div>

      <div class="cv-section">
        <h4>🎓 Trình Độ Học Vấn</h4>
        <p>${education}</p>
      </div>

      <div class="cv-section">
        <h4>⚡ Kỹ Năng Chuyên Môn</h4>
        <p>${skills}</p>
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 7. MODAL VIETQR 29.000Đ & CÀI ĐẶT TÀI KHOẢN CHỦ WEB
  // --------------------------------------------------------------------------
  function updateVipUiState() {
    const badge = document.getElementById("vipStatusBadge");
    const btnUnlock = document.getElementById("btnOpenUnlockModal");
    if (isVipUnlocked()) {
      badge.textContent = "👑 Đã Mở Khóa VIP Trọn Đời";
      badge.style.borderColor = "#10b981";
      badge.style.color = "#6ee7b7";
      if (btnUnlock) btnUnlock.style.display = "none";
    }
  }

  function openUnlockModal() {
    const cfg = loadOwnerConfig();
    document.getElementById("modalPriceText").textContent = formatVnd(cfg.unlockPrice);
    document.getElementById("qrBankLabel").textContent = cfg.bankId;
    document.getElementById("qrAccLabel").textContent = cfg.accountNo;
    document.getElementById("qrNameLabel").textContent = cfg.accountName;

    const addInfo = encodeURIComponent("MO KHOA VIP THAN SO HOC");
    const accName = encodeURIComponent(cfg.accountName);
    const qrUrl = `https://img.vietqr.io/image/${cfg.bankId}-${cfg.accountNo}-compact2.png?amount=${cfg.unlockPrice}&addInfo=${addInfo}&accountName=${accName}`;
    document.getElementById("vietQrImg").src = qrUrl;

    document.getElementById("unlockModal").classList.add("open");
  }

  function shareAndUnlockFree() {
    const shareUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
    }
    localStorage.setItem(VIP_STORAGE_KEY, "true");
    updateVipUiState();
    renderNumerologyReport();
    document.getElementById("unlockModal").classList.remove("open");
    alert(
      "🎉 Đã sao chép đường link chia sẻ vào bộ nhớ tạm và MỞ KHÓA MIỄN PHÍ trọn bộ Luận Giải Vận Hạn 12 Tháng cho bạn!"
    );
  }

  // --------------------------------------------------------------------------
  // 8. HIỆU ỨNG BẦU TRỜI SAO VŨ TRỤ NHẸ NHÀNG (LOW CPU)
  // --------------------------------------------------------------------------
  function initStarCanvas() {
    const canvas = document.getElementById("star-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = window.innerWidth);
    const H = (canvas.height = window.innerHeight);

    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < 65; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 1.8 + 0.4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? "rgba(253, 230, 138, 0.55)" : "rgba(255, 255, 255, 0.35)";
      ctx.fill();
    }
  }

  // --------------------------------------------------------------------------
  // 9. KHỞI CHẠY ỨNG DỤNG
  // --------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initStarCanvas();
    updateVipUiState();

    // Set default date for Feng Shui tab
    const fsDateInput = document.getElementById("fsCheckDate");
    if (fsDateInput && !fsDateInput.value) {
      fsDateInput.value = new Date().toISOString().slice(0, 10);
    }

    // Chuyển đổi 4 Tab chính
    const tabBtns = document.querySelectorAll(".main-tab-btn");
    const tabSections = document.querySelectorAll(".tab-section");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabSections.forEach((s) => s.classList.remove("active"));
        btn.classList.add("active");
        const target = document.getElementById(btn.getAttribute("data-tab"));
        if (target) target.classList.add("active");
      });
    });

    // Khởi tạo dữ liệu mặc định cho cả 4 Tab ngay khi mở trang
    renderNumerologyReport();
    renderLoveCompatibility();
    renderFengShuiAnalysis();
    loadCvPreset("sales");

    // Sự kiện Tab 1: Thần Số Học
    document.getElementById("btnCalcNumerology").addEventListener("click", renderNumerologyReport);
    document.getElementById("btnPrintNumerologyPdf").addEventListener("click", () => window.print());
    document.getElementById("btnDemoNumerology").addEventListener("click", () => {
      const samples = [
        { name: "Phạm Nhật Minh", dob: "1993-11-29", gender: "Nam" },
        { name: "Lê Ngọc Bảo Trâm", dob: "1998-06-15", gender: "Nữ" },
        { name: "Đặng Hoàng Long", dob: "1991-04-22", gender: "Nam" }
      ];
      const pick = samples[Math.floor(Math.random() * samples.length)];
      document.getElementById("numFullName").value = pick.name;
      document.getElementById("numBirthDate").value = pick.dob;
      document.getElementById("numGender").value = pick.gender;
      renderNumerologyReport();
    });

    // Sự kiện Tab 2: Bói Tình Duyên
    document.getElementById("btnCalcLove").addEventListener("click", renderLoveCompatibility);
    document.getElementById("btnDemoLove").addEventListener("click", () => {
      document.getElementById("loveNameA").value = "Nguyễn Tuấn Kiệt";
      document.getElementById("loveDobA").value = "1994-09-12";
      document.getElementById("loveNameB").value = "Lê Phương Thảo";
      document.getElementById("loveDobB").value = "1997-03-25";
      renderLoveCompatibility();
    });
    document.getElementById("btnDownloadLoveCert").addEventListener("click", () => {
      const canvas = document.getElementById("loveCertCanvas");
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "chung-nhan-hop-doi-tinh-duyen.png";
      a.click();
    });

    // Sự kiện Tab 3: Phong Thủy SĐT / STK
    document.getElementById("btnCalcFengShui").addEventListener("click", renderFengShuiAnalysis);
    document.getElementById("btnDemoFengShui").addEventListener("click", () => {
      document.getElementById("fsNumberInput").value = "0979686868";
      document.getElementById("fsBirthYear").value = "1995";
      renderFengShuiAnalysis();
    });

    // Sự kiện Tab 4: Hồ Sơ Xin Việc CV
    document.querySelectorAll(".btn-cv-preset").forEach((btn) => {
      btn.addEventListener("click", () => loadCvPreset(btn.getAttribute("data-preset")));
    });
    ["cvFullName", "cvRole", "cvPhone", "cvEmail", "cvAddress", "cvSummary", "cvExperience", "cvEducation", "cvSkills"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", renderCvPreview);
    });
    document.getElementById("btnInjectNumerologyStrength").addEventListener("click", () => {
      const dob = document.getElementById("numBirthDate").value || "1996-08-18";
      const lp = calcLifePath(dob).lifePath;
      const info = window.DESTINY_DATA.lifePaths[lp] || window.DESTINY_DATA.lifePaths[10];
      const summaryBox = document.getElementById("cvSummary");
      summaryBox.value = `${info.strengths[0]} ${info.strengths[1]} Luôn làm việc với tinh thần trách nhiệm cao và hướng tới kết quả vượt kỳ vọng.`;
      renderCvPreview();
    });
    document.getElementById("btnPrintCvA4").addEventListener("click", () => window.print());

    // Sự kiện Modal Mở Khóa VIP 29.000đ
    document.getElementById("btnOpenUnlockModal").addEventListener("click", openUnlockModal);
    document.getElementById("btnCloseUnlockModal").addEventListener("click", () => {
      document.getElementById("unlockModal").classList.remove("open");
    });
    document.getElementById("btnActivateVipCode").addEventListener("click", () => {
      const val = (document.getElementById("vipCodeInput").value || "").trim().toUpperCase();
      const msg = document.getElementById("vipCodeMsg");
      if (val === "VIP2026" || val.startsWith("VIP") || val.startsWith("OMNI")) {
        localStorage.setItem(VIP_STORAGE_KEY, "true");
        updateVipUiState();
        renderNumerologyReport();
        msg.style.color = "#6ee7b7";
        msg.textContent = "🎉 Đã kích hoạt VIP thành công! Toàn bộ luận giải đã được mở khóa!";
        setTimeout(() => {
          document.getElementById("unlockModal").classList.remove("open");
        }, 900);
      } else {
        msg.style.color = "#fda4af";
        msg.textContent = "❌ Mã chưa đúng. Hãy nhập mã VIP2026 để mở khóa ngay!";
      }
    });
    document.getElementById("btnShareToUnlockFree").addEventListener("click", shareAndUnlockFree);

    // Sự kiện Modal Cài Đặt Tài Khoản Nhận Tiền Chủ Web
    document.getElementById("btnOpenOwnerSetup").addEventListener("click", () => {
      const cfg = loadOwnerConfig();
      document.getElementById("cfgBankId").value = cfg.bankId;
      document.getElementById("cfgAccountNo").value = cfg.accountNo;
      document.getElementById("cfgAccountName").value = cfg.accountName;
      document.getElementById("cfgPrice").value = cfg.unlockPrice;
      document.getElementById("ownerSetupModal").classList.add("open");
    });
    document.getElementById("btnCloseOwnerSetup").addEventListener("click", () => {
      document.getElementById("ownerSetupModal").classList.remove("open");
    });
    document.getElementById("btnSaveOwnerConfig").addEventListener("click", () => {
      const newCfg = {
        bankId: document.getElementById("cfgBankId").value.trim().toUpperCase() || "MB",
        accountNo: document.getElementById("cfgAccountNo").value.trim() || "0988888888",
        accountName: document.getElementById("cfgAccountName").value.trim().toUpperCase() || "NGUYEN VAN A",
        unlockPrice: parseInt(document.getElementById("cfgPrice").value, 10) || 29000
      };
      localStorage.setItem(OWNER_CFG_KEY, JSON.stringify(newCfg));
      const baseUrl = window.location.origin + window.location.pathname;
      const customLink = `${baseUrl}?bank=${encodeURIComponent(newCfg.bankId)}&acc=${encodeURIComponent(
        newCfg.accountNo
      )}&name=${encodeURIComponent(newCfg.accountName)}&price=${newCfg.unlockPrice}`;
      document.getElementById("ownerShareUrlBox").value = customLink;
      if (navigator.clipboard) navigator.clipboard.writeText(customLink);
      renderNumerologyReport();
      alert("✅ Đã lưu số tài khoản nhận tiền của bạn và sao chép Link bán hàng riêng!");
    });
  });
})();
