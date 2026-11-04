/**
 * ============================================================================
 * GIẢI MÃ VẬN MỆNH & ĐỜI SỐNG (THAN-SO-HOC-AI) — CƠ SỞ DỮ LIỆU LUẬN GIẢI
 * Ngôn ngữ đời thường, gần gũi, sâu sắc — Ai đọc cũng hiểu ngay trong 1 giây
 * ============================================================================
 */

window. DESTINY_DATA = {
  // Cấu hình mặc định nhận tiền qua VietQR (Chủ web đổi trong 5 giây bằng nút Cài Đặt)
  ownerConfig: {
    bankId: "MB",
    accountNo: "0988888888",
    accountName: "NGUYEN VAN A",
    unlockPrice: 29000,
    zaloPhone: "0988888888",
    masterCode: "VIP2026"
  },

  // Bảng quy đổi chữ cái sang số Pitago chuẩn quốc tế
  pythagorasMap: {
    A: 1, J: 1, S: 1,
    B: 2, K: 2, T: 2,
    C: 3, L: 3, U: 3,
    D: 4, M: 4, V: 4,
    E: 5, N: 5, W: 5,
    F: 6, O: 6, X: 6,
    G: 7, P: 7, Y: 7,
    H: 8, Q: 8, Z: 8,
    I: 9, R: 9
  },

  // Luận giải chi tiết Con Số Chủ Đạo (2 -> 11, 22, 33)
  lifePaths: {
    2: {
      title: "Số Chủ Đạo 2 — Người Kết Nối Hòa Bình & Thấu Cảm Tinh Tế",
      badge: "Sứ Giả Yêu Thương & Ngoại Giao",
      element: "Thủy (Mềm mại, sâu sắc, giàu tình cảm)",
      summary:
        "Bạn là người cực kỳ nhạy cảm, tinh tế, biết lắng nghe và luôn đặt chữ 'Tình' lên hàng đầu. Ở đâu có bạn, ở đó có sự hòa giải, ấm áp và bình yên. Bạn không thích tranh giành ồn ào mà chinh phục lòng người bằng sự chân thành.",
      strengths: [
        "Trực giác nhạy bén, nhìn thấu cảm xúc thật của người đối diện chỉ qua ánh mắt, lời nói.",
        "Khả năng ngoại giao, hòa giải mâu thuẫn và kết nối tập thể xuất sắc.",
        "Trung thành, tận tụy trong tình yêu và luôn hết lòng vì gia đình."
      ],
      weaknesses: [
        "Hay suy nghĩ nhiều, dễ tổn thương bởi lời nói vô tâm của người khác.",
        "Đôi khi cả nể, sợ làm mất lòng người khác nên tự nhận phần thiệt về mình."
      ],
      careers: [
        "Tư vấn tâm lý, Chăm sóc khách hàng, Nhân sự (HR), Giáo viên, Y tế - Điều dưỡng",
        "Ngoại giao, Trợ lý cấp cao, Nghệ thuật, Dịch vụ làm đẹp - Spa - Chữa lành"
      ],
      wealthAdvice:
        "Tài lộc của bạn đến từ sự hợp tác uy tín. Bạn không nên đầu tư lướt sóng mạo hiểm một mình mà hãy đồng hành cùng một người cộng sự quyết đoán (như số 1, số 8 hoặc số 10). Khi bạn học cách nói 'Không' với việc cho vay mượn cả nể, tiền bạc sẽ tự khắc tụ lại bền vững.",
      loveAdvice:
        "Trong tình yêu, bạn cần sự quan tâm nhỏ nhặt mỗi ngày hơn là những lời hứa hẹn xa vời. Rất hợp với người mang Số 6, Số 8, Số 9 và Số 2.",
      forecast2026: [
        "Quý 1 - Quý 2: Quý nhân xuất hiện giúp tháo gỡ khúc mắc công việc cũ, mở ra cơ hội hợp tác mới.",
        "Quý 3: Tài chính khởi sắc rõ rệt nhờ uy tín cá nhân và khách hàng cũ giới thiệu.",
        "Quý 4: Gia đạo êm ấm, thuận lợi để mua sắm tài sản lớn hoặc tính chuyện trăm năm."
      ]
    },
    3: {
      title: "Số Chủ Đạo 3 — Người Truyền Cảm Hứng, Hoạt Ngôn & Sáng Tạo",
      badge: "Ngôi Sao Giao Tiếp & Sáng Tạo",
      element: "Hỏa (Nhiệt huyết, rực rỡ, cuốn hút)",
      summary:
        "Bạn sở hữu nguồn năng lượng vui vẻ, thông minh, hài hước và có duyên ăn nói trời phú. Khi bước vào bất kỳ đám đông nào, bạn đều dễ dàng trở thành tâm điểm thu hút sự chú ý nhờ nụ cười và tư duy linh hoạt.",
      strengths: [
        "Khả năng ăn nói thuyết phục, viết lách, sáng tạo nội dung và truyền lửa cực tốt.",
        "Đầu óc nhanh nhạy, học một biết mười, thích nghi cực nhanh với cái mới.",
        "Lạc quan, giàu năng lượng tích cực, dễ gặp may mắn nhờ quý nhân yêu mến."
      ],
      weaknesses: [
        "Làm việc theo cảm hứng: lúc hứng lên làm bằng 200% sức lực, lúc chán dễ bỏ dở giữa chừng.",
        "Đôi khi thẳng tính, nóng vội trong lời nói và hay tiêu tiền theo cảm xúc."
      ],
      careers: [
        "Kinh doanh, Bán hàng (Sales), Marketing, Sáng tạo nội dung (TikTok/YouTube/Facebook), MC, Diễn giả",
        "Thiết kế, Thời trang, Mỹ phẩm, Tổ chức sự kiện, Du lịch, Luật sư, Đào tạo"
      ],
      wealthAdvice:
        "Bạn kiếm tiền rất giỏi bằng chính lời nói, thương hiệu cá nhân và sự sáng tạo của mình. Bí quyết giữ tiền cho Số 3 là hãy tự động trích 20% thu nhập mỗi tháng vào tài khoản tiết kiệm/vàng ngay khi vừa nhận lương trước khi mua sắm.",
      loveAdvice:
        "Bạn yêu nồng nhiệt, lãng mạn và ghét sự nhàm chán. Người bạn đời lý tưởng là người biết lắng nghe, tôn trọng không gian riêng của bạn (hợp nhất với Số 5, Số 6, Số 9, Số 11).",
      forecast2026: [
        "Quý 1 - Quý 2: Thời điểm vàng để xây dựng hình ảnh cá nhân, bán hàng online hoặc mở rộng tệp khách hàng.",
        "Quý 3: Cẩn trọng chi tiêu cảm tính; có cơ hội tăng thu nhập đột biến từ nghề tay trái.",
        "Quý 4: Gặt hái thành quả rực rỡ, được cấp trên hoặc khách hàng vinh danh."
      ]
    },
    4: {
      title: "Số Chủ Đạo 4 — Người Kiến Tạo Vững Chắc, Thực Tế & Đáng Tin Cậy",
      badge: "Chuyên Gia Thực Thi & Quản Trị",
      element: "Thổ (Vững chãi, kỷ luật, chắc chắn)",
      summary:
        "Bạn là trụ cột vững chắc nhất trong gia đình và công việc. Bạn sống thực tế, rõ ràng, nói được làm được, không thích sáo rỗng. Mọi việc qua tay bạn đều được sắp xếp ngăn nắp, chuẩn chỉnh và an toàn tuyệt đối.",
      strengths: [
        "Cẩn thận, tỉ mỉ, có trách nhiệm cao và cực kỳ đáng tin cậy trong chuyện tiền bạc.",
        "Khả năng lập kế hoạch, quản lý tài chính và xây dựng quy trình bài bản.",
        "Kiên trì bền bỉ, càng gặp khó khăn càng lì đòn, hậu vận rất giàu có."
      ],
      weaknesses: [
        "Khá cầu toàn và nguyên tắc, đôi khi hơi cứng nhắc nên dễ tự ôm hết việc vào người.",
        "Ít khi nói lời hoa mỹ lãng mạn dù trong lòng thương gia đình vô bờ bến."
      ],
      careers: [
        "Kế toán, Kiểm toán, Ngân hàng, Tài chính, Bất động sản, Xây dựng, Kỹ thuật",
        "Quản lý vận hành, Lập trình viên, Dược sĩ, Bác sĩ, Kinh doanh chuỗi cửa hàng"
      ],
      wealthAdvice:
        "Bạn là mẫu người 'Tích tiểu thành đại, giàu bền vững'. Những kênh tích sản thực tế như Bất động sản, Vàng, Sổ tiết kiệm hoặc kinh doanh mặt hàng thiết yếu sẽ giúp bạn đạt tự do tài chính sớm hơn bạn bè đồng trang lứa.",
      loveAdvice:
        "Bạn thể hiện tình yêu bằng hành động chăm lo thực tế chứ không phải lời đường mật. Rất hợp với Số 2, Số 6, Số 8 và Số 22.",
      forecast2026: [
        "Quý 1 - Quý 2: Công việc ổn định, có cơ hội thăng chức hoặc được giao nắm giữ vị trí quan trọng.",
        "Quý 3: Thuận lợi mua bán đất đai, sửa sang nhà cửa hoặc mở rộng cửa hàng.",
        "Quý 4: Tài khoản tích lũy tăng mạnh, tinh thần an tâm viên mãn."
      ]
    },
    5: {
      title: "Số Chủ Đạo 5 — Người Tự Do, Đa Tài, Nhạy Bén & Bứt Phá",
      badge: "Nhà Khám Phá & Tiên Phong Đổi Mới",
      element: "Phong / Kim (Linh hoạt, bứt phá, biến hóa)",
      summary:
        "Bạn sinh ra để trải nghiệm thế giới, yêu tự do, ghét sự gò bó lặp đi lặp lại. Bạn thông minh, xoay xở cực giỏi trong mọi nghịch cảnh, có sức hút tự nhiên mãnh liệt và luôn bắt kịp xu hướng kiếm tiền mới nhanh nhất.",
      strengths: [
        "Linh hoạt, tháo vát, vứt vào môi trường nào cũng sống khỏe và tìm ra cơ hội kiếm tiền.",
        "Giao tiếp quảng giao, có mạng lưới bạn bè và mối quan hệ rộng khắp.",
        "Tư duy đột phá, dám nghĩ dám làm những điều người khác còn đang sợ."
      ],
      weaknesses: [
        "Nhanh cả thèm chóng chán nếu công việc quá khuôn mẫu gò bó 8 tiếng/ngày.",
        "Cần rèn tính kỷ luật tài chính để tránh kiếm được nhiều nhưng tiêu cũng thoáng."
      ],
      careers: [
        "Kinh doanh tự do, Thương mại điện tử, Xuất nhập khẩu, Du lịch, Bất động sản",
        "Truyền thông, Quảng cáo, Nhiếp ảnh, Nghệ thuật, Đầu tư, Khởi nghiệp (Startup)"
      ],
      wealthAdvice:
        "Tiền bạc đến với Số 5 thông qua sự dịch chuyển và đổi mới. Bạn cực kỳ hợp với công việc có thu nhập theo hoa hồng/doanh số không giới hạn hoặc tự làm chủ. Hãy giữ một quỹ dự phòng an toàn trước khi tất tay vào dự án mới.",
      loveAdvice:
        "Bạn cần một người bạn đời tâm lý, không kiểm soát ngột ngạt mà cùng bạn đi du lịch, tận hưởng cuộc sống. Hợp nhất với Số 3, Số 5, Số 7, Số 9.",
      forecast2026: [
        "Quý 1 - Quý 2: Có chuyến đi xa mang lại tài lộc hoặc chuyển đổi sang công việc/dự án mới tốt hơn.",
        "Quý 3: Lộc buôn bán, hoa hồng kinh doanh nở rộ vượt kỳ vọng.",
        "Quý 4: Gặp gỡ nhân duyên tốt đẹp hoặc đối tác lớn nâng tầm cuộc sống."
      ]
    },
    6: {
      title: "Số Chủ Đạo 6 — Người Giàu Tình Yêu Thương, Chăm Sóc & Hút Lộc Gia Đạo",
      badge: "Ngọn Lửa Ấm Áp Của Gia Đình & Cộng Đồng",
      element: "Thổ / Hỏa (Bao dung, trách nhiệm, vượng khí)",
      summary:
        "Bạn là người sống cực kỳ có trách nhiệm, giàu lòng trắc ẩn và luôn chăm lo chu đáo cho người thân. Bạn có mắt thẩm mỹ tinh tế, bàn tay khéo léo và đi tới đâu cũng tạo dựng được niềm tin yêu sâu sắc.",
      strengths: [
        "Tận tâm, chu đáo, là chỗ dựa tinh thần ấm áp cho gia đình và đồng nghiệp.",
        "Có gu thẩm mỹ cao, khéo léo trong ẩm thực, làm đẹp, chăm sóc sức khỏe và giáo dục.",
        "Phúc đức dày, càng chăm lo cho gia đình êm ấm thì tiền tài càng tự chảy vào túi."
      ],
      weaknesses: [
        "Hay ôm đồm lo lắng cho người khác đến mức quên chăm sóc bản thân mình.",
        "Dễ buồn lòng khi sự hy sinh của mình không được người thân thấu hiểu kịp thời."
      ],
      careers: [
        "Làm đẹp, Spa, Mỹ phẩm, Thời trang, Nhà hàng - Ẩm thực - Quán Cafe, Nội thất",
        "Giáo viên, Bác sĩ, Y dược, Quản lý nhân sự, Chăm sóc mẹ & bé, Kinh doanh gia đình"
      ],
      wealthAdvice:
        "Số 6 có 'Lộc Chăm Sóc': những ngành nghề phục vụ làm đẹp, sức khỏe, ăn uống, giáo dục hoặc nhà cửa sẽ giúp bạn hái ra tiền. Hãy học cách yêu thương bản thân 50% trước khi cho đi 50% còn lại.",
      loveAdvice:
        "Bạn là mẫu người chồng/người vợ vàng mười trong hôn nhân. Hợp tuyệt đối với Số 2, Số 3, Số 4, Số 8 và Số 9.",
      forecast2026: [
        "Quý 1 - Quý 2: Tin vui trong gia đình (cưới hỏi,添 thành viên mới hoặc mua sắm tài sản).",
        "Quý 3: Khách hàng tìm đến đông đúc nhờ tiếng lành đồn xa về sự tận tâm của bạn.",
        "Quý 4: Thu hoạch khoản tích lũy lớn, cuộc sống bình an sung túc."
      ]
    },
    7: {
      title: "Số Chủ Đạo 7 — Người Trí Tuệ Sâu Sắc, Trực Giác Nhạy Bén & Tự Trải Nghiệm",
      badge: "Nhà Thông Thái & Phân Tích Chiến Lược",
      element: "Thủy (Thâm trầm, trí tuệ, huyền bí)",
      summary:
        "Bạn là người có chiều sâu nội tâm đặc biệt, không bao giờ tin điều gì một cách mù quáng mà luôn tự mình tìm hiểu tận gốc rễ. Bạn có trực giác tâm linh rất mạnh (thường linh cảm điều gì là trúng điều đó) và được ơn trên che chở qua mọi biến cố.",
      strengths: [
        "Tư duy phân tích sắc bén, nhìn ra bản chất vấn đề mà người bình thường không thấy.",
        "Khả năng tự học và trở thành chuyên gia giỏi nhất trong lĩnh vực mình chọn.",
        "Trực giác tâm linh nhạy bén, càng đi qua thử thách càng bản lĩnh và giàu có."
      ],
      weaknesses: [
        "Hay giữ tâm sự một mình, bề ngoài có vẻ lạnh lùng khó gần dù bên trong rất trọng tình nghĩa.",
        "Đôi khi suy nghĩ quá nhiều dẫn đến mất ngủ hoặc hoài nghi cơ hội."
      ],
      careers: [
        "Chuyên gia kỹ thuật, Công nghệ (IT/AI), Nghiên cứu, Phân tích tài chính - Đầu tư, Luật",
        "Y học, Tâm lý học, Phong thủy - Thần số học, Giáo dục chuyên sâu, Quản trị chiến lược"
      ],
      wealthAdvice:
        "Tiền của Số 7 là 'Tiền Trí Tuệ'. Bạn không hợp kiếm tiền bằng sức lao động tay chân ồn ào mà giàu lên nhờ kiến thức chuyên môn sâu, đầu tư có nghiên cứu bài bản và bản quyền chất xám.",
      loveAdvice:
        "Bạn cần một người bạn đời thấu hiểu sự tĩnh lặng và tôn trọng thế giới nội tâm của bạn. Hợp với Số 4, Số 5, Số 7, Số 9 và Số 11.",
      forecast2026: [
        "Quý 1 - Quý 2: Nâng cấp kỹ năng hoặc tìm ra ngách kinh doanh/đầu tư cực kỳ tiềm năng.",
        "Quý 3: Trực giác mách bảo giúp bạn tránh được một khoản hao hụt và thắng lớn ở thương vụ chất lượng.",
        "Quý 4: Tâm trí sáng suốt, tài chính vững vàng, tìm thấy sự bình an đích thực."
      ]
    },
    8: {
      title: "Số Chủ Đạo 8 — Người Bản Lĩnh Lãnh Đạo, Nhạy Bén Tiền Bạc & Thịnh Vượng",
      badge: "Ngôi Sao Tài Chính & Làm Chủ Kinh Doanh",
      element: "Kim / Thổ (Quyền lực, thịnh vượng, quyết đoán)",
      summary:
        "Bạn sinh ra đã có 'máu kinh doanh' và tư duy thực tế nhạy bén với các con số, lợi nhuận và quyền lực. Bạn độc lập, tự trọng cao, không thích dựa dẫm vào ai và luôn khao khát xây dựng cơ ngơi tài chính vững mạnh cho bản thân và gia đình.",
      strengths: [
        "Nhạy bén với cơ hội kiếm tiền, có tố chất làm sếp, điều hành và quản lý tài sản lớn.",
        "Chịu áp lực cực giỏi, quyết đoán, dám đặt mục tiêu lớn và làm tới cùng.",
        "Sống sòng phẳng, trọng chữ Tín, rất hào phóng với gia đình và người mình yêu thương."
      ],
      weaknesses: [
        "Quá tập trung vào công việc và kiếm tiền nên đôi khi thiếu thời gian nghỉ ngơi.",
        "Tính tự lập quá cao, lúc gặp khó khăn thường tự gồng gánh một mình không chịu than vãn."
      ],
      careers: [
        "Chủ doanh nghiệp, Kinh doanh buôn bán, Bất động sản, Ngân hàng, Đầu tư chứng khoán/tài chính",
        "Giám đốc điều hành (CEO), Quản lý cấp cao, Thương mại điện tử, XNK, Luật kinh tế"
      ],
      wealthAdvice:
        "Số 8 là con số của Tiền Tài & Nhân Quả. Khi bạn kinh doanh minh bạch, trao giá trị thật và biết trích một phần lợi nhuận giúp đỡ gia đình/xã hội, dòng tiền của bạn sẽ nhân lên gấp bội ở tuổi sau 30.",
      loveAdvice:
        "Bên ngoài bạn mạnh mẽ nhưng bên trong rất cần một hậu phương dịu dàng, thấu hiểu. Rất hợp với Số 2, Số 4, Số 6 và Số 22.",
      forecast2026: [
        "Quý 1 - Quý 2: Mở rộng quy mô công việc, ký kết hợp đồng lớn hoặc tăng thu nhập vượt bậc.",
        "Quý 3: Đỉnh cao tài lộc trong năm, thuận lợi đầu tư tài sản hoặc khởi sự kinh doanh riêng.",
        "Quý 4: Thu hoạch lợi nhuận lớn, khẳng định vị thế vững chắc."
      ]
    },
    9: {
      title: "Số Chủ Đạo 9 — Người Có Tâm Lớn, Bao Dung, Uy Tín & Truyền Cảm Hứng",
      badge: "Thủ Lĩnh Tinh Thần & Đại Phúc Đức",
      element: "Hỏa / Thiên (Rộng lớn, nhân văn, tỏa sáng)",
      summary:
        "Bạn mang trong mình trái tim nhân hậu, nghĩa khí, luôn muốn giúp đỡ mọi người và hướng tới những điều tốt đẹp cho xã hội. Bạn có tầm nhìn xa, trực giác tốt và đi đến đâu cũng được mọi người kính nể vì sự tử tế, đàng hoàng.",
      strengths: [
        "Tấm lòng hào sảng, chính trực, có uy tín lớn và khả năng dẫn dắt tinh thần tập thể.",
        "Học nhanh, hiểu rộng, kết hợp được cả lý trí lẫn tình cảm trong công việc.",
        "Có quý nhân phù trợ rất mạnh: mỗi khi gặp chuyện khó đều có người đưa tay giúp đỡ."
      ],
      weaknesses: [
        "Quá thương người nên dễ bị kẻ xấu lợi dụng lòng tốt hoặc vay tiền khó đòi.",
        "Cầu toàn, đặt tiêu chuẩn cao cho bản thân nên đôi khi tự tạo áp lực."
      ],
      careers: [
        "Giáo dục, Đào tạo, Y tế - Chăm sóc sức khỏe, Quản lý cộng đồng, Lãnh đạo tổ chức",
        "Nghệ thuật, Truyền thông, Kinh doanh sản phẩm xanh/sạch, Tư vấn chiến lược, Luật"
      ],
      wealthAdvice:
        "Quy luật tài chính của Số 9 là 'Cho đi giá trị trước, tiền bạc theo sau'. Bạn không nên giữ tiền mặt quá nhiều trong người để tránh cho vay cả nể; hãy chuyển hóa ngay thành tài sản tích lũy (nhà đất, vàng, quỹ đầu tư).",
      loveAdvice:
        "Bạn yêu chân thành, vị tha và luôn che chở cho người thương. Hợp nhất với Số 2, Số 3, Số 6 và Số 9.",
      forecast2026: [
        "Quý 1 - Quý 2: Khép lại những vướng bận cũ, đón nhận cơ hội công việc mang tầm vóc lớn hơn.",
        "Quý 3: Quý nhân phương xa mang tới nguồn khách hàng hoặc dự án giá trị cao.",
        "Quý 4: Danh tiếng và tài lộc cùng thăng hoa, gia đình hạnh phúc viên mãn."
      ]
    },
    10: {
      title: "Số Chủ Đạo 10 (1) — Nhà Lãnh Đạo Tiên Phong, Độc Lập & Tự Thân Lập Nghiệp",
      badge: "Thủ Lĩnh Tiên Phong Số 1",
      element: "Hỏa / Dương Kim (Mạnh mẽ, dẫn đầu, linh hoạt)",
      summary:
        "Bạn sinh ra với bản lĩnh của người dẫn đầu: tự lập từ rất sớm, dám nghĩ dám làm, không chịu đứng sau người khác. Đặc biệt, Số 10 vừa có sự quyết đoán của Số 1 vừa có độ linh hoạt tròn đầy của Số 0 nên rất dễ thành công vang dội.",
      strengths: [
        "Bản lĩnh tự lập cực cao, tay trắng dựng cơ đồ không nhờ cậy ai.",
        "Quyết đoán, dứt khoát, có tầm nhìn chiến lược và khả năng dẫn dắt đội nhóm.",
        "Thích nghi nhanh, xoay chuyển tình thế cực kỳ thông minh."
      ],
      weaknesses: [
        "Cái tôi khá lớn, đôi khi hơi nóng ruột khi người khác làm chậm hơn mình.",
        "Cần học cách lắng nghe và trao quyền để không bị quá tải."
      ],
      careers: [
        "Làm chủ kinh doanh, Giám đốc, Quản lý dự án, Bất động sản, Công nghệ, Tài chính",
        "Kinh doanh tự do, Bán hàng xuất sắc (Top Sales), Kiến trúc sư, Kỹ sư trưởng"
      ],
      wealthAdvice:
        "Bạn càng làm chủ hoặc đứng ở vị trí tiên phong chịu trách nhiệm chính thì càng giàu lớn. Hãy dồn lực xây dựng một thương hiệu/công việc cốt lõi của riêng mình.",
      loveAdvice:
        "Trong công việc bạn là tướng lĩnh nhưng về nhà hãy dịu dàng một chút để giữ lửa ấm êm. Hợp với Số 2, Số 3, Số 5, Số 6 và Số 8.",
      forecast2026: [
        "Quý 1 - Quý 2: Khởi đầu dự án mới hoặc bước ngoặt thăng tiến mạnh mẽ.",
        "Quý 3: Thu hoạch dòng tiền lớn từ quyết định táo bạo đầu năm.",
        "Quý 4: Khẳng định vị thế dẫn đầu, tích lũy tài sản bền vững."
      ]
    },
    11: {
      title: "Số Chủ Đạo 11/2 — Con Số Bậc Thầy Trực Giác, Tâm Linh & Truyền Cảm Hứng Lớn",
      badge: "Con Số Bậc Thầy (Master Number 11)",
      element: "Thủy Quang (Trực giác siêu phàm & Khai sáng)",
      summary:
        "Chúc mừng bạn! Số 11 là một trong 3 Con Số Bậc Thầy (Master Numbers) hiếm có trong Thần Số Học. Bạn sở hữu cả sự tinh tế yêu thương của Số 2 lẫn bản lĩnh thủ lĩnh của hai con số 1 cộng lại, cùng trực giác nhạy bén đáng kinh ngạc.",
      strengths: [
        "Trực giác cực kỳ chuẩn xác: nhìn người, nhìn cơ hội hầu như không bao giờ sai.",
        "Sức hút tinh thần mạnh mẽ, lời nói có trọng lượng chạm tới trái tim đám đông.",
        "Tư duy thanh cao, sâu sắc, có khả năng tạo ra thành tựu vượt trội."
      ],
      weaknesses: [
        "Trường năng lượng quá nhạy nên dễ bị căng thẳng nếu sống trong môi trường tiêu cực.",
        "Đôi khi cầu toàn và khắt khe với chính mình."
      ],
      careers: [
        "Cố vấn cấp cao, Đào tạo - Giáo dục, Tâm lý - Chữa lành, Nghệ thuật sáng tạo, Thiết kế",
        "Truyền thông, Thương hiệu cao cấp, Ngoại giao, Kinh doanh sản phẩm sức khỏe - tinh thần"
      ],
      wealthAdvice:
        "Khi bạn làm những công việc mang lại giá trị thật và vẻ đẹp cho con người, tài lộc sẽ tự động tìm đến ở mức dư dả vượt bậc. Hãy luôn tin vào linh cảm đầu tiên của mình khi chọn đối tác.",
      loveAdvice:
        "Bạn trân trọng sự đồng điệu tâm hồn (Soulmate). Rất hợp với Số 2, Số 4, Số 6, Số 8 và Số 9.",
      forecast2026: [
        "Quý 1 - Quý 2: Trực giác dẫn lối giúp bạn nắm bắt cơ hội vàng trong công việc.",
        "Quý 3: Quý nhân tầm cỡ xuất hiện nâng đỡ cả về danh tiếng lẫn tài chính.",
        "Quý 4: Đạt bước tiến lớn về thu nhập và sự bình an viên mãn."
      ]
    },
    22: {
      title: "Số Chủ Đạo 22/4 — Con Số Bậc Thầy Kiến Tạo Đại Nghiệp (Master Builder)",
      badge: "Bậc Thầy Kiến Tạo (Master Number 22)",
      element: "Đại Thổ & Thủy (Biến ước mơ lớn thành hiện thực)",
      summary:
        "Số 22/4 là Con Số Vua của sự kiến tạo thực tế! Chỉ khoảng 1-2% dân số sở hữu con số này. Bạn kết hợp được tầm nhìn vĩ mô của Số 11 với năng lực hành động kỷ luật thép của Số 4, có khả năng biến những giấc mơ không tưởng thành cơ ngơi thật sự.",
      strengths: [
        "Tầm nhìn xa trông rộng đi kèm khả năng tổ chức, thực thi cực kỳ thực tế.",
        "Bản lĩnh kiên cường, uy tín lớn, làm việc gì cũng hướng tới sự bền vững hàng chục năm.",
        "Tư duy tài chính và quản trị hệ thống xuất sắc."
      ],
      weaknesses: [
        "Áp lực tự thân lớn vì luôn muốn làm hoàn hảo mọi thứ.",
        "Đôi khi ôm đồm quá nhiều trọng trách cùng lúc."
      ],
      careers: [
        "Chủ doanh nghiệp lớn, Bất động sản, Xây dựng, Tài chính - Ngân hàng, Công nghệ",
        "Quản lý chuỗi hệ thống, Thương mại quốc tế, Kiến trúc, Đầu tư chiến lược"
      ],
      wealthAdvice:
        "Bạn có vận mệnh nắm giữ tài sản lớn. Đừng giới hạn bản thân ở những mục tiêu nhỏ lẻ; hãy kiên trì xây dựng sự nghiệp bài bản, hậu vận của bạn cực kỳ thịnh vượng.",
      loveAdvice:
        "Bạn là điểm tựa vững như bàn thạch cho người thương. Hợp nhất với Số 2, Số 4, Số 6, Số 8 và Số 11.",
      forecast2026: [
        "Quý 1 - Quý 2: Đặt nền móng vững chắc cho dự án hoặc nguồn thu nhập dài hạn.",
        "Quý 3: Đột phá doanh thu, mở rộng quy mô hoặc tích lũy bất động sản/tài sản lớn.",
        "Quý 4: Gặt hái thành tựu rực rỡ, khẳng định đẳng cấp cá nhân."
      ]
    },
    33: {
      title: "Số Chủ Đạo 33/6 — Con Số Bậc Thầy Chữa Lành & Đại Phúc Lộc",
      badge: "Bậc Thầy Yêu Thương (Master Number 33)",
      element: "Thiên Hỏa (Từ bi, tỏa sáng & Đại cát tường)",
      summary:
        "Số 33/6 là con số hiếm nhất và mang phúc khí lớn nhất trong Thần Số Học Pitago. Bạn hội tụ trí tuệ sáng tạo của hai số 3 và trái tim nhân ái bao la của số 6, đi tới đâu cũng mang lại may mắn, sự bình an và thịnh vượng cho người xung quanh.",
      strengths: [
        "Phúc đức sâu dày, đi qua sóng gió đều hóa dữ thành lành.",
        "Khả năng truyền cảm hứng, gắn kết gia đình và dẫn dắt cộng đồng bằng tình yêu thương.",
        "Sáng tạo, tinh tế, được rất nhiều người quý mến và sẵn lòng giúp đỡ."
      ],
      weaknesses: [
        "Quá giàu lòng trắc ẩn nên dễ hy sinh quyền lợi cá nhân vì người khác."
      ],
      careers: [
        "Giáo dục, Y tế - Chăm sóc sức khỏe, Làm đẹp, Nghệ thuật, Truyền thông nhân văn",
        "Kinh doanh sản phẩm gia đình, Quản trị nhân sự, Cố vấn tâm lý & Đời sống"
      ],
      wealthAdvice:
        "Phúc lộc của bạn gắn liền với chữ Tâm. Càng làm nghề mang lại niềm vui, sức khỏe và sắc đẹp cho đời, tiền tài càng tự chảy về bền vững.",
      loveAdvice:
        "Hôn nhân và gia đình là nguồn sức mạnh lớn nhất của bạn. Hợp với Số 2, Số 3, Số 6, Số 8, Số 9 và Số 11.",
      forecast2026: [
        "Quý 1 - Quý 2: Đón nhận tin vui lớn về gia đạo và công việc.",
        "Quý 3: Tài lộc hanh thông, quý nhân mang tới cơ hội hợp tác lâu dài.",
        "Quý 4: Viên mãn cả tình cảm lẫn tiền bạc."
      ]
    }
  },

  // 8 Mũi tên trên Biểu đồ Ngày sinh 3x3
  arrows: [
    {
      nums: [1, 5, 9],
      presentName: "🔥 Mũi Tên Quyết Tâm (1-5-9)",
      presentDesc: "Bạn là người đã quyết việc gì là làm tới cùng, kiên trì vượt khó không bỏ cuộc.",
      emptyName: "🌱 Mũi Tên Trì Hoãn (Trống 1-5-9)",
      emptyDesc: "Cần rèn thói quen chia nhỏ mục tiêu và làm ngay để tránh chần chừ."
    },
    {
      nums: [3, 5, 7],
      presentName: "✨ Mũi Tên Nhạy Bén & Tâm Linh (3-5-7)",
      presentDesc: "Bạn có trực giác rất nhạy, hay gặp may mắn bất ngờ và cảm nhận đúng lòng người.",
      emptyName: "🔍 Mũi Tên Thực Chứng (Trống 3-5-7)",
      emptyDesc: "Bạn chỉ tin vào những gì mắt thấy tai nghe rõ ràng, thực tế."
    },
    {
      nums: [3, 6, 9],
      presentName: "🧠 Mũi Tên Trí Tuệ Sáng Suốt (3-6-9)",
      presentDesc: "Trí nhớ tốt, đầu óc thông minh, tư duy logic và sáng tạo vượt trội.",
      emptyName: "📚 Mũi Tên Rèn Luyện Trí Nhớ (Trống 3-6-9)",
      emptyDesc: "Hãy ghi chú công việc ra sổ/điện thoại để không bị quên chi tiết nhỏ."
    },
    {
      nums: [2, 5, 8],
      presentName: "💛 Mũi Tên Cân Bằng Cảm Xúc (2-5-8)",
      presentDesc: "Bạn sống tình cảm, điềm tĩnh, biết kiểm soát cảm xúc và rất sâu sắc.",
      emptyName: "🌸 Mũi Tên Nhạy Cảm Nội Tâm (Trống 2-5-8)",
      emptyDesc: "Bề ngoài mạnh mẽ nhưng bên trong dễ xúc động, cần người tâm sự sẻ chia."
    },
    {
      nums: [1, 4, 7],
      presentName: "🛠️ Mũi Tên Thực Tế & Tháo Vát (1-4-7)",
      presentDesc: "Đôi tay khéo léo, sống thực tế, chăm chỉ và rất giỏi kiếm tiền bằng năng lực thật.",
      emptyName: "☁️ Mũi Tên Bay Bổng Lý Tưởng (Trống 1-4-7)",
      emptyDesc: "Giàu ý tưởng sáng tạo nhưng cần lập kế hoạch chi tiết để áp dụng vào thực tế."
    },
    {
      nums: [1, 2, 3],
      presentName: "📐 Mũi Tên Kế Hoạch Bài Bản (1-2-3)",
      presentDesc: "Làm việc có trước có sau, biết sắp xếp cuộc sống và công việc rất khoa học.",
      emptyName: "⚡ Mũi Tên Ngẫu Hứng Linh Hoạt (Trống 1-2-3)",
      emptyDesc: "Thích làm việc tự do linh hoạt hơn là tuân theo khuôn mẫu cứng nhắc."
    },
    {
      nums: [4, 5, 6],
      presentName: "🦁 Mũi Tên Ý Chí Thép (4-5-6)",
      presentDesc: "Ý chí nghị lực phi thường, vượt qua mọi nghịch cảnh để thành công lớn.",
      emptyName: "💌 Mũi Tên Mong Manh Cần Động Viên (Trống 4-5-6)",
      emptyDesc: "Đôi lúc dễ tủi thân khi nỗ lực của mình chưa được người thân ghi nhận ngay."
    },
    {
      nums: [7, 8, 9],
      presentName: "🚀 Mũi Tên Hành Động Nhanh Nhạy (7-8-9)",
      presentDesc: "Năng động, xông xáo, nghĩ là bắt tay vào làm ngay không ngồi chờ đợi.",
      emptyName: "🧘 Mũi Tên Cẩn Trọng Quan Sát (Trống 7-8-9)",
      emptyDesc: "Thường suy nghĩ kỹ lưỡng, chắc chắn rồi mới bắt đầu hành động."
    }
  ],

  // Ý nghĩa Năm Cá Nhân (1 -> 9)
  personalYears: {
    1: "Năm Số 1 — Khởi Đầu Mới & Gieo Hạt Vàng: Rất tốt để bắt đầu công việc mới, dự án mới hoặc thay đổi bản thân.",
    2: "Năm Số 2 — Kết Nối Quý Nhân & Tình Cảm: Năm của sự hợp tác êm ấm, tình duyên nở hoa và củng cố mối quan hệ.",
    3: "Năm Số 3 — Mở Rộng Giao Tiếp & Tỏa Sáng: Thuận lợi học thêm kỹ năng mới, bán hàng, xây dựng thương hiệu cá nhân.",
    4: "Năm Số 4 — Củng Cố Nền Tảng & Tích Lũy: Năm cần sự chắc chắn, quản lý tài chính chặt chẽ và chăm sóc sức khỏe.",
    5: "Năm Số 5 — Bứt Phá Tự Do & Cơ Hội Bất Ngờ: Có bước ngoặt tích cực, đi xa đắc lộc hoặc mở rộng hướng kiếm tiền mới.",
    6: "Năm Số 6 — Lộc Gia Đạo & Tình Thương: Thuận lợi chuyện cưới hỏi, sinh con, mua nhà xe hoặc phát triển kinh doanh từ uy tín.",
    7: "Năm Số 7 — Chiêm Nghiệm & Nâng Cấp Trí Tuệ: Năm rèn luyện chuyên môn sâu, trực giác sáng suốt, tránh đầu tư lướt sóng mạo hiểm.",
    8: "Năm Số 8 — Đỉnh Cao Thu Hoạch Tài Chính: Năm vượng phát mạnh về tiền bạc, kinh doanh, thăng chức và khẳng định vị thế!",
    9: "Năm Số 9 — Viên Mãn Chu Kỳ & Chuẩn Bị Vận Mới: Thu hoạch thành quả của 9 năm, thanh lọc điều cũ kỹ để đón chu kỳ rực rỡ mới."
  },

  // Mẫu điền nhanh CV theo ngành nghề (Tab 4)
  cvPresets: {
    sales: {
      fullName: "Nguyễn Minh Anh",
      role: "Chuyên Viên Kinh Doanh & Tư Vấn Khách Hàng",
      phone: "0988 686 868",
      email: "minhanh.work@gmail.com",
      address: "Quận Cầu Giấy, Hà Nội",
      summary:
        "Hơn 2 năm kinh nghiệm trong lĩnh vực tư vấn bán hàng và chăm sóc khách hàng. Có khả năng giao tiếp thuyết phục, nắm bắt tâm lý khách hàng nhanh nhạy và luôn vượt chỉ tiêu doanh số từ 115% - 130% mỗi quý.",
      experience:
        "• Công ty Cổ phần Thương Mại Dịch Vụ Á Châu (2024 - Nay) — Chuyên viên Kinh doanh:\n  - Tư vấn và chốt đơn cho hơn 300+ khách hàng cá nhân và doanh nghiệp.\n  - Đạt danh hiệu Nhân viên bán hàng xuất sắc Quý 3 & Quý 4.\n• Cửa hàng Thời Trang & Mỹ Phẩmونی (2022 - 2024) — Tư vấn viên bán hàng:\n  - Chăm sóc khách hàng qua Zalo/Facebook, tỷ lệ khách quay lại mua hàng đạt 45%.",
      education: "Đại học Thương Mại — Chuyên ngành Quản trị Kinh doanh (Tốt nghiệp loại Khá)",
      skills: "Giao tiếp & Đàm phán chốt đơn, Chăm sóc khách hàng qua Zalo/Điện thoại, Sử dụng thành thạo Word/Excel/Canva, Làm việc nhóm & Chịu áp lực tốt"
    },
    accounting: {
      fullName: "Trần Thu Hà",
      role: "Nhân Viên Kế Toán Tổng Hợp / Kế Toán Nội Bộ",
      phone: "0912 345 678",
      email: "thuha.ketoan@gmail.com",
      address: "Quận Bình Thạnh, TP. Hồ Chí Minh",
      summary:
        "Kế toán viên cẩn thận, trung thực, nắm vững nghiệp vụ kế toán doanh nghiệp và phần mềm MISA, Excel. Mong muốn gắn bó lâu dài và giúp doanh nghiệp quản lý dòng tiền, sổ sách minh bạch, chính xác 100%.",
      experience:
        "• Công ty TNHH Đầu Tư & Xây Dựng Hoàng Gia (2023 - Nay) — Kế toán nội bộ:\n  - Quản lý thu chi hàng ngày, theo dõi công nợ khách hàng và nhà cung cấp.\n  - Lập bảng lương, bảo hiểm xã hội và báo cáo tài chính định kỳ hàng tháng.\n• Công ty Dịch vụ Kế toán Minh Tâm (2021 - 2023) — Nhân viên kế toán viên:\n  - Xuất hóa đơn điện tử, kê khai thuế GTGT, TNCN đúng hạn.",
      education: "Học viện Tài Chính / Đại học Kinh tế — Chuyên ngành Kế toán - Kiểm toán",
      skills: "Phần mềm kế toán MISA / Fast, Excel nâng cao (Hàm VLOOKUP, PivotTable), Kê khai thuế & Hóa đơn điện tử, Cẩn thận - Bảo mật số liệu"
    },
    student: {
      fullName: "Lê Hoàng Nam",
      role: "Thực Tập Sinh / Nhân Viên Mới Tốt Nghiệp (Marketing & Hành Chính)",
      phone: "0977 889 900",
      email: "hoangnam.cv@gmail.com",
      address: "Quận Hải Châu, Đà Nẵng",
      summary:
        "Sinh viên mới tốt nghiệp năng động, ham học hỏi, thành thạo tin học văn phòng và các công cụ thiết kế/AI hiện đại. Sẵn sàng nhận việc ngay với tinh thần trách nhiệm cao nhất.",
      experience:
        "• Câu lạc bộ Truyền Thông Sinh Viên (2023 - 2025) — Trưởng nhóm Nội dung:\n  - Lên ý tưởng và viết bài cho Fanpage đạt hơn 50.000 lượt tiếp cận/tháng.\n  - Phối hợp tổ chức 5 sự kiện hướng nghiệp quy mô 500 sinh viên.\n• Cửa hàng Cafe Acoustic (2023 - 2024) — Nhân viên Part-time:\n  - Thu ngân, pha chế và đón tiếp khách hàng chuyên nghiệp.",
      education: "Cử nhân Đại học Kinh Tế — Chuyên ngành Marketing / Quản trị (GPA: 3.3/4.0)",
      skills: "Tin học văn phòng Word/Excel/PowerPoint, Thiết kế ảnh Canva & Dựng video CapCut, Viết bài Fanpage/TikTok, Tiếng Anh giao tiếp cơ bản"
    }
  }
};
