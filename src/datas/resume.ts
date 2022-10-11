import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: false,
  },
  profile: {
    name: '姓名',
    qq: '100****',
    email: 'd10****41@126.com',
    mobile: '137********',
    github: 'https://github.com/Angels-D',
    zhihu: '',
    blog: 'https://angels-d.github.io',
    workExpYear: '',
    workPlace: '甘肃兰州',
    positionTitle: '',
  },
  educationList: [
    {
      edu_time: ['2019.09.01', '2023.06.30'],
      school: '兰州理工大学',
      major: '计算机科学与技术',
      academic_degree: '本科',
    },
  ],
  awardList: [
    { award_info: '蓝桥杯 国家级 二等奖', award_time: '2021' },
    {
      award_info: '中国大学生计算机设计大赛 西北赛区 团队一等奖',
      award_time: '2021,2022',
    },
    { award_info: '天梯赛 国家级 团队三等奖', award_time: '2021' },
    { award_info: 'RoboCom 国家级 三等奖', award_time: '2022' },
    { award_info: 'ACM、CCSP、CUMCM 等竞赛经验' },
  ],
  workExpList: [
    {
      work_time: ['2019.9', '2020.5'],
      company_name: '兰州理工大学',
      department_name: '学生会',
      work_desc: `职位：心理辅导站成员
组织开展心理主体活动，协同学生会组织工作`,
    },
    {
      work_time: ['2020.1', '2020.6'],
      company_name: '兰州理工大学',
      department_name: '班级',
      work_desc: `职位：学习委员
在2020年疫情期间组织进行线上学习工作并处理相关文件，深入了解并学习网上办公、协同工作技巧`,
    },
    {
      company_name: '兰州理工大学',
      department_name: '鲲鹏创新协会(社团)',
      work_time: ['2021.11', null],
      work_desc: `职位：社长
本社团与鲲鹏创新中心对接，旨在宣传鲲鹏相关技术、产品，树立国产软硬件生态意识，在校内培养一批具有鲲鹏技术能力的高校青年。`,
    },
  ],
  skillList: [
    {
      skill_name: 'C++ / Qt / 面向对象',
      skill_desc: `熟悉和使用类、模板、指针等概念
Qt 图形界面实践经验`,
      skill_level: 80,
    },
    {
      skill_name: '嵌入式 / 计算机组成',
      skill_desc: `了解8086，熟悉Verilog和冯·诺依曼模型机
熟悉应用：Quartus、AltiumDesigner等`,
      skill_level: 80,
    },
    {
      skill_name: 'OpenEuler / 华为云',
      skill_desc: `熟悉Openeuler、泰山服务器的使用
体验和使用过ECS、ModelArts等`,
      skill_level: 70,
    },
    {
      skill_name: 'OpenGauss 数据库',
      skill_desc: `熟悉基本功能，JDBC应用`,
      skill_level: 60,
    },
  ],
  projectList: [
    {
      project_name: '鲲鹏众智 openEuler社区软件包加固 第三期',
      project_role: '技术指导 项目成员',
      project_time: ['2022.07', '2022.11'],
      project_desc: `本项目针对openEuler社区上继承的开源软件进行测试加固，针对15款软件，进行测试用例设计、编写并执行，最终贡献至社区`,
      project_content: `
1. 组织项目培训和项目技术指导
2. 负责4个软件包测试、2个软件包升级
3. 项目进度控制和项目工作报告。
在本项目中主要了解了社区运作结构，掌握了Shell脚本开发，进一步熟悉了openEuler`,
    },
    {
      project_name: '昇腾众智 MindStudio 迁移工具泛化',
      project_role: '项目成员',
      project_time: ['2022.10', null],
      project_desc: `使用迁移工具将任务清单中的模型迁移至指定框架和平台，对工具未支持API进行适配，使迁移后模型能跑通并收敛`,
      project_content: `暂无`,
    },
  ],
  workList: [
    // {
    //   work_name: 'LUT服务器',
    //   visit_link: 'https://cn-zz-bgp-1.natfrp.cloud:55243/',
    // },
    // {
    //   work_name: '校友管理系统',
    //   visit_link: 'https://github.com/Angels-D/Alumni-Management-System',
    // },
    // {
    //   work_name: '学生选课系统',
    //   visit_link: 'https://github.com/Angels-D/Student-selection-system',
    // }
  ],
  aboutme: {
    aboutme_desc: `
    性别：男性　　出生：1999年8月
    民族：汉族　　籍贯：浙江省湖州市
    政治面貌：中共党员
    理想：为天地立心　 为生民请命
    　　　为往圣继绝学 为万世开太平
    头衔：速成大师、黑科技选手、肝帝
    爱好：游戏、动漫、哲学
    `,
  },
  // 国际化
  locales: {
    en_US: {
      profile: {
        name: 'Name',
        qq: '100****',
        email: 'd10****41@126.com',
        mobile: '137********',
        github: 'https://github.com/Angels-D',
        zhihu: '',
        blog: 'https://angels-d.github.io',
        workExpYear: '',
        workPlace: 'Lanzhou, Gansu',
      },
      skillList: [
        {
          skill_name: 'C++ / Qt / OOP',
          skill_desc: `Familiar with classes, templates, pointers, etc
Qt GUI Practice Experience`,
          skill_level: 80,
        },
        {
          skill_name: 'Embedded / Computer Working Principle',
          skill_desc: `Learn about 8086, Verilog, Making of Von Neumann Model Machine
Ability to use: Quartus, AltiumDesigner, etc`,
          skill_level: 80,
        },
        {
          skill_name: 'OpenEuler / Hua Weiyun',
          skill_desc: `be familiar with Openeuler, Taishan Server
Experience with: ECS, ModelArts, etc`,
          skill_level: 70,
        },
        {
          skill_name: 'OpenGauss Database',
          skill_desc: 'Familiar with basic functions, JDBC application',
          skill_level: 60,
        },
      ],
      avatar: { hidden: false },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'Lanzhou University of Technology',
          major: 'Computer Science and Technology',
          academic_degree: 'undergraduate',
        },
      ],
      awardList: [
        {
          award_info: 'Lanqiao_Trophy National Second_Prize',
          award_time: '2021',
        },
        {
          award_info:
            'China_Undergraduate_Computer_Design_Competition Northwest_Division Team_First_Prize',
          award_time: '2021,2022',
        },
        { award_info: 'GPLT National Team_Third_Prize', award_time: '2021' },
        { award_info: 'RoboCom National Third_Prize', award_time: '2022' },
        { award_info: 'ACM, CCSP, CUMCM, etc Competition experience' },
      ],
      workExpList: [
        {
          work_time: ['2019.9', '2020.5'],
          company_name: 'Lanzhou University of Technology',
          department_name: 'Student union',
          work_desc: `Position: Member of psychological counseling station
          Organize and carry out psychological activities and coordinate the work of the Student Union`,
        },
        {
          work_time: ['2020.1', '2020.6'],
          company_name: 'Lanzhou University of Technology',
          department_name: 'Class',
          work_desc: `Position: Study Committee Member
Organize online learning and process relevant documents during the epidemic in 2020, and deeply understand and learn the skills of online office and collaborative work`,
        },
        {
          company_name: 'Lanzhou University of Technology',
          department_name: 'Kunpeng Innovation Association (Association)',
          work_time: ['2021.11', null],
          work_desc: `Position: President
The association is connected with Kunpeng Innovation Center, aiming to publicize Kunpeng related technologies and products, establish the ecological awareness of domestic software and hardware, and cultivate a group of young college students with Kunpeng's technical ability.`,
        },
      ],
      projectList: [
        {
          project_name:
            'Kunpeng Wisdom - openEuler Community software package reinforcement - Phase III',
          project_role: 'Technical guidance, Project members',
          project_time: ['2022.07', '2022.11'],
          project_desc: `This project tests and reinforces the open source software inherited from the openEuler community, designs, writes and executes test cases for 15 types of software, and ultimately contributes to the community`,
          project_content: `
1. Organize project training and project technical guidance
2. Responsible for testing 4 software packages and upgrading 2 software packages
3. Project progress control and project work report.
In this project, I mainly learned about the community operation structure, mastered shell script development, and became more familiar with openEuler`,
        },
        {
          project_name:
            'Ascend Wisdom - MindStudio Migration tool generalization',
          project_role: 'Project members',
          project_time: ['2022.10', null],
          project_desc: `Use the migration tool to migrate the model in the task list to the specified framework and platform, and adapt the API that the tool does not support, so that the model can run through and converge after migration`,
          project_content: 'None',
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc: `
        Gender: male Birth: August 1999
        Nationality: Han Nationality Native place: Huzhou City, Zhejiang Province
        Political status: CPC member
        Ideal: to stand for heaven and earth and ask for life
        For the sake of going to the holy place and inheriting knowledge, to open peace for all generations
        Title: Quick Master, Black Technology Player, Gan Di
        Hobbies: games, animation, philosophy
        `,
      },
    },
  },
};
