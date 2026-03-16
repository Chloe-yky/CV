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
      Hi, I'm Keyi Yang
      `,
      researchInterests: [
        "Control Engineering",
  
      ],
      socials: [
        { platform: 'email', url: 'mailto:yuhangyang@smail.nju.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Chloe-yky', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: 'Zhihu' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: 'Xiaohongshu' },
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
          { id: 'aw1', title: "Jiangsu Provincial Third Prize, Contemporary Undergraduate Mathematical Contest in Modeling",organization: "China Society for Industrial and Applied Mathematics",year: " Sep 2025"},
          { id: 'aw2', title: "Jiangsu Provincial Second Prize, The Chinese Mathematics Competitions", organization: "Chinese Mathematical Society", year: "Oct 2025"},
          { id: 'aw3', title: "People's Scholarship", organization: "Nanjing University", year: "Dec 2025" },
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Undergraduate Student", organization: "Nanjing University", period: "2024 - present", description: "Major: Mathematics" },
          { id: 'ed2', role: "Senior High Student", organization: "Hengyang No.8 High School", period: "2021 - 2024", description: "An unforgettable experience" },
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
      你好，我是阳珂怡
      `,
      researchInterests: [
        "控制工程",

      ],
      socials: [
        { platform: 'email', url: 'mailto:yangkeyi.chloe@outlook.com' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Chloe-yky', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: '知乎' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: '小红书' },
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
          { id: 'aw1', title: "全国大学生数学建模竞赛江苏省三等奖", organization: "中国工业与应用数学学会", year: "2025年9月" },
          { id: 'aw2', title: "全国大学生数学竞赛江苏省二等奖", organization: "中国数学会", year: "2025年10月" },
          { id: 'aw3', title: "人民奖学金", organization: "南京大学", year: "2025年12月" },
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "本科生", organization: "南开大学（Nanjing University)", period: "2022 - 至今", description: "专业：数学" },
          { id: 'ed2', role: "高中生", organization: "衡阳市第八中学", period: "2020 - 2022", description: "这是一段难忘的回忆" },
          // { id: 'ed3', role: "计算机科学学士", organization: "加州大学伯克利分校 (UC Berkeley)", period: "2014 - 2018" }
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
