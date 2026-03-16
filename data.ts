import { ProfileData, Publication, NewsItem, ExperienceItem, AwardItem, SectionConfig } from './types';
import newsData from './news.json';
import publicationsData from './publications.json';

export const data = {
  en: {
    PROFILE: {
      name: "Keyi Yang",
      title: "Undergraduate Student",
      affiliation: "Automation,Nankai University",
      email: "yangkeyi.chloe@outlook.com",
      location: "Tianjing, China",
      bio: `
    Hello, I'm Yang Keyi. I'm a meticulous and considerate person who likes to keep things clear and organized. I'm extremely patient and always give my all to whatever I do. Although I'm a bit serious in daily life, I have a gentle and sincere heart and am easy to get along with. I have a mild and reliable personality and will quietly bring warmth to those around me.    `,
      researchInterests: [
        "Control Engineering",
  
      ],
      socials: [
        { platform: 'email', url: '2868421213@qq.com' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Chloe-yky', username: 'GitHub' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5f1e5be20000000001008ad8', username: 'Xiaohongshu' },
      ],
      lastUpdated: "2026-03-14"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: 'About', type: 'about' },
      { id: 'news', title: 'Recent News', navLabel: 'News', type: 'news', content: newsData.en },
      { id: 'publications', title: 'Selected Publications', navLabel: 'Publications', type: 'publications', content: publicationsData.en },
      { 
        id: 'awards', 
        title: 'Awards & Honors', 
        type: 'awards', 
        content: [
         { 
  id: 'aw1', 
  title: `Third Prize of the "Challenge Cup" Tianjin University Students' Extracurricular Academic and Technological Works Competition`, 
  year: "Sep 2025" 
},
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Undergraduate Student", organization: "NanKai University", period: "2022 - present", description: "Major: Automation" },
          { id: 'ed2', role: "Senior High Student", organization: "Hengyang No.8 High School", period: "2019 - 2022", description: "An unforgettable experience" },
          ] 
      },
      { 
        id: 'internships', 
        title: 'Internships', 
        type: 'timeline', 
        content: [
        ] 
      }
    ] as SectionConfig[]
  },
  zh: {
    PROFILE: {
      name: "阳珂怡",
      title: "本科生",
      affiliation: "南开大学 自动化",
      email: "yangkeyi.chloe@outlook.com",
      location: "中国 天津",
      bio: `
      你好，我是阳珂怡。我是一个细心又贴心的人，喜欢把事情做得清清楚楚。超级有耐心，做什么事都会全力以赴。虽然平时有点认真，但内心温柔又真诚，很好相处～性格温和靠谱，还会默默给身边的人带去温暖哦～      `,
      researchInterests: [
        "控制工程",

      ],
      socials: [
        { platform: 'email', url: 'mailto:yangkeyi.chloe@outlook.com' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Chloe-yky', username: 'GitHub' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5f1e5be20000000001008ad8', username: '小红书' },
      ],
      lastUpdated: "2026-03-14"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: '关于我', type: 'about' },
      { id: 'news', title: '最新动态', type: 'news', content: newsData.zh },
      { id: 'publications', title: '学术论文', type: 'publications', content: publicationsData.zh },
      { 
        id: 'awards', 
        title: '荣誉奖项', 
        type: 'awards', 
        content: [
          { id: 'aw1', title: "“挑战杯”天津市大学生课外学术科技作品竞赛三等奖", year: "2025年5月" },   
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "本科生", organization: "南开大学（NanKai University)", period: "2022 - 至今", description: "专业：自动化" },
          { id: 'ed2', role: "高中生", organization: "衡阳市第八中学", period: "2019 - 2022", description: "这是一段难忘的回忆" },
        ] 
      },
      { 
        id: 'internships', 
        title: '实习经历', 
        type: 'timeline', 
        content: [
    
        ] 
      }
    ] as SectionConfig[]
  }
};
