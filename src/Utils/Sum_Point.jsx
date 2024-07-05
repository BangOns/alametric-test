export default async function cekJawabanDanHitungSkor(
  jawabanUser,
  dataPertanyaan
) {
  let jawabanBenar = 0;
  for (let i = 0; i < jawabanUser.length; i++) {
    let userJawaban = jawabanUser[i];
    let pertanyaan = dataPertanyaan[i];

    if (pertanyaan && userJawaban.jawaban === pertanyaan.jawaban) {
      jawabanBenar++;
    }
  }
  return jawabanBenar * 50;
}
