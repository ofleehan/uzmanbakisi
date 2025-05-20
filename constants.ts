
import { VideoItem } from './types';
import { CARD_WIDTH, CARD_HEIGHT } from './config';

// Direct Imgur URLs for channel logos
const NTV_LOGO_URL = "https://i.imgur.com/OxmqDNA.png";
const CNN_TURK_LOGO_URL = "https://i.imgur.com/CdcQBZw.png";
const TV100_LOGO_URL = "https://i.imgur.com/NZWZ2Ym.png";
const TLC_LOGO_URL = "https://i.imgur.com/GWLTRJv.png";

export const CHANNELS = {
  NTV: {
    name: 'NTV - Uzman Bakışı',
    yt: 'https://www.youtube.com/@UZMANBAKISI/videos',
    ig: 'https://www.instagram.com/ntvuzmanbakisitv',
    logoUrl: NTV_LOGO_URL,
    sampleVideos: [
      { id: 'fEoG0X2nQr0', title: 'NTV UZMAN BAKIŞI 8 EKİM MİRAÇ SEZGİ ŞENOL' },
      { id: 'R9m0ruohQH0', title: '@NTV Uzman Bakışı Eksozom Tedavisi' },
      { id: '6iba430u_v0', title: 'MEDİKAL SAÇ UYGULAMASI NEDİR, NASIL UYGULANIR? | VICTORIA ISHKHANOVA | NTV | UZMAN BAKIŞI |' },
      { id: 'k0LMpnAMqG8', title: 'NTV UZMAN BAKIŞI - MEDİKAL SAÇ UYGULAMASI NEDİR?' }
    ]
  },
  CNN: {
    name: 'CNN Türk - Uzmanı Anlatıyor',
    yt: 'https://www.youtube.com/@uzman%C4%B1anlat%C4%B1yor-cnnturk/videos',
    ig: 'https://www.instagram.com/cnnturkuzmanianlatiyor',
    logoUrl: CNN_TURK_LOGO_URL,
    sampleVideos: [
      { id: 'w2Z1wrL3mxE', title: 'CNN TÜRK UZMANI ANLATIYOR KİRA İLİŞKİLERİNDEKİ ANLAŞMAZLIKLAR VE YARGI SÜREÇLERİ TUĞRULHAN TAŞKINSU' },
      { id: 'N1apawpGlJY', title: 'CNN Uzman Anlatıyor' },
      { id: 'Fz1OgQl4J4o', title: 'CNN TÜRK | UZMANI ANLATIYOR | SAĞLIK TURİZMİNDE SAÇ EKİMİNİN ROLÜ | CANSU BİLGİLİ | 27 EKİM' },
      { id: '-eoPTZNRiMc', title: 'Erhan Yıldırım Anlatıyor: Rubio\'nun Açıklamaları İsrail\'in İşine Mi Yarar?' }
    ]
  },
  TV100: {
    name: 'TV100 - Doğrusu Nedir?',
    yt: 'https://www.youtube.com/@TV100DO%C4%9ERUSUNED%C4%B0R-q9k/videos',
    ig: 'https://www.instagram.com/dogrusunedirtv100',
    logoUrl: TV100_LOGO_URL,
    sampleVideos: [
      { id: 'BYL2JQi3UxI', title: 'SPOR YARALANMALARI VE TEDAVİ YÖNTEMLERİ | OP. DR. AHMET ÖZDEL | TV100 | DOĞRUSU NEDİR? |' },
      { id: 'W3-qpJO8SQc', title: 'BOYUN FITIĞI VE BOYUN KANAL DARLIĞI ARASINDAKİ FARKLAR | PROF.DR.BÜLENT DÜZ | TV100 | DOĞRUSU NEDİR? |' },
      { id: 'lSVsU5BAYX8', title: 'TV100 | DOĞRUSU NEDİR? | OP. DR. ÇAĞRI ÇIRAĞILOĞLU |' },
      { id: 'moyyPi0YkDk', title: 'YOLCU BERABERİ EŞYA, MUAFİYET VE LİMİTLERİ | YALIM BORA BOYNUİNCE | TV100 | DOĞRUSU NEDİR? |' }
    ]
  },
  TLC: {
    name: 'TLC - Soru Cevap',
    yt: 'https://www.youtube.com/@TLCSORUCEVAP-g1z/videos',
    ig: 'https://www.instagram.com/tlcsorucevap',
    logoUrl: TLC_LOGO_URL,
    sampleVideos: [
      { id: 'FGETWxfAqSo', title: 'EREKTİL DİSFONKSİYON NEDİR, NASIL TEDAVİ EDİLİR? | OP. DR. YAŞAR BAŞAĞA | TLC | SORU CEVAP |' },
      { id: 'blP2LYcAms4', title: 'TLC SORU-CEVAP PROGRAMI - EREKTİL DİSFONKSİYON' },
      { id: 'qwI-hufxUOQ', title: 'CİLT YENİLEMEDE SON TEKNOLOJİ: FRAKSİYONEL KARBONDİOKSİT LAZER|DR. MUTLU ÇOBAN|TLC|SORU CEVAP|' },
      { id: '7EtihFP4EvE', title: 'İLİŞKİLERDE SIK GÖRÜLEN PROBLEMLER VE ÇÖZÜMLERİ | BAŞAK DİKMEN | TLC | SORU CEVAP | 14 EKİM' }
    ]
  },
};

const generateVideos = (channelKey: keyof typeof CHANNELS, count: number, titlePrefix: string): VideoItem[] => {
  const channelInfo = CHANNELS[channelKey];
  const items: VideoItem[] = [];

  for (let i = 0; i < count; i++) {
    let videoTitle: string;
    let specificVideoId: string | null = null;
    let youtubeLink: string;
    let thumbnailUrl: string;

    if (i < channelInfo.sampleVideos.length) {
      const sample = channelInfo.sampleVideos[i];
      videoTitle = sample.title;
      specificVideoId = sample.id;
      youtubeLink = `https://www.youtube.com/watch?v=${specificVideoId}`;
      thumbnailUrl = `https://img.youtube.com/vi/${specificVideoId}/mqdefault.jpg`;
    } else {
      const placeholderNumber = i - channelInfo.sampleVideos.length + 1;
      videoTitle = `${titlePrefix} Placeholder #${placeholderNumber}`;
      const seed = `${channelKey.toLowerCase()}-${titlePrefix.replace(/\s+/g, '-').toLowerCase()}-placeholder-${placeholderNumber}`;
      youtubeLink = channelInfo.yt;
      thumbnailUrl = `https://picsum.photos/seed/${seed}/${CARD_WIDTH}/${CARD_HEIGHT}?random=${placeholderNumber}`;
      specificVideoId = `placeholder-${channelKey}-${placeholderNumber}`;
    }

    items.push({
      id: `${channelKey.toLowerCase()}-video-${specificVideoId || i}`,
      title: videoTitle,
      channel: channelInfo.name,
      thumbnailUrl: thumbnailUrl,
      youtubeLink: youtubeLink,
      instagramLink: channelInfo.ig,
      description: `Content for ${videoTitle} from ${channelInfo.name}. Update this with specific video details.`,
    });
  }
  return items;
};

export const VIDEO_DATA: VideoItem[] = [
  ...generateVideos('NTV', 5, 'NTV Programı'),
  ...generateVideos('CNN', 5, 'CNN Programı'),
  ...generateVideos('TV100', 5, 'TV100 Programı'),
  ...generateVideos('TLC', 5, 'TLC Programı'),
];
