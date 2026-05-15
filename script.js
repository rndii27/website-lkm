// ===== DATA =====

const materiData = [
  {
    id: 1,
    judul: "Analisis dan Pengembangan Masyarakat",
    pemateri: "A Ace Hermawan",
    inti: [
      "Dalam perspektif organisasi Tri Jaya, terdapat tiga tahapan penting yang meliputi : Perumusan, Implementasi, dan Evaluasi",
      "Penggunaan AI sangat membantu dalam pembuatan video karena mempercepat proses produksi visual, suara, dan editing. Namun AI tetap membutuhkan pengarahan manusia agar hasil sesuai tujuan. Dari tugas ini, kami memahami bahwa AI adalah alat bantu yang efektif jika digunakan secara bijak, kreatif, dan bertanggung jawab.",
      "Tujuan utamanya: Meningkatkan kesejahteraan sosial dan ekonomi, Keadilan sosial, Kebutuhan berbasis data, Inklusivitas, Keadilan, Kemandirian, Keberlanjutan",
      "Metode dalam Pengembangan: Observasi, Wawancara, Survei atau kuesioner, Pemetaan sosial, Focus group discussion, Participatory rural.",
      "Perubahan dalam masyarakat ini dipicu oleh faktor internal seperti pertumbuhan penduduk, inovasi dan kreativitas, pendidikan, kesadaran sosial, nilai dan budaya, serta faktor eksternal seperti globalisasi, perkembangan teknologi, interaksi antar budaya, kebijakan pemerintah, hingga krisis sosial dan bencana alam.",
      "Dalam praktiknya, pengembangan masyarakat menggunakan alat bantu analisis SWOT dan mengikuti tahapan mulai dari identifikasi masalah, analisis kebutuhan, perancangan program, implementasi, hingga evaluasi untuk menjaga keberlanjutan. Namun, proses ini tidak luput dari tantangan seperti kurangnya partisipasi, keterbatasan sumber daya manusia, konflik kepentingan, budaya yang sulit berubah, serta intervensi yang terkadang tidak sesuai dengan konteks lokal."
    ],
    kesimpulan: "Analisis dan pengembangan masyarakat merupakan proses penting untuk memahami kondisi organisasi secara menyeluruh, mengidentifikasi masalah, serta merancang strategi perbaikan. Melalui pendekatan terencana, data yang valid, dan evaluasi berkelanjutan, organisasi dapat berkembang secara efektif, adaptif, dan berkelanjutan."
  },
  {
    id: 2,
    judul: "Dinamika Sosial dan Politik",
    pemateri: "Arul Mishabul Khoer",
    inti: [
      "Perjalanan sosial dan politik Indonesia terbagi dalam beberapa periode sejarah.",
      "Pra-Kemerdekaan berlangsung sebelum tahun 1945.",
      "Era Orde Lama berlangsung dari tahun 1945 sampai 1968.",
      "Era Orde Baru berlangsung dari tahun 1968 sampai 1998.",
      "Era Reformasi berlangsung dari tahun 1998 hingga sekarang.",
      "Setiap periode memiliki dinamika sosial, politik, dan ekonomi yang berbeda.",
      "Konstelasi politik mencakup berbagai ideologi seperti kiri, kanan, pemerintah, dan oposisi.",
      "Mahasiswa perlu memiliki sikap kritis, objektif, dan moderat.",
      "Sikap fanatik buta dapat menghambat pemahaman politik secara rasional.",
      "Teknologi memiliki dampak positif dan negatif terhadap dinamika sosial politik.",
      "Mahasiswa informatika berperan dalam menghadapi perubahan melalui teknologi."
    ],
    kesimpulan: "Mahasiswa harus memahami dinamika sosial politik dengan berpikir objektif, kritis, dan memanfaatkan teknologi secara bijak."
  },
  {
    id: 3,
    judul: "Manajemen Aksi",
    pemateri: "A Defri Crisna Pramudi",
    inti: [
      "Manajemen aksi adalah bentuk penyampaian pendapat oleh massa dengan teknik tertentu untuk menarik perhatian pihak terkait.",
      "Aksi dilindungi oleh Undang-Undang Nomor 9 Tahun 1998.",
      "Peserta aksi dilarang membawa benda berbahaya saat kegiatan berlangsung.",
      "Pelaksanaan aksi memerlukan pemberitahuan tertulis kepada pihak kepolisian.",
      "Surat pemberitahuan memuat tujuan, waktu, rute, dan jumlah massa.",
      "Keputusan aksi dilakukan melalui analisis SWOT.",
      "Tahapan aksi meliputi diskusi awal, pembentukan tim, diskusi lanjutan, dan aksi lapangan.",
      "Perangkat aksi terdiri dari koordinator lapangan, orator, negosiator, agitator, dan tim pendukung.",
      "Perencanaan aksi meliputi planning, perangkat, pelaksanaan, dan evaluasi pasca aksi.",
      "Perencanaan aksi harus memperhatikan tema isu, target, skenario, dan format aksi.",
      "Perjuangan saat ini berkembang ke ruang digital melalui website, SEO, visualisasi data, dan kampanye digital."
    ],
    tabel: {
      header: ["Peran", "Tugas"],
      rows: [
        ["Koordinator Lapangan", "Mengatur jalannya aksi"],
        ["Orator", "Menyampaikan aspirasi"],
        ["Negosiator", "Berkomunikasi dengan pihak terkait"],
        ["Tim Medis", "Menangani peserta"],
        ["Dokumentasi", "Mencatat kegiatan"]
      ]
    },
    kesimpulan: "Manajemen aksi membutuhkan perencanaan strategis, koordinasi tim, serta adaptasi ke ruang digital sebagai media perjuangan modern."
  },
  {
    id: 4,
    judul: "Otoritas Informasi",
    pemateri: "A Ikmal Riza",
    inti: [
      "Data menjadi elemen utama dalam kepemimpinan modern untuk mendukung pengambilan keputusan.",
      "Kekuatan kepemimpinan terletak pada kemampuan mengelola, mendistribusikan, dan menjaga kerahasiaan data.",
      "Otoritas informasi dibangun untuk menjaga stabilitas dan kedaulatan organisasi.",
      "Tiga pilar utama otoritas informasi yaitu struktur, validasi, dan hak akses.",
      "Struktur digunakan untuk membangun hierarki informasi dalam organisasi.",
      "Validasi berfungsi untuk memastikan data melalui proses verifikasi yang benar.",
      "Hak akses menggunakan metode RBAC (Role-Based Access Control).",
      "Mahasiswa informatika berperan dalam pembangunan kedaulatan digital melalui sistem informasi.",
      "Konsep Code is Law menjadikan kode program sebagai aturan yang mengatur sistem digital.",
      "Krisis kebocoran data menunjukkan pentingnya pengelolaan informasi yang aman.",
      "Kasus bocornya data pendidikan dan IGRS menjadi contoh kegagalan otoritas informasi.",
      "Manajemen otoritas dimulai dari akuisisi data.",
      "Data kemudian diklasifikasikan sesuai tingkat kerahasiaannya.",
      "Distribusi dilakukan kepada pihak yang memiliki wewenang.",
      "Proteksi dilakukan untuk menjaga integritas dan keamanan data."
    ],
    tabel: {
      header: ["Tingkat", "Akses", "Wewenang"],
      rows: [
        ["Public", "Profil, Agenda, Berita Umum", "Transparansi dan Branding"],
        ["Internal", "Draf Keputusan", "Manajerial dan Taktis"],
        ["Rahasia", "Data Kader", "Proteksi dan Integritas Mutlak"]
      ]
    },
    kesimpulan: "Otoritas informasi merupakan fondasi penting dalam kepemimpinan modern karena data menjadi pusat pengambilan keputusan, kontrol, dan keamanan organisasi. Pengelolaan data yang terstruktur, aman, dan tepat sasaran sangat menentukan stabilitas serta kepercayaan terhadap suatu sistem."
  },
  {
    id: 5,
    judul: "Retorika",
    pemateri: "A Abdillah",
    inti: [
      "Retorika adalah seni berbicara atau menulis secara efektif untuk memengaruhi audiens.",
      "Retorika digunakan untuk meyakinkan, menginspirasi, dan menyampaikan gagasan secara persuasif.",
      "Retorika tidak hanya teori, tetapi juga praktik yang bersifat adaptif sesuai situasi.",
      "Tiga prinsip dasar retorika adalah ethos, pathos, dan logos.",
      "Ethos menekankan kualitas, karakter, dan kredibilitas pembicara.",
      "Pathos berfokus pada kemampuan menyentuh emosi audiens.",
      "Logos menekankan argumen yang logis dan berbasis bukti.",
      "Story telling digunakan untuk membangun koneksi emosional dengan audiens.",
      "Bahasa tubuh dan intonasi penting untuk memperkuat pesan.",
      "Penyampaian harus memiliki struktur yang jelas: pembukaan, isi, dan penutup.",
      "Penggunaan data dan contoh konkret meningkatkan kepercayaan audiens.",
      "Latihan secara konsisten menjadi kunci membangun rasa percaya diri.",
      "Memahami latar belakang audiens membantu menyesuaikan gaya komunikasi.",
      "Gaya bicara dapat disesuaikan menjadi formal atau non-formal.",
      "Kombinasi emosi, logika, dan kredibilitas menghasilkan komunikasi yang efektif."
    ],
    kesimpulan: "Retorika merupakan kemampuan komunikasi yang memadukan kredibilitas, emosi, dan logika untuk menyampaikan gagasan secara efektif, persuasif, serta sesuai dengan karakter audiens."
  },
  {
    id: 6,
    judul: "Analisis Organisasi",
    pemateri: "A Fauzan",
    inti: [
      "Analisis organisasi adalah proses sistematis untuk memahami kondisi organisasi secara menyeluruh.",
      "Analisis dilakukan untuk menemukan masalah, potensi, dan langkah perbaikan organisasi.",
      "Tujuan utama analisis adalah mengetahui kondisi organisasi secara objektif.",
      "Analisis membantu mengidentifikasi akar masalah yang terjadi.",
      "Hasil analisis menjadi dasar pengambilan keputusan yang lebih tepat.",
      "Analisis digunakan untuk menyusun strategi perbaikan organisasi ke depan.",
      "Ruang lingkup analisis mencakup faktor internal dan eksternal.",
      "Faktor internal meliputi struktur organisasi, SDM, budaya kerja, dan pola komunikasi.",
      "Faktor eksternal meliputi peluang, tantangan, aturan hukum, kebutuhan pasar, dan lingkungan.",
      "Faktor internal dan eksternal saling memengaruhi jalannya organisasi.",
      "Analisis harus dilakukan berdasarkan prinsip ilmiah.",
      "Data yang digunakan harus dapat diuji dan dipertanggungjawabkan.",
      "Metode analisis meliputi observasi, wawancara, studi dokumen, klasifikasi data, dan SWOT.",
      "Problem solving dilakukan melalui identifikasi faktor utama dan akar masalah.",
      "Langkah berikutnya adalah mengukur dampak, menyusun solusi, dan tindak lanjut."
    ],
    kesimpulan: "Analisis organisasi menjadi dasar penting untuk memahami kondisi, menyelesaikan masalah, dan menentukan arah pengembangan organisasi secara terencana."
  },
  {
    id: 7,
    judul: "Pembangunan Organisasi & Pengembangan Organisasi",
    pemateri: "A Wildan Fauzi Agustian",
    inti: [
      "Pembangunan organisasi adalah proses terencana untuk meningkatkan efektivitas organisasi.",
      "Proses pembangunan mencakup perbaikan sistem, struktur, budaya, dan sumber daya manusia.",
      "Tujuan utamanya adalah menciptakan organisasi yang mampu berkembang secara berkelanjutan.",
      "Pembangunan organisasi bertujuan meningkatkan produktivitas dan efisiensi kerja.",
      "Organisasi perlu menyesuaikan diri terhadap perubahan lingkungan.",
      "Peningkatan kualitas SDM dan kepemimpinan menjadi fokus utama.",
      "Budaya kerja yang positif mendukung keberhasilan organisasi.",
      "Pengembangan organisasi merupakan proses berkelanjutan untuk meningkatkan kapasitas organisasi.",
      "Pengembangan melibatkan perubahan perilaku, struktur, dan teknologi.",
      "Tujuannya adalah meningkatkan efektivitas organisasi dalam jangka panjang.",
      "Pengembangan organisasi bersifat terencana dan melibatkan seluruh anggota.",
      "Kolaborasi menjadi faktor penting dalam proses perubahan.",
      "Kepemimpinan visioner menjadi faktor utama keberhasilan.",
      "Budaya adaptif dan komunikasi efektif mempercepat pengembangan.",
      "SDM kompeten menjadi pendukung utama perubahan organisasi."
    ],
    kesimpulan: "Pembangunan dan pengembangan organisasi merupakan proses berkelanjutan yang membutuhkan perencanaan, kolaborasi, serta evaluasi agar organisasi mampu berkembang secara efektif."
  },
  {
    id: 8,
    judul: "Kekeluargaan",
    pemateri: "Teh Annisa Essa",
    inti: [
      "Kekeluargaan adalah hubungan yang dibangun dari ikatan emosional, bukan sekadar saling mengenal nama atau wajah.",
      "Kekeluargaan tumbuh melalui kebersamaan, pengalaman bersama, dan rasa nyaman menjadi diri sendiri.",
      "Kepercayaan menjadi dasar utama dalam membangun hubungan kekeluargaan.",
      "Setiap individu dapat berbagi cerita, impian, dan perasaan tanpa takut dihakimi.",
      "Kekeluargaan memungkinkan seseorang menjadi diri sendiri tanpa berpura-pura.",
      "Dalam hubungan kekeluargaan, perbedaan pendapat dan konflik adalah hal yang wajar.",
      "Sikap saling memaafkan, memahami, dan menerima menjadi kunci menjaga hubungan.",
      "Kekeluargaan dibangun melalui keseimbangan antara memberi dan menerima.",
      "Memberikan waktu, perhatian, dan kepedulian memperkuat hubungan antar anggota.",
      "Meluangkan waktu bersama menjadi langkah awal membangun rasa kebersamaan.",
      "Mendengarkan dan memahami satu sama lain meningkatkan kedekatan emosional.",
      "Menjadi diri sendiri tanpa berpura-pura menciptakan hubungan yang tulus.",
      "Kasih sayang dan dukungan timbal balik memperkuat rasa kekeluargaan.",
      "Kekeluargaan yang kuat menciptakan lingkungan yang saling mendukung dan peduli."
    ],
    kesimpulan: "Kekeluargaan terbentuk dari kepercayaan, kebersamaan, dan kepedulian yang tumbuh melalui hubungan yang tulus, saling memahami, serta saling mendukung dalam berbagai keadaan."
  }
];


