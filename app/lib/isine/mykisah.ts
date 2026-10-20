export type Kisah = {
  id: string
  judul: string
  tanggal: string // format ISO: YYYY-MM-DD
  cuplikan: string
  isi: string[]
  gambar: string // path di folder public/
}

export const daftarKisah: Kisah[] = [
  {
    id: "toradora",
    judul: "Toradora!",
    tanggal: "2026-10-01",
    cuplikan:
      "Ryuuji yang wajahnya galak tapi baik hati dan Taiga yang mungil tapi garang, bersekutu demi mendekati orang yang mereka suka.",
    isi: [
      "Takasu Ryuuji sering disangka preman karena tatapannya tajam, padahal ia pandai memasak dan suka beres-beres. Aisaka Taiga, gadis bertubuh kecil yang dijuluki Palmtop Tiger, ternyata sahabat dari orang yang diam-diam disukai Ryuuji.",
      "Keduanya sepakat saling membantu: Ryuuji mendekatkan Taiga dengan sahabatnya, dan Taiga membantu Ryuuji mendekati gadis idamannya. Dari rencana itu, mereka jadi makin sering bersama.",
      "Perlahan kerja sama itu berubah menjadi hubungan yang tulus. Mereka belajar bahwa orang yang paling mengerti kita sering kali sudah ada di sebelah kita.",
    ],
    gambar: "/toradora.jpg",
  },
  {
    id: "your-lie-in-april",
    judul: "Your Lie in April",
    tanggal: "2026-09-20",
    cuplikan:
      "Seorang pianis yang kehilangan suara pianonya bertemu pemain biola bebas yang mengembalikan musik dalam hidupnya.",
    isi: [
      "Arima Kousei adalah pianis muda berbakat yang tak lagi bisa mendengar suara pianonya sendiri setelah kehilangan ibunya. Dunianya menjadi kelabu.",
      "Miyazono Kaori, pemain biola yang ceria dan penuh kejutan, menyeretnya kembali ke panggung dan mengajarkan bahwa musik boleh dimainkan dengan perasaan, bukan hanya dengan ketepatan.",
      "Kebersamaan mereka indah sekaligus getir. Ceritanya mengingatkan bahwa satu pertemuan bisa mengubah seseorang selamanya.",
    ],
    gambar: "/ytta.jpg",
  },
  {
    id: "kimi-ni-todoke",
    judul: "Kimi ni Todoke",
    tanggal: "2026-09-10",
    cuplikan:
      "Sawako yang pemalu sering disalahpahami teman sekelas, sampai Kazehaya yang populer mau mengenalnya dengan tulus.",
    isi: [
      "Kuronuma Sawako berhati lembut, tetapi penampilannya yang pendiam membuat teman-temannya menjulukinya Sadako dan menjauhinya.",
      "Kazehaya Shouta, murid populer yang ramah, justru memperlakukannya dengan biasa. Dari situ Sawako mulai berani berbicara dan mendapat sahabat-sahabat pertamanya.",
      "Kisah ini berjalan pelan dan manis. Intinya, perasaan perlu disampaikan dengan jujur agar benar-benar sampai.",
    ],
    gambar: "/ytta2.jpg",
  },
  {
    id: "horimiya",
    judul: "Horimiya",
    tanggal: "2026-08-30",
    cuplikan:
      "Dua murid dengan sisi tersembunyi masing-masing saling menemukan diri yang asli di luar sekolah.",
    isi: [
      "Hori Kyouko dikenal populer dan sempurna di sekolah, padahal di rumah ia sibuk mengurus adiknya. Miyamura Izumi tampak murung dan kutu buku, padahal ia punya tindik dan tato.",
      "Mereka tak sengaja bertemu di luar sekolah dan saling mengetahui rahasia masing-masing. Dari sana tumbuh pertemanan yang nyaman dan apa adanya.",
      "Ceritanya hangat dan ringan, menunjukkan bahwa orang yang pantas dekat dengan kita adalah yang menerima diri kita yang sebenarnya.",
    ],
    gambar: "/horimiya.jpg",
  },
]

export function getKisah(id: string) {
  return daftarKisah.find((k) => k.id === id)
}

export function formatTanggal(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}