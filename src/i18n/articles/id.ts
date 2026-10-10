import type { ArticleId, LocalizedArticle } from '../../content/types';

export const ID_ARTICLE_COPY = {
  "anime-dice-codes": {
    "title": "Kode Anime Dice dan hadiahnya",
    "description": "Periksa UPDATE7 dan UPDATE6, hadiah yang dicatat secara hati-hati, serta jalur tepat untuk menukarkan kode di Anime Dice.",
    "intro": [
      "Kode Anime Dice dapat memberi resource tanpa menggantikan alur roll dan upgrade normal. Halaman ini hanya memuat kode yang ada dalam referensi yang diberikan.",
      "Daftar ditinjau pada 5 Oktober 2026. Status dapat berubah, jadi masukkan kode persis seperti tertulis dan jadikan respons game sebagai keputusan akhir."
    ],
    "sections": [
      {
        "id": "current-codes",
        "title": "Kode saat ini",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Kode",
              "Hadiah terdokumentasi"
            ],
            "rows": [
              [
                "UPDATE7",
                "Paket hadiah gratis UPD 7"
              ],
              [
                "UPDATE6",
                "Lucky Spins, Trait Rerolls, Tickets, dan Gems"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "volatile",
            "title": "Status dapat berubah",
            "body": "Ditinjau pada 5 Oktober 2026; tidak ada tanggal kedaluwarsa yang belum terverifikasi."
          }
        ]
      },
      {
        "id": "redeem",
        "title": "Cara menukar",
        "blocks": [
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka Anime Dice lalu pilih Shop.",
              "Gulir ke bagian bawah panel.",
              "Masukkan kode persis lalu pilih Redeem.",
              "Baca respons dari game."
            ]
          }
        ]
      },
      {
        "id": "problems",
        "title": "Jika kode gagal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Periksa huruf besar, hapus spasi, dan pastikan kode lengkap. Kode juga mungkin sudah digunakan atau ditarik."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa hadiah UPDATE6?",
        "answer": "Referensi mencatat Lucky Spins, Trait Rerolls, Tickets, dan Gems."
      },
      {
        "question": "Kapan daftar ditinjau?",
        "answer": "Pada 5 Oktober 2026; respons game saat ini tetap menjadi acuan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "codes:update7",
      "codes:update6",
      "codes:redeem-path",
      "codes:reviewed-2026-10-05"
    ]
  },
  "anime-dice-guide": {
    "title": "Anime Dice: Panduan pemula",
    "description": "Anime Dice: Panduan pemula: panduan khusus untuk alur roll, equip, dan upgrade tim, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas alur roll, equip, dan upgrade tim. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Panduan pemula karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "guide-context",
        "title": "Panduan pemula — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Panduan pemula: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Roll menghasilkan karakter untuk dibandingkan."
          }
        ]
      },
      {
        "id": "guide-workflow",
        "title": "Panduan pemula — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Panduan pemula: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Panduan pemula.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Roll menghasilkan karakter untuk dibandingkan.",
              "Sebelum memutuskan, bandingkan juga: Equip Best membantu meninjau tim saat ini."
            ]
          }
        ]
      },
      {
        "id": "guide-evidence",
        "title": "Panduan pemula — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Panduan pemula: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Equip Best membantu meninjau tim saat ini.",
              "Money dan Luck adalah prioritas awal yang praktis."
            ]
          }
        ]
      },
      {
        "id": "guide-boundary",
        "title": "Panduan pemula — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Panduan pemula — Batas panduan",
            "body": "Waktu progres berbeda-beda dan tidak dijamin."
          }
        ]
      },
      {
        "id": "guide-decision-record",
        "title": "Panduan pemula — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Panduan pemula harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Panduan pemula: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Panduan pemula review item: preserve the current screen or source date.",
              "Panduan pemula decision item: compare the result with the next documented goal.",
              "Panduan pemula boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Panduan pemula yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Panduan pemula."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Panduan pemula?",
        "answer": "Panduan pemula harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Panduan pemula perlu ditinjau?",
        "answer": "Waktu progres berbeda-beda dan tidak dijamin."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-guide:confirmed-1",
      "anime-dice-guide:confirmed-2",
      "anime-dice-guide:confirmed-3",
      "anime-dice-guide:evidence-boundary"
    ]
  },
  "anime-dice-tips": {
    "title": "Anime Dice: Tips progres",
    "description": "Anime Dice: Tips progres: panduan khusus untuk rutinitas roll dan pembersihan yang aman, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas rutinitas roll dan pembersihan yang aman. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Tips progres karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "tips-context",
        "title": "Tips progres — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tips progres: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Lindungi unit berguna sebelum menjual."
          }
        ]
      },
      {
        "id": "tips-workflow",
        "title": "Tips progres — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tips progres: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Tips progres.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Lindungi unit berguna sebelum menjual.",
              "Sebelum memutuskan, bandingkan juga: Periksa grade, trait, dan mutation secara terpisah."
            ]
          }
        ]
      },
      {
        "id": "tips-evidence",
        "title": "Tips progres — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tips progres: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Periksa grade, trait, dan mutation secara terpisah.",
              "Roll Speed lebih berguna setelah Money dan Luck stabil."
            ]
          }
        ]
      },
      {
        "id": "tips-boundary",
        "title": "Tips progres — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tips progres — Batas panduan",
            "body": "Hasil langka dan kecepatan progres tetap tidak dapat dijanjikan."
          }
        ]
      },
      {
        "id": "tips-decision-record",
        "title": "Tips progres — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tips progres harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Tips progres: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Tips progres review item: preserve the current screen or source date.",
              "Tips progres decision item: compare the result with the next documented goal.",
              "Tips progres boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Tips progres yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Tips progres."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Tips progres?",
        "answer": "Tips progres harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Tips progres perlu ditinjau?",
        "answer": "Hasil langka dan kecepatan progres tetap tidak dapat dijanjikan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-tips:confirmed-1",
      "anime-dice-tips:confirmed-2",
      "anime-dice-tips:confirmed-3",
      "anime-dice-tips:evidence-boundary"
    ]
  },
  "anime-dice-auto-roll": {
    "title": "Anime Dice: Auto Roll",
    "description": "Anime Dice: Auto Roll: panduan khusus untuk kontrol Auto pada panel Roll, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas kontrol Auto pada panel Roll. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Auto Roll karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "auto-roll-context",
        "title": "Auto Roll — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Roll: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Auto mengulang roll tanpa klik setiap kali."
          }
        ]
      },
      {
        "id": "auto-roll-workflow",
        "title": "Auto Roll — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Roll: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Auto Roll.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Auto mengulang roll tanpa klik setiap kali.",
              "Sebelum memutuskan, bandingkan juga: Hide menyembunyikan animasi Roll berulang."
            ]
          }
        ]
      },
      {
        "id": "auto-roll-evidence",
        "title": "Auto Roll — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Roll: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Hide menyembunyikan animasi Roll berulang.",
              "Roll tetap berjalan saat animasi disembunyikan."
            ]
          }
        ]
      },
      {
        "id": "auto-roll-boundary",
        "title": "Auto Roll — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Auto Roll — Batas panduan",
            "body": "Hide tidak membuktikan opsi universal untuk adegan lain."
          }
        ]
      },
      {
        "id": "auto-roll-decision-record",
        "title": "Auto Roll — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Roll harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Auto Roll: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Auto Roll review item: preserve the current screen or source date.",
              "Auto Roll decision item: compare the result with the next documented goal.",
              "Auto Roll boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Auto Roll yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Auto Roll."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Auto Roll?",
        "answer": "Auto Roll harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Auto Roll perlu ditinjau?",
        "answer": "Hide tidak membuktikan opsi universal untuk adegan lain."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-auto-roll:confirmed-1",
      "anime-dice-auto-roll:confirmed-2",
      "anime-dice-auto-roll:confirmed-3",
      "anime-dice-auto-roll:evidence-boundary"
    ]
  },
  "anime-dice-auto-sell": {
    "title": "Anime Dice: Auto Sell",
    "description": "Anime Dice: Auto Sell: panduan khusus untuk pengaturan di stan Sell Units, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas pengaturan di stan Sell Units. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Auto Sell karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "auto-sell-context",
        "title": "Auto Sell — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Sell: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Stan menyediakan “Edit auto sell settings!”."
          }
        ]
      },
      {
        "id": "auto-sell-workflow",
        "title": "Auto Sell — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Sell: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Auto Sell.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Stan menyediakan “Edit auto sell settings!”.",
              "Sebelum memutuskan, bandingkan juga: Gunakan Equip Best sebelum menetapkan ambang."
            ]
          }
        ]
      },
      {
        "id": "auto-sell-evidence",
        "title": "Auto Sell — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Sell: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gunakan Equip Best sebelum menetapkan ambang.",
              "Grade, trait, dan mutation dapat memengaruhi kegunaan."
            ]
          }
        ]
      },
      {
        "id": "auto-sell-boundary",
        "title": "Auto Sell — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Auto Sell — Batas panduan",
            "body": "Simpan unit yang meragukan sampai selesai dibandingkan."
          }
        ]
      },
      {
        "id": "auto-sell-decision-record",
        "title": "Auto Sell — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Auto Sell harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Auto Sell: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Auto Sell review item: preserve the current screen or source date.",
              "Auto Sell decision item: compare the result with the next documented goal.",
              "Auto Sell boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Auto Sell yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Auto Sell."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Auto Sell?",
        "answer": "Auto Sell harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Auto Sell perlu ditinjau?",
        "answer": "Simpan unit yang meragukan sampai selesai dibandingkan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-auto-sell:confirmed-1",
      "anime-dice-auto-sell:confirmed-2",
      "anime-dice-auto-sell:confirmed-3",
      "anime-dice-auto-sell:evidence-boundary"
    ]
  },
  "anime-dice-how-to-level-up": {
    "title": "Anime Dice: Cara menaikkan level",
    "description": "Anime Dice: Cara menaikkan level: panduan khusus untuk memakai resource hanya pada unit yang dipertahankan, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memakai resource hanya pada unit yang dipertahankan. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Cara menaikkan level karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "how-to-level-up-context",
        "title": "Cara menaikkan level — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menaikkan level: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Level hanya satu bagian evaluasi."
          }
        ]
      },
      {
        "id": "how-to-level-up-workflow",
        "title": "Cara menaikkan level — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menaikkan level: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara menaikkan level.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Level hanya satu bagian evaluasi.",
              "Sebelum memutuskan, bandingkan juga: Roll yang lebih baik dapat mengganti unit awal."
            ]
          }
        ]
      },
      {
        "id": "how-to-level-up-evidence",
        "title": "Cara menaikkan level — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menaikkan level: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Roll yang lebih baik dapat mengganti unit awal.",
              "Grade, trait, dan mutation adalah sistem terpisah."
            ]
          }
        ]
      },
      {
        "id": "how-to-level-up-boundary",
        "title": "Cara menaikkan level — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cara menaikkan level — Batas panduan",
            "body": "Sumber tidak mengonfirmasi level maksimum universal."
          }
        ]
      },
      {
        "id": "how-to-level-up-decision-record",
        "title": "Cara menaikkan level — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menaikkan level harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Cara menaikkan level: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Cara menaikkan level review item: preserve the current screen or source date.",
              "Cara menaikkan level decision item: compare the result with the next documented goal.",
              "Cara menaikkan level boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Cara menaikkan level yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara menaikkan level."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Cara menaikkan level?",
        "answer": "Cara menaikkan level harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Cara menaikkan level perlu ditinjau?",
        "answer": "Sumber tidak mengonfirmasi level maksimum universal."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-how-to-level-up:confirmed-1",
      "anime-dice-how-to-level-up:confirmed-2",
      "anime-dice-how-to-level-up:confirmed-3",
      "anime-dice-how-to-level-up:evidence-boundary"
    ]
  },
  "anime-dice-how-to-skip-cutscenes": {
    "title": "Anime Dice: Cara menyembunyikan animasi",
    "description": "Anime Dice: Cara menyembunyikan animasi: panduan khusus untuk kontrol Hide untuk animasi Roll, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas kontrol Hide untuk animasi Roll. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Cara menyembunyikan animasi karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "how-to-skip-cutscenes-context",
        "title": "Cara menyembunyikan animasi — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menyembunyikan animasi: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Hide tersedia di antarmuka Roll."
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-workflow",
        "title": "Cara menyembunyikan animasi — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menyembunyikan animasi: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara menyembunyikan animasi.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Hide tersedia di antarmuka Roll.",
              "Sebelum memutuskan, bandingkan juga: Roll dapat lanjut tanpa animasi berulang."
            ]
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-evidence",
        "title": "Cara menyembunyikan animasi — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menyembunyikan animasi: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Roll dapat lanjut tanpa animasi berulang.",
              "Adegan lain mungkin memiliki kontrol berbeda."
            ]
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-boundary",
        "title": "Cara menyembunyikan animasi — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cara menyembunyikan animasi — Batas panduan",
            "body": "Tidak ada sumber yang mengonfirmasi tombol untuk melewati semua adegan."
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-decision-record",
        "title": "Cara menyembunyikan animasi — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara menyembunyikan animasi harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Cara menyembunyikan animasi: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Cara menyembunyikan animasi review item: preserve the current screen or source date.",
              "Cara menyembunyikan animasi decision item: compare the result with the next documented goal.",
              "Cara menyembunyikan animasi boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Cara menyembunyikan animasi yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara menyembunyikan animasi."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Cara menyembunyikan animasi?",
        "answer": "Cara menyembunyikan animasi harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Cara menyembunyikan animasi perlu ditinjau?",
        "answer": "Tidak ada sumber yang mengonfirmasi tombol untuk melewati semua adegan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-how-to-skip-cutscenes:confirmed-1",
      "anime-dice-how-to-skip-cutscenes:confirmed-2",
      "anime-dice-how-to-skip-cutscenes:confirmed-3",
      "anime-dice-how-to-skip-cutscenes:evidence-boundary"
    ]
  },
  "anime-dice-how-to-join-group": {
    "title": "Anime Dice: Cara bergabung ke grup",
    "description": "Anime Dice: Cara bergabung ke grup: panduan khusus untuk komunitas terverifikasi More & More Games, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas komunitas terverifikasi More & More Games. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini mengatur kontrol yang tepat, hasil yang terlihat, dan batas bukti yang diberikan. Cara bergabung ke grup karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "how-to-join-group-context",
        "title": "Cara bergabung ke grup — Titik awal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara bergabung ke grup: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Grup yang terkait adalah More & More Games."
          }
        ]
      },
      {
        "id": "how-to-join-group-workflow",
        "title": "Cara bergabung ke grup — Urutan tindakan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara bergabung ke grup: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara bergabung ke grup.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Grup yang terkait adalah More & More Games.",
              "Sebelum memutuskan, bandingkan juga: Referensi menyebut peti dapat memberi spins."
            ]
          }
        ]
      },
      {
        "id": "how-to-join-group-evidence",
        "title": "Cara bergabung ke grup — Pemeriksaan terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara bergabung ke grup: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Referensi menyebut peti dapat memberi spins.",
              "Gems atau rerolls juga mungkin tersedia."
            ]
          }
        ]
      },
      {
        "id": "how-to-join-group-boundary",
        "title": "Cara bergabung ke grup — Batas panduan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cara bergabung ke grup — Batas panduan",
            "body": "Periksa tujuan Roblox dan hindari grup tiruan."
          }
        ]
      },
      {
        "id": "how-to-join-group-decision-record",
        "title": "Cara bergabung ke grup — Pemeriksaan kontrol yang dapat diulang",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Cara bergabung ke grup harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Cara bergabung ke grup: Jika antarmuka berbeda, ikuti teks game saat ini; tombol yang hilang memerlukan peninjauan baru, bukan asumsi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Cara bergabung ke grup review item: preserve the current screen or source date.",
              "Cara bergabung ke grup decision item: compare the result with the next documented goal.",
              "Cara bergabung ke grup boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Di mana kontrol Cara bergabung ke grup yang terdokumentasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Cara bergabung ke grup."
      },
      {
        "question": "Hasil apa yang mengonfirmasi Cara bergabung ke grup?",
        "answer": "Cara bergabung ke grup harus diuji dengan panel terkait terbuka: catat opsi awal, lakukan tindakan terdokumentasi, lalu konfirmasi hasil yang terlihat."
      },
      {
        "question": "Kapan petunjuk Cara bergabung ke grup perlu ditinjau?",
        "answer": "Periksa tujuan Roblox dan hindari grup tiruan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-how-to-join-group:confirmed-1",
      "anime-dice-how-to-join-group:confirmed-2",
      "anime-dice-how-to-join-group:confirmed-3",
      "anime-dice-how-to-join-group:evidence-boundary"
    ]
  },
  "anime-dice-tier-list": {
    "title": "Anime Dice: Tier list unit",
    "description": "Anime Dice: Tier list unit: panduan khusus untuk menilai unit dalam tim saat ini, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menilai unit dalam tim saat ini. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Tier list unit karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "tier-list-context",
        "title": "Tier list unit — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tier list unit: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Peringkat bergantung pada versi game."
          }
        ]
      },
      {
        "id": "tier-list-workflow",
        "title": "Tier list unit — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tier list unit: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Tier list unit.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Peringkat bergantung pada versi game.",
              "Sebelum memutuskan, bandingkan juga: Grade, trait, mutation, dan level mengubah evaluasi."
            ]
          }
        ]
      },
      {
        "id": "tier-list-evidence",
        "title": "Tier list unit — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tier list unit: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grade, trait, mutation, dan level mengubah evaluasi.",
              "Equip Best adalah pemeriksaan awal, bukan peringkat tetap."
            ]
          }
        ]
      },
      {
        "id": "tier-list-verified-data",
        "title": "Tier List — Cara membaca halaman ini",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Materi yang diberikan tidak menetapkan peringkat unit S/A/B/C. Karena itu, halaman ini menerbitkan faktor evaluasi dan membiarkan urutan tempur universal sebagai hal yang belum dikonfirmasi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Galactic didokumentasikan sebagai rarity yang diperkenalkan di Update 7.",
              "Grade, trait, mutation, dan level harus dievaluasi secara terpisah."
            ]
          }
        ]
      },
      {
        "id": "tier-list-boundary",
        "title": "Tier list unit — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tier list unit — Nilai belum terkonfirmasi",
            "body": "Tidak ada peringkat universal yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "tier-list-decision-record",
        "title": "Tier list unit — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tier list unit harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Tier list unit: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Tier list unit review item: preserve the current screen or source date.",
              "Tier list unit decision item: compare the result with the next documented goal.",
              "Tier list unit boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Tier list unit?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Tier list unit."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Tier list unit?",
        "answer": "Tier list unit harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Tier list unit apa yang belum ditetapkan?",
        "answer": "Tidak ada peringkat universal yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-tier-list:confirmed-1",
      "anime-dice-tier-list:confirmed-2",
      "anime-dice-tier-list:confirmed-3",
      "anime-dice-tier-list:evidence-boundary"
    ]
  },
  "anime-dice-units": {
    "title": "Anime Dice: Unit",
    "description": "Anime Dice: Unit: panduan khusus untuk melakukan roll, menyimpan, equip, dan upgrade karakter, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas melakukan roll, menyimpan, equip, dan upgrade karakter. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Unit karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "units-context",
        "title": "Unit — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unit: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Karakter diperoleh melalui alur Roll."
          }
        ]
      },
      {
        "id": "units-workflow",
        "title": "Unit — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unit: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Unit.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Karakter diperoleh melalui alur Roll.",
              "Sebelum memutuskan, bandingkan juga: Unit keeper layak mendapat resource sebelum unit sementara."
            ]
          }
        ]
      },
      {
        "id": "units-evidence",
        "title": "Unit — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unit: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Unit keeper layak mendapat resource sebelum unit sementara.",
              "Deskripsi resmi mengonfirmasi pendapatan offline."
            ]
          }
        ]
      },
      {
        "id": "units-boundary",
        "title": "Unit — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Unit — Nilai belum terkonfirmasi",
            "body": "Ketersediaan dan balance dapat berubah."
          }
        ]
      },
      {
        "id": "units-decision-record",
        "title": "Unit — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Unit harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Unit: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Unit review item: preserve the current screen or source date.",
              "Unit decision item: compare the result with the next documented goal.",
              "Unit boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Unit?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Unit."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Unit?",
        "answer": "Unit harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Unit apa yang belum ditetapkan?",
        "answer": "Ketersediaan dan balance dapat berubah."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-units:confirmed-1",
      "anime-dice-units:confirmed-2",
      "anime-dice-units:confirmed-3",
      "anime-dice-units:evidence-boundary"
    ]
  },
  "anime-dice-traits": {
    "title": "Anime Dice: Trait",
    "description": "Anime Dice: Trait: panduan khusus untuk menilai trait tanpa mencampurnya dengan atribut lain, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menilai trait tanpa mencampurnya dengan atribut lain. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Trait karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "traits-context",
        "title": "Trait — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trait: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Trait adalah properti unit yang terpisah."
          }
        ]
      },
      {
        "id": "traits-workflow",
        "title": "Trait — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trait: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Trait.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Trait adalah properti unit yang terpisah.",
              "Sebelum memutuskan, bandingkan juga: UPDATE6 mencatat Trait Rerolls sebagai hadiah."
            ]
          }
        ]
      },
      {
        "id": "traits-evidence",
        "title": "Trait — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trait: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "UPDATE6 mencatat Trait Rerolls sebagai hadiah.",
              "Trait harus dibaca bersama unit pemiliknya."
            ]
          }
        ]
      },
      {
        "id": "traits-verified-data",
        "title": "Trait — Data yang diberikan dan terverifikasi",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Trait",
              "Income / Damage / Health",
              "Peluang yang ditampilkan"
            ],
            "rows": [
              [
                "Eternal",
                "27x",
                "Tidak disebutkan dalam modul yang diberikan"
              ],
              [
                "Transcendent",
                "15x",
                "0.006%"
              ],
              [
                "Monarch",
                "8x",
                "0.025%"
              ],
              [
                "Shogun",
                "5x",
                "0.12%"
              ],
              [
                "Samurai",
                "3x",
                "0.5%"
              ]
            ]
          }
        ]
      },
      {
        "id": "traits-boundary",
        "title": "Trait — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Trait — Nilai belum terkonfirmasi",
            "body": "Efek dan peringkat lengkap tiap versi belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "traits-decision-record",
        "title": "Trait — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trait harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Trait: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Trait review item: preserve the current screen or source date.",
              "Trait decision item: compare the result with the next documented goal.",
              "Trait boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Trait?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Trait."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Trait?",
        "answer": "Trait harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Trait apa yang belum ditetapkan?",
        "answer": "Efek dan peringkat lengkap tiap versi belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-traits:confirmed-1",
      "anime-dice-traits:confirmed-2",
      "anime-dice-traits:confirmed-3",
      "anime-dice-traits:evidence-boundary",
      "anime-dice-traits:supplied-eternal",
      "anime-dice-traits:supplied-transcendent",
      "anime-dice-traits:supplied-monarch",
      "anime-dice-traits:supplied-shogun",
      "anime-dice-traits:supplied-samurai"
    ]
  },
  "anime-dice-mutation": {
    "title": "Anime Dice: Mutation",
    "description": "Anime Dice: Mutation: panduan khusus untuk mengenali mutation sebagai properti terpisah, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas mengenali mutation sebagai properti terpisah. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Mutation karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "mutation-context",
        "title": "Mutation — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mutation: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Mutation termasuk dalam alur karakter yang terdokumentasi."
          }
        ]
      },
      {
        "id": "mutation-workflow",
        "title": "Mutation — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mutation: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Mutation.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Mutation termasuk dalam alur karakter yang terdokumentasi.",
              "Sebelum memutuskan, bandingkan juga: Mutation, grade, dan trait adalah label berbeda."
            ]
          }
        ]
      },
      {
        "id": "mutation-evidence",
        "title": "Mutation — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mutation: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Mutation, grade, dan trait adalah label berbeda.",
              "Tinjau unit bermutation sebelum menjual."
            ]
          }
        ]
      },
      {
        "id": "mutation-boundary",
        "title": "Mutation — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Mutation — Nilai belum terkonfirmasi",
            "body": "Peluang dan daftar mutation lengkap belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "mutation-decision-record",
        "title": "Mutation — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mutation harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Mutation: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Mutation review item: preserve the current screen or source date.",
              "Mutation decision item: compare the result with the next documented goal.",
              "Mutation boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Mutation?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Mutation."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Mutation?",
        "answer": "Mutation harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Mutation apa yang belum ditetapkan?",
        "answer": "Peluang dan daftar mutation lengkap belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-mutation:confirmed-1",
      "anime-dice-mutation:confirmed-2",
      "anime-dice-mutation:confirmed-3",
      "anime-dice-mutation:evidence-boundary"
    ]
  },
  "anime-dice-rarity": {
    "title": "Anime Dice: Rarity",
    "description": "Anime Dice: Rarity: panduan khusus untuk membandingkan rarity dengan properti lain, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membandingkan rarity dengan properti lain. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Rarity karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "rarity-context",
        "title": "Rarity — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rarity: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Rarity menjelaskan hasil roll."
          }
        ]
      },
      {
        "id": "rarity-workflow",
        "title": "Rarity — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rarity: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Rarity.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Rarity menjelaskan hasil roll.",
              "Sebelum memutuskan, bandingkan juga: Rarity tidak menggantikan grade, trait, mutation, atau level."
            ]
          }
        ]
      },
      {
        "id": "rarity-evidence",
        "title": "Rarity — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rarity: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rarity tidak menggantikan grade, trait, mutation, atau level.",
              "Luck adalah progres, bukan rarity unit."
            ]
          }
        ]
      },
      {
        "id": "rarity-boundary",
        "title": "Rarity — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rarity — Nilai belum terkonfirmasi",
            "body": "Peluang tepat setiap rarity belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "rarity-decision-record",
        "title": "Rarity — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rarity harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Rarity: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rarity review item: preserve the current screen or source date.",
              "Rarity decision item: compare the result with the next documented goal.",
              "Rarity boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Rarity?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Rarity."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Rarity?",
        "answer": "Rarity harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Rarity apa yang belum ditetapkan?",
        "answer": "Peluang tepat setiap rarity belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-rarity:confirmed-1",
      "anime-dice-rarity:confirmed-2",
      "anime-dice-rarity:confirmed-3",
      "anime-dice-rarity:evidence-boundary"
    ]
  },
  "anime-dice-grades": {
    "title": "Anime Dice: Grade",
    "description": "Anime Dice: Grade: panduan khusus untuk membaca grade secara terpisah, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membaca grade secara terpisah. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Grade karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "grades-context",
        "title": "Grade — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grade: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Grade berbeda dari trait dan mutation."
          }
        ]
      },
      {
        "id": "grades-workflow",
        "title": "Grade — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grade: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Grade.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Grade berbeda dari trait dan mutation.",
              "Sebelum memutuskan, bandingkan juga: Bandingkan grade dengan unit dasarnya."
            ]
          }
        ]
      },
      {
        "id": "grades-evidence",
        "title": "Grade — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grade: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Bandingkan grade dengan unit dasarnya.",
              "Simpan hasil yang meragukan sampai selesai ditinjau."
            ]
          }
        ]
      },
      {
        "id": "grades-boundary",
        "title": "Grade — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Grade — Nilai belum terkonfirmasi",
            "body": "Tabel dan modifier grade lengkap belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "grades-decision-record",
        "title": "Grade — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grade harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Grade: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grade review item: preserve the current screen or source date.",
              "Grade decision item: compare the result with the next documented goal.",
              "Grade boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Grade?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Grade."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Grade?",
        "answer": "Grade harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Grade apa yang belum ditetapkan?",
        "answer": "Tabel dan modifier grade lengkap belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-grades:confirmed-1",
      "anime-dice-grades:confirmed-2",
      "anime-dice-grades:confirmed-3",
      "anime-dice-grades:evidence-boundary"
    ]
  },
  "anime-dice-max-level": {
    "title": "Anime Dice: Level maksimum",
    "description": "Anime Dice: Level maksimum: panduan khusus untuk merencanakan investasi tanpa mengarang batas, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas merencanakan investasi tanpa mengarang batas. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan properti unit dari rarity, grade, trait, mutation, dan level agar keputusan tidak bergantung pada satu label. Level maksimum karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "max-level-context",
        "title": "Level maksimum — Peran dalam evaluasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Level maksimum: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Resource level lebih berguna pada unit keeper."
          }
        ]
      },
      {
        "id": "max-level-workflow",
        "title": "Level maksimum — Keputusan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Level maksimum: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Level maksimum.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Resource level lebih berguna pada unit keeper.",
              "Sebelum memutuskan, bandingkan juga: Level tetap terpisah dari grade, trait, dan mutation."
            ]
          }
        ]
      },
      {
        "id": "max-level-evidence",
        "title": "Level maksimum — Checklist properti",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Level maksimum: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Level tetap terpisah dari grade, trait, dan mutation.",
              "Roll baru dapat mengubah prioritas investasi."
            ]
          }
        ]
      },
      {
        "id": "max-level-boundary",
        "title": "Level maksimum — Nilai belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Level maksimum — Nilai belum terkonfirmasi",
            "body": "Sumber tidak menetapkan level maksimum universal."
          }
        ]
      },
      {
        "id": "max-level-decision-record",
        "title": "Level maksimum — Perbandingan unit lengkap",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Level maksimum harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
          },
          {
            "type": "paragraph",
            "text": "Level maksimum: Sebelum menjual atau berinvestasi, bandingkan dengan tim dan simpan unit yang meragukan sampai semua properti diperiksa."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Level maksimum review item: preserve the current screen or source date.",
              "Level maksimum decision item: compare the result with the next documented goal.",
              "Level maksimum boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Properti apa yang masuk perbandingan Level maksimum?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Level maksimum."
      },
      {
        "question": "Apa yang dilindungi sebelum menjual hasil Level maksimum?",
        "answer": "Level maksimum harus dicatat bersama identitas, rarity, grade, trait, mutation, dan level. Satu label tidak boleh menentukan kegunaan unit."
      },
      {
        "question": "Nilai Level maksimum apa yang belum ditetapkan?",
        "answer": "Sumber tidak menetapkan level maksimum universal."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-max-level:confirmed-1",
      "anime-dice-max-level:confirmed-2",
      "anime-dice-max-level:confirmed-3",
      "anime-dice-max-level:evidence-boundary"
    ]
  },
  "anime-dice-luck": {
    "title": "Anime Dice: Luck",
    "description": "Anime Dice: Luck: panduan khusus untuk memprioritaskan Luck pada progres awal, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memprioritaskan Luck pada progres awal. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Luck karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "luck-context",
        "title": "Luck — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Luck adalah prioritas awal yang praktis."
          }
        ]
      },
      {
        "id": "luck-workflow",
        "title": "Luck — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Luck.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Luck adalah prioritas awal yang praktis.",
              "Sebelum memutuskan, bandingkan juga: Money dan Luck dapat didahulukan sebelum Roll Speed."
            ]
          }
        ]
      },
      {
        "id": "luck-evidence",
        "title": "Luck — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Money dan Luck dapat didahulukan sebelum Roll Speed.",
              "Luck tidak menjamin unit tertentu."
            ]
          }
        ]
      },
      {
        "id": "luck-verified-data",
        "title": "Luck — Data yang diberikan dan terverifikasi",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Die",
              "Rarity",
              "Cost",
              "Luck"
            ],
            "rows": [
              [
                "Normal",
                "Common",
                "$1",
                "2x"
              ],
              [
                "Storm",
                "Epic",
                "$200 million",
                "400x"
              ],
              [
                "Light",
                "Legendary",
                "$12 billion",
                "1,500x"
              ],
              [
                "Prismatic",
                "Exotic",
                "$1 quintillion",
                "1,000,000x"
              ],
              [
                "Radiant",
                "Heavenly",
                "$100 octillion",
                "5,000,000,000x"
              ]
            ]
          }
        ]
      },
      {
        "id": "luck-boundary",
        "title": "Luck — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Luck — Batas belum terkonfirmasi",
            "body": "Peluang pada setiap nilai Luck belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "luck-decision-record",
        "title": "Luck — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Luck: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Luck review item: preserve the current screen or source date.",
              "Luck decision item: compare the result with the next documented goal.",
              "Luck boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Luck?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Luck."
      },
      {
        "question": "Bagaimana Luck terhubung dengan tujuan berikutnya?",
        "answer": "Luck memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Luck apa yang memerlukan panel saat ini?",
        "answer": "Peluang pada setiap nilai Luck belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-luck:confirmed-1",
      "anime-dice-luck:confirmed-2",
      "anime-dice-luck:confirmed-3",
      "anime-dice-luck:evidence-boundary",
      "anime-dice-luck:supplied-normal-die",
      "anime-dice-luck:supplied-storm-die",
      "anime-dice-luck:supplied-light-die",
      "anime-dice-luck:supplied-prismatic-die",
      "anime-dice-luck:supplied-radiant-die"
    ]
  },
  "anime-dice-max-luck": {
    "title": "Anime Dice: Luck maksimum",
    "description": "Anime Dice: Luck maksimum: panduan khusus untuk memeriksa batas di panel upgrade saat ini, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memeriksa batas di panel upgrade saat ini. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Luck maksimum karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "max-luck-context",
        "title": "Luck maksimum — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck maksimum: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Luck tercatat sebagai prioritas progres."
          }
        ]
      },
      {
        "id": "max-luck-workflow",
        "title": "Luck maksimum — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck maksimum: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Luck maksimum.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Luck tercatat sebagai prioritas progres.",
              "Sebelum memutuskan, bandingkan juga: Rebirth dapat memengaruhi progres jangka panjang."
            ]
          }
        ]
      },
      {
        "id": "max-luck-evidence",
        "title": "Luck maksimum — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck maksimum: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rebirth dapat memengaruhi progres jangka panjang.",
              "Panel saat ini menunjukkan langkah yang tersedia."
            ]
          }
        ]
      },
      {
        "id": "max-luck-boundary",
        "title": "Luck maksimum — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Luck maksimum — Batas belum terkonfirmasi",
            "body": "Tidak ada nilai maksimum permanen yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "max-luck-decision-record",
        "title": "Luck maksimum — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Luck maksimum memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Luck maksimum: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Luck maksimum review item: preserve the current screen or source date.",
              "Luck maksimum decision item: compare the result with the next documented goal.",
              "Luck maksimum boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Luck maksimum?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Luck maksimum."
      },
      {
        "question": "Bagaimana Luck maksimum terhubung dengan tujuan berikutnya?",
        "answer": "Luck maksimum memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Luck maksimum apa yang memerlukan panel saat ini?",
        "answer": "Tidak ada nilai maksimum permanen yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-max-luck:confirmed-1",
      "anime-dice-max-luck:confirmed-2",
      "anime-dice-max-luck:confirmed-3",
      "anime-dice-max-luck:evidence-boundary"
    ]
  },
  "anime-dice-gems": {
    "title": "Anime Dice: Gems",
    "description": "Anime Dice: Gems: panduan khusus untuk menyimpan dan memakai resource progres, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menyimpan dan memakai resource progres. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Gems karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "gems-context",
        "title": "Gems — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gems: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyertakan Gems dalam hadiah."
          }
        ]
      },
      {
        "id": "gems-workflow",
        "title": "Gems — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gems: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Gems.",
              "Gunakan poin ini sebagai pemeriksaan pertama: UPDATE6 menyertakan Gems dalam hadiah.",
              "Sebelum memutuskan, bandingkan juga: Peti grup dapat memberi Gems menurut panduan."
            ]
          }
        ]
      },
      {
        "id": "gems-evidence",
        "title": "Gems — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gems: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Peti grup dapat memberi Gems menurut panduan.",
              "Pengeluaran sebaiknya mendukung tujuan progres."
            ]
          }
        ]
      },
      {
        "id": "gems-boundary",
        "title": "Gems — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Gems — Batas belum terkonfirmasi",
            "body": "Harga, penawaran, dan pembelian terbaik dapat berubah."
          }
        ]
      },
      {
        "id": "gems-decision-record",
        "title": "Gems — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gems memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Gems: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gems review item: preserve the current screen or source date.",
              "Gems decision item: compare the result with the next documented goal.",
              "Gems boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Gems?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Gems."
      },
      {
        "question": "Bagaimana Gems terhubung dengan tujuan berikutnya?",
        "answer": "Gems memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Gems apa yang memerlukan panel saat ini?",
        "answer": "Harga, penawaran, dan pembelian terbaik dapat berubah."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-gems:confirmed-1",
      "anime-dice-gems:confirmed-2",
      "anime-dice-gems:confirmed-3",
      "anime-dice-gems:evidence-boundary"
    ]
  },
  "anime-dice-jackpot-roll": {
    "title": "Anime Dice: Jackpot Roll",
    "description": "Anime Dice: Jackpot Roll: panduan khusus untuk memeriksa fitur sebelum memakai resource, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memeriksa fitur sebelum memakai resource. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Jackpot Roll karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "jackpot-roll-context",
        "title": "Jackpot Roll — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Jackpot Roll: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Jackpot Roll diperlakukan di sini sebagai topik progres yang harus diperiksa di dalam game."
          }
        ]
      },
      {
        "id": "jackpot-roll-workflow",
        "title": "Jackpot Roll — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Jackpot Roll: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Jackpot Roll.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Jackpot Roll diperlakukan di sini sebagai topik progres yang harus diperiksa di dalam game.",
              "Sebelum memutuskan, bandingkan juga: Luck dinilai terpisah dari akses fitur."
            ]
          }
        ]
      },
      {
        "id": "jackpot-roll-evidence",
        "title": "Jackpot Roll — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Jackpot Roll: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Luck dinilai terpisah dari akses fitur.",
              "Antarmuka saat ini menentukan aktivasi dan biaya."
            ]
          }
        ]
      },
      {
        "id": "jackpot-roll-boundary",
        "title": "Jackpot Roll — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Jackpot Roll — Batas belum terkonfirmasi",
            "body": "Syarat, hadiah, dan peluang tepat belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "jackpot-roll-decision-record",
        "title": "Jackpot Roll — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Jackpot Roll memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Jackpot Roll: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Jackpot Roll review item: preserve the current screen or source date.",
              "Jackpot Roll decision item: compare the result with the next documented goal.",
              "Jackpot Roll boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Jackpot Roll?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Jackpot Roll."
      },
      {
        "question": "Bagaimana Jackpot Roll terhubung dengan tujuan berikutnya?",
        "answer": "Jackpot Roll memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Jackpot Roll apa yang memerlukan panel saat ini?",
        "answer": "Syarat, hadiah, dan peluang tepat belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-jackpot-roll:confirmed-1",
      "anime-dice-jackpot-roll:confirmed-2",
      "anime-dice-jackpot-roll:confirmed-3",
      "anime-dice-jackpot-roll:evidence-boundary"
    ]
  },
  "anime-dice-lucky-spin": {
    "title": "Anime Dice: Lucky Spins",
    "description": "Anime Dice: Lucky Spins: panduan khusus untuk memakai spins sebagai resource terbatas, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memakai spins sebagai resource terbatas. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Lucky Spins karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "lucky-spin-context",
        "title": "Lucky Spins — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lucky Spins: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyebut Lucky Spins sebagai hadiah."
          }
        ]
      },
      {
        "id": "lucky-spin-workflow",
        "title": "Lucky Spins — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lucky Spins: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Lucky Spins.",
              "Gunakan poin ini sebagai pemeriksaan pertama: UPDATE6 menyebut Lucky Spins sebagai hadiah.",
              "Sebelum memutuskan, bandingkan juga: Peti grup juga dapat memberi spins."
            ]
          }
        ]
      },
      {
        "id": "lucky-spin-evidence",
        "title": "Lucky Spins — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lucky Spins: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Peti grup juga dapat memberi spins.",
              "Tinjau hasil sebelum menjual unit."
            ]
          }
        ]
      },
      {
        "id": "lucky-spin-boundary",
        "title": "Lucky Spins — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Lucky Spins — Batas belum terkonfirmasi",
            "body": "Hasil, peluang, dan ketersediaan saat ini belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "lucky-spin-decision-record",
        "title": "Lucky Spins — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lucky Spins memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Lucky Spins: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Lucky Spins review item: preserve the current screen or source date.",
              "Lucky Spins decision item: compare the result with the next documented goal.",
              "Lucky Spins boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Lucky Spins?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Lucky Spins."
      },
      {
        "question": "Bagaimana Lucky Spins terhubung dengan tujuan berikutnya?",
        "answer": "Lucky Spins memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Lucky Spins apa yang memerlukan panel saat ini?",
        "answer": "Hasil, peluang, dan ketersediaan saat ini belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-lucky-spin:confirmed-1",
      "anime-dice-lucky-spin:confirmed-2",
      "anime-dice-lucky-spin:confirmed-3",
      "anime-dice-lucky-spin:evidence-boundary"
    ]
  },
  "anime-dice-rebirth": {
    "title": "Anime Dice: Rebirth",
    "description": "Anime Dice: Rebirth: panduan khusus untuk menyiapkan keputusan progres jangka panjang, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menyiapkan keputusan progres jangka panjang. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Rebirth karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "rebirth-context",
        "title": "Rebirth — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Rebirth termasuk progres jangka panjang."
          }
        ]
      },
      {
        "id": "rebirth-workflow",
        "title": "Rebirth — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Rebirth.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Rebirth termasuk progres jangka panjang.",
              "Sebelum memutuskan, bandingkan juga: Update 7 menambah enam jalur upgrade rebirth."
            ]
          }
        ]
      },
      {
        "id": "rebirth-evidence",
        "title": "Rebirth — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update 7 menambah enam jalur upgrade rebirth.",
              "Baca dampak reset di panel saat ini."
            ]
          }
        ]
      },
      {
        "id": "rebirth-documented-sequence",
        "title": "Rebirth — Urutan yang diberikan dan terdokumentasi",
        "blocks": [
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Tunggu sampai unit yang dipasang dapat membangun kembali pendapatan setelah reset.",
              "Habiskan uang tersisa sebelum rebirth karena saldo saat ini direset.",
              "Unit, grade, dan trait yang dikumpulkan tetap tersimpan.",
              "Dapatkan satu Rebirth Upgrade Point per rebirth di Update 7.",
              "Bagikan poin ke enam jalur Rebirth Upgrade, mulai Auto Roll lagi, lalu bangun kembali pendapatan."
            ]
          }
        ]
      },
      {
        "id": "rebirth-boundary",
        "title": "Rebirth — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rebirth — Batas belum terkonfirmasi",
            "body": "Biaya dan dampak setiap langkah belum dikonfirmasi di sini."
          }
        ]
      },
      {
        "id": "rebirth-decision-record",
        "title": "Rebirth — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Rebirth: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rebirth review item: preserve the current screen or source date.",
              "Rebirth decision item: compare the result with the next documented goal.",
              "Rebirth boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Rebirth?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Rebirth."
      },
      {
        "question": "Bagaimana Rebirth terhubung dengan tujuan berikutnya?",
        "answer": "Rebirth memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Rebirth apa yang memerlukan panel saat ini?",
        "answer": "Biaya dan dampak setiap langkah belum dikonfirmasi di sini."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-rebirth:confirmed-1",
      "anime-dice-rebirth:confirmed-2",
      "anime-dice-rebirth:confirmed-3",
      "anime-dice-rebirth:evidence-boundary",
      "anime-dice-rebirth:supplied-rebuild-ready",
      "anime-dice-rebirth:supplied-cash-resets",
      "anime-dice-rebirth:supplied-units-remain",
      "anime-dice-rebirth:supplied-upgrade-point",
      "anime-dice-rebirth:supplied-six-paths"
    ]
  },
  "anime-dice-max-rebirth": {
    "title": "Anime Dice: Rebirth maksimum",
    "description": "Anime Dice: Rebirth maksimum: panduan khusus untuk membedakan jalur upgrade dari batas akhir, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membedakan jalur upgrade dari batas akhir. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Rebirth maksimum karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "max-rebirth-context",
        "title": "Rebirth maksimum — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth maksimum: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Update 7 mencatat enam jalur upgrade."
          }
        ]
      },
      {
        "id": "max-rebirth-workflow",
        "title": "Rebirth maksimum — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth maksimum: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Rebirth maksimum.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Update 7 mencatat enam jalur upgrade.",
              "Sebelum memutuskan, bandingkan juga: Jumlah jalur bukan berarti jumlah rebirth maksimum."
            ]
          }
        ]
      },
      {
        "id": "max-rebirth-evidence",
        "title": "Rebirth maksimum — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth maksimum: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Jumlah jalur bukan berarti jumlah rebirth maksimum.",
              "Gunakan panel saat ini untuk memeriksa batas."
            ]
          }
        ]
      },
      {
        "id": "max-rebirth-boundary",
        "title": "Rebirth maksimum — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rebirth maksimum — Batas belum terkonfirmasi",
            "body": "Tidak ada maksimum rebirth permanen yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "max-rebirth-decision-record",
        "title": "Rebirth maksimum — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Rebirth maksimum memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Rebirth maksimum: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rebirth maksimum review item: preserve the current screen or source date.",
              "Rebirth maksimum decision item: compare the result with the next documented goal.",
              "Rebirth maksimum boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Rebirth maksimum?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Rebirth maksimum."
      },
      {
        "question": "Bagaimana Rebirth maksimum terhubung dengan tujuan berikutnya?",
        "answer": "Rebirth maksimum memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Rebirth maksimum apa yang memerlukan panel saat ini?",
        "answer": "Tidak ada maksimum rebirth permanen yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-max-rebirth:confirmed-1",
      "anime-dice-max-rebirth:confirmed-2",
      "anime-dice-max-rebirth:confirmed-3",
      "anime-dice-max-rebirth:evidence-boundary"
    ]
  },
  "anime-dice-quest-shop": {
    "title": "Anime Dice: Quest Shop",
    "description": "Anime Dice: Quest Shop: panduan khusus untuk membandingkan hadiah dan pembelian saat ini, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membandingkan hadiah dan pembelian saat ini. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini menghubungkan keputusan resource atau reset dengan panel saat ini dan tidak menganggap batas berubah sebagai permanen. Quest Shop karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "quest-shop-context",
        "title": "Quest Shop — Peran dalam progres",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Quest Shop: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Periksa toko pada versi game saat ini."
          }
        ]
      },
      {
        "id": "quest-shop-workflow",
        "title": "Quest Shop — Jalur keputusan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Quest Shop: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Quest Shop.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Periksa toko pada versi game saat ini.",
              "Sebelum memutuskan, bandingkan juga: Gems, Tickets, dan spins adalah resource berbeda."
            ]
          }
        ]
      },
      {
        "id": "quest-shop-evidence",
        "title": "Quest Shop — Titik terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Quest Shop: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gems, Tickets, dan spins adalah resource berbeda.",
              "Pilih pembelian yang mendukung rencana tim."
            ]
          }
        ]
      },
      {
        "id": "quest-shop-boundary",
        "title": "Quest Shop — Batas belum terkonfirmasi",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Quest Shop — Batas belum terkonfirmasi",
            "body": "Stok, harga, dan waktu refresh belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "quest-shop-decision-record",
        "title": "Quest Shop — Catatan keputusan resource",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Quest Shop memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
          },
          {
            "type": "paragraph",
            "text": "Quest Shop: Jika biaya, batas, hadiah, atau peluang tidak ada dalam bukti, gunakan panel saat ini dan pertahankan ketidakpastian."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Quest Shop review item: preserve the current screen or source date.",
              "Quest Shop decision item: compare the result with the next documented goal.",
              "Quest Shop boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum memakai Quest Shop?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Quest Shop."
      },
      {
        "question": "Bagaimana Quest Shop terhubung dengan tujuan berikutnya?",
        "answer": "Quest Shop memerlukan catatan saldo, teks panel, dan tujuan berikutnya. Keputusan dapat diulang tanpa mengklaim pilihan universal."
      },
      {
        "question": "Nilai Quest Shop apa yang memerlukan panel saat ini?",
        "answer": "Stok, harga, dan waktu refresh belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-quest-shop:confirmed-1",
      "anime-dice-quest-shop:confirmed-2",
      "anime-dice-quest-shop:confirmed-3",
      "anime-dice-quest-shop:evidence-boundary"
    ]
  },
  "anime-dice-tower": {
    "title": "Anime Dice: Tower",
    "description": "Anime Dice: Tower: panduan khusus untuk menyiapkan tim dan resource sebelum masuk, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menyiapkan tim dan resource sebelum masuk. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan persiapan, percobaan, dan bukti hadiah agar lantai tidak dianggap sebagai drop terjamin. Tower karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "tower-context",
        "title": "Tower — Persiapan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tower: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tinjau tim aktif sebelum mencoba."
          }
        ]
      },
      {
        "id": "tower-workflow",
        "title": "Tower — Checklist Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tower: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Tower.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Tinjau tim aktif sebelum mencoba.",
              "Sebelum memutuskan, bandingkan juga: Gear, Potions, dan Tickets adalah resource berbeda."
            ]
          }
        ]
      },
      {
        "id": "tower-evidence",
        "title": "Tower — Detail yang didukung",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tower: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gear, Potions, dan Tickets adalah resource berbeda.",
              "Sumber menempatkan Tower sebagai progres."
            ]
          }
        ]
      },
      {
        "id": "tower-documented-sequence",
        "title": "Tower — Urutan yang diberikan dan terdokumentasi",
        "blocks": [
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Masuk ke portal Towers di lobby tengah dan pilih tantangan seperti Dragon Tower.",
              "Gunakan Equip Best sebelum memulai pertarungan.",
              "Auto dan Hide menjaga lantai yang sudah dilewati tetap berjalan saat hadiah dikumpulkan.",
              "Dragon, Cursed, Pirate, Hidden Leaf, dan Slayer Towers memiliki Gear khusus Tower.",
              "Tingkatkan grade, trait, Damage, dan Health saat tim tidak dapat melewati lantai berikutnya."
            ]
          }
        ]
      },
      {
        "id": "tower-boundary",
        "title": "Tower — Detail yang berubah",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tower — Detail yang berubah",
            "body": "Lantai, musuh, dan rotasi hadiah dapat berubah."
          }
        ]
      },
      {
        "id": "tower-decision-record",
        "title": "Tower — Catatan persiapan percobaan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tower memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Tower: Satu percobaan atau video tidak membuktikan drop rate. Gunakan angka terdokumentasi dan anggap hadiah rotasi bergantung versi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Tower review item: preserve the current screen or source date.",
              "Tower decision item: compare the result with the next documented goal.",
              "Tower boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang masuk checklist Tower?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Tower."
      },
      {
        "question": "Bagaimana meninjau percobaan Tower yang gagal?",
        "answer": "Tower memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
      },
      {
        "question": "Hadiah Tower apa yang tidak terjamin?",
        "answer": "Lantai, musuh, dan rotasi hadiah dapat berubah."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-tower:confirmed-1",
      "anime-dice-tower:confirmed-2",
      "anime-dice-tower:confirmed-3",
      "anime-dice-tower:evidence-boundary",
      "anime-dice-tower:supplied-portal",
      "anime-dice-tower:supplied-equip-best",
      "anime-dice-tower:supplied-auto-hide",
      "anime-dice-tower:supplied-tower-gear",
      "anime-dice-tower:supplied-stuck-upgrades"
    ]
  },
  "anime-dice-gear": {
    "title": "Anime Dice: Gear",
    "description": "Anime Dice: Gear: panduan khusus untuk membandingkan gear berdasarkan sumber dan fungsi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membandingkan gear berdasarkan sumber dan fungsi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan persiapan, percobaan, dan bukti hadiah agar lantai tidak dianggap sebagai drop terjamin. Gear karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "gear-context",
        "title": "Gear — Persiapan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gear: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Gear terkait persiapan Tower dalam sumber."
          }
        ]
      },
      {
        "id": "gear-workflow",
        "title": "Gear — Checklist Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gear: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Gear.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Gear terkait persiapan Tower dalam sumber.",
              "Sebelum memutuskan, bandingkan juga: Bandingkan item dengan unit dan tujuan."
            ]
          }
        ]
      },
      {
        "id": "gear-evidence",
        "title": "Gear — Detail yang didukung",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gear: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Bandingkan item dengan unit dan tujuan.",
              "Catat cara memperoleh berdasarkan sumber yang ditinjau."
            ]
          }
        ]
      },
      {
        "id": "gear-verified-data",
        "title": "Gear — Data yang diberikan dan terverifikasi",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Gear",
              "Documented effect and source"
            ],
            "rows": [
              [
                "Angel's Halo",
                "+30% Luck, +5 Walk Speed; 0.02% from Dragon Tower lantai 90+"
              ],
              [
                "Sakuna's Sash",
                "2x Damage, +30% Luck, +30% Gems; 0.02% from Cursed Tower lantai 90+"
              ],
              [
                "Enol's Drums",
                "+40% Luck, 1.5x Cash; 0.02% from Pirate Tower lantai 90+"
              ],
              [
                "Obita's Mask",
                "+40% Luck, +30% Gems; 0.02% from Hidden Leaf Tower lantai 90+"
              ],
              [
                "Mazun's Coat",
                "+50% Luck, 2x Cash; 0.02% from Slayer Tower lantai 90+"
              ]
            ]
          }
        ]
      },
      {
        "id": "gear-boundary",
        "title": "Gear — Detail yang berubah",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Gear — Detail yang berubah",
            "body": "Daftar dan modifier live belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "gear-decision-record",
        "title": "Gear — Catatan persiapan percobaan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gear memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Gear: Satu percobaan atau video tidak membuktikan drop rate. Gunakan angka terdokumentasi dan anggap hadiah rotasi bergantung versi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gear review item: preserve the current screen or source date.",
              "Gear decision item: compare the result with the next documented goal.",
              "Gear boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang masuk checklist Gear?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Gear."
      },
      {
        "question": "Bagaimana meninjau percobaan Gear yang gagal?",
        "answer": "Gear memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
      },
      {
        "question": "Hadiah Gear apa yang tidak terjamin?",
        "answer": "Daftar dan modifier live belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-gear:confirmed-1",
      "anime-dice-gear:confirmed-2",
      "anime-dice-gear:confirmed-3",
      "anime-dice-gear:evidence-boundary",
      "anime-dice-gear:supplied-angels-halo",
      "anime-dice-gear:supplied-sakunas-sash",
      "anime-dice-gear:supplied-enols-drums",
      "anime-dice-gear:supplied-obitas-mask",
      "anime-dice-gear:supplied-mazuns-coat"
    ]
  },
  "anime-dice-potion": {
    "title": "Anime Dice: Potion",
    "description": "Anime Dice: Potion: panduan khusus untuk memutuskan kapan memakai resource sementara, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memutuskan kapan memakai resource sementara. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan persiapan, percobaan, dan bukti hadiah agar lantai tidak dianggap sebagai drop terjamin. Potion karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "potion-context",
        "title": "Potion — Persiapan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Potion: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Potion diperlakukan sebagai persiapan Tower."
          }
        ]
      },
      {
        "id": "potion-workflow",
        "title": "Potion — Checklist Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Potion: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Potion.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Potion diperlakukan sebagai persiapan Tower.",
              "Sebelum memutuskan, bandingkan juga: Baca teks item saat ini sebelum memakai."
            ]
          }
        ]
      },
      {
        "id": "potion-evidence",
        "title": "Potion — Detail yang didukung",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Potion: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Baca teks item saat ini sebelum memakai.",
              "Simpan item terbatas untuk tujuan tertentu."
            ]
          }
        ]
      },
      {
        "id": "potion-boundary",
        "title": "Potion — Detail yang berubah",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Potion — Detail yang berubah",
            "body": "Stok, durasi, dan efek tepat dapat berubah."
          }
        ]
      },
      {
        "id": "potion-decision-record",
        "title": "Potion — Catatan persiapan percobaan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Potion memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Potion: Satu percobaan atau video tidak membuktikan drop rate. Gunakan angka terdokumentasi dan anggap hadiah rotasi bergantung versi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Potion review item: preserve the current screen or source date.",
              "Potion decision item: compare the result with the next documented goal.",
              "Potion boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang masuk checklist Potion?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Potion."
      },
      {
        "question": "Bagaimana meninjau percobaan Potion yang gagal?",
        "answer": "Potion memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
      },
      {
        "question": "Hadiah Potion apa yang tidak terjamin?",
        "answer": "Stok, durasi, dan efek tepat dapat berubah."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-potion:confirmed-1",
      "anime-dice-potion:confirmed-2",
      "anime-dice-potion:confirmed-3",
      "anime-dice-potion:evidence-boundary"
    ]
  },
  "anime-dice-tickets": {
    "title": "Anime Dice: Tickets",
    "description": "Anime Dice: Tickets: panduan khusus untuk mencatat Tickets sebelum digunakan, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas mencatat Tickets sebelum digunakan. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Referensi ini memisahkan persiapan, percobaan, dan bukti hadiah agar lantai tidak dianggap sebagai drop terjamin. Tickets karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "tickets-context",
        "title": "Tickets — Persiapan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tickets: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyertakan Tickets dalam hadiah."
          }
        ]
      },
      {
        "id": "tickets-workflow",
        "title": "Tickets — Checklist Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tickets: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Tickets.",
              "Gunakan poin ini sebagai pemeriksaan pertama: UPDATE6 menyertakan Tickets dalam hadiah.",
              "Sebelum memutuskan, bandingkan juga: Periksa fungsi pada antarmuka saat ini."
            ]
          }
        ]
      },
      {
        "id": "tickets-evidence",
        "title": "Tickets — Detail yang didukung",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tickets: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Periksa fungsi pada antarmuka saat ini.",
              "Tidak ada sumber yang mendukung suplai tanpa batas."
            ]
          }
        ]
      },
      {
        "id": "tickets-boundary",
        "title": "Tickets — Detail yang berubah",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tickets — Detail yang berubah",
            "body": "Biaya, penggunaan, dan ketersediaan belum terkonfirmasi."
          }
        ]
      },
      {
        "id": "tickets-decision-record",
        "title": "Tickets — Catatan persiapan percobaan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Tickets memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
          },
          {
            "type": "paragraph",
            "text": "Tickets: Satu percobaan atau video tidak membuktikan drop rate. Gunakan angka terdokumentasi dan anggap hadiah rotasi bergantung versi."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Tickets review item: preserve the current screen or source date.",
              "Tickets decision item: compare the result with the next documented goal.",
              "Tickets boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang masuk checklist Tickets?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Tickets."
      },
      {
        "question": "Bagaimana meninjau percobaan Tickets yang gagal?",
        "answer": "Tickets memerlukan catatan Tower, tim aktif, serta item atau ticket. Setelah mencoba, catat lantai terakhir dan hadiah yang terlihat."
      },
      {
        "question": "Hadiah Tickets apa yang tidak terjamin?",
        "answer": "Biaya, penggunaan, dan ketersediaan belum terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-tickets:confirmed-1",
      "anime-dice-tickets:confirmed-2",
      "anime-dice-tickets:confirmed-3",
      "anime-dice-tickets:evidence-boundary"
    ]
  },
  "anime-dice-trading": {
    "title": "Anime Dice: Sistem trading",
    "description": "Anime Dice: Sistem trading: panduan khusus untuk memeriksa kedua sisi pertukaran, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memeriksa kedua sisi pertukaran. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Lembar ini mencatat kedua sisi, tanggal, dan properti; penawaran yang terlihat bukan harga tetap. Sistem trading karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "trading-context",
        "title": "Sistem trading — Catat penawaran",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sistem trading: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Konfirmasi setiap unit atau item yang ditawarkan."
          }
        ]
      },
      {
        "id": "trading-workflow",
        "title": "Sistem trading — Bandingkan kedua sisi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sistem trading: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Sistem trading.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Konfirmasi setiap unit atau item yang ditawarkan.",
              "Sebelum memutuskan, bandingkan juga: Bandingkan grade, trait, mutation, dan level secara terpisah."
            ]
          }
        ]
      },
      {
        "id": "trading-evidence",
        "title": "Sistem trading — Bukti yang disimpan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sistem trading: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Bandingkan grade, trait, mutation, dan level secara terpisah.",
              "Gunakan tujuan terverifikasi untuk konteks komunitas."
            ]
          }
        ]
      },
      {
        "id": "trading-boundary",
        "title": "Sistem trading — Tanpa harga tetap",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Sistem trading — Tanpa harga tetap",
            "body": "Ketersediaan trading dan permintaan tidak permanen."
          }
        ]
      },
      {
        "id": "trading-decision-record",
        "title": "Sistem trading — Catatan perbandingan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sistem trading dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
          },
          {
            "type": "paragraph",
            "text": "Sistem trading: Penawaran terlihat bukan pertukaran selesai. Tolak tekanan, periksa layar konfirmasi, dan jangan ubah perkiraan menjadi harga terjamin."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Sistem trading review item: preserve the current screen or source date.",
              "Sistem trading decision item: compare the result with the next documented goal.",
              "Sistem trading boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum keputusan Sistem trading?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Sistem trading."
      },
      {
        "question": "Mengapa satu penawaran Sistem trading tidak cukup?",
        "answer": "Sistem trading dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
      },
      {
        "question": "Harga Sistem trading apa yang ditolak halaman ini?",
        "answer": "Ketersediaan trading dan permintaan tidak permanen."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-trading:confirmed-1",
      "anime-dice-trading:confirmed-2",
      "anime-dice-trading:confirmed-3",
      "anime-dice-trading:evidence-boundary"
    ]
  },
  "anime-dice-trade-value": {
    "title": "Anime Dice: Trade value",
    "description": "Anime Dice: Trade value: panduan khusus untuk membandingkan penawaran tanpa menyalin satu harga, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas membandingkan penawaran tanpa menyalin satu harga. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Lembar ini mencatat kedua sisi, tanggal, dan properti; penawaran yang terlihat bukan harga tetap. Trade value karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "trade-value-context",
        "title": "Trade value — Catat penawaran",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trade value: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Catat identitas dan rarity."
          }
        ]
      },
      {
        "id": "trade-value-workflow",
        "title": "Trade value — Bandingkan kedua sisi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trade value: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Trade value.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Catat identitas dan rarity.",
              "Sebelum memutuskan, bandingkan juga: Grade, trait, mutation, dan level mengubah perbandingan."
            ]
          }
        ]
      },
      {
        "id": "trade-value-evidence",
        "title": "Trade value — Bukti yang disimpan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trade value: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grade, trait, mutation, dan level mengubah perbandingan.",
              "Setiap perkiraan membutuhkan sumber dan tanggal."
            ]
          }
        ]
      },
      {
        "id": "trade-value-boundary",
        "title": "Trade value — Tanpa harga tetap",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Trade value — Tanpa harga tetap",
            "body": "Tidak ada data harga live terverifikasi."
          }
        ]
      },
      {
        "id": "trade-value-decision-record",
        "title": "Trade value — Catatan perbandingan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trade value dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
          },
          {
            "type": "paragraph",
            "text": "Trade value: Penawaran terlihat bukan pertukaran selesai. Tolak tekanan, periksa layar konfirmasi, dan jangan ubah perkiraan menjadi harga terjamin."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Trade value review item: preserve the current screen or source date.",
              "Trade value decision item: compare the result with the next documented goal.",
              "Trade value boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum keputusan Trade value?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Trade value."
      },
      {
        "question": "Mengapa satu penawaran Trade value tidak cukup?",
        "answer": "Trade value dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
      },
      {
        "question": "Harga Trade value apa yang ditolak halaman ini?",
        "answer": "Tidak ada data harga live terverifikasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-trade-value:confirmed-1",
      "anime-dice-trade-value:confirmed-2",
      "anime-dice-trade-value:confirmed-3",
      "anime-dice-trade-value:evidence-boundary"
    ]
  },
  "anime-dice-value-calculator": {
    "title": "Anime Dice: Lembar evaluasi value",
    "description": "Anime Dice: Lembar evaluasi value: panduan khusus untuk menyusun kedua sisi penawaran secara manual, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menyusun kedua sisi penawaran secara manual. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Lembar ini mencatat kedua sisi, tanggal, dan properti; penawaran yang terlihat bukan harga tetap. Lembar evaluasi value karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "value-calculator-context",
        "title": "Lembar evaluasi value — Catat penawaran",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lembar evaluasi value: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Daftar semua unit pada kedua sisi."
          }
        ]
      },
      {
        "id": "value-calculator-workflow",
        "title": "Lembar evaluasi value — Bandingkan kedua sisi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lembar evaluasi value: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Lembar evaluasi value.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Daftar semua unit pada kedua sisi.",
              "Sebelum memutuskan, bandingkan juga: Bandingkan rarity, grade, trait, mutation, dan level."
            ]
          }
        ]
      },
      {
        "id": "value-calculator-evidence",
        "title": "Lembar evaluasi value — Bukti yang disimpan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lembar evaluasi value: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Bandingkan rarity, grade, trait, mutation, dan level.",
              "Catat sumber dan tanggal perkiraan komunitas.",
              "Tolak tekanan untuk menyelesaikan pertukaran sebelum verifikasi."
            ]
          }
        ]
      },
      {
        "id": "value-calculator-boundary",
        "title": "Lembar evaluasi value — Tanpa harga tetap",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Lembar evaluasi value — Tanpa harga tetap",
            "body": "Halaman ini tidak mengklaim formula pasar numerik."
          }
        ]
      },
      {
        "id": "value-calculator-decision-record",
        "title": "Lembar evaluasi value — Catatan perbandingan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Lembar evaluasi value dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
          },
          {
            "type": "paragraph",
            "text": "Lembar evaluasi value: Penawaran terlihat bukan pertukaran selesai. Tolak tekanan, periksa layar konfirmasi, dan jangan ubah perkiraan menjadi harga terjamin."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Lembar evaluasi value review item: preserve the current screen or source date.",
              "Lembar evaluasi value decision item: compare the result with the next documented goal.",
              "Lembar evaluasi value boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum keputusan Lembar evaluasi value?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Lembar evaluasi value."
      },
      {
        "question": "Mengapa satu penawaran Lembar evaluasi value tidak cukup?",
        "answer": "Lembar evaluasi value dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
      },
      {
        "question": "Harga Lembar evaluasi value apa yang ditolak halaman ini?",
        "answer": "Halaman ini tidak mengklaim formula pasar numerik."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-value-calculator:confirmed-1",
      "anime-dice-value-calculator:confirmed-2",
      "anime-dice-value-calculator:confirmed-3",
      "anime-dice-value-calculator:confirmed-4",
      "anime-dice-value-calculator:evidence-boundary"
    ]
  },
  "anime-dice-market": {
    "title": "Anime Dice: Market",
    "description": "Anime Dice: Market: panduan khusus untuk memantau permintaan komunitas yang berubah, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memantau permintaan komunitas yang berubah. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Lembar ini mencatat kedua sisi, tanggal, dan properti; penawaran yang terlihat bukan harga tetap. Market karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "market-context",
        "title": "Market — Catat penawaran",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Penawaran terlihat bukan transaksi selesai."
          }
        ]
      },
      {
        "id": "market-workflow",
        "title": "Market — Bandingkan kedua sisi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Market.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Penawaran terlihat bukan transaksi selesai.",
              "Sebelum memutuskan, bandingkan juga: Tanggal penting karena permintaan berubah."
            ]
          }
        ]
      },
      {
        "id": "market-evidence",
        "title": "Market — Bukti yang disimpan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Tanggal penting karena permintaan berubah.",
              "Bandingkan beberapa pengamatan yang dapat diverifikasi."
            ]
          }
        ]
      },
      {
        "id": "market-boundary",
        "title": "Market — Tanpa harga tetap",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Market — Tanpa harga tetap",
            "body": "Tidak ada feed live atau daftar harga resmi tetap."
          }
        ]
      },
      {
        "id": "market-decision-record",
        "title": "Market — Catatan perbandingan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Market dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
          },
          {
            "type": "paragraph",
            "text": "Market: Penawaran terlihat bukan pertukaran selesai. Tolak tekanan, periksa layar konfirmasi, dan jangan ubah perkiraan menjadi harga terjamin."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Market review item: preserve the current screen or source date.",
              "Market decision item: compare the result with the next documented goal.",
              "Market boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Apa yang dicatat sebelum keputusan Market?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Market."
      },
      {
        "question": "Mengapa satu penawaran Market tidak cukup?",
        "answer": "Market dimulai dengan daftar kedua sisi. Tambahkan rarity, grade, trait, mutation, level, sumber, dan tanggal sebelum membandingkan."
      },
      {
        "question": "Harga Market apa yang ditolak halaman ini?",
        "answer": "Tidak ada feed live atau daftar harga resmi tetap."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-market:confirmed-1",
      "anime-dice-market:confirmed-2",
      "anime-dice-market:confirmed-3",
      "anime-dice-market:evidence-boundary"
    ]
  },
  "anime-dice-new-update": {
    "title": "Anime Dice: Update terbaru",
    "description": "Anime Dice: Update terbaru: panduan khusus untuk mengidentifikasi perubahan terbaru yang terkonfirmasi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas mengidentifikasi perubahan terbaru yang terkonfirmasi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini memisahkan pernyataan resmi bertanggal dari prediksi komunitas dan mencatat informasi saat ditinjau. Update terbaru karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "new-update-context",
        "title": "Update terbaru — Verifikasi klaim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update terbaru: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Riset yang diberikan mengidentifikasi Update 7."
          }
        ]
      },
      {
        "id": "new-update-workflow",
        "title": "Update terbaru — Urutan sumber",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update terbaru: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Update terbaru.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Riset yang diberikan mengidentifikasi Update 7.",
              "Sebelum memutuskan, bandingkan juga: Update 7 menambah rarity Galactic."
            ]
          }
        ]
      },
      {
        "id": "new-update-evidence",
        "title": "Update terbaru — Perubahan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update terbaru: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update 7 menambah rarity Galactic.",
              "Update ini juga menambah enam jalur rebirth."
            ]
          }
        ]
      },
      {
        "id": "new-update-boundary",
        "title": "Update terbaru — Detail belum diketahui",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Update terbaru — Detail belum diketahui",
            "body": "Versi yang lebih baru belum dikonfirmasi."
          }
        ]
      },
      {
        "id": "new-update-decision-record",
        "title": "Update terbaru — Catatan verifikasi bertanggal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update terbaru memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
          },
          {
            "type": "paragraph",
            "text": "Update terbaru: Jangan gabungkan rumor, repost, atau judul video ke catatan terkonfirmasi. Tanpa tanggal atau fitur resmi, jawabannya tetap tidak diketahui."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update terbaru review item: preserve the current screen or source date.",
              "Update terbaru decision item: compare the result with the next documented goal.",
              "Update terbaru boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sumber bertanggal apa yang mengonfirmasi Update terbaru?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Update terbaru."
      },
      {
        "question": "Bagaimana pengumuman Update terbaru dipisahkan dari rumor?",
        "answer": "Update terbaru memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
      },
      {
        "question": "Apa yang belum diketahui tentang Update terbaru?",
        "answer": "Versi yang lebih baru belum dikonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-new-update:confirmed-1",
      "anime-dice-new-update:confirmed-2",
      "anime-dice-new-update:confirmed-3",
      "anime-dice-new-update:evidence-boundary"
    ]
  },
  "anime-dice-next-update": {
    "title": "Anime Dice: Update berikutnya",
    "description": "Anime Dice: Update berikutnya: panduan khusus untuk memisahkan pengumuman dari spekulasi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memisahkan pengumuman dari spekulasi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini memisahkan pernyataan resmi bertanggal dari prediksi komunitas dan mencatat informasi saat ditinjau. Update berikutnya karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "next-update-context",
        "title": "Update berikutnya — Verifikasi klaim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update berikutnya: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Halaman resmi dan Discord terverifikasi adalah tujuan pengumuman."
          }
        ]
      },
      {
        "id": "next-update-workflow",
        "title": "Update berikutnya — Urutan sumber",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update berikutnya: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Update berikutnya.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Halaman resmi dan Discord terverifikasi adalah tujuan pengumuman.",
              "Sebelum memutuskan, bandingkan juga: Rumor bukan pengumuman developer."
            ]
          }
        ]
      },
      {
        "id": "next-update-evidence",
        "title": "Update berikutnya — Perubahan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update berikutnya: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rumor bukan pengumuman developer.",
              "Setiap pemeriksaan harus mencatat tanggal."
            ]
          }
        ]
      },
      {
        "id": "next-update-boundary",
        "title": "Update berikutnya — Detail belum diketahui",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Update berikutnya — Detail belum diketahui",
            "body": "Tidak ada tanggal atau fitur update berikutnya yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "next-update-decision-record",
        "title": "Update berikutnya — Catatan verifikasi bertanggal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update berikutnya memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
          },
          {
            "type": "paragraph",
            "text": "Update berikutnya: Jangan gabungkan rumor, repost, atau judul video ke catatan terkonfirmasi. Tanpa tanggal atau fitur resmi, jawabannya tetap tidak diketahui."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update berikutnya review item: preserve the current screen or source date.",
              "Update berikutnya decision item: compare the result with the next documented goal.",
              "Update berikutnya boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sumber bertanggal apa yang mengonfirmasi Update berikutnya?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Update berikutnya."
      },
      {
        "question": "Bagaimana pengumuman Update berikutnya dipisahkan dari rumor?",
        "answer": "Update berikutnya memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
      },
      {
        "question": "Apa yang belum diketahui tentang Update berikutnya?",
        "answer": "Tidak ada tanggal atau fitur update berikutnya yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-next-update:confirmed-1",
      "anime-dice-next-update:confirmed-2",
      "anime-dice-next-update:confirmed-3",
      "anime-dice-next-update:evidence-boundary"
    ]
  },
  "anime-dice-update-7": {
    "title": "Anime Dice: Update 7",
    "description": "Anime Dice: Update 7: panduan khusus untuk merangkum hanya perubahan terdokumentasi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas merangkum hanya perubahan terdokumentasi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini memisahkan pernyataan resmi bertanggal dari prediksi komunitas dan mencatat informasi saat ditinjau. Update 7 karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "update-7-context",
        "title": "Update 7 — Verifikasi klaim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update 7: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Update 7 menambah rarity Galactic."
          }
        ]
      },
      {
        "id": "update-7-workflow",
        "title": "Update 7 — Urutan sumber",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update 7: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Update 7.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Update 7 menambah rarity Galactic.",
              "Sebelum memutuskan, bandingkan juga: Update ini menambah enam jalur upgrade rebirth."
            ]
          }
        ]
      },
      {
        "id": "update-7-evidence",
        "title": "Update 7 — Perubahan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update 7: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update ini menambah enam jalur upgrade rebirth.",
              "UPDATE7 adalah kode hadiah terdokumentasi."
            ]
          }
        ]
      },
      {
        "id": "update-7-documented-sequence",
        "title": "Update 7 — Urutan yang diberikan dan terdokumentasi",
        "blocks": [
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Galactic rarity",
              "7 unit baru",
              "6 jalur upgrade rebirth",
              "lantai dasar ketiga",
              "Tower baru",
              "trading gamepass"
            ]
          }
        ]
      },
      {
        "id": "update-7-boundary",
        "title": "Update 7 — Detail belum diketahui",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Update 7 — Detail belum diketahui",
            "body": "Nilai balance di luar sumber tidak dinyatakan."
          }
        ]
      },
      {
        "id": "update-7-decision-record",
        "title": "Update 7 — Catatan verifikasi bertanggal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Update 7 memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
          },
          {
            "type": "paragraph",
            "text": "Update 7: Jangan gabungkan rumor, repost, atau judul video ke catatan terkonfirmasi. Tanpa tanggal atau fitur resmi, jawabannya tetap tidak diketahui."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update 7 review item: preserve the current screen or source date.",
              "Update 7 decision item: compare the result with the next documented goal.",
              "Update 7 boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sumber bertanggal apa yang mengonfirmasi Update 7?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Update 7."
      },
      {
        "question": "Bagaimana pengumuman Update 7 dipisahkan dari rumor?",
        "answer": "Update 7 memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
      },
      {
        "question": "Apa yang belum diketahui tentang Update 7?",
        "answer": "Nilai balance di luar sumber tidak dinyatakan."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-update-7:confirmed-1",
      "anime-dice-update-7:confirmed-2",
      "anime-dice-update-7:confirmed-3",
      "anime-dice-update-7:evidence-boundary",
      "anime-dice-update-7:supplied-galactic",
      "anime-dice-update-7:supplied-seven-units",
      "anime-dice-update-7:supplied-six-rebirth-paths",
      "anime-dice-update-7:supplied-third-base-floor",
      "anime-dice-update-7:supplied-new-tower",
      "anime-dice-update-7:supplied-gamepass-trading"
    ]
  },
  "anime-dice-event": {
    "title": "Anime Dice: Event",
    "description": "Anime Dice: Event: panduan khusus untuk memastikan apakah event sedang berlangsung, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memastikan apakah event sedang berlangsung. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini memisahkan pernyataan resmi bertanggal dari prediksi komunitas dan mencatat informasi saat ditinjau. Event karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "event-context",
        "title": "Event — Verifikasi klaim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Event: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Periksa halaman resmi dan Discord terverifikasi."
          }
        ]
      },
      {
        "id": "event-workflow",
        "title": "Event — Urutan sumber",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Event: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Event.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Periksa halaman resmi dan Discord terverifikasi.",
              "Sebelum memutuskan, bandingkan juga: Waktu mulai dan selesai harus ada di game atau pengumuman asli."
            ]
          }
        ]
      },
      {
        "id": "event-evidence",
        "title": "Event — Perubahan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Event: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Waktu mulai dan selesai harus ada di game atau pengumuman asli.",
              "Posting komunitas memerlukan dukungan sumber resmi."
            ]
          }
        ]
      },
      {
        "id": "event-boundary",
        "title": "Event — Detail belum diketahui",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Event — Detail belum diketahui",
            "body": "Tidak ada jadwal event terkini yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "event-decision-record",
        "title": "Event — Catatan verifikasi bertanggal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Event memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
          },
          {
            "type": "paragraph",
            "text": "Event: Jangan gabungkan rumor, repost, atau judul video ke catatan terkonfirmasi. Tanpa tanggal atau fitur resmi, jawabannya tetap tidak diketahui."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Event review item: preserve the current screen or source date.",
              "Event decision item: compare the result with the next documented goal.",
              "Event boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sumber bertanggal apa yang mengonfirmasi Event?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Event."
      },
      {
        "question": "Bagaimana pengumuman Event dipisahkan dari rumor?",
        "answer": "Event memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
      },
      {
        "question": "Apa yang belum diketahui tentang Event?",
        "answer": "Tidak ada jadwal event terkini yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-event:confirmed-1",
      "anime-dice-event:confirmed-2",
      "anime-dice-event:confirmed-3",
      "anime-dice-event:evidence-boundary"
    ]
  },
  "anime-dice-admin-abuse-time": {
    "title": "Anime Dice: Waktu event admin",
    "description": "Anime Dice: Waktu event admin: panduan khusus untuk memvalidasi tanggal, waktu, dan zona sesi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memvalidasi tanggal, waktu, dan zona sesi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Halaman ini memisahkan pernyataan resmi bertanggal dari prediksi komunitas dan mencatat informasi saat ditinjau. Waktu event admin karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "admin-abuse-time-context",
        "title": "Waktu event admin — Verifikasi klaim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Waktu event admin: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Cari pengumuman bertanggal di tujuan resmi."
          }
        ]
      },
      {
        "id": "admin-abuse-time-workflow",
        "title": "Waktu event admin — Urutan sumber",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Waktu event admin: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Waktu event admin.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Cari pengumuman bertanggal di tujuan resmi.",
              "Sebelum memutuskan, bandingkan juga: Baca tanggal dan zona waktu bersama-sama."
            ]
          }
        ]
      },
      {
        "id": "admin-abuse-time-evidence",
        "title": "Waktu event admin — Perubahan terdokumentasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Waktu event admin: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Baca tanggal dan zona waktu bersama-sama.",
              "Abaikan repost tanpa tautan asli."
            ]
          }
        ]
      },
      {
        "id": "admin-abuse-time-boundary",
        "title": "Waktu event admin — Detail belum diketahui",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Waktu event admin — Detail belum diketahui",
            "body": "Tidak ada jadwal berulang yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "admin-abuse-time-decision-record",
        "title": "Waktu event admin — Catatan verifikasi bertanggal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Waktu event admin memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
          },
          {
            "type": "paragraph",
            "text": "Waktu event admin: Jangan gabungkan rumor, repost, atau judul video ke catatan terkonfirmasi. Tanpa tanggal atau fitur resmi, jawabannya tetap tidak diketahui."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Waktu event admin review item: preserve the current screen or source date.",
              "Waktu event admin decision item: compare the result with the next documented goal.",
              "Waktu event admin boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sumber bertanggal apa yang mengonfirmasi Waktu event admin?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Waktu event admin."
      },
      {
        "question": "Bagaimana pengumuman Waktu event admin dipisahkan dari rumor?",
        "answer": "Waktu event admin memerlukan pengumuman asli bertanggal atau pengalaman Roblox saat ini. Catat sumber, tanggal, dan teks sebelum merangkum."
      },
      {
        "question": "Apa yang belum diketahui tentang Waktu event admin?",
        "answer": "Tidak ada jadwal berulang yang terkonfirmasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-admin-abuse-time:confirmed-1",
      "anime-dice-admin-abuse-time:confirmed-2",
      "anime-dice-admin-abuse-time:confirmed-3",
      "anime-dice-admin-abuse-time:evidence-boundary"
    ]
  },
  "anime-dice-discord": {
    "title": "Anime Dice: Discord",
    "description": "Anime Dice: Discord: panduan khusus untuk menggunakan undangan komunitas terverifikasi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas menggunakan undangan komunitas terverifikasi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini memeriksa kepemilikan tujuan, tautan asli, dan tanggal sebelum menganggap halaman atau pesan resmi. Discord karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "discord-context",
        "title": "Discord — Tujuan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Discord: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Katalog memakai discord.com/invite/ag5MCCu5aQ."
          }
        ]
      },
      {
        "id": "discord-workflow",
        "title": "Discord — Urutan verifikasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Discord: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Discord.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Katalog memakai discord.com/invite/ag5MCCu5aQ.",
              "Sebelum memutuskan, bandingkan juga: Channel dan pengumuman dapat berubah."
            ]
          }
        ]
      },
      {
        "id": "discord-evidence",
        "title": "Discord — Identitas terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Discord: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Channel dan pengumuman dapat berubah.",
              "Jangan bagikan password atau token kepada moderator."
            ]
          }
        ]
      },
      {
        "id": "discord-boundary",
        "title": "Discord — Batas kepercayaan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Discord — Batas kepercayaan",
            "body": "Role, channel, dan jadwal saat ini dapat berubah."
          }
        ]
      },
      {
        "id": "discord-decision-record",
        "title": "Discord — Pemeriksaan kepercayaan tujuan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Discord aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
          },
          {
            "type": "paragraph",
            "text": "Discord: Pesan komunitas membantu menemukan pertanyaan, tetapi role, vote, dan repost bukan konfirmasi developer. Simpan URL dan waktu asli."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Discord review item: preserve the current screen or source date.",
              "Discord decision item: compare the result with the next documented goal.",
              "Discord boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Bagaimana tujuan Discord diverifikasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Discord."
      },
      {
        "question": "Pesan Discord mana yang hanya diskusi?",
        "answer": "Discord aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
      },
      {
        "question": "Kapan tautan Discord diperiksa lagi?",
        "answer": "Role, channel, dan jadwal saat ini dapat berubah."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-discord:confirmed-1",
      "anime-dice-discord:confirmed-2",
      "anime-dice-discord:confirmed-3",
      "anime-dice-discord:evidence-boundary"
    ]
  },
  "anime-dice-reddit": {
    "title": "Anime Dice: Reddit",
    "description": "Anime Dice: Reddit: panduan khusus untuk memakai diskusi tanpa menganggapnya resmi, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memakai diskusi tanpa menganggapnya resmi. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini memeriksa kepemilikan tujuan, tautan asli, dan tanggal sebelum menganggap halaman atau pesan resmi. Reddit karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "reddit-context",
        "title": "Reddit — Tujuan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Reddit: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tidak ada subreddit resmi yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "reddit-workflow",
        "title": "Reddit — Urutan verifikasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Reddit: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Reddit.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Tidak ada subreddit resmi yang terkonfirmasi.",
              "Sebelum memutuskan, bandingkan juga: Posting membantu menemukan pertanyaan, bukan membuktikan fakta."
            ]
          }
        ]
      },
      {
        "id": "reddit-evidence",
        "title": "Reddit — Identitas terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Reddit: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Posting membantu menemukan pertanyaan, bukan membuktikan fakta.",
              "Bandingkan klaim dengan tujuan resmi."
            ]
          }
        ]
      },
      {
        "id": "reddit-boundary",
        "title": "Reddit — Batas kepercayaan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Reddit — Batas kepercayaan",
            "body": "Vote tidak menjadikan posting sebagai pengumuman resmi."
          }
        ]
      },
      {
        "id": "reddit-decision-record",
        "title": "Reddit — Pemeriksaan kepercayaan tujuan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Reddit aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
          },
          {
            "type": "paragraph",
            "text": "Reddit: Pesan komunitas membantu menemukan pertanyaan, tetapi role, vote, dan repost bukan konfirmasi developer. Simpan URL dan waktu asli."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Reddit review item: preserve the current screen or source date.",
              "Reddit decision item: compare the result with the next documented goal.",
              "Reddit boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Bagaimana tujuan Reddit diverifikasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Reddit."
      },
      {
        "question": "Pesan Reddit mana yang hanya diskusi?",
        "answer": "Reddit aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
      },
      {
        "question": "Kapan tautan Reddit diperiksa lagi?",
        "answer": "Vote tidak menjadikan posting sebagai pengumuman resmi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-reddit:confirmed-1",
      "anime-dice-reddit:confirmed-2",
      "anime-dice-reddit:confirmed-3",
      "anime-dice-reddit:evidence-boundary"
    ]
  },
  "anime-dice-trello": {
    "title": "Anime Dice: Trello",
    "description": "Anime Dice: Trello: panduan khusus untuk memverifikasi board sebelum mempercayainya, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas memverifikasi board sebelum mempercayainya. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini memeriksa kepemilikan tujuan, tautan asli, dan tanggal sebelum menganggap halaman atau pesan resmi. Trello karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "trello-context",
        "title": "Trello — Tujuan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trello: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tidak ada Trello resmi yang terkonfirmasi."
          }
        ]
      },
      {
        "id": "trello-workflow",
        "title": "Trello — Urutan verifikasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trello: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Trello.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Tidak ada Trello resmi yang terkonfirmasi.",
              "Sebelum memutuskan, bandingkan juga: Periksa pemilik dan tautan dari channel resmi."
            ]
          }
        ]
      },
      {
        "id": "trello-evidence",
        "title": "Trello — Identitas terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trello: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Periksa pemilik dan tautan dari channel resmi.",
              "Board buatan fan dapat tidak lengkap atau kedaluwarsa."
            ]
          }
        ]
      },
      {
        "id": "trello-boundary",
        "title": "Trello — Batas kepercayaan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Trello — Batas kepercayaan",
            "body": "Kami tidak menerbitkan tautan Trello yang belum diverifikasi."
          }
        ]
      },
      {
        "id": "trello-decision-record",
        "title": "Trello — Pemeriksaan kepercayaan tujuan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Trello aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
          },
          {
            "type": "paragraph",
            "text": "Trello: Pesan komunitas membantu menemukan pertanyaan, tetapi role, vote, dan repost bukan konfirmasi developer. Simpan URL dan waktu asli."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Trello review item: preserve the current screen or source date.",
              "Trello decision item: compare the result with the next documented goal.",
              "Trello boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Bagaimana tujuan Trello diverifikasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Trello."
      },
      {
        "question": "Pesan Trello mana yang hanya diskusi?",
        "answer": "Trello aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
      },
      {
        "question": "Kapan tautan Trello diperiksa lagi?",
        "answer": "Kami tidak menerbitkan tautan Trello yang belum diverifikasi."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-trello:confirmed-1",
      "anime-dice-trello:confirmed-2",
      "anime-dice-trello:confirmed-3",
      "anime-dice-trello:evidence-boundary"
    ]
  },
  "anime-dice-group": {
    "title": "Anime Dice: Grup resmi",
    "description": "Anime Dice: Grup resmi: panduan khusus untuk mengonfirmasi More & More Games, dengan fakta terdokumentasi dan batas jelas untuk data yang berubah.",
    "intro": [
      "Halaman ini khusus membahas mengonfirmasi More & More Games. Angka, jadwal, dan hasil yang tidak ada dalam sumber tidak dibuat-buat.",
      "Panduan ini memeriksa kepemilikan tujuan, tautan asli, dan tanggal sebelum menganggap halaman atau pesan resmi. Grup resmi karena itu memakai checklist dan batas bukti sendiri, bukan menyalin jawaban topik lain."
    ],
    "sections": [
      {
        "id": "group-context",
        "title": "Grup resmi — Tujuan aman",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grup resmi: Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Komunitas Roblox terverifikasi adalah More & More Games."
          }
        ]
      },
      {
        "id": "group-workflow",
        "title": "Grup resmi — Urutan verifikasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grup resmi: Ikuti urutan ini sebelum mengubah opsi, memakai resource, atau menerima klaim."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Buka game atau tujuan terverifikasi yang berkaitan dengan Grup resmi.",
              "Gunakan poin ini sebagai pemeriksaan pertama: Komunitas Roblox terverifikasi adalah More & More Games.",
              "Sebelum memutuskan, bandingkan juga: Panduan menyebut kemungkinan spins dari peti."
            ]
          }
        ]
      },
      {
        "id": "group-evidence",
        "title": "Grup resmi — Identitas terkonfirmasi",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grup resmi: Jaga fakta yang diberikan tetap terlihat saat memutuskan."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Panduan menyebut kemungkinan spins dari peti.",
              "Gems atau rerolls juga mungkin tersedia."
            ]
          }
        ]
      },
      {
        "id": "group-boundary",
        "title": "Grup resmi — Batas kepercayaan",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Grup resmi — Batas kepercayaan",
            "body": "Konfirmasi hadiah dan ketersediaan di dalam game."
          }
        ]
      },
      {
        "id": "group-decision-record",
        "title": "Grup resmi — Pemeriksaan kepercayaan tujuan",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Grup resmi aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
          },
          {
            "type": "paragraph",
            "text": "Grup resmi: Pesan komunitas membantu menemukan pertanyaan, tetapi role, vote, dan repost bukan konfirmasi developer. Simpan URL dan waktu asli."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grup resmi review item: preserve the current screen or source date.",
              "Grup resmi decision item: compare the result with the next documented goal.",
              "Grup resmi boundary item: leave unsupported values explicitly unknown."
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Bagaimana tujuan Grup resmi diverifikasi?",
        "answer": "Buka game atau tujuan terverifikasi yang berkaitan dengan Grup resmi."
      },
      {
        "question": "Pesan Grup resmi mana yang hanya diskusi?",
        "answer": "Grup resmi aman digunakan setelah tujuan cocok dengan game, grup developer, atau Discord yang diberikan. Periksa domain lengkap."
      },
      {
        "question": "Kapan tautan Grup resmi diperiksa lagi?",
        "answer": "Konfirmasi hadiah dan ketersediaan di dalam game."
      }
    ],
    "sourceNote": "Ditinjau berdasarkan halaman game resmi dan referensi editorial yang dicantumkan; detail yang mudah berubah harus diperiksa di dalam game.",
    "factKeys": [
      "anime-dice-group:confirmed-1",
      "anime-dice-group:confirmed-2",
      "anime-dice-group:confirmed-3",
      "anime-dice-group:evidence-boundary"
    ]
  }
} satisfies Record<ArticleId, LocalizedArticle>;