const teamData = {
  mentor: [
    { nama: "Teh Raden Annisa", role: "Mentor", npm: "247006111010", kelas: "Mahasiswa", angkatan: "2024", linkedin: "https://www.linkedin.com/in/raden-annisa-dwi-mulyana-41221a40b?trk=contact-info" },
    { nama: "Teh Cethy Ketrianur", role: "Mentor", npm: "247006111048", kelas: "Mahasiswa", angkatan: "2024", linkedin: "https:" }
  ],
  ketua: [
    { nama: "Salman Alfarisy Isnurdian", role: "Ketua", npm: "257006111031", kelas: "A", angkatan: "2025", linkedin: "https://www.linkedin.com/in/salman-alfarisy-isnurdian-906a69405?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ],
  wakil: [
    { nama: "Rendi Maulana", role: "Wakil Ketua", npm: "257006111172", kelas: "F", angkatan: "2025", linkedin: "https://linkedin.com/in/rendi-maulana" }
  ],
  anggota: [
    { nama: "Zaky Khoirullah", role: "Anggota", npm: "257006111028", kelas: "A", angkatan: "2025", linkedin: "https://www.linkedin.com/in/zaky-khoirullah-548346340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { nama: "Linda Dwi Martianda", role: "Anggota", npm: "257006111087", kelas: "Manajemen A", angkatan: "2025", linkedin: " https://www.linkedin.com/in/linda-dwi-martianda-b008b5405" },
    { nama: "Silpia Siti Pebriani", role: "Anggota", npm: "25700611116", kelas: "Manajemen C", angkatan: "2025", linkedin: "https://linkedin.com/in/irfan" },
    { nama: "Ayudia Fasha", role: "Anggota", npm: "257006111138", kelas: "Manajemen B", angkatan: "2025", linkedin: "https://www.linkedin.com/in/ayudia-fasha-2239a6383?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { nama: "Arsha Diaz Raditya", role: "Anggota", npm: "257006111139", kelas: "Manajemen A", angkatan: "2025", linkedin: "https://www.linkedin.com/in/arsha-diaz-raditya-712624361?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { nama: "Ilallika Haikal Hikayat", role: "Anggota", npm: "257006111144", kelas: "Manajemen C", angkatan: "2025", linkedin: "https://linkedin.com/in/layla" },
    { nama: "Rizky Aditya Putra Wiyatna", role: "Anggota", npm: "257006111149", kelas: "Manajemen B", angkatan: "2025", linkedin: "https://linkedin.com/in/ikhsan" },
    { nama: "Nadhif Ali Zuhdi", role: "Anggota", npm: "257006111155", kelas: "Manajemen B", angkatan: "2025", linkedin: "https://www.linkedin.com/in/nadhif-ali-zuhdi-4927a3404?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { nama: "Muhammad Ramdhani Fathul Muttaqin", role: "Anggota", npm: "257006111216", kelas: "Manajemen B", angkatan: "2025", linkedin: "" }
  ]
};

// ===== NAVIGATION =====
function showPage(pageId) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Hapus class active dari semua menu navbar
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  
  // Pastikan halaman yang dituju ada, lalu tampilkan
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.error('Halaman tidak ditemukan: page-' + pageId);
    return; // Berhenti jika halaman tidak ada
  }
  
  // Tentukan menu navbar mana yang harus menyala (active)
  let navId = pageId;
  if (pageId === 'detail-materi') {
    navId = 'materi'; // Tetap nyalakan menu "materi" jika sedang di halaman detail
  }
  
  const navEl = document.getElementById('nav-' + navId);
  if (navEl) navEl.classList.add('active');
  
  // Tutup menu mobile jika sedang terbuka
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.classList.remove('show');
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// ===== RENDER TOMBOL TABS PERTEMUAN =====
function renderMateriTabs() {
  const tabsContainer = document.getElementById('pertemuan-tabs');
  if (!tabsContainer) return;
  
  // Buat tombol untuk setiap materi
  tabsContainer.innerHTML = materiData.map((m, idx) => `
    <button class="tab-btn ${idx === 0 ? 'active' : ''}" onclick="selectMateri(${m.id}, this)">
      Materi ${m.id}
    </button>
  `).join('');
  
  // Tampilkan materi pertemuan pertama secara default saat web dibuka
  if (materiData.length > 0) {
    showMateriContent(materiData[0].id);
  }
}

// ===== FUNGSI UNTUK TOMBOL GESER TABS =====
function scrollTabs(direction) {
  const container = document.getElementById('pertemuan-tabs');
  // Atur seberapa jauh tab bergeser setiap kali tombol ditekan (dalam pixel)
  const scrollAmount = 200; 

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// ===== FUNGSI KETIKA TOMBOL DIKLIK =====
function selectMateri(id, btnElement) {
  // 1. Ubah warna tombol agar yang diklik menjadi biru (active)
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');
  
  // 2. Tampilkan isi materi di kotak bawah
  showMateriContent(id);
}

// ===== RENDER KOTAK MATERI =====
function showMateriContent(id) {
  const displayArea = document.getElementById('materi-display-area');
  const m = materiData.find(item => item.id === id);
  if (!m || !displayArea) return;

  const tabelHTML = m.tabel ? `
    <div class="materi-section-title">TABEL MATERI</div>
    <div class="materi-table-wrapper">
      <table class="materi-table">
        <thead>
          <tr>
            ${m.tabel.header.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${m.tabel.rows.map(row => `
            <tr>
              ${row.map(cell => `<td>${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  ` : '';

  displayArea.innerHTML = `
    <div class="materi-display-card">
      <div class="materi-display-header">
        <span class="pertemuan-badge">Materi ${m.id}</span>
        <div>
          <div class="materi-title">${m.judul}</div>
          <div class="materi-meta">
            <span>Pemateri:</span>
            <a class="pemateri-link" onclick="event.stopPropagation(); showPemateriModal(${m.pemateriId})">${m.pemateri}</a>
          </div>
        </div>
      </div>

      <div class="materi-content">
        <div class="materi-section-title">INTI MATERI</div>
        <ul class="poin-list">
          ${m.inti.map(p => `<li>${p}</li>`).join('')}
        </ul>

        ${tabelHTML}

        <div class="materi-section-title">KESIMPULAN</div>
        <div class="kesimpulan-box">${m.kesimpulan}</div>
      </div>
    </div>
  `;
}

// ===== RENDER PROFIL =====
function renderProfil() {
  const grid = document.getElementById('profil-grid');
  if (!grid) return;
  
  grid.innerHTML = pemateriData.map((p, i) => `
    <div class="profil-card">
      <span class="profil-num">#${String(i+1).padStart(2,'0')}</span>
      <div class="profil-avatar">${p.nama.charAt(0)}</div>
      <div class="profil-name">${p.nama}</div>
      <span class="profil-keahlian">${p.keahlian}</span>
      <p class="profil-bio">${p.latar}</p>
      <ul class="profil-exp-list">
        ${p.pengalaman.map(e => `<li>${e}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ===== RENDER ABOUT =====
function renderAbout() {
  const container = document.getElementById('about-team-container');
  if (!container) return;
  
  const groups = [
    { key: 'mentor', label: 'Mentor', avatarClass: 'mentor', tagClass: 'tag-mentor' },
    { key: 'ketua', label: 'Ketua', avatarClass: 'ketua', tagClass: 'tag-ketua' },
    { key: 'wakil', label: 'Wakil Ketua', avatarClass: 'wakil', tagClass: 'tag-wakil' },
    { key: 'anggota', label: 'Anggota', avatarClass: '', tagClass: 'tag-anggota' }
  ];

  container.innerHTML = groups.map(g => `
    <div class="team-group">
      <div class="team-group-title">${g.label}</div>
      <div class="team-grid">
        ${teamData[g.key].map((m, i) => `
          <div class="team-card" onclick="showTeamModal('${g.key}', ${i})">
            <div class="team-avatar ${g.avatarClass}">${m.nama.charAt(0)}</div>
            <div class="team-info">
              <div class="team-name">${m.nama}</div>
              <div class="team-role">${m.role}</div>
            </div>
            <span class="team-arrow">›</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== MODALS =====
function showPemateriModal(id) {
  const p = pemateriData[id];
  const modal = document.getElementById('modal-content');
  modal.innerHTML = `
    <div class="modal-top">
      <div class="modal-avatar">${p.nama.charAt(0)}</div>
      <div>
        <div class="modal-name">${p.nama}</div>
        <div class="modal-role">Pemateri LKM</div>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="detail-row">
        <span class="detail-label">Bidang Keahlian</span>
        <span class="detail-value">${p.keahlian}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Latar Belakang</span>
        <span class="detail-value" style="font-size:0.82rem">${p.latar}</span>
      </div>
      <div style="margin-top:1rem">
        <div class="materi-section-title">Pengalaman</div>
        <ul class="poin-list" style="margin-top:0.5rem">
          ${p.pengalaman.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
      <div style="margin-top:1.5rem; text-align:center">
        <button class="btn btn-blue" onclick="closeModal(); showPage('profil')">Lihat Semua Pemateri</button>
      </div>
    </div>
  `;
  openModal();
}

function showTeamModal(group, index) {
  const m = teamData[group][index];
  const modal = document.getElementById('modal-content');
  const avatarClasses = { mentor: 'background: linear-gradient(135deg, #f0a500, #fb923c)', ketua: 'background: linear-gradient(135deg, #7c3aed, #a78bfa)', wakil: 'background: linear-gradient(135deg, #059669, #34d399)', anggota: 'background: linear-gradient(135deg, var(--blue-600), var(--blue-400))' };
  modal.innerHTML = `
    <div class="modal-top" style="${avatarClasses[group] || ''}">
      <div class="modal-avatar">${m.nama.charAt(0)}</div>
      <div>
        <div class="modal-name">${m.nama}</div>
        <div class="modal-role">${m.role}</div>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="detail-row">
        <span class="detail-label">NPM</span>
        <span class="detail-value">${m.npm}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Kelas</span>
        <span class="detail-value">${m.kelas}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Angkatan</span>
        <span class="detail-value">${m.angkatan}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">LinkedIn</span>
        <span class="detail-value">
          <a href="${m.linkedin}" target="_blank">🔗 Lihat Profil</a>
        </span>
      </div>
    </div>
  `;
  openModal();
}

function openModal() {
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOutside(event) {
  if (event.target === document.getElementById('modal-overlay')) closeModal();
}

// ESC to close modal
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

let currentSlide = 0;
const slides = document.querySelectorAll('.about-slide');
let slideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
  restartAutoSlide();
}

function autoSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function restartAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 3000);
}

slideInterval = setInterval(autoSlide, 3000);


// ===== INIT UTAMA =====
renderMateriTabs(); // Memanggil fungsi tabs
renderProfil();
renderAbout();